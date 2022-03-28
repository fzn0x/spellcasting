import dayjs from "dayjs";
export default function (key, format = "", defaultValue = dayjs().format()) {
    return this.payload?.[key]
        ? dayjs(this.payload[key]).format(format) || defaultValue
        : defaultValue;
}
//# sourceMappingURL=toDateFormat.js.map