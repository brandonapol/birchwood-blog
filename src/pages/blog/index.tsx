import BlogLoop, { Blog } from "~/components/BlogLoop";
import Link from "next/link";

type BlogProps = {
  returnedData: object;
};

const BlogMain = ({ returnedData }: BlogProps) => {
  const finalObj = Object.values(returnedData);
  // TODO - load a new page on click for each blog post
  return (
    <div>
      <div className="flex bg-cadet p-3">
        <Link
          href="/"
          className="border-lg flex items-center justify-center rounded border-2 border-white
     p-3 align-middle transition duration-500 hover:animate-pulse hover:bg-slate-700
      hover:text-timberwolf"
        >
          <div className="p-3 text-xl">&#11013;</div>
          Back to Portfolio
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center p-5 align-middle">
        {finalObj.map((obj: Blog) => (
          <BlogLoop key={obj.title} {...obj} />
        ))}
      </div>
    </div>
  );
};
//! you will need to set this as async
export async function getStaticProps() {
  let returnedData: Blog;
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("Cannot find API url");
  }
  const apiUrl: string = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl.includes("localhost")) {
    const response = await fetch(`${apiUrl}/api/blog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Unable to get data");
    }

    return {
      props: {
        returnedData: (await response.json()) as Blog,
      },
    };
  } else {
    return {
      props: {
        returnedData: {
          title: "string",
          author: "string",
          content: "string",
          createdAt: "string",
          updatedAt: "string",
        },
      },
    };
  }
}

export default BlogMain;
