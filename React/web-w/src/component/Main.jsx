import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Main() {
  let [post, setPost] = useState([])
  let [loading, setLoading] = useState(false)
  async function fetchPost() {
    setLoading(true)
    let response = await fetch('http://localhost:1337/api/newsposts?pagination[start]=25&pagination[limit]=6&populate=*')
    let postResponse = await response.json()
    setPost(postResponse.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchPost()
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
  return (
    <main className="head2 text-center pt-4">
      <div className="p-4 m-2">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex">
          {
            post.map(postItem =>
              <div key={postItem.id} className="col">

                <div className="temp p-2 m-2 border-bottom"><Link className="link" to={`/post/${postItem.attributes.slug}`}>
                  <div className="tempfig">
                    <svg className="bd-placeholder-img figure-img img-fluid rounded  " width="400" height="200"
                      xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"
                      preserveAspectRatio="xMidYMid slice" focusable="false">
                      <image className="placeholder-glow"
                        href={"http://localhost:1337" + postItem.attributes.newsImage.data.attributes.url}
                        width="100%" height="100%" />
                    </svg>
                  </div>

                  <div className="temptext text-light mb-2 mt-4">
                    {postItem.attributes.newsDescription.slice(0, 150) + " ....."}
                  </div></Link>
                </div>
              </div>
            )
          }
        </div>
      </div>

    </main>

  )
}


