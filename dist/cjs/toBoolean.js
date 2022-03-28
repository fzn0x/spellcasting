"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(key, defaultValue = false) {
    return this.payload?.[key]
        ? Boolean(this.payload[key]) || defaultValue
        : defaultValue;
}
exports.default = default_1;
//# sourceMappingURL=toBoolean.js.map