import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bogdan.covrig.dev"),
  alternates: {
    canonical: "/",
  },
  title: "index.html / bogdan covrig",
  description:
    "software engineer in the netherlands. into dev tools, privacy, and automation. cool with typescript, react,and node. currently building e-commerce platforms",
  openGraph: {
    title: "index.html / bogdan covrig",
    description:
      "software engineer in the netherlands. into dev tools, privacy, and automation. cool with typescript, react,and node. currently building e-commerce platforms",
    url: "https://bogdan.covrig.dev",
    siteName: "index.html / bogdan covrig",
    images: [
      {
        url: "https://bogdan.covrig.dev/og.png",
        width: 1200,
        height: 630,
        alt: "index.html / bogdan covrig",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "index.html / bogdan covrig",
    description:
      "software engineer in the netherlands. into dev tools, privacy, and automation. cool with typescript, react,and node. currently building e-commerce platforms",
    creator: "@BogdanCovrig",
    images: ["https://bogdan.covrig.dev/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen p-4 pb-20">
      <div className="[&>*]:mb-2 max-w-[600px] text-sm text-balance">
        <h1>bogdan covrig</h1>
        <p className="mt-4">
          software engineer in the netherlands. into dev tools, privacy, and automation. cool with typescript, react,
          and node. currently building e-commerce platforms
        </p>
        <p>usually busy with movies, concerts, and sitting in the park for no apparent reasons. oxford comma enjoyer</p>
        <p className="mt-4">
          <a href="https://read.cv/bogdaaamn" target="_blank" rel="noopener noreferrer">
            read.cv/bogdaaamn
          </a>
        </p>
        <p>
          <a href="https://github.com/bogdaaamn" target="_blank" rel="noopener noreferrer">
            github.com/bogdaaamn
          </a>
        </p>
        <p>
          <a href="https://twitter.com/bogdancovrig" target="_blank" rel="noopener noreferrer">
            twitter.com/bogdancovrig
          </a>
        </p>
      </div>
    </main>
  );
}
