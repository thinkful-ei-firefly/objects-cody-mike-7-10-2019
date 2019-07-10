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
    summerSchoolStudents[i]['status'] = 'In Summer school';
  }
  console.log(summerSchoolStudents);
  return summerSchoolStudents;
}





const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {


  for(let i=0; i<items.length; i++){
    if(items[i]['id'] === idNum){
      return items[i];
    }
  }
}

function validateKeys(object, expectedKeys) {
  const objectKeys = Object.keys(object);
  let thisShouldNotExist = 0;
  if (expectedKeys.length !== objectKeys.length) {
    return false;
  }
  for (let i = 0; i < expectedKeys.length; i++) {
    console.log(expectedKeys[i]);
    if (expectedKeys[i] in object) {} 
    else {
      return false;
    }
  }
  return true;
}