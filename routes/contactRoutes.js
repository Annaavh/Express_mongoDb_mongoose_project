const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middlewares/validateTokenHandler");

//access lini private , erb accessToken ka ayd jamank karoxana mtni ays route nery
router.use(validateToken)
//because this two routes are the same we can simplify and write like this
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
