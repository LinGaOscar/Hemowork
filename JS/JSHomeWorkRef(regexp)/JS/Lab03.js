var imgs;

    imgs = document.querySelectorAll("img.s");
    for (var i = 0, imgsLen = imgs.length; i < imgsLen; i++) {
        imgs[i].onmouseover = mouseOver;
        imgs[i].onmouseout = mouseOut;
        imgs[i].onclick = Click;
        imgs[i].ondblclick =dblClick;
    }



var flag = true;
function mouseOver() {
    var starLen = this.id.substr(3);
    if (flag) {
        for (var i = 0; i <= starLen; i++) {
            imgs[i].className = "n";
        }
        starLen++;
        document.getElementById("iddiv").innerHTML = starLen + "顆星星";
    }
}

function mouseOut() {
    var starLen = this.id.substr(3);

    if (flag) {        
        for (var i = 0; i <= starLen; i++) {
            imgs[i].className = "s";
        }
        document.getElementById("iddiv").innerHTML = "評價是幾顆星呢？";
    }
}

function Click() {
    flag=false;
    var starLen = Number(this.id.substr(3))+1;
    document.getElementById("iddiv").innerHTML = "評價是"+starLen+"顆星";
}

function dblClick() {
    flag = true;
    for (var i = 0; i <= 4; i++) {
        imgs[i].className = "s";
    }
    document.getElementById("iddiv").innerHTML = "評價是幾顆星呢？";
}