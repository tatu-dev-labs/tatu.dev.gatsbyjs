import React from "react"

export default function Layout({ children }) {
  return (
    <div className="pa-layout">
        <header></header>
        <main>
            {children}
        </main>
        <footer>
            <div className="co-footer">
                <a href="mailto:hola@tatu.dev" target="_blank" rel="noopener noreferrer">Mail</a>
                <a href="https://github.com/tatu-dev-labs" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/aureliofranco/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    </div>
  )
}