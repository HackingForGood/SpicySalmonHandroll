import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCb8I-GEmx4Vj2lwQ2MSDrMNwlkWqfgs0o",
    authDomain: "communities-for-communities.firebaseapp.com",
    databaseURL: "https://communities-for-communities.firebaseio.com",
    projectId: "communities-for-communities",
    storageBucket: "communities-for-communities.appspot.com",
    messagingSenderId: "1058210799333"
  };
var fire = firebase.initializeApp(config);
export default fire;
