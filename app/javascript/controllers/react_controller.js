import { Controller } from "@hotwired/stimulus"
import { Turbo } from "@hotwired/turbo-rails"
import React from "react"
import ReactDOM from "react-dom/client"
import '@mantine/core/styles.css'
import App from "../components/App"
import { MantineProvider } from "@mantine/core"

// Disable turbo drive for links and forms
// @https://github.com/hotwired/turbo-rails?tab=readme-ov-file#navigate-with-turbo-drive
Turbo.session.drive = false
// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    ReactDOM.createRoot(document.getElementById("app")).render(
      <React.StrictMode>
        <MantineProvider withNormalizeCSS withCSSVariables>
          <App />
        </MantineProvider>
      </React.StrictMode>
    )
  }
}
