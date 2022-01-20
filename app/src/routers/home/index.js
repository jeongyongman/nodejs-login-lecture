"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.hellologin);
router.post("/login", ctrl.process.login);

module.exports = router; // 외부로 넘겨 주기