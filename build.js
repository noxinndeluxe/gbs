const fs = require('fs');

let html = fs.readFileSync('otel-geri-bildirim-sistemi-v5.html', 'utf8');

html = html
  .replace(/%%SUPABASE_URL%%/g, process.env.SUPABASE_URL || '')
  .replace(/%%SUPABASE_ANON_KEY%%/g, process.env.SUPABASE_ANON_KEY || '');

fs.writeFileSync('otel-geri-bildirim-sistemi-v5.html', html);
console.log('✅ Done');
