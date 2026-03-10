package main

import (
	"log"
	"net/http"

	"github.com/effluvialsplurf/LeagueOrganizer/db"
)

func muxInit() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/", RenderFrontend)
	mux.HandleFunc("/testAPI", FirstApiFunc)
	mux.HandleFunc("/api/users/create", handleCreateUser)
	mux.HandleFunc("/api/users/get-by-name", handleGetUser)

	return mux
}

func main() {
	// initialize our database
	log.Println("initializing database")
	db.MustConnectDB()

	// we start here
	log.Println("db connected, now starting server")

	// create our routing mutex
	mux := muxInit()

	// start our server
	err := http.ListenAndServe(":8008", mux)
	if err != nil {
		log.Fatalln("server shut down for some reason: ", err)
	}
}
