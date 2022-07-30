// Rotation 13 encryption
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
