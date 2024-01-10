
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Popular() {

    let [news, setNews] = useState([])
    let [loading, setLoading] = useState(false)
    async function fetchNews() {
        setLoading(true)
        let request = `http://localhost:1337/api/newsposts?pagination[start]=0&pagination[limit]=4&?populate=*`
        let response = await fetch(request)
        let newsResponse = await response.json()
        setNews(newsResponse.data);
        setLoading(false)
    }
    useEffect(() => {
        fetchNews()
    }, [])

    if (loading)
        return <>Loading.......</>

    return (
      
            <div className="right-rail">
                <aside className="mainblock_sidebar">
                    <div className="widget most-read-sidebar">
                        <div className="sidebar-header">
                            <h4>Most Read</h4>
                        </div>
                        {
                            news.map(newsItem => (
                                <div key={newsItem.id}>
                                    <article className="moost-read__article">

                                        <span className=""></span>
                                        <li><Link className="link most-read__title" to={`/post/${newsItem.attributes.slug}`}>{newsItem.attributes.newsTagline.slice(0, 60) + "..."}</Link>
                                        </li> 

                                    </article>
                                </div>
                            ))
                        }
                    </div>
                </aside>
            </div>
       

    );
}