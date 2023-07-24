function processData()
{
    // variables
    var username=document.getElementById("username").value;
    var useraddress=document.getElementById("useraddress").value;
    var userpostcode=document.getElementById("userpostcode").value;
    var userphone=document.getElementById("userphone").value;
    var useremail=document.getElementById("useremail").value;
    var pickupdate=document.getElementById("pickupdate").value;

    // output message
    var outputmessage="";

    // begin script to create output message
    outputmessage+="Name: " + username + "<br>" + "Address: " + useraddress + "<br>" + "Postal code: " + userpostcode + "<br>" + "Telephone: " + userphone + "<br>" + "E-mail: " + useremail + "<br>" + "Order Pickup Date: " + pickupdate;

    // display on page
    document.getElementById("summaryUser").innerHTML=outputmessage;
    alert("Thanks for enter the user info. Please select and place your order now.");

    document.getElementById("foodform").disabled=false;
        
}

function processOrder()
{
    // variables
    var veg=document.getElementById("vegetable").value;
    var fruit=document.getElementById("fruit").value;
    var chicken=document.getElementById("chicken").value;
    var pork=document.getElementById("pork").value;
    var total=parseFloat(0);

    //calculate values
    total=veg*30 + fruit*20 + chicken*7 + pork*5;
    console.log(total);

    var outputmessage="Order:" + "<br>" + "<br>";
    //add to message
    if(veg>=1)
    {
      outputmessage+= "Vegetable Hampers: " + parseInt(veg) + "<br>";
    }
    if(fruit>=1)
    {
      outputmessage+= "Fruit Hampers: " + parseInt(fruit) + "<br>";
    }
    if(chicken>=1)
    {
      outputmessage+= "Chicken: " + parseInt(chicken) + "<br>";
    }
    if(pork>=1)
    {
      outputmessage+= "Pork: " + parseInt(pork) + "<br>";
    }

    // display message
    outputmessage+="<br>" + "Total Order: $" + total;
    document.getElementById("summaryOrder").innerHTML=outputmessage;

    document.getElementById("divUser").style.visibility="visible";
    document.getElementById("divOrder").style.visibility="visible";
}
