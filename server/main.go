package main

import (
    "log"
    "net/http"
    "os"
    "github.com/gorilla/mux"
    "server/handlers"
)

func main() {
    router := mux.NewRouter()
    router.HandleFunc("/students", handlers.GetStudentsHandler).Methods("GET")
    router.HandleFunc("/students", handlers.PostStudentHandler).Methods("POST")
    router.HandleFunc("/students/{id:[0-9]+}", handlers.PutStudentHandler).Methods("PUT")
    router.HandleFunc("/students/{id:[0-9]+}", handlers.DeleteStudentHandler).Methods("DELETE")

    port := os.Getenv("GO_DOCKER_PORT")
    if port == "" {
        port = "8080"
    }

    log.Printf("Server starting on port %s...\n", port)
    log.Fatal(http.ListenAndServe(":"+port, router))
}
