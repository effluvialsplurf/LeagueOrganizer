package db

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

var DB *sql.DB

func ensureSchema() {
	_, err := DB.Exec(`
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
		  team_name TEXT NOT NULL,
			password TEXT NOT NULL,
			created_at TEXT NOT NULL,
			updated_at TEXT NOT NULL
		);
	`)

	if err != nil {
		log.Fatalf("Failed to create schema: %v", err)
	}

	// create an admin user for the application
	_, _, err = RetrieveOrCreateUser("admin", "administrators", "admin")
	if err != nil {
		log.Fatalf("Failed to create admin user: %v", err)
	}
}

func MustConnectDB() {
	// we use the ./data directory because its the root of the project
	var err error
	DB, err = sql.Open("sqlite3", "./data/league.db?_journal=WAL&_auth_user=admin&_auth_pass=admin")
	if err != nil {
		log.Fatalf("Failed to connect to database: %s", err)
	}

	// sqlite only wants one writer at a time
	DB.SetMaxOpenConns(1)

	// check to make sure the database is there
	if err := DB.Ping(); err != nil {
		log.Fatalf("Failed to ping database: %v", err)
	}

	ensureSchema()
}
