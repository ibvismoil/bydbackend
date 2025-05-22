const router = require("express").Router();
const controller = require("../controllers/productController");
const auth = require("../middleware/auth");

router.get("/", controller.getAll);
router.get("/category/:id", controller.getByCategory);
router.post("/", auth, controller.create);
router.put("/:id", auth, controller.update);
router.delete("/:id", auth, controller.delete);

module.exports = router;