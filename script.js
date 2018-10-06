function showAttribute(){
    var x = document.getElementById("attrs");
    var y= document.getElementsByTagName("a")[0].getAttribute("id");
    console.log(y)
    x.innerHTML = y;
}

function remove(){
    var x= document.getElementById("attrs");
    x.remove()
}