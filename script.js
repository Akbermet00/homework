let color = "lightblue";

function changeStyle() {
    let title = document.getElementById("title");
    let text = document.getElementById("text");
    let box = document.getElementById("box");

    title.style.color = "red";
    text.style.fontSize = "20px";
    box.style.backgroundColor = color;
    box.style.padding = "15px";
    box.style.width = "100px";
}

function jqueryChange() {
    $("#title").css("color", "green");
    $("#text").text("Text changed!");
}