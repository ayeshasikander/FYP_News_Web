import React from 'react'
import Post from '../component/Post'
import { useParams } from 'react-router-dom'

export default function Categorypage() {
const {category}=useParams()

    return (
        <main className="container mt-5 pt-5">
            <div className="header p-2 border-bottom text-start">
                <h2>{category}</h2>
            </div>
           < Post category={category}/>
        </main>

    )
}
