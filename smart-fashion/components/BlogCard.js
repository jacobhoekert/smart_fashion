import React from "react";
import Link from "next/link";
import "../styles/blog_card.scss";

const BlogCard = props => {
  return (
    <Link href={props.linkUrl}>
      <div className="blog-card">
        <img
          className="blog-image"
          src={props.image}
          alt={props.alt}
          width="100%"
          height="auto"
        />
        <div className="blog-text">
          <h4 className="blog-title">{props.title}</h4>
          <p className="blog-summary">{props.summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
