"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toBigInt_js_1 = __importDefault(require("./toBigInt.js"));
const toBigIntJson_js_1 = __importDefault(require("./toBigIntJson.js"));
const toBoolean_js_1 = __importDefault(require("./toBoolean.js"));
const toDateFormat_js_1 = __importDefault(require("./toDateFormat.js"));
const toDateString_js_1 = __importDefault(require("./toDateString.js"));
const toFloat_js_1 = __importDefault(require("./toFloat.js"));
const toInteger_js_1 = __importDefault(require("./toInteger.js"));
const toJson_js_1 = __importDefault(require("./toJson.js"));
const toJsonString_js_1 = __importDefault(require("./toJsonString.js"));
const toNull_js_1 = __importDefault(require("./toNull.js"));
const toNumber_js_1 = __importDefault(require("./toNumber.js"));
const toString_js_1 = __importDefault(require("./toString.js"));
const toTime_js_1 = __importDefault(require("./toTime.js"));
const toTimestamp_js_1 = __importDefault(require("./toTimestamp.js"));
function default_1(payload) {
    return {
        payload: payload,
        toBigInt: toBigInt_js_1.default,
        toBigIntJson: toBigIntJson_js_1.default,
        toBoolean: toBoolean_js_1.default,
        toDateFormat: toDateFormat_js_1.default,
        toDateString: toDateString_js_1.default,
        toFloat: toFloat_js_1.default,
        toInteger: toInteger_js_1.default,
        toJson: toJson_js_1.default,
        toJsonString: toJsonString_js_1.default,
        toNull: toNull_js_1.default,
        toNumber: toNumber_js_1.default,
        toString: toString_js_1.default,
        toTime: toTime_js_1.default,
        toTimestamp: toTimestamp_js_1.default,
    };
}
exports.default = default_1;
//# sourceMappingURL=spellcast.js.map