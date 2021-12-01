import Link from 'next/link';
import React from 'react';
import MarkdownIt from 'markdown-it';
import ReactMarkdown from 'react-markdown';

export default function Post({ post }) {
  // const md = new MarkdownIt();
  // const htmlContent = md.render(post.Content);

  return (
    <section>
      <div className='container mx-auto flex flex-col items-center justify-center mb-20 max-w-5xl p-10'>
        <header className='flex flex-col gap-3 mb-10'>
          <h1 className='text-4xl md:text-6xl dark:text-gray-400'>
            {post.Title}
          </h1>
          <small>
            by: <span className='text-blue-500'>{post.User.username}</span>
          </small>
          <small className='block'>
            {new Date(post.createdAt).toDateString()}
          </small>
          <div className='flex gap-2 flex-wrap'>
            {post.badges.map(({ id, url }) => (
              <img key={id} src={url} alt='' className='md:w-25' />
            ))}
          </div>
          <img src={post.blogImg.url} alt='' />
          <div className='flex justify-around'>
            <a href='' className='text-blue-500 underline'>
              Live
            </a>
            <a href='' className='text-blue-500 underline'>
              Github
            </a>
          </div>
        </header>
        <article className=' w-full'>
          <ReactMarkdown className='prose dark:prose-dark prose-blue md:prose-xl'>
            {post.Content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
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
