package config

import (
    "database/sql"
    "fmt"
    "os"
    _ "github.com/lib/pq"
)

func Connect() (*sql.DB, error) {
    user := os.Getenv("POSTGRES_USER")
    password := os.Getenv("POSTGRES_PASSWORD")
    dbname := os.Getenv("POSTGRES_DB")
    sslmode := os.Getenv("SSL_MODE")

    connStr := fmt.Sprintf("user=%s dbname=%s sslmode=%s password=%s", user, dbname, sslmode, password)
    return sql.Open("postgres", connStr)
}
