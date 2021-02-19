import React from "react"
import ButtonMenu from "../common/button-menu"
import MainMenu from "../common/main-menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const iconMail = <FontAwesomeIcon icon={faEnvelope} />
const iconGithub = <FontAwesomeIcon icon={faGithub} />
const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />

export default function Layout({ children }) {
	
	return (
	<div className="pa-layout">		
		<header>	
            <MainMenu />	            
			<ButtonMenu />
		</header>
		<main>
			{children}
		</main>
		<footer>
			<div className="co-footer">
				<a className="el-footer-icon" href="mailto:hola@tatu.dev" target="_blank" rel="noopener noreferrer">
					{iconMail}
				</a>
				<a className="el-footer-icon" href="https://github.com/tatu-dev-labs" target="_blank" rel="noopener noreferrer">
					{iconGithub}
				</a>
				<a className="el-footer-icon" href="https://www.linkedin.com/in/aureliofranco/" target="_blank" rel="noopener noreferrer">
					{iconLinkedin}
				</a>
			</div>
		</footer>
	</div>
	)
}