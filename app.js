 var config = {
    apiKey: "AIzaSyB9QO9Eucyoz-vrUHfox6ug3d6TZIjyP68",
    authDomain: "storyboat-c85c4.firebaseapp.com",
    databaseURL: "https://storyboat-c85c4.firebaseio.com",
    projectId: "storyboat-c85c4",
    storageBucket: "storyboat-c85c4.appspot.com",
    messagingSenderId: "7056644198"
  };
  
  firebase.initializeApp(config);
  
      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: "file:///E:/StoryBoat/Home/Home.html",
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
           
          firebase.auth.EmailAuthProvider.PROVIDER_ID 
           
        ],
		 
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
	
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
      var 
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
 

var user = firebase.auth().currentUser;
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
} 