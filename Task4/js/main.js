$(document).ready(function(){
    let fig = $("figure").html();
    
    $("#search-btn").click(function(){
        let input = $("#search-input").val();
        let htmlStr = "";
        if (isNaN(input) == false){
            for (let i = 0; i < input; i++){
                htmlStr += `<figure>${fig}</figure>`;
                console.log(htmlStr);
            }
            $("#thumbnails").html(htmlStr);
        } else{
            $("#baritems").append(`<li style="list-style-type:none;"><a href="">${input}</a></li>`);
            }
    });
});


