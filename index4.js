let vowels = ["a", "e", "i", "o", "u"];
let s = "geDoll";
let vowelPosition = [];
let foundVowels = [];
for (let i = 0; i < s.length; i++){
  if (vowels.includes(s[i].toLowerCase())) {
    vowelPosition.push(i);
    foundVowels.push(s[i]);
  }
}
foundVowels.reverse();
let sArray = s.split("");
vowelPosition.forEach((pos, index) => {
  sArray[pos] = foundVowels[index];
});
s = sArray.join("");
