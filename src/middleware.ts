import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, request: NextRequest) => {
  const url = request.nextUrl;

  if (url.pathname === "/" || url.pathname === "/site") {
    return NextResponse.rewrite(new URL('/site', request.url));
  }

  if (url.pathname === "/app" || url.pathname === "/app/guides") {
    return NextResponse.rewrite(new URL('/app', request.url));
  }
});

export const config = {
  matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)", "/app/:path*"],
};