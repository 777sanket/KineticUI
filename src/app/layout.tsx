// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Kinetic-Ui",
//   icons: {
//     icon: "/3DBox.png",
//   },
//   description:
//     "A collection of animated React components for your next project",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Kinetic UI",
    default: "Kinetic UI - Modern Animated Components for Next.js and React",
  },
  icons: {
    icon: "/3DBox.png",
  },
  description:
    "A library of beautiful, animated UI components for Next.js and React applications with ready-to-use examples.",
  keywords: [
    "React",
    "Next.js",
    "UI components",
    "Animation",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Kinetic UI Team",
  publisher: "Kinetic UI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Kinetic-ui.vercel.app/",
    title: "Kinetic UI - Modern Animated Components for Next.js and React",
    description:
      "A library of beautiful, animated UI components for Next.js and React applications with ready-to-use examples.",
    siteName: "Kinetic UI",
    images: [
      {
        url: "https://Kinetic-ui.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kinetic UI Component Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic UI - Modern Animated Components",
    description:
      "A library of beautiful, animated UI components for Next.js and React applications with ready-to-use examples.",
    images: ["https://Kinetic-ui.vercel.app/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  manifest: "https://Kinetic-ui.vercel.app/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
