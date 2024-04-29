const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config({ path: './.env' });

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
    };

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
    }

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    }

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
    }

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    verifyToken,
    };