const createEmployeeRecord=function(row){
return { firstName: row[0],
  familyName: row[1],
  title: row[2],
  payPerHour: row[3],
  timeInEvents: [],
  timeOutEvents: []
}
}

const createEmployeeRecords= function (employeeRowData){
  return employeeRowData.map(function(row){
    return createEmployeeRecord(row)
  })

}

const createTimeInEvent= function(){
  
}