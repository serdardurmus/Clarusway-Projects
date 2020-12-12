  // TODO1: Validate the fields
  // TODO2: check already registered (email)
  // TODO3: crpyt password (bcryptjs)
  // TODO4: save the user to DB  // done

  const User = require("../models/UserModel");
  const bcrypt = require("bcryptjs");
  const { validationResult } = require("express-validator");
  var jwt = require("jsonwebtoken");
  
  exports.authRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    const validationErr = validationResult(req);
  
    if (validationErr?.errors?.length > 0) {
      return res.status(400).json({ errors: validationErr.array() });
    }
  
    const userData = await User.findOne({ email });
    if (userData) {
      return res
        .status(400)
        .json({ errors: [{ message: "User already exists!!" }] });
    }
  
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
  
    const user = new User({
      firstName,
      lastName,
      email,
      password: newPassword,
    });
    await user.save();
  
    //TODO: Error handling for saving
    res.send("Register Completed.");
  };
  
  exports.authLogin = async (req, res) => {
    const { email, password } = req.body;
  
    // Field Validation
    const validationErr = validationResult(req);
    if (validationErr?.errors?.length > 0) {
      return res.status(400).json({ errors: validationErr.array() });
    }
  
    // User exist check
    const userData = await User.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ errors: [{ message: "User doesn't exists!!" }] });
    }
  
    // Password compare
    const isPasswordMatch = await bcrypt.compare(password, userData.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ errors: [{ message: "Invalid credentials" }] });
    }
  
    // JSON WEB TOKEN - JWT
  
    jwt.sign(
      { userData },
      process.env.JWT_SECRET_KEY,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) {
          return res.status(400).json({ errors: [{ message: "Unknown Error" }] });
        }
        res.send(token);
      }
    );
  };