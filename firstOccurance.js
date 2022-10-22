/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  let index = -1;

  if (haystack === needle) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }

  let h = 0;
  let n = 0;

  while (h < haystack.length && n < needle.length) {
    if (haystack[h] === needle[n]) {
      if (h == haystack.length - 1) {
        if (n < needle.length - 1) {
          return -1;
        }
      }
      if (n == needle.length - 1 && needle.length > 1) return index;
      index == -1 ? (index = h) : null;
      h++;
      n++;
    } else if (haystack[h] !== needle[n] && n > 0) {
      n = 0;
      h = index + 1;
      index = -1;
    } else {
      h++;
    }
  }

  return index;
}

haystack = "mississippi";

needle = "sippia";

console.log(strStr(haystack, needle));
