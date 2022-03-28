export default function (key, defaultValue = 0) {
    return this.payload?.[key]
        ? Number(this.payload[key]) || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toNumber.js.map