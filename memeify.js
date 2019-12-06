function claps() {
    var memeStr = document.getElementById("memeText").value.toUpperCase();
    var outputStr = "";
    for (var i = 0; i < memeStr.length; i++) {
        var memeChar = memeStr.charAt(i);
        if (memeChar != ' ') {
            if (i < memeStr.length - 1) {
                outputStr += memeStr.charAt(i) + "👏";
            } else {
                outputStr += memeChar;
            }
        }
    }
    document.getElementById("memeOutput").innerHTML = outputStr;
}

function getText() {
    var text = document.getElementById("memeText");
    text.focus();
    setTimeout(function() { text.value = "test"; }, 50);
    setTimeout(function() { text.blur(); }, 100);
    /*// unfocus the field field
    var tmp = document.createElement("input");
    document.body.appendChild(tmp);
    tmp.focus();
    document.body.removeChild(tmp);
    alert("U")
    // end unfocus block*/
    //alert(document.getElementById("memeOutput").innerHTML);
}