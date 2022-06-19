import express from "express";
import checkEditAccess from "./checkEditAccess";
import createNewEntry from "./createNewEntry";
import getEntry from "./getEntry";
import updateEntry from "./updateEntry";

const router = express.Router();

router
  .route("/entry/:link?")
  .get(getEntry)
  .post(createNewEntry)
  .patch(updateEntry);

router.route("/edit-access/:link/:password?").get(checkEditAccess);

export default router;
