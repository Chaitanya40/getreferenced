import { NextRequest, NextResponse } from "next/server";
import { HOMEPAGE_MARKDOWN } from "./app/homepage-markdown";

// Markdown for Agents: when an agent explicitly asks for `text/markdown`, serve
// a markdown rendition of the page. Browsers (which send `text/html`) keep
// getting the normal HTML response untouched.
function prefersMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  // Only switch when markdown is at least as preferred as HTML. A browser
  // sending `text/html,...` won't match because it doesn't list text/markdown.
  return /(^|,)\s*text\/markdown\b/i.test(accept);
}

// Approximate token count (~4 chars/token) so agents can budget context.
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

export function middleware(req: NextRequest) {
  if (prefersMarkdown(req.headers.get("accept"))) {
    return new NextResponse(HOMEPAGE_MARKDOWN, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Markdown-Tokens": String(estimateTokens(HOMEPAGE_MARKDOWN)),
        "Vary": "Accept",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  // Normal HTML response — make caches key on Accept so the markdown variant
  // (above) is never served to a browser or vice versa.
  const res = NextResponse.next();
  res.headers.append("Vary", "Accept");
  return res;
}

// Scope to the homepage only — that's where we have an authored markdown rendition.
export const config = {
  matcher: ["/"],
};
