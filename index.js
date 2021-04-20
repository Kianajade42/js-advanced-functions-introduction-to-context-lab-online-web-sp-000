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

let createTimeInEvent= function(employee,timeStamp){
  let [date,hour]=timeStamp.split('')
  employee.timeInEvents.push({
    type:"TimeIn",
    hour:parseInt(hour, 10),
    date,
  })
  return employee
}

let createTimeOutEvent= function(employee,timestamp){
  let [date,hour]=timestamp.split('')
  employee.timeOutEvents.push({
    type:"TimeOut",
    hour:parseInt(hour, 10),
    date,
  })
  return employee
}
