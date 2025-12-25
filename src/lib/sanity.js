import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "hr00zsfp",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
});
