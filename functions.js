function prawnDance() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 3);
    function frame() {
        if (pos == 350) {
            var count = 0;
            if (count == 200)  {
            clearInterval(id);
            } else {
            elem.style.top = '300px';
            elem.style.left = '430px';
            elem.style.top = '70px';
            elem.style.left = '90px';
            elem.style.top = '700px';
            elem.style.left = '120px';
            count++;
            }
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
