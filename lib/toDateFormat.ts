import dayjs from "dayjs";

export default function (
  this: any,
  key: string,
  format: string = "",
  defaultValue: string = dayjs().format()
) {
  return this.payload?.[key]
    ? dayjs(this.payload[key]).format(format) || defaultValue
    : defaultValue;
}
