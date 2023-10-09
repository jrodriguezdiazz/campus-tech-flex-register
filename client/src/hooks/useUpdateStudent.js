import { useState } from 'react';

function useUpdateStudent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function updateStudent(id, student) {
    setLoading(true);
    try {
      const response = await fetch(`/api/students/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (response.status !== 200) {
        throw new Error('Failed to update student');
      }

      setLoading(false);
      return true;
    } catch (err) {
      setError(err);
      setLoading(false);
      return false;
    }
  }

  return { updateStudent, loading, error };
}

export default useUpdateStudent;
