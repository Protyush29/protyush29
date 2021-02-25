console.log("entry to static js");
 //function that display value
function charValue(val)
{
    document.getElementById("result").value+=val;
}

//function that clear the last char display
function clrLast()
{
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}

//function that clear the display
function clr()
{
    document.getElementById("result").value = "";
}

//function for communication
function result()
{
    $.ajax({
        type : 'POST',
        url : "/",
        contentType: 'application/json;charset=UTF-8',
        data : JSON.stringify({"data" : document.getElementById("result").value}),
        success: function(response){
            data = JSON.parse(response);
           document.getElementById("result").value = data['result'];
        },
        error: function(response){
           document.getElementById("result").value = response;
        }
    });
}

//function for communication
function aboutCalc()
{
    document.getElementById("result").value = "SUUP ?";
    setTimeout(() => { document.getElementById("result").value = "lets Maths."; setTimeout(() => { document.getElementById("result").value = "Numbers please."; setTimeout(() => { document.getElementById("result").value = ""; }, 500);}, 500);}, 1000);
}