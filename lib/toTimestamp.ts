import dayjs from "dayjs";

export default function (
  this: any,
  key: string,
  defaultValue: unknown = dayjs().format("YYYY-MM-DD HH:mm:ss")
) {
  return this.payload?.[key]
    ? dayjs(this.payload[key]).format("YYYY-MM-DD HH:mm:ss") || defaultValue
    : defaultValue;
}
