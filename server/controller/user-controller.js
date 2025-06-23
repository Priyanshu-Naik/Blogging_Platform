import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../model/user.js';
import Token from '../model/token.js';

dotenv.config(); 

export const user_controller = async (request, response) => {

  try {
    // const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(request.body.password, 10);
    // console.log("Signup request body:", request.body);  // Check if request reaches here
    const user = {username : request.body.username, name : request.body.name, password : hashPassword};
    const newuser = new User(user);
    await newuser.save();

    return response.status(200).json({ msg : 'signup successful'});
  } catch (error) {
    return response.status(500).json({ msg : 'Error while signing up'});
  }
  
}

export const login_User = async (request, response) => {
  // console.log("Login request received", request.body);
  let user = await User.findOne({ username: request.body.username});
  if (!user){
    return response.status(400).json({msg: 'Username does not match'})
  }

  try {
    let match = await bcrypt.compare(request.body.password, user.password);
    if(match){
      const accesstoken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});
      const refreshtoken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

      const newToken = new Token({ token: refreshtoken});
      await newToken.save();

      return response.status(200).json({ accesstoken: accesstoken, refreshtoken: refreshtoken, name: user.name, username: user.username})
    }else{
      return response.status(400).json({ msg: 'Password does not match'})
    }
  } catch (error) {
    return response.status(500).json({ msg: 'Error while login in user'})
  }
}

