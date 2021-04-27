"use strict"
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, "__esModule", { value: true })
exports.Search = void 0
const react_1 = __importDefault(require("react"))
const Search = () =>
  react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement("label", null, "Search anything:"),
    react_1.default.createElement("input", null),
  )
exports.Search = Search
