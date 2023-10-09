// useDeleteStudent.js

import { useState } from 'react';

function useDeleteStudent() {
  const [loading, setLoading] = useState(false);

  async function deleteStudent(id) {
    setLoading(true);
    try {
      const response = await fetch(`/api/students/${id}`, { method: 'DELETE' });

      if (response.status !== 200) {
        throw new Error('Failed to delete student');
      }

      setLoading(false);
      return true;
    } catch (error) {
      console.error('Error deleting student:', error);
      setLoading(false);
      return false;
    }
  }

  return { deleteStudent, loading };
}

export default useDeleteStudent;
