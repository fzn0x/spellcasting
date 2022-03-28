declare global {
  interface BigInt {
    toJSON(): string;
  }
}

export default function (this: any, key: string, defaultValue: unknown = 0) {
  const BigIntJson = BigInt;

  // Using JSON.stringify() with unknown BigInt value will raise a TypeError, as BigInt values aren't serialized in JSON by default.
  BigIntJson.prototype.toJSON = function (): string {
    return this.toString();
  };

  return this.payload?.[key]
    ? BigIntJson(this.payload[key]) || defaultValue
    : defaultValue;
}
