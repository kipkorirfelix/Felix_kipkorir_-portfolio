/**
 * Metadatas
 */

import type { Metadata } from "next";

const metadataInfos: Metadata = {
  title: "Felix Kipkorir Portfolio | Software Engineer",
  description:
    "Portfolio of Felix Kipkorir, software engineer focused on software development, web systems, networking, and cybersecurity support.",
  keywords: [
    "Felix Kipkorir",
    "software engineer",
    "portfolio",
    "Next.js",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "MySQL",
    "cybersecurity",
  ],
  authors: [{ name: "Felix Kipkorir", url: "https://github.com/kipkorirfelix" }],
  creator: "Felix Kipkorir",
  publisher: "Felix Kipkorir",
  openGraph: {
    title: "Felix Kipkorir Portfolio | Software Engineer",
    description:
      "Discover the portfolio of Felix Kipkorir: secure web systems, software engineering projects, and practical technical experience.",
    url: "https://github.com/kipkorirfelix",
    siteName: "Felix Kipkorir Portfolio",
    images: [
      {
        url: "https://raw.githubusercontent.com/Raseraa0/raseraa0.github.io/main/public/img/preview.png",
        width: 1856,
        height: 928,
        alt: "Preview of Felix Kipkorir's developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "favicon.png",
  },
  metadataBase: new URL("https://github.com/kipkorirfelix"),
};

export default metadataInfos;
