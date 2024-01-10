import { Link } from "react-router-dom";
import Popular from "./Popular";
import Badge from "./Badge";

export default function Sidepost() {
    
    return (
        <div className="col-md-4">
            <Popular></Popular>
            <hr className="featurette-divider" />
            <h5 className="mb-3">Discover more for what you need!</h5>
            <Badge></Badge>
            <Link className="text link " to="/explore-topics">
                <h5 className="p-3">see more topics</h5>
            </Link>
        </div>

    );
}