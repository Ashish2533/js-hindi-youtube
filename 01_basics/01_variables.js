const accountId = 14453
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2   // Not Allowed Const keyword can not declare 2nd time 
accountEmail = "hc@HashChangeEvent.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
let accountState;

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* {} The Curly braces is a Scope Variable

Prefer not to use var variable because of issue in block scope & functional scope
Use Const & Let only, in 99% case use const

*/