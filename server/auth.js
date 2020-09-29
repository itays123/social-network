const jwt = require('jsonwebtoken');

const getUser = authHeader => {
  let user = {};
  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    console.log(decoded);
    user.id = decoded.userId;
  } catch (err) {
    user = {};
  } finally {
    return user;
  }
};

const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const decoded = jwt.decode(
        authorization.split(' ')[1],
        process.env.JWT_SECRET
      );
      if (decoded) {
        req.user = { id: decoded.userId };
      } else {
        req.user = {};
      }
    } else {
      req.user = {};
    }
  } catch (err) {
    req.user = {};
  } finally {
    console.log(req.user);
    next();
  }
};

module.exports = authMiddleware;
