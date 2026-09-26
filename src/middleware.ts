import { geolocation } from "@vercel/functions";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Homepage-only personalization; all landing pages retain their static cache. */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { city, country } = geolocation(request);
  const cookieOptions = { path: "/", sameSite: "lax" as const, maxAge: 60 * 60 * 24, secure: process.env.NODE_ENV === "production" };

  if (country) response.cookies.set("smw_country", country, cookieOptions);
  if (city) response.cookies.set("smw_city", city, cookieOptions);

  return response;
}

export const config = { matcher: "/" };
