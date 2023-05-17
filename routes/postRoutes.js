const router = require('express').Router();
const postController = require('../controllers/posts.controller');
const auth = require('../middleware/auth.Middleware');


router.post('/create', auth, postController.createPost);
router.get('/read', auth, postController.readAllPosts);
router.get('/:id', auth, postController.readPost);
router.put('/:id', auth, postController.updatePost);
router.delete('/:id', auth, postController.deletePost);

module.exports = router;