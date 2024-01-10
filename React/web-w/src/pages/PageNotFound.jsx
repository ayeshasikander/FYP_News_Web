
import ErrorImage from "../assets/error.jpg"
export default function PageNotFound() {
    return (
        <div>
           
            <div className="text-center m-5 p-5 img-fluid">
                <img src={ErrorImage} height="80%" width="80%" alt="page not found 404-error" />
            </div>
        </div>

    )
}