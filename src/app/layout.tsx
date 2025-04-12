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
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinetic UI | Animated Component Library for React",
  icons: {
    icon: "/3DBox.png",
  },
  description:
    "A collection of beautiful, ready-to-use animated UI components for modern React and Next.js applications. Build engaging interfaces with minimal effort.",
  keywords:
    "react components, UI library, animation, next.js, tailwind, typescript",
  openGraph: {
    title: "Kinetic UI - Animated React Components",

    description:
      "Copy-paste ready animated UI components for modern web applications",
    url: "https://kinetic-ui.vercel.app",
    siteName: "Kinetic UI",
    images: [
      {
        url: "/images/kinetic-ui-preview.png",
        width: 1200,
        height: 630,
        alt: "Kinetic UI Components Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic UI - Animated React Components",
    description:
      "Elevate your web applications with stunning animated components",
    images: ["/3DBox.png"],
  },
  metadataBase: new URL("https://kinetic-ui.vercel.app"),
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
