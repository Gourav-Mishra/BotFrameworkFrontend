isOpened = false;

$(function () {
    $("#botframe").attr('src', 'webchat.html?s=fYysSUsBOeM.iI4M4MOqF5n6h5er7bDRQF5Q9vDKSKc8MI7RZuUk8fs');
    $("#ProjTitle").text("Integrated Chatbot Platform");
    $("#iconOpen").show();
    $("#iconClose").hide();
    $("#botframe").hide();
});

function chatOpen() {
    if (isOpened){
        isOpened = false;
        $("#iconOpen").show();
        $("#iconClose").hide();
        $("#botframe").hide();
        $('.bgImage').css('background-image', 'url(./Images/HermesBackground.png)');

    }
    else{
        isOpened = true;
        $("#iconOpen").hide();
        $("#iconClose").show();
        $("#botframe").show();
        $('.bgImage').css('background-image', 'url(./Images/HermesBackground_blurred.png)');
    }
}

