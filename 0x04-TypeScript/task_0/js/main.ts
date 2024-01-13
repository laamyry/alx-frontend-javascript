interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const std1: Student = {
  firstName: 'Med',
  lastName: 'Laamyry',
  age: 27,
  location: 'Morocco',
};
const std2: Student = {
  firstName: 'Lionel',
  lastName: 'Messi',
  age: 36,
  location: 'Usa',
};
const studentsList: Student[] = [std1, std2];
const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
