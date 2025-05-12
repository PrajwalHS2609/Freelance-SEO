import Link from "next/link";
import "./BlogPage.css";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
    _type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...100]{
    _id,
    title,
    slug,
    description,
    mainImage{
      ...,
      asset->{
        _id,
        url
      }
    }
  }`;

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {});

  return (
    <div className="blogMain">
      {posts.map((post) => (
        <div className="blogCard" key={post._id}>
          <div className="blogImg">
            {post.mainImage?.asset?.url && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={550}
                height={310}
              />
            )}
          </div>
          <h4 className="blogCardH4">{post.title}</h4>
          <p>{post.description}</p>
          <div className="blogBtn">
            <Link href={`/${post.slug.current}`}>
              <button>Read More </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
