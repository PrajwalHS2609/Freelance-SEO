import { client } from "@/sanity/client";
import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./BlogAuthor.css";

const AUTHOR_QUERY = `*[_type == "author"] {
  _id,
  name,
  designation,
 slug,
"bio": bio[]{..., asset->},
  mainImage{
      ...,
      asset->{
        _id,
        url
      }
    }

}`;

export default async function BlogAuthor() {
  const author = await client.fetch<SanityDocument[]>(AUTHOR_QUERY, {});

  return (
    <div className="blogAuthorContainer">
      {author.map((author) => (
        <div key={author._id}>
          <div className="blogAuthorContent">
            <div className="blogAuthorImg">
              {author.mainImage?.asset?.url && (
                <Image
                  src={author.mainImage.asset.url}
                  alt={author.name || "Author image"}
                  width={500}
                  height={500}
                />
              )}
            </div>
            <div className="blogAuthorName">
              <h4>{author.designation}</h4>
              <h3>{author.name}</h3>
            </div>
          </div>
          <div className="blogAuthorContent">
            <p>
              {" "}
              <PortableText value={author.bio} />
            </p>
          </div>
          <div className="blogAuthorSocial">
            <a href="https://www.instagram.com/">
              <FaInstagram className="authorSocialIcon" />
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedin className="authorSocialIcon" />
            </a>
            <a href="https://x.com/">
              <FaXTwitter className="authorSocialIcon" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
