package api

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	db "github.com/effluvialsplurf/LeagueOrganizer/db"
)

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
	if !created {
		log.Printf("user could not be created: %v", err)
		http.Error(w, "user could not be created", http.StatusConflict)
		return
	}
	w.WriteHeader(http.StatusCreated)
}

func GetUser(w http.ResponseWriter, r *http.Request) {
	user, err := db.GetUserByName(r.URL.Query().Get("name"))
	if err != nil {
		log.Println("failed to get user: ", err)
		http.Error(w, "failed to get user", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(user)
}
