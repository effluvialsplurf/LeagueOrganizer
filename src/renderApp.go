package main

import (
	"io/fs"
	"log"
	"net/http"

	"github.com/effluvialsplurf/LeagueOrganizer/frontend"
)

func RenderFrontend(w http.ResponseWriter, r *http.Request) {
	log.Println("site contacted")

	app, err := fs.Sub(frontend.Index, "app/dist")
	if err != nil {
		log.Fatalln("failed to grab the app build with error: ", err)
	}

	http.StripPrefix("/", http.FileServerFS(app)).ServeHTTP(w, r)
}
