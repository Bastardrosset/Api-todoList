const express = require('express');

const router = express.Router();

const authCtrl = require('../controllers/authController');
const userCtrl = require('../controllers/users.controller');


// Route création de compte
router.post('/register', authCtrl.signUp);
// Route identification
router.post('/login', authCtrl.signIn);
// Route déconnection
router.get('/logout', authCtrl.logout);

router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.userInfo);
router.delete('/:id', userCtrl.deleteUser);


module.exports = router;