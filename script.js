const firebaseConfig = {

    apiKey: "AIzaSyDGTRprYVh_zerpGDi_mmhkSYCWDYS2MfE",
  
    authDomain: "voting-app-cac3d.firebaseapp.com",
  
    databaseURL: "https://voting-app-cac3d-default-rtdb.firebaseio.com",
  
    projectId: "voting-app-cac3d",
  
    storageBucket: "voting-app-cac3d.appspot.com",
  
    messagingSenderId: "48839383938",
  
    appId: "1:48839383938:web:88905e0300cabe80034d9b",
  
    measurementId: "G-2KJY7H9YDD"
  
  };
  
  function register() {
    window.location.href = "/Register/register.html";
    return;
  }


  var voteCount = {
    candidate1:0,
    candidate2:0,
    candidate3:0,
    candidate4:0
  };

  let flag = 1;
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var userName;

  let users = [];

  // function for getting form values
function getInputVal(id){
    return document.getElementById(id).value;   // to get value from form
  } 

// Listen for from submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

    // console.log(123);

    // Now get all values one by one
    userName = getInputVal('name');   // get name from the form
    var password = getInputVal('password'); 

    // Read Data from Firebase
    if (userName == "admin" || userName == "Admin") {
      // console.log("admin");
      adminLogin();
    }else {
      validation();
      printArray();
    }

    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    // console.log(flag);
    
}


function showAdmin() {
  console.log(voteCount['candidate1']);
  console.log(voteCount['candidate2']);
  console.log(voteCount['candidate3']);
  console.log(voteCount['candidate4']);

  return;
}

function adminLogin() {

  window.location.href = "/Admin/admin.html";
    // window.location = false;
    flag = false;
    return;

  var messageRef = firebase.database().ref('Votes');
  messageRef.on("value", function(snapshot) {

    // console.log(snapshot.val());  // to print whole User object
    
    snapshot.forEach(
      function(ChildSnapshot) {
        let name = ChildSnapshot.val().name;
  
        let candidate1 = ChildSnapshot.val().candidate1;
        let candidate2 = ChildSnapshot.val().candidate2;
        let candidate3 = ChildSnapshot.val().candidate3;
        let candidate4 = ChildSnapshot.val().candidate4;
  
        // voteCount['candidate1'] = candidate1;
        // voteCount['candidate2'] = candidate2;
        // voteCount['candidate2'] = candidate3;
        // voteCount['candidate4'] = candidate4;
         
        console.log(candidate1);
        console.log(candidate2);
        console.log(candidate3);
        console.log(candidate4);
  
        // console.log(userName);
  
        // console.log(name);  // to print name of single object
        
      }
    ) 
  }, function (error) {
    console.log("Error: " + error.code);
  });

  // showAdmin();
}


function printArray() {
  for(let i = 0; i < users.length; i++){
    if (users[i] == userName) {
      myFunc();
    }
  }

  
}

function goToRegisterPage() {
  if (flag == 1) {
    registerPage();
  }
}


  function myFunc() {
    window.location.href = "/Vote/vote.html";
    // window.location = false;
    flag = false;
    return;
  }


function registerPage() {
    window.location.href = "/Register/register.html";
    // window.location = false;
    flag = false;
    return;
  }

function validation() {
  var messageRef = firebase.database().ref('Users');

  messageRef.on("value", function(snapshot) {

    // console.log(snapshot.val());  // to print whole User object
    
    snapshot.forEach(
      function(ChildSnapshot) {
        let name = ChildSnapshot.val().name;

        users.push(name);

        // console.log(userName);

        // console.log(name);  // to print name of single object
        
      }
    ) 
  }, function (error) {
    console.log("Error: " + error.code);
  });

}



  
