const firebaseConfig = {
      apiKey: "AIzaSyCuZKKoKjmxIGrimfLp4mQE41aOZBg6t8Y",
      authDomain: "kwitter-c3029.firebaseapp.com",
      projectId: "kwitter-c3029",
      storageBucket: "kwitter-c3029.appspot.com",
      messagingSenderId: "427456934603",
      appId: "1:427456934603:web:eebafb2e62d9fc7108214e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                
                  Room_names = childKey;
                  //Start code
                  console.log("room-name -" + Room_names);
                  row ="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
                  document.getElementById("output").innerHTML += row;
            
                        //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}