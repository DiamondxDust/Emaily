import env from 'dotenv';
env.config();

const GOOGLE_CLIENT_ID = process.env.DEV_GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.DEV_GOOGLE_CLIENT_SECRET;
const MONGO_URI = process.env.DEV_MONGO_URI;
const COOKIE_KEY = process.env.DEV_COOKIE_KEY;


export {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, MONGO_URI, COOKIE_KEY};