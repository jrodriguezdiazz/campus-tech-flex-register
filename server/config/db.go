package config

import (
    "database/sql"
    "fmt"
    "os"
    _ "github.com/lib/pq"
)

func Connect() (*sql.DB, error) {
    user := os.Getenv("PGDB_USER")
    password := os.Getenv("PGDB_PASSWORD")
    dbname := os.Getenv("PGDB_DATABASE")
    sslmode := os.Getenv("SSL_MODE")

    connStr := fmt.Sprintf("user=%s dbname=%s sslmode=%s password=%s", user, dbname, sslmode, password)
    return sql.Open("postgres", connStr)
}
