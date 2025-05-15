"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flat_ejs_1 = __importDefault(require("./flat.ejs"));
const form_ejs_1 = __importDefault(require("./form.ejs"));
exports.default = { flat: flat_ejs_1.default, form: form_ejs_1.default };
