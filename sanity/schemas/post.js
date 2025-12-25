const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
    { name: "publishedAt", title: "Published At", type: "datetime" }
  ]
};

export default postSchema;
