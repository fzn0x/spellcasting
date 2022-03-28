# Spellcasting 🧙‍♂️

Extremely powerful, easy and safely cast a spell to casting from one type to another in Javascript

## Installation 🌟

```
npm install spellcasting # npm
yarn add spellcasting # yarn
```

## Minimal Example

```js
import spellcasting from "spellcasting";

const payload = {};

const cast = spellcasting(payload);

// Use APIs..
```

## API

| API                                                                                     | Description                                                                                               |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| toBigInt(key: string, defaultValue: unknown = 0)                                        | Cast value type to BigInt                                                                                 |
| toBigIntJson(key: string, defaultValue: unknown = 0)                                    | Cast value type to BigInt, with special effect to solve https://github.com/tc39/proposal-bigint/issues/24 |
| toBoolean(key: string, defaultValue: unknown = false)                                   | Cast value type to Boolean                                                                                |
| toDateFormat(key: string, format: string = "",defaultValue: string = dayjs().format())  | Cast value type to Date with custom formatting, format using [⏰ dayjs](https://github.com/iamkun/dayjs)  |
| toDateString(key: string, defaultValue: string = dayjs().format("YYYY-MM-DD"))          | Cast value type to Date with format YYYY-MM-DD                                                            |
| toFloat(key: string, defaultValue: unknown = 0)                                         | Cast value type to Float                                                                                  |
| toInteger(key: string, defaultValue: unknown = 0)                                       | Cast value type to Integer                                                                                |
| toJson(key: string, defaultValue: unknown = null)                                       | Cast value type to JSON                                                                                   |
| toJsonString(key: string, defaultValue: unknown = null)                                 | Cast value type to JSON string                                                                            |
| toNull(value: unknown = null)                                                           | Convert value to null if falsy                                                                            |
| toNumber(key: string, defaultValue: unknown = 0)                                        | Cast value type to Number                                                                                 |
| toString(key: string, defaultValue: unknown = "")                                       | Cast value type to String                                                                                 |
| toTime(key: string,defaultValue: unknown = dayjs().format("HH:mm:ss"))                  | Cast value type to Time                                                                                   |
| toTimestamp(key: string, defaultValue: unknown = dayjs().format("YYYY-MM-DD HH:mm:ss")) | Cast value type to Timestamp                                                                              |

## License

Spellcasting is under the [MIT License](./LICENSE)
