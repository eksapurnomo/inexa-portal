const https = require('https');
const fs = require('fs');

const brands = [
  'openai', 'anthropic', 'googlegemini', 'meta', 'groq', 'deepseek', 'mistral', 'cohere', 'byteplus', 'x', 
  'amazonwebservices', 'googlecloud', 'microsoftazure', 'alibabacloud', 'vastai', 'runpod', 'lambda'
];

async function checkIcon(brand) {
  return new Promise((resolve) => {
    https.get(`https://cdn.simpleicons.org/${brand}/white`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 && data.includes('<svg')) {
          resolve({ brand, svg: data });
        } else {
          resolve({ brand, svg: null });
        }
      });
    }).on('error', () => resolve({ brand, svg: null }));
  });
}

async function run() {
  const results = await Promise.all(brands.map(checkIcon));
  const valid = results.filter(r => r.svg).map(r => r.brand);
  const invalid = results.filter(r => !r.svg).map(r => r.brand);
  console.log("Valid:", valid);
  console.log("Invalid:", invalid);
}
run();
