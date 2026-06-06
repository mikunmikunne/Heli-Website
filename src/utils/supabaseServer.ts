import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Dùng chung cho Server API Handlers
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getPublishedArticles() {
  const { data, error } = await supabase
    .from('seo_articles')
    .select('id, keyword, title, slug, content, published_at, created_at, image_url, category')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
  return data || [];
}

export async function getArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from('seo_articles')
    .select('id, keyword, title, slug, content, published_at, created_at, image_url, category')
    .eq('status', 'published')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }
  return data || null;
}
