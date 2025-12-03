const Post = require('../models/Post.js');
const pino = require('pino');
const logger = pino();

exports.getHomePage = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 12;
    const skip = (page - 1) * limit;

    const totalCount = await Post.countDocuments();
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(totalCount / limit);

    res.render('index', { posts, currentPage: page, totalPages });
  } catch (err) {
    console.error('Error loading home page:', err);
    res.render('index', { posts: [], currentPage: 1, totalPages: 1 });
  }
};


exports.getCreateBlogForm = async (req, res) => {
    res.render('create-blog');
};

exports.getBlogBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;

        const post = Post.findOne({ slug });
        if (!post) return res.status(404).send('Post not found');
        res.render('view-blog', { post });
    } catch (err) {
        logger.logger('Error loading blog:', error);
        res.status(500).send('Failed to load blog post');
    }
}

exports.createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).render('create-blog', {
                error: 'Title and content are required.'
            });
        }

        let coverImage = '';
        if (req.file) {
            coverImage = `/uploads/images/${req.file.filename}`;
        }

        const post = new Post({
            title,
            content,
            coverImage,
        });

        await post.save(); // Slug generated in pre-save hook

        res.redirect(`/blog/${post.slug}`);

    } catch (err) {
        logger.error(`Error creating blog: ${err}`);
        res.status(500).render('create-blog', {
            error: 'Failed to create blog post.'
        });
    }
}