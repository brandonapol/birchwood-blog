import BlogLoop, { Blog } from '~/components/BlogLoop';
import Link from 'next/link';

type BlogProps = {
  final: object
}

const BlogMain = ({ final }: BlogProps ) => {

  const finalObj= Object.values(final);
  // TODO - load a new page on click for each blog post
  return (
  <div>
    
    <div className='flex bg-cadet p-3'>
      <Link href='/' className='border-lg flex hover:animate-pulse justify-center align-middle items-center p-3
     transition duration-500 border-white border-2 rounded hover:bg-slate-700
      hover:text-timberwolf'>
        <div className="p-3 text-xl">&#11013;</div>
        Back to Portfolio
      </Link></div>
    <div className='flex flex-col justify-center items-center align-middle p-5'>
      {
        finalObj.map((obj: Blog) => (
          <BlogLoop key={obj.title} {...obj} />
        ))
      }
    </div>
  </div> )
}
//! you will need to set this as async
export function getStaticProps() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('Cannot find API url')
  }
  const apiUrl: string = process.env.NEXT_PUBLIC_API_URL
  // const response = await fetch(`${apiUrl}/api/blog`,
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error('Unable to get data')
  //   }

    // const final: Blog = await response.json() as Blog;
    const final: Blog = {
      title: "string",
      author: "string",
      content: "string",
      createdAt: "string",
      updatedAt: "string"
    }

    return {
      props: { 
        final,
      },
    }
}

export default BlogMain