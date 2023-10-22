
import "./header.scss"
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Menus from '../Pages/Menus'
import Plan from '../Pages/Plan'
import HowItWorks from '../Pages/HowItWorks'
import Gifts from '../Pages/Gifts'
import Nutrition from '../Pages/Nutrition'
import SignUp from '../Pages/signup';
import SendPasswordResetEmail from "../Pages/SendPasswordResetEmail"
import ResetPassword from "../Pages/ResetPassword"
import UserLogin from "../Pages/login"
import IMG from '../assets/images/Ylogo.png'

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link
                            to="/"
                            className="navbar-brand fs-2 fw-bold "
                        >
                            <img src={IMG} className="main-logo" alt="Yummie Nepal" />

                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                                <li className="nav-item">
                                    <Link
                                        to="/menus"
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Menus
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/plans"
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Plans
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/howitworks"
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        How it Works
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/nutrition"
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Nutrition
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/gifts"
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Gifts
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex gap-3">
                                <Link to="/login"><i className="bi bi-person fs-2 text-success"></i></Link>
                                <button className="btn btn-success text-light fw-bold">
                                    See Menu & Pricing
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/menus"
                    element={<Menus />}
                />
                <Route
                    path="/plans"
                    element={<Plan />}
                />
                <Route
                    path="/howitworks"
                    element={<HowItWorks />}
                />
                <Route
                    path="/nutrition"
                    element={<Nutrition />}
                />
                <Route
                    path="/gifts"
                    element={<Gifts />}
                />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/sendpasswordresetemail" element={<SendPasswordResetEmail />} />
                <Route path="reset/:token" element={<ResetPassword />} />
            </Routes>

        </>
    )
}

export default Header
