import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "../components/App"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("react working")
    ReactDOM.createRoot(document.getElementById("app")).render(<App/>)
  }
}
