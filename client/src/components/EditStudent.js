import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import useUpdateStudent from '../hooks/useUpdateStudent';
import './EditStudent.css';

function EditStudent() {
  const {id} = useParams();
  const history = useHistory();

  const [student, setStudent] = useState(null);
  const {updateStudent, error, loading} = useUpdateStudent();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/students/${id}`);
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    }

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await updateStudent(id, student);
    if (success) {
      history.push('/');
    }
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div className="edit-student">
      <h2>Editar Estudiante</h2>
      {error && <p className="error">{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Code:</label>
          <input
            disabled
            value={student.code}
          />
        </div>
        <div className="input-group">
          <label>Name:</label>
          <input
            value={student.name}
            onChange={(e) =>
              setStudent((prev) => ({...prev, name: e.target.value}))
            }
          />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input
            value={student.last_name}
            onChange={(e) =>
              setStudent((prev) => ({...prev, last_name: e.target.value}))
            }
          />
        </div>
        <div className="input-group">
          <label>Sex:</label>
          <input
            value={student.sex}
            onChange={(e) =>
              setStudent((prev) => ({...prev, sex: e.target.value}))
            }
          />
        </div>
        <div className="input-group">
          <label>Birthday:</label>
          <input
            value={student.birthday}
            onChange={(e) =>
              setStudent((prev) => ({...prev, birthday: e.target.value}))
            }
          />
        </div>
        <button type="submit" disabled={loading}>Save Changes</button>
      </form>
    </div>
  );
}

export default EditStudent;
