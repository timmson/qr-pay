import "./index.scss"
import "bootstrap"

import React from "react"
import App from "./app"
import {createRoot} from "react-dom/client"

createRoot(document.getElementById('app')).render(<App tab="home" />);
