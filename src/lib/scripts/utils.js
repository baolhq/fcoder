export const rot13 = (str) => {
  if (!str) return;
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  let encoded = "";
  for (let i = 0; i < str.length; i++) {
    const index = input.indexOf(str[i]);
    encoded += output[index];
  }

  // If encoded string is undefined, return the original
  if (encoded === "undefined") return str;
  return encoded;
};

export const buildUrl = (path, params) => {
  const query = { ...params };
  let interpolatedPath = path;
  for (const [param, value] of Object.entries(params)) {
    const replaced = interpolatedPath.replace(`[${param}]`, value);
    if (replaced !== interpolatedPath) {
      interpolatedPath = replaced;
      delete query[param];
    }
  }
  const search = new URLSearchParams(query).toString();
  return `${interpolatedPath}${search ? `?${search}` : ""}`;
};
