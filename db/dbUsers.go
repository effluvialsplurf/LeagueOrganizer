package db

import (
	"database/sql"
	"log"
	"time"
)

// user model
type User struct {
	ID        int64
	Name      string
	TeamName  string
	Password  string
	CreatedAt sql.NullString
	UpdatedAt sql.NullString
}

// user methods
func (u User) String() string {
	return u.Name
}

func (u User) GetID() int64 {
	return u.ID
}

func (u User) GetName() string {
	return u.Name
}

func (u User) GetTeamName() string {
	return u.TeamName
}

// user query functions
func GetUsers() ([]User, error) {
	rows, err := DB.Query(`
		SELECT id, name, team_name, password, created_at, updated_at
		FROM users
	`)

	if err != nil {
		log.Fatalf("Failed to query database: %v", err)
	}

	defer rows.Close()

	var users []User

	for rows.Next() {
		var user User
		err := rows.Scan(
			&user.ID,
			&user.Name,
			&user.TeamName,
			&user.Password,
			&user.CreatedAt,
			&user.UpdatedAt,
		)

		if err != nil {
			log.Fatalf("Failed to scan row: %v", err)
		}

		users = append(users, user)
	}

	return users, nil
}

func GetUserByName(name string) (User, error) {
	row := DB.QueryRow(`
		SELECT id, name, team_name, password, created_at, updated_at
		FROM users
		WHERE name = ?
	`, name)

	var user User
	err := row.Scan(
		&user.ID,
		&user.Name,
		&user.TeamName,
		&user.Password,
		&user.CreatedAt,
		&user.UpdatedAt,
	)

	if err != nil {
		log.Printf("Failed to scan row: %v", err)
		return user, err
	}

	return user, nil
}

// in the case that we return a user and true, we know that the user was created
// if we return a user and false, we know that the user already existed
func CreateUser(name, teamName, password string) (User, bool, error) {

	// if the user already exists, we don't need to create it
	user, err := GetUserByName(name)
	if err == nil {
		return user, false, nil
	}

	// if the user doesn't exist, we need to create it
	var stmt *sql.Stmt
	stmt, err = DB.Prepare(`
		INSERT INTO users (name, team_name, password, created_at, updated_at)
		VALUES (?, ?, ?, ?, ?)
	`)
	if err != nil {
		log.Fatalf("Failed to prepare statement: %v", err)
	}

	_, err = stmt.Exec(name, teamName, password, time.Now(), time.Now())
	if err != nil {
		log.Fatalf("Failed to execute statement: %v", err)
	}

	// if the user was created (i.e. the statement was executed), we need to retrieve it
	user, err = GetUserByName(name)
	if err != nil {
		log.Fatalf("Failed to retrieve user: %v", err)
	}

	return user, true, nil
}
