import React from "react";
import BlogPost from "./BlogPost";

export default function Blogs() {
  const blogs = [
    {
      title: "Top 5 Hybrid Cloud Security Solutions for 2024",
      content: "In 2024, hybrid cloud strategies are gaining significant traction as businesses strive to balance flexibility and control. However, with this growth, security becomes a paramount concern...",
      author: "MSys Marketing",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URLs
    },
    {
      title: "Top 5 Hybrid Cloud Management Solutions",
      content: "In today’s fast-paced digital world, hybrid and multi-cloud strategies are becoming essential for businesses seeking flexibility, efficiency, and innovation. These approaches combine the strengths of...",
      author: "MSys Marketing",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "What are Multi-cloud Networking Services?",
      content: "In today’s fast-paced digital landscape, businesses increasingly adopt multi-cloud strategies to stay competitive and agile. Multi-Cloud Networking involves connecting and managing multiple public, private, or...",
      author: "MSys Marketing",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "What are Multi-cloud Networking Services?",
      content: "In today’s fast-paced digital landscape, businesses increasingly adopt multi-cloud strategies to stay competitive and agile. Multi-Cloud Networking involves connecting and managing multiple public, private, or...",
      author: "MSys Marketing",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "What are Multi-cloud Networking Services?",
      content: "In today’s fast-paced digital landscape, businesses increasingly adopt multi-cloud strategies to stay competitive and agile. Multi-Cloud Networking involves connecting and managing multiple public, private, or...",
      author: "MSys Marketing",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "What are Multi-cloud Networking Services?",
      content: "In today’s fast-paced digital landscape, businesses increasingly adopt multi-cloud strategies to stay competitive and agile. Multi-Cloud Networking involves connecting and managing multiple public, private, or...",
      author: "MSys Marketing",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "What are Multi-cloud Networking Services?",
      content: "In today’s fast-paced digital landscape, businesses increasingly adopt multi-cloud strategies to stay competitive and agile. Multi-Cloud Networking involves connecting and managing multiple public, private, or...",
      author: "MSys Marketing",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <>
      <div className="banner-area banner-bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner">
                <h2>Blogs</h2>
                <ul className="page-title-link">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <div className="blog-list">
          {blogs.map((blog, index) => (
            <BlogPost key={index} title={blog.title} content={blog.content} author={blog.author} image={blog.image} />
          ))}
        </div>
      </div>
    </>
  );
}
