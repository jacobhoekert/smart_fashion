import React from 'react';
import '../styles/all_blogs_section.scss';
import BlogCard from './BlogCard';

const AllBlogsSection = () => {
  return (
    <div>
      <section id="all-blogs-section">
        <div id="all-blogs-container">
          <BlogCard
            linkUrl="/blog/wedding"
            image="/wedding-tuxedo.jpg"
            alt="man in wedding tuxedo"
            title="Choosing the Perfect Wedding Tuxedo"
            summary="Your special day is coming up and getting a nice tuxedo for yourself and a beautiful wedding gown for the bride..."
          />
          <BlogCard
            linkUrl="/blog/measure"
            image="/measuring-tape.jpg"
            alt="man in wedding tuxedo"
            title="How to Measure Yourself for a Custom Suit"
            summary="One of the biggest questions that we get from our international customers is, “How in the world do I measure myself for a custom suit?!” The truth is that it is easy! You just have to follow the appropriate steps..."
          />
        </div>
      </section>
    </div>
  )
}

export default AllBlogsSection