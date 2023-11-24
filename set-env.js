const fs = require('fs');
const path = require('path');

const env = process.argv[2] || 'local'; // Default to 'local' if no argument is provided
const envFile = `.env.${env}`;

if (fs.existsSync(path.join(__dirname, envFile))) {
  const envConfig = require('dotenv').parse(fs.readFileSync(envFile));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
  console.log(`Environment set to ${env}`);
} else {
  console.error(`Environment file ${envFile} not found`);
  process.exit(1);
}
