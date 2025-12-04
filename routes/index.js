var express = require('express');
var router = express.Router();

const upload = require('../middlewares/upload.middleware');

const {
  getHomePage,
  getCreateBlogForm,
  createBlog,
  getBlogBySlug,
  deleteBlog
} = require('../controllers/blog.controller');

router.get('/', getHomePage);

router.get('/blog', getCreateBlogForm);

router.post('/blog', upload.single('coverImage'), createBlog);

router.get('/blog/:slug', getBlogBySlug);

router.delete('/blog/:id', deleteBlog);

module.exports = router;
