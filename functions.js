let dance = false;

function danceRepeat()  {
    console.log(dance);
    if (dance === true)  {
        clearInterval(prawnDance);
        dance = false;
    }
    else    {
        setInterval(prawnDance, 1000);
        dance = true;
    }
}   

function prawnDance() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 3);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function frontSway()    {
    var elem = document.getElementById("finger");
    var pos = 0;
    var dir = "right";
    var id = setInterval(frame, 1);
    function frame()    {
        if (dir == "right")   {
            if (pos == 500) {
                dir = "left";
            }
            else{
                pos+=4;
            }
            elem.style.left = pos + 'px';
        }
        else {
            if (pos == 0) {
                dir = "right";
            }
            else{
                pos-=2;
            }
            elem.style.left = pos + 'px';
        }
    }
}
