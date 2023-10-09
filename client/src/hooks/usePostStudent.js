import { useState } from 'react';

function usePostStudent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function postStudent(student) {
    setLoading(true);
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Failed to add student');
      }

      setLoading(false);
      return true;
    } catch (err) {
      setError(err);
      setLoading(false);
      return false;
    }
  }

  return { postStudent, loading, error };
}

export default usePostStudent;
