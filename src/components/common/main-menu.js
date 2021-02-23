import React from "react"
import { Link } from "gatsby"
import { WebContext } from "../../context/WebContext"

export default function MainMenu() {
	return (
        <WebContext.Consumer>
        {context => (
            <React.Fragment>
            <div className={context.isMenuVisible ? 'co-main-menu' : 'co-main-menu hidden'}>
                <nav aria-labelledby="primary-navigation" role="navigation">
                    <ul>
                        <li className="el-main-menu-item">
                            <Link to="/" activeClassName="active" onClick={() => context.toggleMenu()}>Home</Link>
                        </li>
                        <li className="el-main-menu-item">
                            <Link to="/bio/" activeClassName="active" onClick={() => context.toggleMenu()}>Bio</Link>
                        </li>
                        <li className="el-main-menu-item">
                            <Link to="/ui-ux/" activeClassName="active" onClick={() => context.toggleMenu()}>UI/UX</Link>
                        </li>
                        <li className="el-main-menu-item">
                            <Link to="/front-end/" activeClassName="active" onClick={() => context.toggleMenu()}>Front-End</Link>
                        </li>
                        <li className="el-main-menu-item">
                            <Link to="/seo/" activeClassName="active" onClick={() => context.toggleMenu()}>SEO</Link>
                        </li>
                        <li className="el-main-menu-item">
                            <Link to="/blog/" activeClassName="active" onClick={() => context.toggleMenu()}>Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            </React.Fragment>
        )}
        </WebContext.Consumer>
	)
};