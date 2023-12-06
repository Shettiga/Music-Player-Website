
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
 
 const signup = () => {
   const emailInput = document.getElementById("email");
   const passwordInput = document.getElementById("password");
 
   const email = emailInput.value;
   const password = passwordInput.value;
 
   console.log(email, password);
 
   auth.createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
       const user = userCredential.user;
       const uid = user.uid;
 
       // Set isAdmin to true if email ends with @admin.com
       const isAdmin = email.endsWith('@admin.com');
 
       // Add user data to Firestore
       db.collection("users").doc(uid).set({
         email: email,
         isAdmin: isAdmin,
       })
         .then(() => {
           console.log("User data added to Firestore");
           location.href = "music.html";
         })
         .catch((error) => {
           console.error("Error adding user data to Firestore:", error);
         });
     })
     .catch((error) => {
       console.error("Error creating user:", error.code, error.message);
     });
 };
   
   