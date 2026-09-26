"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getTierOneLocationByCity } from "@/lib/locations";

function cookie(name: string) {
  return document.cookie.split("; ").find((entry) => entry.startsWith(`${name}=`))?.split("=")[1];
}

export default function GeoServiceBanner() {
  const [location, setLocation] = useState<{ city?: string; country?: string }>({});

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLocation({ city: decodeURIComponent(cookie("smw_city") ?? ""), country: cookie("smw_country") });
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (location.country && location.country !== "IN") return null;

  const tierOne = getTierOneLocationByCity(location.city);
  if (tierOne) {
    return <Link href={`/locations/${tierOne.slug}`} className="text-sm font-semibold text-navy underline underline-offset-4">Serving {tierOne.city}</Link>;
  }

  return <Link href="/pan-india" className="text-sm font-semibold text-navy underline underline-offset-4">Serving customers across India</Link>;
}
