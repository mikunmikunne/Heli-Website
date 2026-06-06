const fs = require('fs');

const dbPath = 'C:\\Users\\Dell\\.n8n\\database.sqlite';
try {
  console.log('Reading database file directly...');
  const buffer = fs.readFileSync(dbPath);
  console.log('Read', buffer.length, 'bytes.');
  
  // Convert buffer to string, filtering out non-ascii
  let ascii = '';
  for (let i = 0; i < buffer.length; i++) {
    const char = buffer[i];
    if (char >= 32 && char <= 126) {
      ascii += String.fromCharCode(char);
    } else if (char === 10 || char === 13) {
      ascii += '\n';
    }
  }
  
  console.log('Searching for any wp-json links...');
  const wpJsonUrls = ascii.match(/https?:\/\/[a-zA-Z0-9.-]+(?::\d+)?\/[^\s"']*wp-json[^\s"']*/g);
  if (wpJsonUrls) {
    const uniqueUrls = [...new Set(wpJsonUrls)];
    const otherDomains = uniqueUrls.filter(url => !url.includes('massage-cms.local') && !url.includes('localhost'));
    console.log('Found other wp-json URLs (not local):', otherDomains);
  } else {
    console.log('No wp-json URLs found.');
  }
  
} catch (err) {
  console.error('Failed to read file:', err.message);
}

