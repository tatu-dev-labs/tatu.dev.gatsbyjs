import React from "react"
import { WebContext } from "../../context/WebContext"

export default function MainMenu() {
	return (
        <WebContext.Consumer>
        {context => (
            <React.Fragment>
            <div className={context.isMenuVisible ? 'co-main-menu' : 'co-main-menu hidden'}>
                Menu
            </div>
            </React.Fragment>
        )}
        </WebContext.Consumer>
	)
};