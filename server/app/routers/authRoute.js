const express = require("express");
const router = express.Router();

/**
 * @fileoverview Router for authentication routes.
 * @module routers/authRoute
 */
const {
  login,
  signup,
  logout,
  forgotPassword,
  resetPassword,
  getCourses,
  getInformations,
  getNews,
  getProjects,
} = require("../controllers/authControllers");

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/courses", getCourses);
router.get("/informations", getInformations);
router.get("/news", getNews);
router.get("/projects", getProjects);
router.get("/", (req, res) => {
  res.send("Welcome to the API");
});
module.exports = router;
