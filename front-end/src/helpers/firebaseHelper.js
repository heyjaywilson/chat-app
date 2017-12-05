import firebase from 'firebase'

export function fireInit() {
  var config = {
    apiKey: "AIzaSyCBMnhmoaji04EtsPwTMsPw_lq2lmCSLA0",
    authDomain: "vue-chat-c585d.firebaseapp.com",
    databaseURL: "https://vue-chat-c585d.firebaseio.com",
    projectId: "vue-chat-c585d",
    storageBucket: "vue-chat-c585d.appspot.com",
    messagingSenderId: "494726728058"
  };

  firebase.initializeApp(config);
}