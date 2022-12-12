// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
function fetchingapi(){
fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
  return data.json()
}).then((finaldata)=>{
  console.log(finaldata)
  var player='';
  finaldata.forEach(function(user) {
   player+=
  `<div class="Cards">
    <div class="strength">Name : ${user.name}</div>
    <div>Email   : ${user.email}</div>
    <div>Phone   : ${user.phone}</div>
    <div>Website : ${user.website}</div>
    <div>Company : ${user.company.name}</div>
    <div>City    : ${user.address.city}</div>
    <div>Zipcode : ${user.address.zipcode}</div>
   </div>`
  document.getElementById("Cards").innerHTML=player
  
})
})

}
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error
let p1 = new Promise((resolve,reject)=>{
  console.log("Promise resolved")
  resolve()
})
p1.then(()=>{
  fetchingapi()
}).catch(error => alert(error.message));