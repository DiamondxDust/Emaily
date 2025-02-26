import env from 'dotenv';
env.config();

// if (process.env.NODE_ENV === 'production'){
//     const GOOGLE_CLIENT_ID = process.env.PROD_GOOGLE_CLIENT_ID;
//     const GOOGLE_CLIENT_SECRET = process.env.PROD_GOOGLE_CLIENT_SECRET;
//     const MONGO_URI = 'mongodb+srv://bradpythonemail22:Yd6LZ7pFgqLziO56@emaily.w29v4.mongodb.net/emailydb?retryWrites=true&w=majority&appName=Emaily';
//     const COOKIE_KEY = 'sfdsjlgkhashgoehoupirhklfgvjdf';
// } else {
//     const GOOGLE_CLIENT_ID = '101406303720-uk7cb8rfvbq48u8i5lgr0hj5mobb156o.apps.googleusercontent.com';
//     const GOOGLE_CLIENT_SECRET = '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';
//     const MONGO_URI = 'mongodb+srv://bradpythonemail22:ufjFfcRFyr94t86R@cluster0.hb9pq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//     const COOKIE_KEY = 'fdgsdfgsfsaghfsdgsdfhrtsadg';
// }

const GOOGLE_CLIENT_ID = process.env.DEV_GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.DEV_GOOGLE_CLIENT_SECRET;
const MONGO_URI = process.env.DEV_MONGO_URI;
const COOKIE_KEY = process.env.DEV_COOKIE_KEY;

export {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, MONGO_URI, COOKIE_KEY};