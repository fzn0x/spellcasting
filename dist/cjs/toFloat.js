"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(key, defaultValue = 0) {
    return this.payload?.[key]
        ? parseFloat(this.payload[key]) || defaultValue
        : defaultValue;
}
exports.default = default_1;
//# sourceMappingURL=toFloat.js.map