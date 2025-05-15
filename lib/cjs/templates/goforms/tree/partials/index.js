"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const edit_ejs_1 = __importDefault(require("./edit.ejs"));
const view_ejs_1 = __importDefault(require("./view.ejs"));
exports.default = {
    treeView: {
        form: view_ejs_1.default,
    },
    treeEdit: {
        form: edit_ejs_1.default
    }
};
