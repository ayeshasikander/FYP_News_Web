import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Pills from "../placeholders/Pills";
export default function Category() {

    let [categories, setCategories] = useState([])
    let [loading, setLoading] = useState(false);
    async function fetchCategories() {
        setLoading(true)
        let response = await fetch(`http://localhost:1337/api/categories?populate=*`)
        let categoriesResponse = await response.json()
        setCategories(categoriesResponse.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchCategories()
    }, [])

    if (loading)
        return <>
            <div className="d-flex">
                <Pills />
                <Pills />
                <Pills />
            </div>
        </>

    return (

        <div className="pill">
            {
                categories.map(categoryItem =>
                    <div key={categoryItem.id} className="pill">
                        <div className="field position-relative  border-dark text-dark px-3 py-2"><Link className="link text-dark"
                            to={`/category/post/${categoryItem.attributes.slug}`}>
                            <span> {categoryItem.attributes.categoryName}</span></Link>
                        </div>
                    </div>

                )
            }
           

        </div>

    );
}