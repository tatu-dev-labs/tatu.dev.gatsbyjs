import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons'

const iconSmileBeam = <FontAwesomeIcon icon={faSmileBeam} />

export default function HomeWellcome() {
	return (
        <section className="bl-home-wellcome">
            <div class="co-home-wellcome-container">
                <h1 className="el-logo-name">tatu</h1>
                <h2 className="el-home-wellcome-subtitle">Hola {iconSmileBeam}, soy Aurelio Franco, gestor de proyectos web. </h2>
                <div>
                    <p className="el-home-wellcome-text">Diseñador de <strong>UI/UX</strong>, experto en desarrollo <strong>Front-End</strong> y Optimización <strong>SEO</strong> On Page y SEO Técnico</p>
                </div>
            </div>
        </section>

	)
};