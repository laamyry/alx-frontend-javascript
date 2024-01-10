export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const Int8 = new Int8Array(length);
  Int8.fill(value, position, position + 1);
  return new DataView(Int8.buffer);
}
