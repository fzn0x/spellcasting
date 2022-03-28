export default function (this: any, key: string, defaultValue: unknown = null) {
  return this.payload?.[key]
    ? JSON.stringify(this.payload[key]) || defaultValue
    : defaultValue;
}
