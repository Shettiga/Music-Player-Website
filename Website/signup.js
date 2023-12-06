
 const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyCRDHxxkCXyNZ9BdJhDlZKpOkLu2FZHmh8",
  authDomain: "auth-form-2eb89.firebaseapp.com",
  projectId: "auth-form-2eb89",
  storageBucket: "auth-form-2eb89.appspot.com",
  messagingSenderId: "532774111499",
  appId: "1:532774111499:web:de3f1759a2fbf70c27ba0e"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

   const signup=()=>{
    const email = document.getElementById("email").Value;
    const password = document.getElementById("password").Value;
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
   location.href="music.html"
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
    // ..
  });
   }
   