//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDbQBQ1Mp__Ai-UG_p3pnDNUCFCTuzzmcU",
      authDomain: "eco-chat-497d9.firebaseapp.com",
      projectId: "eco-chat-497d9",
      storageBucket: "eco-chat-497d9.appspot.com",
      messagingSenderId: "691668710429",
      appId: "1:691668710429:web:363a41f7888d18dad602f4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      });
      document.getElementById("msg").value="";

}
