import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard/")) {
    const token  = request.cookies.get("socialMate.token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }
}