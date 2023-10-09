import React from 'react';

function Student({ student }) {
  return (
    <div>
      <h3>
        {student.name} {student.last_name}
      </h3>
      <p>Code: {student.code}</p>
      <p>Birthday: {student.birthday}</p>
      <p>Sex: {student.sex}</p>
    </div>
  );
}

export default Student;
