import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";
import Card from "../placeholders/Card";
import axios from 'axios';
import Pagination from "./Paginate";

export default function Post(props) {
  const options = {
    timeZone: "Asia/Karachi",
    hour12: true,
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const category = props.category;
  const search = props.search;
  const pageSize = 10;

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  async function fetchPost(page) {
    setLoading(true);

    let apiEnd = 'http://localhost:1337/api/newsposts?populate=*&sort[1]=createdAt:desc';

    if (category) {
      apiEnd = `http://localhost:1337/api/newsposts?populate=*&filters[field][slug][$eq]=${category}&sort[1]=createdAt:desc`;
    }

    if (search) {
      apiEnd = `http://localhost:1337/api/newsposts?populate=*&filters[newsDescription][$contains]=${search}&sort[1]=createdAt:desc`;
    }

    try {
      const response = await axios.get(apiEnd, {
        params: {
          'pagination[page]': page,
          'pagination[pageSize]': pageSize
        }
      });

      const { data, meta } = response.data;
      setPost(data);
      setPageCount(meta.pagination.pageCount);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPost(currentPage);
  }, [category, search, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </>
    );
  }

  return (
    <div className="col-md-8">
      {post &&
        post.map(postItem => (
          <div key={postItem?.id} className="dot mb-2">
            <Link to={`/post/${postItem?.attributes?.slug}`} className="link link-dark">
              <div className="newspost">
                <div className="newspost-post">
                  <img
                    src={"http://localhost:1337" + postItem?.attributes?.newsImage.data.attributes.url}
                    width="200"
                    height="134"
                    alt="Newspost post"
                  />
                </div>
                <div className="newspost-body">
                  <strong className="d-inline-block text-primary placeholder-glow">
                    {postItem?.attributes?.field.data.attributes?.categoryName}
                  </strong>
                  <h3 className="m-1 placeholder-glow">
                    {postItem?.attributes?.newsTagline.slice(0, 55) + "..."}
                  </h3>
                  <div className="placeholder-glow">
                    <ReactMarkdown children={postItem?.attributes?.newsDescription.slice(0, 100) + " ....."} />
                  </div>
                  <span className="text-muted">
                    {new Date(postItem?.attributes?.createdAt).toLocaleString("en-US", options)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      <Pagination currentPage={currentPage} pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
}
