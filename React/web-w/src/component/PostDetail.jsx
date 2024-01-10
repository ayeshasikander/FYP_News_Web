
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import { useParams } from "react-router-dom";
import Detailcard from "../placeholders/Detailcard";
export default function PostDetail() {

  const { slug } = useParams()
  console.log(slug)

  let [post, setPost] = useState({})
  let [loading, setLoading] = useState(false)
  async function fetchPost() {
    setLoading(true)
    let request = `http://localhost:1337/api/newsposts?populate=*&filters[slug][$eq]=${slug}`
    let response = await fetch(request)
    let postResponse = await response.json()
    setPost(postResponse.data[0]);
    setLoading(false)
    localStorage.setItem('postId',postResponse.data[0]?.id)
  }
  useEffect(() => {
    fetchPost()
  }, [])

  if (loading)
    return <>
  <Detailcard></Detailcard>
    </>

  return (

   
      <div className="dot mt-3 mb-3">
        <div className="newspost">
          <div className="newspost-body">
            <strong className="d-inline-block mb-2 placeholder-glow text-primary">{post.attributes?.field.data.attributes.categoryName}</strong>
            <h2 className="placeholder-glow m-2">{post.attributes?.newsTagline}</h2>
            <span className="text-muted placeholder-glow">May , 5/19/2023 , 11:40 AM</span>
            <div className="newspost-post  m-3 p-2">
              <img src={"http://localhost:1337" + post.attributes?.newsImage.data.attributes.url}
                width="700" height="400" className="img-fluid" alt="Newspost post" />
            </div>
            <div className="placeholder-glow"style={{textAlign:"left"}}>
              <ReactMarkdown children={post.attributes?.newsDescription} /></div>

          </div>
        </div>
      </div>


  )
}

