export default function cleanSet(set, str) {
  if (!set || !str || !(set instanceof Set) || typeof str !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((el) => el && el.startsWith(str))
    .map((el) => el.replace(str, ''))
    .join('-');
}
