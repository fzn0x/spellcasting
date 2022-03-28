"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
function default_1(key, defaultValue = (0, dayjs_1.default)().format("YYYY-MM-DD")) {
    return this.payload?.[key]
        ? (0, dayjs_1.default)(this.payload[key]).format("YYYY-MM-DD") || defaultValue
        : defaultValue;
}
exports.default = default_1;
//# sourceMappingURL=toDateString.js.map