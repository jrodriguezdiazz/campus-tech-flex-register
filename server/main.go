package main

import (
    "log"
    "net/http"
    "server/controllers"
    "github.com/gorilla/mux",
    "server/handlers"
)

func main() {
    router := mux.NewRouter()
    router.HandleFunc("/students", handlers.GetStudentsHandler).Methods("GET")
    router.HandleFunc("/students", handlers.PostStudentHandler).Methods("POST")
    router.HandleFunc("/students/{id:[0-9]+}", handlers.PutStudentHandler).Methods("PUT")
    router.HandleFunc("/students/{id:[0-9]+}", handlers.DeleteStudentHandler).Methods("DELETE")

    log.Fatal(http.ListenAndServe(":8080", router))
}
