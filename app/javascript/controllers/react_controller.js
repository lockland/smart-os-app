import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom/client"
import '@mantine/core/styles.css'
import App from "../components/App"
import { MantineProvider } from "@mantine/core"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("react working")
    ReactDOM.createRoot(document.getElementById("app")).render(
      <React.StrictMode>
        <MantineProvider withNormalizeCSS withCSSVariables>
          <App />
        </MantineProvider>
      </React.StrictMode>
    )
  }
}
