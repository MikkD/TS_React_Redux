import React from 'react'


const NavBar: React.FC = () => {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper blue lighten-1 ">
                    <a href="#" className="brand-logo-left pdn_01">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-small-and-down">
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>

        </React.Fragment>
    )
}

export default NavBar




