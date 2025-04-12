// src/app/components/SEO/CanonicalTag.tsx
"use client";

export default function CanonicalTag({ path }: { path: string }) {
  const baseUrl = "https://kinetic-ui.vercel.app";
  const canonicalUrl = `${baseUrl}${path}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
