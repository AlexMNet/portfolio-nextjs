import Link from 'next/link';

export default function Docs({ posts }) {
  return (
    <div className='container py-4 mx-auto max-w-3xl'>
      <h1 className='text-5xl font-normal leading-normal  mb-2 text-center'>
        Project Documentation
      </h1>
      <div className='text-center'>
        <Link href='/'>
          <a className='text-blue-500 underline hover:text-blue-700 text-center'>
            Back Home
          </a>
        </Link>
      </div>
      {posts &&
        posts.map((post, idx) => (
          <div
            key={post.id}
            className='flex flex-col justify-items-start items-centerbg-gray-500 m-10'
          >
            <div className='flex flex-col '>
              <div>
                <img
                  className='object-scale-down round-md'
                  src={post.blogImg.formats.thumbnail.url}
                  alt=''
                />
              </div>
              <div className=' mb-2 flex flex-col'>
                <small className='dark:text-gray-300'>
                  {new Date(post.User.createdAt).toDateString()}
                </small>
                <small className='mr-5 dark:text-gray-300'>
                  {post.User.username}
                </small>
              </div>
            </div>
            <h1 className='text-4xl text-gray-800  font-normal'>
              {post.Title}
            </h1>
            <h3 className='text-gray-600'>{post.description}</h3>

            <Link href={`/${post.Slug}`}>
              <a className='text-blue-500 underline hover:text-blue-700'>
                Read more...
              </a>
            </Link>
            <hr className='mt-5 border-0 bg-blue-500 text-blue-500 h-px' />
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  //get posts from API
  const res = await fetch(process.env.POSTS_URL);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
