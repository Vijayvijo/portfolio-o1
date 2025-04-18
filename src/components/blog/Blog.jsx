import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog33.jpg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="/blog/some-post"><span className="blog__category">Example</span></a>
                        <a href="/blog/some-post"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Example Blog</h3>
                        <div className="blog__meta">
                            <span>09 February, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Vijay J</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog