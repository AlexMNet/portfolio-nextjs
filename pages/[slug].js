import Link from 'next/link';
import React from 'react';
import MarkdownIt from 'markdown-it';

export default function Post({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.Content);
  console.log(htmlContent);
  return (
    <article>
      <div className='container mx-auto p-10 flex flex-col items-center'>
        <h1 className='text-3xl'>{post.Title}</h1>
        <h3>{post.User.username}</h3>
        <section
          className='prose prose-dark'
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></section>
      </div>
    </article>
  );
}

//tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/posts');
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

  const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`);
  const data = await res.json();

  const post = data[0];

  return {
    props: { post },
  };
}
