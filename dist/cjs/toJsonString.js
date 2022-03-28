"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(key, defaultValue = null) {
    return this.payload?.[key]
        ? JSON.stringify(this.payload[key]) || defaultValue
        : defaultValue;
}
exports.default = default_1;
//# sourceMappingURL=toJsonString.js.map