let gethomePage = (req, res) => {
  //logic
  return res.render("home.ejs");
};

module.exports = {
  gethomePage,
};
