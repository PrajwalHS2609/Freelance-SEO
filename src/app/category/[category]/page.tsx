import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import "@/components/BlogPage/BlogPage.css";
import BlogHeader from "@/components/BlogPage/BlogHeader";

// 🧠 CATEGORY POSTS GROQ QUERY
const CATEGORY_POSTS_QUERY = `
  *[_type == "post" && $category in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    categories[]->{
      title,
      slug
    },
    mainImage {
      asset-> {
        url
      }
    }
  }
`;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const category = resolvedParams.category.toLowerCase();

  const posts = await client.fetch<SanityDocument[]>(CATEGORY_POSTS_QUERY, {
    category,
  });

  return (
    <div className="main-container">
      <BlogHeader />
      <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
        {category.toUpperCase()}
      </h2>
      <div className="blog-subContainer">
        {posts.length > 0 ? (
          posts.map((post) => (
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
          ))
        ) : (
          <p>No posts found in this category.</p>
        )}
      </div>
    </div>
  );
}

// ✅ Will be picked up by App Router
export async function generateStaticParams() {
  const categories = await client.fetch(`*[_type == "category"]{ slug }`);
  return categories.map((cat: { slug: { current: string } }) => ({
    category: cat.slug.current,
  }));
}
