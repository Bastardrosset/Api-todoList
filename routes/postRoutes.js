const router = require('express').Router();
const postController = require('../controllers/posts.controller');
const auth = require('../middleware/auth.Middleware');


router.post('/', auth, postController.createPost);
router.get('/', auth, postController.readPost);
router.delete('/:id', auth, postController.deletePost);
router.put('/:id', auth, postController.updatePost);

module.exports = router;