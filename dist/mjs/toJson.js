export default function (key, defaultValue = null) {
    return this.payload?.[key]
        ? JSON.parse(this.payload[key]) || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toJson.js.map