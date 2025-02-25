const express = require("express");
const passport = require("passport");

const router = express.Router();

// Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

// Facebook Auth
router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.post("/facebook/data-deletion", (req, res) => {
  const { user_id } = req.body; // Facebook sends user_id to identify the user

  // TODO: Delete user data from your database
  console.log(`Deleting data for user: ${user_id}`);

  // Respond with deletion confirmation
  return res.json({
      status: "success",
      message: `User data for ${user_id} has been deleted.`,
  });
});

module.exports = router;
