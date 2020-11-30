const express = require("express");
const { requireSignin, adminMiddleware } = require("../../middleware");
const { updateOrder } = require("../../controller/admin/order.admin");
const router = express.Router();

router.post(`/order/update`, requireSignin, adminMiddleware, updateOrder);

module.exports = router;
