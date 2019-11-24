const proxy = require("http-proxy-middleware");

module.exports = app => {
  const options = {
    target: process.env.REACT_APP_URL,
    changeOrigin: true,
    secure: false
  };
  app.use("/api", proxy(options));
};
