const http = require('http');

http.get('http://localhost:3000/health', (res) => {
  if (res.statusCode === 200) {
    console.log('TEST PASSED: API health check OK');
    process.exit(0);
  } else {
    console.error('TEST FAILED: API returned status ' + res.statusCode);
    process.exit(1);
  }
}).on('error', (err) => {
  console.error('TEST FAILED:', err.message);
  process.exit(1);
});
