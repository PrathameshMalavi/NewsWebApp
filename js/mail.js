const firebaseConfig = {
  apiKey: "AIzaSyBJbZtH1u7IMNKl7eztBfwwZNVp2B76UEQ",

  authDomain: "news-app-16978.firebaseapp.com",

  databaseURL: "https://news-app-16978-default-rtdb.firebaseio.com",

  projectId: "news-app-16978",

  storageBucket: "news-app-16978.appspot.com",

  messagingSenderId: "570595830203",

  appId: "1:570595830203:web:7526c2d68ad73cd22e7c9e",

  measurementId: "G-7PLDL7TQVR",
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
