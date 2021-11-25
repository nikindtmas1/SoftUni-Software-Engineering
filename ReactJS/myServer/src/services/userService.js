const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const register = ({username, password}) => {
    User.create({username, password})
};

const login = async (username, password) => {
    let user = await User.findOne({username, password});
    

    if(user){
        let accessToken = jwt.sign({ _id: user._id, username: user.username }, 'MOGYSHTSECRET', { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, 'MOGYSHTSECRET2', { expiresIn: '7d' });

        user.refreshToken = refreshToken;

        await user.save();

        return { user, accessToken, refreshToken };
    }else{
        throw new Error('No such user');
    }

};

const refresh = async (refreshToken) => {
    let { _id } = jwt.verify(refreshToken, 'MOGYSHTSECRET2');

    let user = await User.find({ _id, refreshToken });

    if (user) {
        let accessToken = jwt.sign({ _id: user._id, username: user.username }, 'MOGYSHTSECRET', { expiresIn: '1m' });
        let refreshToken = jwt.sign({ _id: user._id }, 'MOGYSHTSECRET2', { expiresIn: '7d' });

        return { accessToken, refreshToken };
    } else {
        return null;
    }
}


module.exports = {
    register,
    login,
    refresh
}