export default function Card() {
    return (

        <div className="dot mb-1">

            <div className="newspost">
                <div className="newspost-post">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="200" height="134" fill="#55595c" /></svg>

                </div>
                <div className="newspost-body">
                    <strong className="d-inline-block  text-primary placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </strong>
                    <h2 className="placeholder-glow">
                       <span className="placeholder col-4"></span>
                    </h2>
                    <h2 className="placeholder-glow">
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-2"></span>
                        <span className="placeholder col-6"></span>
                    </h2>
                    <span className="text-muted">
                    <span className="placeholder col-4"></span>
                    </span>

                </div>
            </div>

        </div>
    )
}