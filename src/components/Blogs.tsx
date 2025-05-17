import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Design conferences in 2022',
    category: 'Design',
    date: '2022-02-23',
    displayDate: 'Feb 23, 2022',
    image: './assets/images/blog-1.jpg',
    description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    id: 2,
    title: 'Best fonts every designer',
    category: 'Design',
    date: '2022-02-23',
    displayDate: 'Feb 23, 2022',
    image: './assets/images/blog-2.jpg',
    description: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
  },
  {
    id: 3,
    title: 'Design digest #80',
    category: 'Design',
    date: '2022-02-23',
    displayDate: 'Feb 23, 2022',
    image: './assets/images/blog-3.jpg',
    description: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
  },
  {
    id: 4,
    title: 'UI interactions of the week',
    category: 'Design',
    date: '2022-02-23',
    displayDate: 'Feb 23, 2022',
    image: './assets/images/blog-4.jpg',
    description: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    id: 5,
    title: 'The forgotten art of spacing',
    category: 'Design',
    date: '2022-02-23',
    displayDate: 'Feb 23, 2022',
    image: './assets/images/blog-5.jpg',
    description: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 6,
    title: 'Design digest #79',
    category: 'Design',
    date: '2022-02-23',
    displayDate: 'Feb 23, 2022',
    image: './assets/images/blog-6.jpg',
    description: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
  }
];

export const Blogs: React.FC = () => {
  return (
    <div className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.displayDate}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
);
}