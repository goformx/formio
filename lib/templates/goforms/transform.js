import e from "./cssClasses.js";
const s = (t, r) => {
  if (!r)
    return r;
  const n = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen"
  }, i = {
    primary: "btn-primary",
    secondary: "btn-outline",
    success: "btn-primary",
    danger: "btn-primary",
    warning: "btn-primary",
    info: "btn-primary",
    light: "btn-outline",
    dark: "btn-primary",
    link: "btn-outline"
  };
  switch (t) {
    case "columns":
      return Object.prototype.hasOwnProperty.call(n, r.toString()) ? n[r.toString()] : r;
    case "class":
      return Object.prototype.hasOwnProperty.call(e, r.toString()) ? e[r.toString()] : r;
    case "theme":
      return i[r] || r;
    default:
      return r;
  }
};
export {
  s as transform
};
//# sourceMappingURL=transform.js.map
