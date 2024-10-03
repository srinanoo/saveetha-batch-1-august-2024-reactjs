import { NavLink } from "react-router-dom"

export default function MenuComp() {
    return (
        <>
            <p><a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/portfolio">Portfolio</a></p>

            <p><NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/portfolio">Portfolio</NavLink></p>
        </>
    )
}