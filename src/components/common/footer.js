import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const iconMail = <FontAwesomeIcon icon={faEnvelope} />
const iconGithub = <FontAwesomeIcon icon={faGithub} />
const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />

export default function Footer() {
	return (
        <footer>
			<div className="bl-footer">
				<a className="el-footer-icon" href="mailto:hola@tatu.dev" target="_blank" rel="noopener noreferrer">
					{iconMail}
                    <span>E-Mail</span>
				</a>
				<a className="el-footer-icon" href="https://github.com/tatu-dev-labs" target="_blank" rel="noopener noreferrer">
					{iconGithub}
                    <span>Github</span>
				</a>
				<a className="el-footer-icon" href="https://www.linkedin.com/in/aureliofranco/" target="_blank" rel="noopener noreferrer">
					{iconLinkedin}
                    <span>LinkedIn</span>
				</a>
			</div>
		</footer>
	)
};        