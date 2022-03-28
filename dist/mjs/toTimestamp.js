import dayjs from "dayjs";
export default function (key, defaultValue = dayjs().format("YYYY-MM-DD HH:mm:ss")) {
    return this.payload?.[key]
        ? dayjs(this.payload[key]).format("YYYY-MM-DD HH:mm:ss") || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toTimestamp.js.map