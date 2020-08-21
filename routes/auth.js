const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (password !== process.env.PRIMARY_PASSWORD)
    return res.status(400).json({ message: 'Incorrect password.' });
  jwt.sign({});
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ message: 'User does not exist' });
    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ message: 'Invalid credentials' });
      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then((user) => {
      res.json(user);
    });
});

module.exports = router;
