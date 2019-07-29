

$(function(){  
    let tariffBtn = document.querySelectorAll(".tariff-btn"); 
    $(".tariff-block").on("click", function(e) {
        if(e.target === tariffBtn) {
            $(".tariff-block").toggleClass("none");
        } else {
            $(".tariff-block").toggleClass("active");
        }
    });
});

                // PLAN BUTTON TOGGLER
$(function(){   
    $(".plan-btn").on("click", function(e) {
        $(".plan-btn").toggleClass("active");
    });
});