export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
  /* eslint-disable no-unused-vars */
    const task = true;
    const task2 = false;
  }
  /* eslint-disable no-unused-vars */
  return [task, task2];
}
