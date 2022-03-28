export default function (key, defaultValue = 0) {
    return this.payload?.[key]
        ? BigInt(this.payload[key]) || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toBigInt.js.map