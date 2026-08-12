const express = require("express");

const { getVault, postVault, putVault, deleteVault } = require("../controllers/vaultController");

const router = express.Router();

router.get("/", getVault);

router.post("/", postVault)

router.put("/:id", putVault)

router.delete("/:id", deleteVault);

module.exports = router;