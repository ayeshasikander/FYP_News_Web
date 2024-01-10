import { useState, useEffect } from "react"
export default function Comment(){
    const [comment, setComment] = useState([])
    const [loading, setLoading] = useState(false)
    let postId=localStorage.getItem('postId')
    async function fetchComment() {
        setLoading(true)
        let response = await fetch(`http://localhost:1337/api/comments?populate=*&filters[newspost][id][$eq]=${postId}`)
        let commentResponse = await response.json()
        setComment(commentResponse.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchComment()
    }, [])
    if (loading)
        return (<>
            loading....</>)
    return (


        <div className="fb box2">
            <h4 style={{textDecoration:"underline"}}>Comments</h4>
            {
                comment.map(commentItem =>
                    <div className="bx d-flex"key={commentItem.id}>
                        <div className="name d-flex">
                            <text>{commentItem.attributes?.fullName+":"}</text>
                        </div>
                        <div className="feedback">
                            <text>{commentItem.attributes?.commentText}</text>
                        </div>
                    </div>

                )
            }
        </div>

    );
}