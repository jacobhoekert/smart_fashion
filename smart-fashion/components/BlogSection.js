import React from 'react';
import Button from './Button';
import '../styles/blog_section.scss';
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <div>
      <section id="blog-section">
        <h2>Blog Section Title Here</h2>
        <h3>Blog hello</h3>
        <div id="blog-container">
          <BlogCard 
            image="/wedding-tuxedo.jpg"
            alt="man in wedding tuxedo"
            title="Choosing the Perfect Wedding Tuxedo"
            summary="Your special day is coming up and getting a nice tuxedo for yourself and a beautiful wedding gown for the bride..."
          />
          <BlogCard 
            image="/wedding-tuxedo.jpg"
            alt="man in wedding tuxedo"
            title="Choosing the Perfect Wedding Tuxedo"
            summary="Your special day is coming up and getting a nice tuxedo for yourself and a beautiful wedding gown for the bride..."
          />
          <BlogCard 
            image="/wedding-tuxedo.jpg"
            alt="man in wedding tuxedo"
            title="Choosing the Perfect Wedding Tuxedo"
            summary="Your special day is coming up and getting a nice tuxedo for yourself and a beautiful wedding gown for the bride..."
          />
        </div>
        <Button path="/blog" text="Read More" />
      </section>
    </div>
  )
}

export default BlogSection