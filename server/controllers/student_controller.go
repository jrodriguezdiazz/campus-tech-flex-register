package controllers

import (
    "server/models"
    "server/config"
)

func GetAllStudents() ([]models.Student, error) {
    db, err := config.Connect()
    if err != nil {
        return nil, err
    }
    defer db.Close()

    rows, err := db.Query("SELECT id, code, name, last_name, birthday, sex FROM students")
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var students []models.Student
    for rows.Next() {
        var s models.Student
        if err := rows.Scan(&s.ID, &s.Code, &s.Name, &s.LastName, &s.Birthday, &s.Sex); err != nil {
            return nil, err
        }
        students = append(students, s)
    }
    return students, nil
}

func InsertStudent(student models.Student) (int64, error) {
    db, err := config.Connect()
    if err != nil {
        return 0, err
    }
    defer db.Close()

    res, err := db.Exec("INSERT INTO students(code, name, last_name, birthday, sex) VALUES ($1, $2, $3, $4, $5)", student.Code, student.Name, student.LastName, student.Birthday, student.Sex)
    if err != nil {
        return 0, err
    }

    return res.RowsAffected()
}

func UpdateStudent(student models.Student) (int64, error) {
    db, err := config.Connect()
    if err != nil {
        return 0, err
    }
    defer db.Close()

    res, err := db.Exec("UPDATE students SET code=$1, name=$2, last_name=$3, birthday=$4, sex=$5 WHERE id=$6", student.Code, student.Name, student.LastName, student.Birthday, student.Sex, student.ID)
    if err != nil {
        return 0, err
    }

    return res.RowsAffected()
}

func DeleteStudent(id int) (int64, error) {
    db, err := config.Connect()
    if err != nil {
        return 0, err
    }
    defer db.Close()

    res, err := db.Exec("DELETE FROM students WHERE id=$1", id)
    if err != nil {
        return 0, err
    }

    return res.RowsAffected()
}
