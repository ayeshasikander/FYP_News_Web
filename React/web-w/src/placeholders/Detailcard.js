export default function Detailcard() {
    return (
        <div className="detailcard" aria-hidden="true">
            <h5 className="card-title p-4 m-3 placeholder-glow">
                <span className="placeholder col-6"></span>
            </h5>
            <svg className="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="700" height="400" fill="#55595c" /></svg>
            <div className="card-body mt-3">
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                </p>

            </div>
        </div>
    )
}