import './Nav.css';
import Logo from '../assets/ithub.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Nav() {

    let [categories, setCategories] = useState([])
    let [loading, setLoading] = useState(false);
    async function fetchCategories() {
        setLoading(true)
        let response = await fetch('http://localhost:1337/api/categories?pagination[page]=1&pagination[pageSize]=5')
        let categoriesResponse = await response.json()
        setCategories(categoriesResponse.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchCategories()
    }, [])


    if (loading)
        return <>

        </>

    return <>
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg " aria-label="Offcanvas navbar large">
                <div className="container " style={{ justitycontent: "space-between" }}>
                    <Link className="navbar-brand text-light mx-4" to="/"><img src={Logo} alt='IT-HUB' style={{width:"50px",height:"50px"}}></img> IT-HUB</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="tool"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                            fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg></span>
                    </button>
                    <div className="off offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar2"
                        aria-labelledby="offcanvasNavbar2Label">

                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">IT_HUB</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center">
                                {
                                    categories.map(categoryItem =>
                                        <li key={categoryItem.id} className="nav-item dropdown">
                                            <Link className="nav-link text-light" aria-expanded="false" to={`/category/post/${categoryItem.attributes.slug}`}>{categoryItem.attributes.categoryName}</Link>
                                        </li>)
                                }
                            </ul>
                            <div className='btn' >
                            <button className="boton position-relative border-dark text-dark" type="submit">
                                    <Link className='link' to="/explore-topics">Explore more</Link>
                                </button><button className="boton position-relative border-dark text-dark" type="submit">
                                    <Link className='link' to="/login">SignUP</Link>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    </>
}
export default Nav


