export default function (
  this: any,
  key: string,
  defaultValue: unknown = false
) {
  return this.payload?.[key]
    ? Boolean(this.payload[key]) || defaultValue
    : defaultValue;
}
