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
