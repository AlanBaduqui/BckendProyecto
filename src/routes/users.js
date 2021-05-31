const { Router } = require("express");
const router = Router();

const User = require("../models/user");

const jwt = require("jsonwebtoken");


router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();

  const token = jwt.sign({ _id: newUser._id }, "secretkey");
  res.status(200).json({ token });
  console.log(newUser);
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email});
  if (!user) return res.status(401).send('The email doen\' exists');
  if (user.password !== password) return res.status(401).send('Wrong Password');

  const token = jwt.sign({_id: user._id}, 'secretkey');

  return res.status(200).json({token});
});;


module.exports = router;
