
function register(){

    console.log("Registering the car");
    var price= $("#txtPrice").val();
    var make= $("#txtMake").val();
    var model= $("#txtModel").val();
    var year= $("#txtYear").val();
    var passengers= $("#txtPassengers").val();
    var milage= $("#txtMilage").val();
    var imageUrl= $("#txtImageUrl").val(); 
    var hp= $("#txtHp").val(); 
    var cyls= $("#txtCyls").val(); 
    var desc= $("#txtDescription").val(); 
    
    var errorOcurred = false; 
    
    if(!year || isNaN(year)){
        errorOcurred = true;
        $("#txtYear").addClass("error"); 

    }
    else{
        //year = year * 1; 
        year = parseInt(year); 
        $("#txtYear").removeClass("error");
    }

    if(!price || isNaN(price)){
        
        errorOcurred = true;
        $("#txtPrice").addClass("error");
    }
    else{
        price = parseFloat(price); 
        $("#txtPrice").removeClass("error");
    }

    if(errorOcurred){
        $("#errorAlert").removeClass("hide"); 
         return; 
    }

    $("#errorAlert").addClass("hide"); 

    var car = {
        dailyPrice: price,
        make : make,
        model : model, 
        year : year,
        passengerCapacity : passengers,
        milage : milage, 
        imageUrl : imageUrl,
        hp : hp,
        cyles : cyls,
        description: desc
    };

    console.log(car);

    $.ajax({
        url:"/catalog/saveCar",
        type: 'POST',
        contentType: 'application/json',
        dataType:'json',
        data: JSON.stringify(car),
        success : function(res){
            console.log ("succeed", res);
            $("#savedAlert").removeClass("hide");
            setTimeout(function(){
                $("#savedAlert").removeClass("hide")
            }, 3000);

        },
        error: function(error){
            console.log("error", error); 
        }
    });
}

function init(){

    $("#btnsave").click(register);


}

window.onload = init; 