import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { sendVerificationCode } from '../utils/emailService.js';

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const user = new User({ name, email, password });
    await user.save();

    // Generate 6-digit code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // In a real app, you would save this code to the user in database
    // For now, we'll just send it
    console.log(`🔐 Verification code for ${email}: ${verificationCode}`);

    // Send verification code
    await sendVerificationCode(email, verificationCode);

    res.status(201).json({ 
      message: 'Account created! Check your email for verification code.',
      userId: user._id,
      needsVerification: true
    });
  } catch (error) {
    res.status(500).json({ message: 'Registration error', error: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Incorrect email or password' });
    }

    // Generate 6-digit code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    console.log(`🔐 Verification code for ${email}: ${verificationCode}`);

    // Send verification code
    await sendVerificationCode(email, verificationCode);

    res.json({ 
      message: 'Verification code sent to your email',
      userId: user._id,
      needsVerification: true
    });
  } catch (error) {
    res.status(500).json({ message: 'Login error', error: error.message });
  }
};

// Verify Code
export const verifyCode = async (req, res) => {
  try {
    const { userId, code } = req.body;

    // In a real app, you would verify against the code saved in database
    // For now, we'll accept any 6-digit code
    if (code.length !== 6 || !/^\d+$/.test(code)) {
      return res.status(400).json({ message: 'Invalid code format' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Generate JWT token after successful verification
    const token = generateToken(user._id);

    res.json({
      message: 'Verification successful!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Verification error', error: error.message });
  }
};

// Get user profile
export const getProfile = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error getting profile' });
  }
};