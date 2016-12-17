import jwt from 'jsonwebtoken';
import config from 'config';

const secret = config.get('secret');

const authcheck = (req, res, next) => {
    // check header or url parameters or post parameters for token
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
  if (token) {
        // verifies secret and checks exp
    return jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });
      }
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;
      return next();
    });
  }
  // if there is no token
  // return an error
  return res.status(403).send({
    success: false,
    message: 'No token provided.',
  });
};

export default authcheck;
