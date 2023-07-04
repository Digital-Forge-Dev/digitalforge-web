import React from 'react'
import Hero from '../../sections/hero_main'
import "./style.css";
import bg1 from '../../assets/images/bg-line-1.png'

function Main() {
    return (
        <div className="main-page-impl">
            <img className="group" alt="Group" src={bg1} />
            <Hero/>
        </div>
        // <div>Hello</div>
    )
}

export default Main