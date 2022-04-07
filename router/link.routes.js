const { Router } = require("express");
const shortId = require("shortid");
const config = require("config");
const auth = require("../middleware/auth.middleware");
const Link = require("../models/Link");
const router = Router();

// "/api/link/generate"
router.post("/generate", auth, async (req, res) => {
  try {
    const baseUrl = config.get("baseUrl");
    const { from } = req.body;
    const code = shortId.generate();

    const existing = await Link.findOne({ from });
    if (existing) {
      return res.json(existing);
    }
    const to = baseUrl + "/t/" + code;
    const link = new Link({
      code,
      to,
      from,
      owner: req.user.userId,
    });
    await link.save();
    res.status(201).json(link);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// "/api/link"
router.get("/", auth, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId });
    res.json(links);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// "/api/link/:id"
router.get("/:id", auth, async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);
    console.log("link", link);

    res.json(link);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
