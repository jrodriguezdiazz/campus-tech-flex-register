package config

import (
    "database/sql"
    _ "github.com/lib/pq"
)

func Connect() (*sql.DB, error) {
    connStr := "user=your_user dbname=utesa_database sslmode=disable password=your_password"
    return sql.Open("postgres", connStr)
}
