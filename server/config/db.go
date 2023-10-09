package config

import (
    "database/sql"
    "fmt"
    "os"
    _ "github.com/lib/pq"
    "log"
)

func Connect() (*sql.DB, error) {
    user := os.Getenv("POSTGRES_USER")
    host := os.Getenv("POSTGRES_HOST")
    password := os.Getenv("POSTGRES_PASSWORD")
    dbname := os.Getenv("POSTGRES_DB")
    sslmode := os.Getenv("SSL_MODE")

    connStr := fmt.Sprintf("host=%s user=%s dbname=%s sslmode=%s password=%s", host, user, dbname, sslmode, password)
    log.Printf("string: %s", connStr)
    return sql.Open("postgres", connStr)
}
