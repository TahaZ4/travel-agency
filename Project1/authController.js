const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const ( db ) =  require ('../db.js');
const signtoken = ('id,role') 

const login = (req, res) => {
    if (!email || !password) {
        return res.status(400).send('Please provide email and password.');
    }
// Compare the hashed password
bcrypt.compare(password, row.PASSWORD, (err, isMatch)) => {
    if (err) {
        console.error(err);
        return res.status(500).send('Error verifying password.');
    }
    //Generate JWT token for successful login
    const token = signtoken(row.ID, row.ROLE);

    return res.status(200).json({
        message: 'Login successful',
        user: {
            id: row.ID,
            name:
