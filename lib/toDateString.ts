import dayjs from "dayjs";

export default function (
  this: any,
  key: string,
  defaultValue: string = dayjs().format("YYYY-MM-DD")
) {
  return this.payload?.[key]
    ? dayjs(this.payload[key]).format("YYYY-MM-DD") || defaultValue
    : defaultValue;
}
