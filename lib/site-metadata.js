const heroImage = {
  url: "https://www.un-make.com/images/unmake-studio-planner.png",
  width: 1254,
  height: 1254,
  alt: "A woman with curly hair and round glasses arranging planning cards at her studio table.",
};

export function socialMetadata(title, description) {
  return {
    openGraph: {
      type: "website",
      siteName: "Unmake Studio",
      title,
      description,
      images: [heroImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [heroImage.url],
    },
  };
}
