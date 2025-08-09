enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

let statusCode: Status = Status.NotFound;

console.log(statusCode);           // 404
console.log(Status[404]);          // "NotFound"