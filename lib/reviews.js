import {readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getReview(slug){
    const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
    const { content,data:{title,date,image} } = matter(text);
  
    const body = marked(content);
    return { slug,title, date, image, body };
  }


export async function getReviews(){
    const files = await readdir("./content/reviews");
    const slugs = files.map(file => file.replace(/\.md$/, ""))
   const reviewPromises = slugs.map(slug => getReview(slug))

   const reviews = await Promise.all(reviewPromises);
   const sortedReviews = reviews.sort((a,b) => new Date(b.date) - new Date(a.date));
    return sortedReviews;
    
}

export async function getSlugs(){
    const files = await readdir("./content/reviews");
    const slugs = files.map(file => file.replace(/\.md$/, ""))
    return slugs;   
}

export async function getFeaturedReview(){
    const reviews = await getReviews();
  
   
    const featuredReview = reviews[0];
    return featuredReview;
}