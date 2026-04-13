import { getSortedPostsData } from '@/app/lib/mdx'
import { BlogClient } from '@/app/components/BlogClient'

export default async function Blog() {
  const posts = await getSortedPostsData()

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort()

  return <BlogClient posts={posts} allTags={allTags} />
}
