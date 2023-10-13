import React from "react";
import Head from "next/head";

export default function SEO({
  title = "",
  description = "",
  image = ``,
  keywords = "",
  companyName = "",
  imageSize = "summary_large_image",
  noIndex,
}) {
  const _title = `${title} ${companyName ? `| ${companyName}` : ""} `;

  return (
    <Head>
      <title>{_title}</title>
      <meta name="description" content={description ?? ""} />
      {noIndex && <meta name="robots" content="noindex" />}

      <meta
        name="facebook-domain-verification"
        content="j38avqf7rm0igxhi1uqaw4730c5rrt"
      />
      <meta name="author" content="Movie" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta name="keywords" content={keywords} />

      <meta property="og:type" content={title || "website"} />
      <meta key="ogtitle" property="og:title" content={_title} />
      <meta
        property="og:description"
        content={description ?? ""}
        key="ogdesc"
      />
      <meta property="og:site_name" content="Movie" key="ogsitename" />
      <meta property="og:image" content={image} key="ogimage" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={title}
        href="/rss"
      />
      <meta name="theme-color" content="#3F8CFF" />
      <meta
        name="twitter:card"
        content={imageSize ? "summary_large_image" : "summary_image"}
      />
      <meta
        name="twitter:title"
        content={`${title ? `${title} ` : `Movie`} | ${
          companyName ? `${companyName}` : "Movie"
        }`}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="Movie" />
      <meta name="twitter:creator" content="Movie" />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
