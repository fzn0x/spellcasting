export default function (this: any, key: string, defaultValue: unknown = 0) {
  return this.payload?.[key]
    ? parseFloat(this.payload[key]) || defaultValue
    : defaultValue;
}
