import React, { useState } from 'react';
import usePostStudent from '../hooks/usePostStudent';
import './AddStudent.css';

function AddStudent() {
  const [student, setStudent] = useState({
    code: '',
    name: '',
    last_name: '',
    birthday: '',
    sex: '',
  });
  const { postStudent, error, loading } = usePostStudent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await postStudent(student);
    if(success) {
      // Reset form or navigate somewhere after successful post
      setStudent({
        code: '',
        name: '',
        last_name: '',
        birthday: '',
        sex: '',
      });
    }
  };

  return (
    <div className="add-student">
      <h2 className="title">Add Student</h2>
      {error && <p className="error">{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Code:</label>
          <input
            value={student.code}
            onChange={(e) =>
              setStudent((prev) => ({ ...prev, code: e.target.value }))
            }
          />
        </div>
        <div className="input-group">
          <label>Name:</label>
          <input
            value={student.name}
            onChange={(e) =>
              setStudent((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input
            value={student.last_name}
            onChange={(e) =>
              setStudent((prev) => ({ ...prev, last_name: e.target.value }))
            }
          />
        </div>
        <div className="input-group">
          <label>Sex:</label>
          <input
            value={student.sex}
            onChange={(e) =>
              setStudent((prev) => ({ ...prev, sex: e.target.value }))
            }
          />
        </div>
        <div className="input-group">
          <label>Birthday:</label>
          <input
            value={student.birthday}
            onChange={(e) =>
              setStudent((prev) => ({ ...prev, birthday: e.target.value }))
            }
          />
        </div>
        <button type='submit' disabled={loading}>Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
