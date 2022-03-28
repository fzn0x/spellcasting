export default function (this: any, key: string, defaultValue: unknown = "") {
  return this.payload?.[key]
    ? this.payload[key].toString() || defaultValue
    : defaultValue;
}
