
async function test() {
  const url = 'https://dev-onsite-chair-massage.pantheonsite.io/wp-json/wp/v2/categories?per_page=100';
  console.log('Fetching categories from:', url);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error('Fetch failed with status:', res.status);
      return;
    }
    const categories = await res.json();
    console.log(`Fetched ${categories.length} categories successfully:\n`);
    categories.forEach(cat => {
      console.log(`ID: ${cat.id} | Slug: "${cat.slug}" | Name: "${cat.name}"`);
    });
  } catch (err) {
    console.error('Error during fetch:', err.message);
  }
}

test();
