import dayjs from "dayjs";

export default function (
  this: any,
  key: string,
  defaultValue: unknown = dayjs().format("HH:mm:ss")
) {
  return this.payload?.[key]
    ? dayjs(this.payload[key]).format("HH:mm:ss") || defaultValue
    : defaultValue;
}
