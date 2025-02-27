import express from 'express'
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import './models/user.js';
import './services/passport.js';
import { authRoutes } from './routes/authRoutes.js';
import { MONGO_URI, COOKIE_KEY } from './config/keys.js';

mongoose.connect(MONGO_URI);

const app = express();
const port = process.env.port || 5000;

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [COOKIE_KEY]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.get('/', (req, res) => {
    res.send("Hey");
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})