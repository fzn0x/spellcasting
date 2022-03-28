import toBigInt from "./toBigInt.js";
import toBigIntJson from "./toBigIntJson.js";
import toBoolean from "./toBoolean.js";
import toDateFormat from "./toDateFormat.js";
import toDateString from "./toDateString.js";
import toFloat from "./toFloat.js";
import toInteger from "./toInteger.js";
import toJson from "./toJson.js";
import toJsonString from "./toJsonString.js";
import toNull from "./toNull.js";
import toNumber from "./toNumber.js";
import toString from "./toString.js";
import toTime from "./toTime.js";
import toTimestamp from "./toTimestamp.js";

export default function (payload: unknown) {
  return {
    payload: payload,
    toBigInt,
    toBigIntJson,
    toBoolean,
    toDateFormat,
    toDateString,
    toFloat,
    toInteger,
    toJson,
    toJsonString,
    toNull,
    toNumber,
    toString,
    toTime,
    toTimestamp,
  };
}
