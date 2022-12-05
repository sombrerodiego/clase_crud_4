const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const userListPath = path.resolve(__dirname, '../data/users.json');
const userList = JSON.parse(fs.readFileSync(userListPath, 'utf8'));

const usersController = {
    getAllUsers: (req, res) => {
        res.render('index', {
            users: userList
        });
    },
    createUser: (req, res) => {
        res.render('users/create');
    },
    storeUser: (req, res) => {
        let user = req.body;

        user.id = uuidv4();

        userList.push(user);

        fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

        res.redirect('/users');
    },
}

module.exports = usersController;