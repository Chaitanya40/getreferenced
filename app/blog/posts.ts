import type { ComponentType } from "react";
import type { PostMeta } from "./types";
import {
  meta as howSearchIsChanging,
  Body as HowSearchIsChangingBody,
} from "./_posts/how-search-is-changing-in-the-ai-era";

export type Post = {
  meta: PostMeta;
  Body: ComponentType;
};

/**
 * Post registry. To add a post: create a file in ./_posts that exports
 * `meta` (PostMeta) and `Body` (a React component), then register it here.
 * Sorting newest-first happens automatically below.
 */
const registry: Post[] = [
  { meta: howSearchIsChanging, Body: HowSearchIsChangingBody },
];

export const posts: Post[] = [...registry].sort((a, b) =>
  a.meta.date < b.meta.date ? 1 : -1
);

export const allPostMeta: PostMeta[] = posts.map((p) => p.meta);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.meta.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  return posts.filter((p) => p.meta.slug !== slug).slice(0, limit);
}
