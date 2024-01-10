import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Subpills() {
    let [loading, setLoading] = useState(false)
    let [categories, setCategories] = useState([])
    async function fetchCategories() {
        setLoading(true)
        let response = await fetch('http://localhost:1337/api/categories?populate=*')
        let categoriesResponse = await response.json()
        setCategories(categoriesResponse.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    let [subCategories, setSubCategories] = useState([])

    async function fetchSubCategories() {
        let response = await fetch('http://localhost:1337/api/sub-categories?populate=*')
        let subCategoriesResponse = await response.json()
        setSubCategories(subCategoriesResponse.data)
    }
    useEffect(() => {
        fetchSubCategories()
    }, [])

    if (loading)
        return <>
            <div className="p-4 m-2 text-center">
                <div className="spinner-border  text-dark" role="status" style={{ width: "5rem", height: "5rem" }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    return (
        <div className="container mt-5 mb-5">
            <div className="row mt-4">

                {
                    categories.map(cat => <Category category={cat.attributes.categoryName}
                        subCategory={subCategories.filter(subcat => subcat.attributes.category.data.id === cat.id)} />)
                }

            </div>
        </div>
    )
}

let Category = (props) => {

    return (

        <ul className="nav text-center col">
            <div className=" mb-3">

                <h5><Link className="item link text-dark" to={`/news/${props.category}`}>{props.category}</Link></h5>

                <div className="menu ">
                    {
                        props.subCategory.map(subCategory => <li className="item mb-2" key={subCategory.id}><Link to={`/news/sub/${subCategory.attributes.slug}`} className="link  text-muted">{subCategory.attributes.subTitles}</Link></li>)
                    }

                </div>

            </div>
        </ul>



    )
}