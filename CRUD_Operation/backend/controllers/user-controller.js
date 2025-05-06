const Home = async (req, res) => {
  res.send("hello world");
};
const About = async (req, res) => {
  res.send("hello About");
};

module.exports = { Home, About };
