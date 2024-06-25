import React from "react";
import Intro from "../../blocks/intro/intro";
import Advantages from "../../blocks/advantages/advantages";
import "./styled.js";

export default function MainPage ({advantages}) {
    return (
        <main className="main-page">
            <Intro/>
            <Advantages advantages={advantages}/>
        </main>
    )
}