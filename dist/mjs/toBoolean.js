export default function (key, defaultValue = false) {
    return this.payload?.[key]
        ? Boolean(this.payload[key]) || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toBoolean.js.map