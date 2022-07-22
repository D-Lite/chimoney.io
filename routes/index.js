const router = require("express").Router();

const authRoutes = require("./auth-routes");
const categoriesRoutes = require("./categories-routes");
const storiesRoutes = require("./stories-routes");
 
router.use("/auth", authRoutes);
router.use("/api", categoriesRoutes);
router.use("/api", storiesRoutes);
 
module.exports = router;