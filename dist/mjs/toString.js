export default function (key, defaultValue = "") {
    return this.payload?.[key]
        ? this.payload[key].toString() || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toString.js.map