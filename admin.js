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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // create Reference to Database
  var messageRef = firebase.database().ref('Users');

//   firebase.database().ref("hello").set('two');


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
         
        document.getElementById("cand1").innerHTML = candidate1;
        document.getElementById("cand2").innerHTML = candidate2;
        document.getElementById("cand3").innerHTML = candidate3;

        document.getElementById("cand4").innerHTML = candidate4;
  
        // console.log(userName);
  
        // console.log(name);  // to print name of single object
        
      }
    ) 
  }, function (error) {
    console.log("Error: " + error.code);
  });


// Listen for from submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

    // console.log(123);

    // Now get all values one by one
    var name = getInputVal('name');   // get name from the form
    var password = getInputVal('password'); 
    var email = getInputVal('email'); 
    var phone = getInputVal('phone'); 

    // console.log(password);

    // Register user
    saveMessage(name,password,email,phone);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
}

// function for getting form values
function getInputVal(id){
    return document.getElementById(id).value;   // to get value from form
  }

  // Save the message to Firebase
function saveMessage(name,password,email,phone){
    
    // var newMessageRef = messageRef.push();
      
    
    messageRef.child(name).set({
        name: name,
        password: password,
        email: email,
        phone: phone

        // Sending an Object to out messageReference in Firebase
    });

    
}
