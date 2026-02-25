package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/effluvialsplurf/LeagueOrganizer/api"
)

func FirstApiFunc(w http.ResponseWriter, r *http.Request) {
	out := api.TestAPI()

	w.Header().Set("Content-Type", "text/plain")
	_, err := fmt.Fprint(w, out)
	if err != nil {
		log.Fatalln("failed to return string to the frontend with err: ", err)
	}
}
