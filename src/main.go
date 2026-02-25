package main

import (
	"log"
	"net/http"
)

func muxInit() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/", RenderFrontend)
	mux.HandleFunc("/testAPI", FirstApiFunc)

	return mux
}

func main() {
	// we start here
	log.Println("starting server")

	// create our routing mutex
	mux := muxInit()

	// start our server
	err := http.ListenAndServe(":8008", mux)
	if err != nil {
		log.Fatalln("server shut down for some reason: ", err)
	}
}
