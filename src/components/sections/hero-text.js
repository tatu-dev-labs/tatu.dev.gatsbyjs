import React from "react"
import AvatarImage from "../../assets/images/avatar.png";

export default function HeroText() {
	return (
        <div className="bl-section-hero-text">   
            <img className="el-avatar" src={AvatarImage} alt="tatu.dev" />
            <p className="el-hero-text-p">Internet evoluciona a un ritmo frenético, constantemente hay nuevos retos, nuevas cosas que aprender. Cada día intento mejorar en lo que se y aprender algo de lo que no se.</p>
        </div>
	)
};