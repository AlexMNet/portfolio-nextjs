import Link from 'next/link';
import React from 'react';
import MarkdownIt from 'markdown-it';

export default function Post({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.Content);

  return (
    <article>
      <div className='container mx-auto p-10 justify-center items-start text-left flex flex-col '>
        <div className='mb-5'>
          <h1 className='text-4xl md:text-6xl'>{post.Title}</h1>
          <small>
            by: <span className='text-blue-500'>{post.User.username}</span>
          </small>
          <small className='block'>
            {new Date(post.createdAt).toDateString()}
          </small>
          <div className='flex gap-2 w-20'>
            {post.badges.map(({ id, url }) => (
              <img key={id} src={url} alt='' />
            ))}
          </div>
        </div>
        <img src={post.blogImg.url} alt='' style={{ width: '400px' }} />
        <article
          className='prose dark:prose-dark prose-blue'
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></article>
        <Link href='/'>
          <a className='text-blue-500 underline hover:text-blue-700 text-center'>
            Back Home
          </a>
        </Link>
        <Link href='/docs'>
          <a className='text-blue-500 underline hover:text-blue-700 text-center'>
            Back to Docs
          </a>
        </Link>
      </div>
    </article>
  );
}

//tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch(process.env.POSTS_URL);
  const posts = await res.json();

  //get slugs from each post
  const paths = posts.map((post) => ({ params: { slug: post.Slug } }));

  return {
    paths,
    fallback: false,
  };
}

//for each individual page: get the data for taht page
export async function getStaticProps({ params }) {
  const { slug } = params;

  //Create link using slug
  const res = await fetch(`${process.env.POSTS_URL}?Slug=${slug}`);
  const data = await res.json();

  const post = data[0];

  return {
    props: { post },
    revalidate: 60,
  };
}
