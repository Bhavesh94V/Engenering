import { google } from "googleapis";

// ⚙️ Your Google Cloud credentials
const CLIENT_ID = "84922041336-hnfo74sfmp8cvshss83abuk9o6a18v8o.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:5000/oauth2callback";

// Initialize OAuth2 client
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Gmail API scope
const SCOPES = ["https://mail.google.com/"];

// Step 1: Generate authorization URL
const url = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
});

console.log("✅ Authorize this app by visiting this URL:\n", url);

// Step 2: After visiting the URL, paste your code here ↓
const code = "4/0Ab32j92rWwh9U4GvbC4oafr0IJNEcIhcVZvLhv0KvSHAO1CMR0pk4pUqtz5gF8M5q3e3qA";

// Step 3: Exchange code for tokens
async function getTokens() {
  try {
    const { tokens } = await oAuth2Client.getToken(code);
    console.log("\n🎉 Tokens received successfully!");
    console.log("Access Token:", tokens.access_token);
    console.log("Refresh Token:", tokens.refresh_token);
  } catch (error) {
    console.error("❌ Error while getting tokens:", error);
  }
}

getTokens();
