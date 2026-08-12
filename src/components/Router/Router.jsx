import { Routes, Route, NavLink } from "react-router-dom";
import { Registro } from "../Pages/Registro/Registro";
import { Home } from "../pages/Home/Home";

export function Router() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <section className="container p-5">

                <Routes>
                    <Route path="/" element={<Registro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/registro" element={<Registro />} />
                </Routes>

            </section>
        </>
    )
}