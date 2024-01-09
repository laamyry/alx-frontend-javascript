export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((el) => el.location === city)
    .map((person) => {
      const grades = newGrades.filter((el) => el.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return { ...person, grade };
    });
}
