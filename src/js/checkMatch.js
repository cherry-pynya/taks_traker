export default function checkMatch(str1, str2) {
  const a = str2.slice(0, str1.length);
  if (a.toLowerCase() === str1.toLowerCase()) return true;
  return false;
}
