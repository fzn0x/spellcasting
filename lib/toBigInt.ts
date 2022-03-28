export default function (this: any, key: string, defaultValue: unknown = 0) {
  return this.payload?.[key]
    ? BigInt(this.payload[key]) || defaultValue
    : defaultValue;
}
