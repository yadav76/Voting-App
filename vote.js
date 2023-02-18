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
  var messageRef = firebase.database().ref('Votes');

  function back(){
    window.location.href = "/Login/index.html";
    return;
  }


var voteCount = {
  candidate1:0,
  candidate2:0,
  candidate3:0,
  candidate4:0
};

  // Getting input from fireBase to store in VoteCount Object every time form reloads
  messageRef.on("value", function(snapshot) {

    // console.log(snapshot.val());  // to print whole User object
    
    snapshot.forEach(
      function(ChildSnapshot) {
        let name = ChildSnapshot.val().name;
  
        let candidate1 = ChildSnapshot.val().candidate1;
        let candidate2 = ChildSnapshot.val().candidate2;
        let candidate3 = ChildSnapshot.val().candidate3;
        let candidate4 = ChildSnapshot.val().candidate4;
  
        voteCount['candidate1'] = candidate1;
        voteCount['candidate2'] = candidate2;
        voteCount['candidate3'] = candidate3;
        voteCount['candidate4'] = candidate4;
      }
    ) 
  }, function (error) {
    console.log("Error: " + error.code);
  });

// For getting Input from Radio Buttons from the Html Form
function displayRadioValue() {

  if (document.getElementById('candidate1').checked) {
    rate_value = document.getElementById('candidate1').value;
    
    saveMessage(rate_value);
    // window.location.href = "/Login/index.html";
  }else if (document.getElementById('candidate2').checked) {
    rate_value = document.getElementById('candidate2').value;
    // voteCount['candidate2'] += 1;
    saveMessage(rate_value);
    // console.log(rate_value);
  }else if (document.getElementById('candidate3').checked) {
    rate_value = document.getElementById('candidate3').value;
    // voteCount['candidate3'] += 1;
    saveMessage(rate_value);
    // console.log(rate_value);
  }else {
    rate_value = document.getElementById('candidate4').value;
    // voteCount['candidate4'] += 1;
    saveMessage(rate_value);
    // console.log(rate_value);
  }
}


// For Increasing the Count of a Candidate in Firebase
function saveMessage(candidate){
    
  // var newMessageRef = messageRef.push();

  if (candidate == "candidate1") {
      messageRef.child("VoteCount").set({
      candidate1: voteCount["candidate1"]+1,
      candidate2: voteCount["candidate2"],
      candidate3: voteCount["candidate3"],
      candidate4: voteCount["candidate4"]
  });
  return;
  }else if (candidate == "candidate2") {
    messageRef.child("VoteCount").set({
      candidate1: voteCount["candidate1"],
      candidate2: voteCount["candidate2"]+1,
      candidate3: voteCount["candidate3"],
      candidate4: voteCount["candidate4"]
});
  } else if (candidate == "candidate3") {
    messageRef.child("VoteCount").set({
      candidate1: voteCount["candidate1"],
      candidate2: voteCount["candidate2"],
      candidate3: voteCount["candidate3"]+1,
      candidate4: voteCount["candidate4"]
});
  }else{
    messageRef.child("VoteCount").set({
      candidate1: voteCount["candidate1"],
      candidate2: voteCount["candidate2"],
      candidate3: voteCount["candidate3"],
      candidate4: voteCount["candidate4"]+1
});
  }
}




