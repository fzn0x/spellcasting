"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(key, defaultValue = "") {
    return this.payload?.[key]
        ? this.payload[key].toString() || defaultValue
        : defaultValue;
}
exports.default = default_1;
//# sourceMappingURL=toString.js.map