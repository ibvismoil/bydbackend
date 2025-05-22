const router = require("express").Router();
const controller = require("../controllers/favoriteController");
const auth = require("../middleware/auth");

router.post("/:id", auth, controller.toggleFavorite);
router.get("/", auth, controller.getFavorites);

module.exports = router;