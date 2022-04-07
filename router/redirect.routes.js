const { Router } = require("express");
const { redirect } = require("express/lib/response");
const Link = require("../models/Link");
const router = Router();

// /api/t/:code
router.get("/:code", async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.code });
    link.clicks = link.clicks + 1;
    await link.save();
    res.redirect(link.from);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
