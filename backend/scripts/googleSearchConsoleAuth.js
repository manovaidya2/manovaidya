import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const scope = 'https://www.googleapis.com/auth/webmasters.readonly';
const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID || process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET || process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET;
const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI || 'http://localhost';
const code = process.argv[2];

if (!clientId || !clientSecret) {
  console.error('Missing GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET in backend .env');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

if (!code) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [scope],
  });

  console.log('Open this URL, allow access, then copy the code from the redirected localhost URL:');
  console.log(authUrl);
  console.log('\nThen run: node scripts/googleSearchConsoleAuth.js YOUR_CODE_HERE');
  process.exit(0);
}

const { tokens } = await oauth2Client.getToken(code);
if (!tokens.refresh_token) {
  console.log('No refresh_token returned. Re-run without code and make sure consent screen is accepted.');
  process.exit(1);
}

console.log('Add this to backend .env:');
console.log(`GOOGLE_OAUTH_REFRESH_TOKEN=${tokens.refresh_token}`);
