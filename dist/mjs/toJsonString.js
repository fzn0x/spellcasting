export default function (key, defaultValue = null) {
    return this.payload?.[key]
        ? JSON.stringify(this.payload[key]) || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toJsonString.js.map