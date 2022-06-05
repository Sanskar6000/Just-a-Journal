// Controller will contain all the Route Implementation Code
//registerUser is an Object registerUser - key, function - Value
const Users = require('../models/userModel.js');
// using bcrypt for hashing password
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      //   The findOne() function is used to find one document according to the condition.
      const user = await Users.findOne({ email: email });
      //   if User already exists in the collection
      if (user)
        return res.status(400).json({ msg: 'The email already exists' });

      const passwordHash = await bcrypt.hash(password, 10);
      //   creating New user and storing in collection
      const newUser = new Users({
        username: username,
        email: email,
        password: passwordHash,
      });
      await newUser.save();
      res.json({ msg: 'Sign up success' });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      // Authenticate a User
      const { email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: 'User does not exists.' });
      //   Comparing Password from body and collection
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Incorrect Password' });

      //   Authorization using JWT
      const payload = { id: user._id, name: user.username };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: '1d',
      });
      res.json({ token });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  //   Send True or false (Is Token Verified?)
  verifiedToken: (req, res) => {
    try {
      // token is contained in Header
      const token = req.header('Authorization');
      if (!token) return res.send(false);

      jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
        if (err) return res.send(false);

        const user = await Users.findById(verified.id);
        if (!user) return res.send(false);

        return res.send(true);
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = userController;
