import { client } from "@/lib/sanity";

export const metadata = {
  title: "Blog",
  description: "Insights on web development, performance, and design."
};

export default async function Blog() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      excerpt,
      slug
    }
  `);

  return (
    <section className="container">
      <h1>Blog</h1>

      {posts.map(post => (
        <article key={post.slug.current}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </section>
  );
}
