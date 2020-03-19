function sayHello(){
    alert("Yo! function works");
    document.write("YAS AH");
    console.write(sayHello);
}

//list of user
function listUser(){
    var userName=["Ally","Kevin","Jason","Emily"];
    document.write("<ol>");
    for(var i=0; i<userName.length; i++){
        
        document.write("<li>");
        document.write(userName[i]);
        document.write("</li>");      
        
    } 
    document.write("</ol>");
}

//adding new user
function userAdd(){
   
    var fruits = ["Banana", "Orange", "Lemon", "Apple","Mango"];
    var citrus = fruits.slice(1, 3);

    //var newUser= prompt("Your Name")
    //userName.splice(listUser;
    //alert.write("added !");   
}