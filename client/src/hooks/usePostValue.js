import axios from 'axios';

const usePostValue = () => {
  const postValue = async value => {
    try {
      await axios.post('/api/values', {
        value,
      });
    } catch (error) {
      console.error('Error saving number:', error);
    }
  };

  return postValue;
};

export default usePostValue;
