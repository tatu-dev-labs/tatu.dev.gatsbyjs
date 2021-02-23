import React from "react"
import ButtonMenu from "./button-menu"
import MainMenu from "./main-menu"

export default function Header() {
	return (
        <header>
            <div className="sticky top-0 h-32 bg-white p-8 flex flex-row justify-between items-center">
                <div className="">
                    tatu
                </div>   
            </div>	
            
            
            <ButtonMenu />
            <MainMenu />                 
		</header>
	)
};                