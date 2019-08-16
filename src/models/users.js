const mongoose = require('mongoose');

    const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            requird: true,
            minlength: 2
        },
        
        email: {
            type: String,
            minlength: 8,
            maxlength: 65,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        // confirmPassword: {
        //     type: String,
        //     required: true
        // },
        age: {
            type: Number
        }
    });

const User = mongoose.model('user', UserSchema);

module.exports = User;