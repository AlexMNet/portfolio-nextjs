import Link from 'next/link';

export default function Docs({ posts }) {
  return (
    <div className='container px-6 py-4 mx-auto'>
      <h1 className='text-6xl font-normal leading-normal mt- mb-2 text-center'>
        Project Documentation
      </h1>
      {posts &&
        posts.map((post, idx) => (
          <div
            key={post.id}
            className='flex flex-col justify-items-start items-centerbg-gray-500 m-10'
          >
            <small>{new Date(post.User.created_at).toDateString()}</small>
            <h1 className='text-3xl text-gray-800 underline font-normal'>
              {post.Title}
            </h1>
            <div className='flex mb-2'>
              <small className='mr-5'>{post.User.username}</small>
            </div>
            <h3>{post.description}</h3>

            <Link href={`/${post.Slug}`}>
              <a className='text-blue-500 underline hover:text-blue-700'>
                Read more...
              </a>
            </Link>
            <hr class='mt-5 border-0 bg-blue-500 text-blue-500 h-px' />
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  //get posts from API
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}
