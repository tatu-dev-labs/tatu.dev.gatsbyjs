import React, { useContext, useEffect } from "react"
import ButtonMenu from "./button-menu"
import MainMenu from "./main-menu"

export default function Header() {
    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            let scrollPosition = window.scrollY;
            let logoNamePosition = document.getElementsByClassName('el-logo-name')[0].offsetTop;
            if (scrollPosition >= logoNamePosition) {
                console.log(true)
            }
        })
    })
    return (
        <header className="bl-header">
        <div className="el-logo-name-small">tatu</div>   
        <ButtonMenu />
        <MainMenu />                 
    </header>
    )
};