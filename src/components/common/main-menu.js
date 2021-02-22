import React from "react"
import { Link } from "gatsby"
import { WebContext } from "../../context/WebContext"

export default function MainMenu() {
	return (
        <WebContext.Consumer>
        {context => (
            <React.Fragment>
            <div className={context.isMenuVisible ? 'co-main-menu' : 'co-main-menu hidden'}>
                <nav aria-labelledby="primary-navigation">
                    <ul>
                        <li className="el-main-menu-item"><Link to="/" onClick={() => context.toggleMenu()}>Home</Link></li>
                        <li className="el-main-menu-item"><Link to="/bio/" onClick={() => context.toggleMenu()}>Bio</Link></li>
                        <li className="el-main-menu-item"><Link to="/ui-ux/" onClick={() => context.toggleMenu()}>UI/UX</Link></li>
                        <li className="el-main-menu-item"><Link to="/front-end/" onClick={() => context.toggleMenu()}>Front-End</Link></li>
                        <li className="el-main-menu-item"><Link to="/seo/" onClick={() => context.toggleMenu()}>SEO</Link></li>
                        <li className="el-main-menu-item"><Link to="/blog/" onClick={() => context.toggleMenu()}>Blog</Link></li>
                    </ul>
                </nav>
            </div>
            </React.Fragment>
        )}
        </WebContext.Consumer>
	)
};