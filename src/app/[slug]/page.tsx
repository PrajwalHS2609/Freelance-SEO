import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
// CSS for both post and service
import "@/components/BlogPage/BlogPage.css";
import "@/components/Style/style.css";
import BlogSidebar from "@/components/BlogPage/BlogSidebar/BlogSidebar";
import HomeSuccess from "@/components/HomePage/HomeSuccess/HomeSuccess";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeAdv from "@/components/HomePage/HomeAdv/HomeAdv";
import HomeChoosing from "@/components/HomePage/HomeChoosing/HomeChoosing";
import SlugHeader from "@/components/SlugComponents/SlugHeader";
import BlogAuthor from "@/components/BlogPage/BlogAuthor/BlogAuthor";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  },
  source {
    text,
    url
  }}`;

const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body1,
  body2,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

// ✅ keep generateMetadata as you wanted
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const content = post || service;

  if (!content) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  return {
    title: content.metaTitle || content.title || "Default Title",
    description: content.metaDescription || "Default description.",
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
  const service = !post
    ? await client.fetch<SanityDocument>(SERVICE_QUERY, { slug })
    : null;
  const content = post || service;

  if (!content) notFound();

  const imageUrl = content?.mainImage?.asset?.url || null;
  const isPost = !!post;

  return (
    <div className={isPost ? "blog-container" : "main-container"}>
      <div className={isPost ? "blog-wrapper1" : "main-block"}>
        {isPost && imageUrl ? (
          <Image
            src={imageUrl}
            alt={content.title || "Image"}
            width={550}
            height={310}
          />
        ) : isPost ? (
          <p className="image-fallback">Image not available</p>
        ) : null}
        {!isPost && (
          <>
            <SlugHeader heading={content.title} />
          </>
        )}
        <div
          className={
            isPost ? "blogHead-content" : "serviceContent-HeadContainer"
          }
        >
          <div
            className={
              isPost ? "blogHead-content" : "serviceContent-HeadContainer"
            }
          >
            <h1>{content.title}</h1>
            {/* Render body only for posts */}
            {isPost && Array.isArray(content.body) && (
              <>
                <PortableText value={content.body} />
                {content.source?.url && content.source?.text && (
                  <p className="source-link">
                    Source:{" "}
                    <a
                      href={content.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content.source.text}
                    </a>
                  </p>
                )}
                <BlogAuthor />
              </>
            )}
          </div>
          {!isPost && Array.isArray(content.body1) && (
            <>
              <PortableText value={content.body1} />
            </>
          )}
        </div>
        {!isPost && Array.isArray(content.body1) && (
          <>
            <HomeSuccess />
            <HomeTestimonial />
            <HomeAdv />
            <HomeChoosing />
          </>
        )}
        <div
          className={
            isPost ? "blogHead-content" : "serviceContent-HeadContainer"
          }
        >
          {!isPost && Array.isArray(content.body2) && (
            <PortableText value={content.body2} />
          )}
        </div>
      </div>

      {isPost && (
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      )}
    </div>
  );
}

type SlugType = { slug: { current: string } };

export async function generateStaticParams() {
  const postSlugs = await client.fetch<SlugType[]>(
    `*[_type == "post"]{ slug }`
  );
  const serviceSlugs = await client.fetch<SlugType[]>(
    `*[_type == "ServiceCategory"]{ slug }`
  );

  return [...postSlugs, ...serviceSlugs].map((item) => ({
    slug: item.slug.current,
  }));
}
