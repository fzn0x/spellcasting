export default function (key, defaultValue = 0) {
    return this.payload?.[key]
        ? parseInt(this.payload[key]) || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toInteger.js.map