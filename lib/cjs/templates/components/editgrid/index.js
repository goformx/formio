"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const row_ejs_1 = __importDefault(require("./row.ejs"));
const header_ejs_1 = __importDefault(require("./header.ejs"));
exports.default = { row: row_ejs_1.default, header: header_ejs_1.default };
