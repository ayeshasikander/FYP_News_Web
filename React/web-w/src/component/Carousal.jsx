import { useState, useEffect } from "react"
export default function Carousal() {

    let [carousel, setCarousel] = useState([])
    let [loading, setLoading] = useState(false)
    async function fetchCarousel() {
        setLoading(true)
        let response = await fetch('http://localhost:1337/api/carousels?populate=*')
        let carouselResponse = await response.json()
        setCarousel(carouselResponse.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchCarousel()
    }, [])
    if (loading)
        return <>
            <main className="head2 text-center pt-4">
                <div className="p-4 m-2">
                    <div className="spinner-border text-light" role="status" style={{ width: "5rem", height: "5rem" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </main>
        </>
    return <>
        <div className="pb-3">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner bot">
                    {
                        carousel.map((carouselItem, i) => {
                            console.log(i)
                            if (i === 0) {
                                return (<div className="carousel-item active">
                                    <img className="bd-placeholder-img" width="100%" height="280px" src={"http://localhost:1337" + carouselItem.attributes.carouselImage.data.attributes.url} alt="404" />
                                    <div className="container">
                                        <div className="carousel-caption text-start">
                                            <h1>{carouselItem.attributes.carouselTagline}</h1>
                                        </div>
                                    </div>
                                </div>)
                            } else {
                                return (<div className="carousel-item">
                                    <img className="bd-placeholder-img" width="100%" height="260px" src={"http://localhost:1337" + carouselItem.attributes.carouselImage.data.attributes.url} alt="404" />
                                    <div className="container">
                                        <div className="carousel-caption text-start">
                                            <h1>{carouselItem.attributes.carouselTagline}</h1>

                                        </div>
                                    </div>
                                </div>)
                            }

                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
}
