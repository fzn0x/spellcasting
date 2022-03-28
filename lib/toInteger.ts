export default function (this: any, key: string, defaultValue: unknown = 0) {
  return this.payload?.[key]
    ? parseInt(this.payload[key]) || defaultValue
    : defaultValue;
}
