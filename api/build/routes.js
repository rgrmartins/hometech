"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/', function (req, res) {
    res.send({ title: "Routes deu certo!" });
});
exports.default = routes;
//# sourceMappingURL=routes.js.map