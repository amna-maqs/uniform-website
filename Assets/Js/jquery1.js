// Jquery for Add to cart 
$(document).ready(function(){

    $('#car').hide();

    $('#now').click(function(){
        $("#cart").show(".1s");
    });

    $("#order_btn").click(function(){
        $("#cart").hide(".1s");
    });


    var cart_item_count =0;

    $(".cart").click(function(){
        cart_item_count++;
        var img_src = $(this).parents(".pro").find("img").attr("src");
        var titlte  = $(this).parents('.pro').find('h5').text();
        var price   = $(this).parents('.pro').find('h4').text().replace('price :', '');
      



        var cart_item  = `

        <div class="main d-flex p-3 border border-left-0 border-right-0 border-top-0">

        <div class ="col-md-2 col-sm-2 border border-left-0 border-top-0 border-bottom-0 me-5">
       <img src=${img_src} class="w-100 mr-5" alt=""/>
        </div>

        <div id="title" class="col-md-3  col-sm-2 d-flex flex-wrap align-content-center ">
          <h6 style="font-size:16px;">${titlte}</h6>
        </div>


        <div class="col-md-3 col-sm-3 d-flex flex-wrap align-content-center">
        <span class="mx-2 ms-4"><input type="number" value="1" id="Qty"/></span> 
        </div>
        

        <div class="col-md-0  col-sm-2 d-flex flex-wrap align-content-center" id="t_price">
        <h6 class="mt-2 d-flex "><span class="cart_item_price"> ${price}</span></h6>
        </div>

        <div class="col-md-1 col-sm-3 d-flex flex-wrap align-content-center">

        <span class="close" style="cursor:pointer; font-size:25px;">&times;</span>
        </div>



        </div>
        
        
        `

        $("#order").append(cart_item);

        $("#cart-item_count").text(cart_item_count);
        $(".close").click(function(){
            $(this).parents(".main").remove();

            item_count();
        })

        item_count();  
    })

    function  item_count(){

        var res = $("#order").children().length;
        $("$cart_item_count").text(res);

       
    };
});



// Feedback 
var stars = document.getElementsByClassName("fa-star");
var emoji = document.getElementById("emoji");

    $('.emoji').hide();

    $('.fa-star').click(function(){
        $('.emoji').show('.1s');
    });


stars[0].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#9999";
    stars[2].style.color = "#9999";
    stars[3].style.color = "#9999";
    stars[4].style.color = "#9999";
    emoji.style.transform = "translateX(0)";
};

stars[1].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#9999";
    stars[3].style.color = "#9999";
    stars[4].style.color = "#9999";
    emoji.style.transform = "translateX(-100px)";
};

stars[2].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#9999";
    stars[4].style.color = "#9999";
    emoji.style.transform = "translateX(-200px)";
};

stars[3].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#9999";
    emoji.style.transform = "translateX(-300px)";
};

stars[4].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";
    emoji.style.transform = "translateX(-400px)";
};
