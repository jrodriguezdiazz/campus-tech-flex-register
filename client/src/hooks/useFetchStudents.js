import { useState, useEffect } from 'react';

function useFetchStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/students');
        const data = await response.json();

        if (data.length === 0) {
          setEmpty(true);
        } else {
          setStudents(data);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { students, loading, empty };
}

export default useFetchStudents;
