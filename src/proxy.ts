import { geolocation } from "@vercel/functions";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { site } from "@/lib/site";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname === `www.${site.host}`) {
    const destination = request.nextUrl.clone();
    destination.hostname = site.host;
    return NextResponse.redirect(destination, 301);
  }

  if (request.nextUrl.pathname !== "/") return NextResponse.next();

  const response = NextResponse.next();
  const { city, country } = geolocation(request);
  const cookieOptions = { path: "/", sameSite: "lax" as const, maxAge: 60 * 60 * 24, secure: process.env.NODE_ENV === "production" };
  if (country) response.cookies.set("smw_country", country, cookieOptions);
  if (city) response.cookies.set("smw_city", city, cookieOptions);
  return response;
}

export const config = { matcher: "/:path*" };
