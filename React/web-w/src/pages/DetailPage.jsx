import React from 'react'
import PostDetail from '../component/PostDetail'
import Comment from '../component/Comment'
import Commentbox from '../component/Commentbox'
import Popular from '../component/Popular'

export default function DetailPage() {

    return (

        <div className="container-xl mt-5 pt-3">
            <div className="row  mb-3 text-center flex">
                <div className="col-md-8">
                    <PostDetail></PostDetail></div>
                   
                <div className='link col-4'>
                    <Popular></Popular>
                    <Comment></Comment>
                    <Commentbox></Commentbox>
                </div>
            </div>
        </div>

    )
}