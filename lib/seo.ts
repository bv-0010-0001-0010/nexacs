import type { Metadata } from "next";
import { company } from "@/lib/content/company";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${company.siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.tradingName,
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.tradingName,
    legalName: company.legalName,
    url: company.siteUrl,
    taxID: company.abn.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.suburb,
      addressRegion: company.address.state,
      postalCode: company.address.postcode,
      addressCountry: "AU",
    },
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.tradingName,
    url: company.siteUrl,
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.tradingName,
    legalName: company.legalName,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.suburb,
      addressRegion: company.address.state,
      postalCode: company.address.postcode,
      addressCountry: "AU",
    },
    areaServed: company.serviceAreas,
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${company.siteUrl}${path}`,
    provider: {
      "@type": "GeneralContractor",
      name: company.tradingName,
    },
    areaServed: company.serviceAreas,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${company.siteUrl}${item.path}`,
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${company.siteUrl}${path}`,
    datePublished,
    author: {
      "@type": "Organization",
      name: company.tradingName,
    },
    publisher: {
      "@type": "Organization",
      name: company.tradingName,
    },
  };
}
