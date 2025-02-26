import passport from 'passport';
import mongoose from 'mongoose';
import { Strategy } from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../config/keys.js';

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user=>{
        done(null, user);
    });
});

passport.use(
        new Strategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, 
        async (accessToken, refreshToken, profile, done) => {
            let existingUser = await User.findOne({ googleId: profile.id })
                
            if (!existingUser){
                new User({ googleId: profile.id })
                    .save()
                    .then(user => done(null, user));
            } else {
                done(null, existingUser);
            }
        }
    )
);

export { passport };