"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);

router.get("/login", ctrl.hellologin);

module.exports = router; // 외부로 넘겨 주기