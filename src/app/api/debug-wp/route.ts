import { NextResponse } from 'next/server';

export async function GET() {
  const WP_API_URL = process.env.WORDPRESS_API_URL || 'https://dev-onsite-chair-massage.pantheonsite.io/wp-json/wp/v2';
  const cb = Date.now(); // Always fresh for debug
  const url = `${WP_API_URL}/posts?_embed&per_page=100&_cb=${cb}`;
  
  try {
    const res = await fetch(url, { next: { revalidate: 0 } });
    if (!res.ok) {
      return NextResponse.json({ error: `Fetch failed with status: ${res.status}` }, { status: 500 });
    }
    const posts = await res.json();
    
    const debugData = posts.map((post: any) => {
      const terms: any[] = [];
      if (post._embedded && post._embedded['wp:term']) {
        post._embedded['wp:term'].forEach((termArray: any[]) => {
          if (Array.isArray(termArray)) {
            termArray.forEach((term: any) => {
              terms.push({
                name: term.name,
                slug: term.slug,
                taxonomy: term.taxonomy
              });
            });
          }
        });
      }
      
      return {
        id: post.id,
        title: post.title?.rendered,
        categories: post.categories,
        tags: post.tags,
        meta: post.meta,
        terms: terms
      };
    });
    
    return NextResponse.json({
      wordpress_api_url: WP_API_URL,
      posts_count: posts.length,
      posts: debugData
    });
  } catch (err: any) {
    return NextResponse.json({
      wordpress_api_url: WP_API_URL,
      error: err.message,
      stack: err.stack
    }, { status: 500 });
  }
}
