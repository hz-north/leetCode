let s = " the sky is       blue ";

function reverseWords(s) {
  s = s.trim().replace(/\s+/g, " ");
  let result = s.split(" ");
  reverse = result.reverse().join(" ");
  return reverse;
}
reverseWords(s);
