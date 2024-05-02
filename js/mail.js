const firebaseConfig = {
  //get from your firebase project
};

//initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// const database = getDatabase(app);

//reference to our database
const subscribers = firebase.database().ref("Subscribers");

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

var finalelementSubscribe = document.getElementById("footerSubscribeButton");

finalelementSubscribe.addEventListener("click", function () {
  var nameFooSUbscribe = document.getElementById("footername").value;
  var emailFooSUbscribe = document.getElementById("footeremail").value;
  if (validateEmail(emailFooSUbscribe)) {
    const newSUbscriber = subscribers.push();

    newSUbscriber.set({
      name: nameFooSUbscribe,
      emailid: emailFooSUbscribe,
    });

    console.log(nameFooSUbscribe + " :  " + emailFooSUbscribe);
  }
});
