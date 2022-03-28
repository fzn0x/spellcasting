export default function (this: any, key: string, defaultValue: unknown = 0) {
  return this.payload?.[key]
    ? Number(this.payload[key]) || defaultValue
    : defaultValue;
}
