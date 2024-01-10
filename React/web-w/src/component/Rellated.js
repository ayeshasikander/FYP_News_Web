import { Link } from "react-router-dom"
export default function Rellated() {
    
    return (
        <div className="col-6 col-md-4 theme">
            <h1 className="pop">Related Popular</h1>
            <div className="more row ">
                <div className="thumbnail col-auto">
                    <img src="https://www.openlogic.com/sites/default/files/image/2020-07/image-blog-sql-database.jpg"
                        className="img-thumbnail" width="130" height="100" alt="..." />

                    <div className="thumbheadline  p-1">
                        <Link to="/"> This is a wider card with supporting text below as a natural.
                        </Link>

                    </div>
                </div>
            </div>


        </div>
    )
}