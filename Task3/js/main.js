let fig = document.getElementsByTagName("figure")[0].innerHTML;
document.getElementById("search-btn").onclick = function(){
    let input = document.getElementById("search-input").value;
    if (isNaN(input) == false){ //the input is a number
        document.getElementById("thumbnails").innerHTML = "";
        for (let i = 0; i < input; i++){
        document.getElementById("thumbnails").innerHTML += `<figure>${fig}</figure>`;
        }
    } else {
        document.getElementById("baritems").innerHTML += `<li style="list-style-type:none;"><a href="">${input}</a></li>`;
    }
    
}

