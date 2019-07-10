'use strict';

function makeStudentsReport(data) {
  // your code here
  const report = [];

  for(let i=0; i<data.length; i++){
    report.push(`${data[i].name}: ${data[i].grade}`);
  }

  return report;
}

