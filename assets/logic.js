// Variables
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAT0EhKaUIDkPDOc86e-5L3wvnHjKWL9H4",
    authDomain: "employee-data-e0ba5.firebaseapp.com",
    databaseURL: "https://employee-data-e0ba5.firebaseio.com",
    projectId: "employee-data-e0ba5",
    storageBucket: "",
    messagingSenderId: "1013329840889"
  };
  firebase.initializeApp(config);
  
var dataRef = firebase.database();
var table = $('.table tbody');
var randomDate = $('#startDate').val();

// Functions
function createRow(name, role, start, rate) {
$(".table tbody").append('<tr><td>'+name+'</td><td>'+role+'</td><td>'+start+'</td><td>'+rate+'</td></tr>');
}

 function writeUserData(name, role, start, rate) {
  dataRef.ref('users/' + name).set({
    name: name,
    role: role,
    start: start,
    rate: rate
    
  });  

}
function convertDate(){
	moment(randomDate).fromNow();
}
// Main Process
$(".btn").on("click", function(event) {
  var name = $('#employeeName').val();
  var role = $('#role').val();
  var start = $('#startDate').val();
  var rate = $('#monthlyRate').val();
  createRow(name, role, start, rate);
  writeUserData(name, role, start, rate);
  event.preventDefault();
 });






