var isSubsequence = function(s, t) {
  let sub =0;
  if(s.length > t.length) return false;
  for (let i=0; i<t.length; i++){
      if(s[sub] === t[i])
      sub++;
  }
  return sub === s.length;
};