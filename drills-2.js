'use strict';


//Make student report
function makeStudentsReport(data) {
  const report = [];

  for(let i=0; i<data.length; i++){
    report.push(`${data[i].name}: ${data[i].grade}`);
  }

  return report;
}


//Enroll in Summer school
function enrollInSummerSchool(students) {
  let summerSchoolStudents = [];
  for (let i = 0; i < students.length; i++) {
    summerSchoolStudents.push(students[i]);
  }
  for (let i = 0; i < summerSchoolStudents.length; i++) {
    summerSchoolStudents[i]['status'] = 'In Summer school';
  }
  console.log(summerSchoolStudents);
  return summerSchoolStudents;
}