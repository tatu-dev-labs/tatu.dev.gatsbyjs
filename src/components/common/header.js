import React, { useContext, useEffect } from "react"
import { WebContext } from "../../context/WebContext"
import ButtonMenu from "./button-menu"
import MainMenu from "./main-menu"


export default function Header() {
    const logoHeaderVisible = useContext(WebContext);

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            const currentPath = window.location.pathname;
            if (currentPath === "/") {
                const logoNamePosition = document.getElementsByClassName('el-logo-name')[0].offsetTop;
                const scrollPosition = window.scrollY;
                if (scrollPosition >= logoNamePosition) {
                    logoHeaderVisible.toggleLogoHeader(true)
                } else {
                    logoHeaderVisible.toggleLogoHeader(false)
                }
            } else {
                logoHeaderVisible.toggleLogoHeader(true)
            }
        })
    })
    return (
        <header className="bl-header">
            <WebContext.Consumer>
                {context => (
                    <React.Fragment>
                    <div className={context.isLogoHeaderVisible ? "el-logo-name-small" : "el-logo-name-small opacity-0" }>tatu</div>   
                    </React.Fragment>
                )}        
            </WebContext.Consumer>
            <ButtonMenu />
            <MainMenu />       
        </header>
    )
};
