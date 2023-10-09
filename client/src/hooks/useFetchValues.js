import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetchValues = () => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchValues = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/values/all');
      setValues(response.data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchValues();
  }, []);

  return {values, loading, fetchValues};
};

export default useFetchValues;
