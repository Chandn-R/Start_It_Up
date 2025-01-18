import { defineQuery } from "next-sanity";

export const STARTUP_QUERRY = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
  _id,
    title,
    slug,
    _createdAt,
    author->{
      id,name,image,bio
    },
    views,
    description,
    category,
    image 
}`)