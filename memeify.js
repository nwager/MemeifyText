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