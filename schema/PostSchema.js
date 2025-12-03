const mongoose = require('mongoose');
const slugify = require('slugify');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String, // store path like '/uploads/images/filename.jpg'
    },
  },
  { timestamps: true }
);

// Pre-save hook to generate unique slug
PostSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('title')) return next;

    const baseSlug = slugify(this.title, { lower: true, strict: true });
    let uniqueSlug = baseSlug;
    let count = 1;

    // Check uniqueness in DB
    while (await mongoose.models.Post.findOne({ slug: uniqueSlug })) {
      uniqueSlug = `${baseSlug}-${count}`;
      count++;
    }

    this.slug = uniqueSlug;
    next;
  } catch (err) {
    next;
  }
});

module.exports = PostSchema;
