import React, {useState} from 'react';
import useFetchValues from '../hooks/useFetchValues';
import usePostValue from '../hooks/usePostValue';
import Loading from './Loading'; // Import the Loading component
import './MainComponent.css';

const MainComponent = () => {
  const {values, loading, fetchValues} = useFetchValues();
  const postValue = usePostValue();
  const [value, setValue] = useState('');

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await postValue(value);
    setValue('');
    fetchValues();
  };

  return (
    <div>
      <button onClick={fetchValues}>Get all numbers</button>
      <br />
      <h2 className="title">Values</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="values">
          {values.map(({id, value}) => (
            <div key={id} className="value">
              {value}
            </div>
          ))}
        </div>
      )}
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Enter your value: </label>
        <input value={value} onChange={handleValueChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MainComponent;
