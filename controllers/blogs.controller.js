const blogs = require("../data/blogs");

exports.getHome = async (req, res) => {
  res.render("home");
};

exports.getBlogs = async (req, res) => {
  res.render("blogHome", { blogs: blogs.blogs });
};

exports.getBlogPost = async (req, res) => {
  myBlog = blogs.blogs.filter((e) => {
    return e.slug === req.params.slug;
  });
  res.render("blogPage", {
    title: myBlog[0].title,
    content: myBlog[0].content,
  });
};
