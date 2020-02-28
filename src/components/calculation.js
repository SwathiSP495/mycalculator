import Big from "big.js";

import othercalculation from "./othercalculation";
import isNumber from "./isNumber";


export default function calculation(firstobject, name) {
  if (name === "C") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(name)) {
    if (name === "0" && firstobject.next === "0") {
      return {};
    }
   
    if (firstobject.operation) {
      if (firstobject.next) {
        return { next: firstobject.next + name };
      }
      return { next: name };
    }
    if (firstobject.next) {
      const next = firstobject.next === "0" ? name : firstobject.next + name;
      return {
        next,
        total: null,
      };
    }
    return {
      next: name,
      total: null,
    };
  }

  if (name === "%") {
    if (firstobject.operation && firstobject.next) {
      const result = othercalculation(firstobject.total, firstobject.next, firstobject.operation);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (firstobject.next) {
      return {
        next: Big(firstobject.next)
          .div(Big("100"))
          .toString(),
      };
    }
    return {};
  }

  if (name === ".") {
    if (firstobject.next) {
      if (firstobject.next.includes(".")) {
        return {};
      }
      return { next: firstobject.next + "." };
    }
    return { next: "0." };
  }

  if (name === "=") {
    if (firstobject.next && firstobject.operation) {
      return {
        total: othercalculation(firstobject.total, firstobject.next, firstobject.operation),
        next: null,
        operation: null,
      };
    } else {
      
      return {};
    }
  }

  if (name === "+/-") {
    if (firstobject.next) {
      return { next: (-1 * parseFloat(firstobject.next)).toString() };
    }
    if (firstobject.total) {
      return { total: (-1 * parseFloat(firstobject.total)).toString() };
    }
    return {};
  }

  if (firstobject.operation) {
    return {
      total: othercalculation(firstobject.total, firstobject.next, firstobject.operation),
      next: null,
      operation: name,
    };
  }

  if (!firstobject.next) {
    return { operation: name };
  }

  return {
    total: firstobject.next,
    next: null,
    operation: name,
  };
}
