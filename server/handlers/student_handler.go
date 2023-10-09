package handlers

import (
    "encoding/json"
    "net/http"
    "server/controllers"
    "server/models"
    "github.com/gorilla/mux"
    "strconv"
)

func GetStudentsHandler(w http.ResponseWriter, r *http.Request) {
    students, err := controllers.GetAllStudents()
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    json.NewEncoder(w).Encode(students)
}

func PostStudentHandler(w http.ResponseWriter, r *http.Request) {
    var student models.Student
    err := json.NewDecoder(r.Body).Decode(&student)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    _, err = controllers.InsertStudent(student)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusCreated)
}

func PutStudentHandler(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    id, _ := strconv.Atoi(params["id"])

    var student models.Student
    err := json.NewDecoder(r.Body).Decode(&student)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
    student.ID = id

    _, err = controllers.UpdateStudent(student)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusOK)
}

func DeleteStudentHandler(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    id, _ := strconv.Atoi(params["id"])

    _, err := controllers.DeleteStudent(id)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusOK)
}