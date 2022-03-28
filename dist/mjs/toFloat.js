export default function (key, defaultValue = 0) {
    return this.payload?.[key]
        ? parseFloat(this.payload[key]) || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toFloat.js.map