import React from "react"
import { WebContext } from "../../context/WebContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const iconMenu = <FontAwesomeIcon icon={faBars} />
const iconTimes = <FontAwesomeIcon icon={faTimes} />


export default function ButtonMenu() {
	return (
        <WebContext.Consumer>
            {context => (
                <React.Fragment>
                <button className="el-menu-button" onClick={() => context.toggleMenu()}>                    
                    {context.isMenuVisible ? iconTimes : iconMenu}
                </button>
                </React.Fragment>
            )}        
        </WebContext.Consumer>
	)
};