export default function getStudentIdsSum(students) {
  return students.reduce((initial, studentId) => initial + studentId.id, 0);
}
