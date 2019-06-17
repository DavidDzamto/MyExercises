$(function(){
    let source = ["#f4427a", "#f4427a", "#f4e541", "#f4e541", "#fc580c", "#fc580c", "#0aa99f", "#0aa99f", "#a80909", "#a80909", "#7d00bc", "#7d00bc", "#121412", "#121412", "#62ad37", "#62ad37"];
    source = shuffle(source);
    let firstSelectedElementIndex;
    let secondSelectedElementIndex;
    let counter = 0;
    let matchCounter = 0;
    $("body").prepend("<div class = 'container'></div>");
    $("body .container").append("<div class = 'memory-board'</div>");    

    for(i = 0; i < source.length; i++){
        $("body .container .memory-board").append(`<div data-index = "${i}"></div>`);
    }

    function shuffle(arr) {
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }

    function elementsAreEqual(firstElementIndex, secondElementIndex) {    
        if(firstElementIndex == secondElementIndex) {
            return false;
        } else if(source[firstElementIndex] === source[secondElementIndex]) {
            return true;
        }
    }

    function resetSelectedElements() {
        counter = 0;
        firstSelectedElementIndex = null;
        secondSelectedElementIndex = null;
    }

    $(".memory-board div").hover(function(){
        $(this).css("cursor","pointer");
    });

    $(".memory-board div").on("click", function(){
        let currentElementIndex = $(this).attr("data-index");
        let disabledValue = $(this).attr("data-disabled");
        
        if(disabledValue == 1) return;
        
        if(counter === 0) {
            firstSelectedElementIndex = $(this).attr("data-index");
            counter++;
        } else if(counter === 1) {
            secondSelectedElementIndex = $(this).attr("data-index");
            counter++;
        } else {
            $(`*[data-index="${firstSelectedElementIndex}"]`).fadeOut(function(){
                $(this).css("background-color", "yellowgreen").fadeIn()
            });
            $(`*[data-index="${secondSelectedElementIndex}"]`).fadeOut(function(){
                $(this).css("background-color", "yellowgreen").fadeIn()
            });
            resetSelectedElements();
            return;
        }
        
        $(this).fadeOut(function(){
            let color = source[currentElementIndex];
            $(this).css("background-color", color).fadeIn(function(){
                if(elementsAreEqual(firstSelectedElementIndex, secondSelectedElementIndex)){
                    $(`*[data-index="${firstSelectedElementIndex}"]`).fadeOut(function(){
                        $(this).css("background-color", "transparent").fadeIn()
                    });
                    $(`*[data-index="${firstSelectedElementIndex}"]`).attr("data-disabled", "1").css("cursor","default").hover(function(){
                        $(this).css("cursor","default");
                    });
                    $(`*[data-index="${secondSelectedElementIndex}"]`).fadeOut(function(){
                        $(this).css("background-color", "transparent").fadeIn()
                    });
                    $(`*[data-index="${secondSelectedElementIndex}"]`).attr("data-disabled", "1").css("cursor","default").hover(function(){
                        $(this).css("cursor","default");
                    });
                    matchCounter++;
                    resetSelectedElements();
                }else if(counter == 2){
                    $(`*[data-index="${firstSelectedElementIndex}"]`).fadeOut(function(){
                        $(this).css("background-color", "yellowgreen").fadeIn();
                    });
                    $(`*[data-index="${secondSelectedElementIndex}"]`).fadeOut(function(){
                        $(this).css("background-color", "yellowgreen").fadeIn();
                    });
                    resetSelectedElements();
                }
                if(matchCounter == 8){
                    $("body").html("<h1 style = 'float:left; transform:translate(53%,55%);'>WINNER!</h1><br><a href = 'domasna11.html' style = 'text-decoration:none; color: white;'><button class = 'btn btn-success btn-lg' style = 'transform:translate(-50px,300px);'>Play Again!</button></a>");
                    $("h1").animate({fontSize:"150px"},500);
                }
            });
        });
    });    
});