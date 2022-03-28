import dayjs from "dayjs";
export default function (key, defaultValue = dayjs().format("HH:mm:ss")) {
    return this.payload?.[key]
        ? dayjs(this.payload[key]).format("HH:mm:ss") || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toTime.js.map