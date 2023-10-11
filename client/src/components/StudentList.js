import React from 'react';
import { Link } from 'react-router-dom';
import useDeleteStudent from '../hooks/useDeleteStudent';
import useFetchStudents from '../hooks/useFetchStudents';
import Loading from './Loading';
import Student from './Student';
import './StudentList.css';

function StudentList() {
  const { students, loading, empty } = useFetchStudents();
  const { deleteStudent } = useDeleteStudent();

  async function handleDelete(id) {
    const confirmed = window.confirm(
      'Are you sure you want to remove this student?'
    );

    if (confirmed) {
      await deleteStudent(id);
      window.location.reload();
    }
  }

  return (
    <div>
      <h2>Student List</h2>
      {loading && <Loading />}
      {empty && <p>There are no registered students.</p>}
      <div className="students-list">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <Student student={student} />
            <button onClick={() => handleDelete(student.id)}>Delete</button>
            <Link to={`/edit/${student.id}`}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
