const accountId = 12345;
let emailId  = "rgp4948@gmail.com";
var accountNo = 5674832929;
cityName = "Gorakhpur";

console.log(accountId);
console.table([accountId,emailId,accountNo,cityName])

//always use to avoid var keyword due to its scoping issue

let accountState;
console.table([accountId,emailId,accountNo,cityName,accountState])

//Agar kisi bhi variable ko bs define karte h aur usko kisi bhi value se assign nhi karte to 
//undefined print karta h



