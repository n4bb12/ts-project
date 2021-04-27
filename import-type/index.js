"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.path = exports.CustomWriteStream = void 0
const fs_1 = require("fs")
class CustomWriteStream extends fs_1.WriteStream {}
exports.CustomWriteStream = CustomWriteStream
exports.path = {
  root: "/",
  dir: "/home/user/dir",
  base: "index.html",
  ext: ".html",
  name: "index",
}
