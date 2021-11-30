import Link from 'next/link';
import React from 'react';
import MarkdownIt from 'markdown-it';

export default function Post({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.Content);
  return (
    <article>
      <div className='container mx-auto p-10 items-center w-screen'>
        <article
          className='prose dark:prose-dark prose-blue lg:prose-xl '
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
