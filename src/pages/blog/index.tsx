import BlogLoop, { Blog } from '~/components/BlogLoop';
import Link from 'next/link';

interface BlogProps {
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

export async function getStaticProps() {
  const response = await fetch('http://localhost:8000/api/blog',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Unable to get data')
    }

    const final = await response.json()

    return {
      props: { 
        final,
      },
    }
}

export default BlogMain