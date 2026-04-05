package api

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"

	db "github.com/effluvialsplurf/LeagueOrganizer/db"
)

var uniqueError = "UNIQUE constraint failed: users.team_name"

func RegisterUser(w http.ResponseWriter, r *http.Request) {
	var user db.User
	err := json.NewDecoder(r.Body).Decode(&user)
	fmt.Println(user)
	if err != nil {
		log.Println("failed to decode json: ", err)
		http.Error(w, "failed to decode json", http.StatusBadRequest)
		return
	}

	var created bool
	user, created, err = db.CreateUser(user.Username, user.TeamName, user.Password)
	if err != nil {
		log.Printf("failed to create user: %v", err)
		if strings.Contains(err.Error(), uniqueError) {
			http.Error(w, "team name already exists", http.StatusConflict)
			return
		}
		http.Error(w, "failed to create user", http.StatusInternalServerError)
		return
	}

	if !created {
		log.Printf("user already exists")
		http.Error(w, "user already exists", http.StatusConflict)
		return
	}
	w.WriteHeader(http.StatusCreated)
}

func GetUser(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	password := r.URL.Query().Get("password")
	user, err := db.GetUserByName(name, password)
	if err != nil {
		log.Println("failed to get user: ", err)
		if err.Error() == "incorrect credentials" {
			http.Error(w, "incorrect credentials", http.StatusUnauthorized)
			return
		}
		if err.Error() == "user not found" {
			http.Error(w, "user not found", http.StatusNotFound)
			return
		}
		http.Error(w, "failed to get user", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(user)
}
