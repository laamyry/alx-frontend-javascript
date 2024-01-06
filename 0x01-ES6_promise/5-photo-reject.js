export default function uploadPhoto(filename) {
  const output = Promise.reject(Error(`${filename} cannot be processed`));
  return output;
}
