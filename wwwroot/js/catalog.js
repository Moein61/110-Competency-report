function getCatalog(){



    $.ajax({
        url:"/catalog/getCatalog",
        type: 'GET',
        success : function(res){
            console.log ("succeed", res);
            for (var i=0; i < res.length; i++){
                var item =res[i];
                displayCar(item);
            }

        },
        error: function(error){
            console.log("error", error); 
        }
    });

} 

function displayCar(car){
    var container=$("#catalogContainer");
    var template = 
    `<div class="col-4 item">
       <div class="row">
          <div class="col-7">
            <img src="${car.imageUrl}"
          </div>

          <div class="col-5">
            <label class="info-title">Year:</label>
            <label class="info-value">${car.year}</label>
            <br>

            <label class="info-title">Make:</label>
            <label class="info-value">${car.make}</label>
            <br>

            <label class="info-title">Model:</label>
            <label class="info-value">${car.model}</label>
            <br>

            <label class="info-title">Daily Price:</label>
            <label class="info-value">${car.dailyPrice}</label>
            <br>
          </div>
       </div>
       <div class="row">
           <div class="col-12">
             <label class="info-title">description</label>
             <p>${car.description}</p>
           
           </div>
       </div>
       
    </div>`;

    container.append(template);  

}

function init(){

    console.log("Catalog Page")
    getCatalog();

 
}

window.onload = init; 