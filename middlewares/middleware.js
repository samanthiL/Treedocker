import nextConnect from 'next-connect';
import database from './database';
import session from './session';
import passport from '../lib/passport';

const middleware = nextConnect();

function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  return next();
}

middleware.use(cors).use(database).use(session).use(passport.initialize()).use(passport.session());

export default middleware;
