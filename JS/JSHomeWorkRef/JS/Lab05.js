document.getElementById("idSelectYear").onchange = addDate;
document.getElementById("idSelectMonth").onchange = addDate;
document.getElementById("idSelectDate").onchange = displayDate;
for (i = 2011; i < 2021; i++) {     //新增年
    var opt = window.document.createElement("option");
    opt.value = i;
    opt.innerHTML = i;
    document.getElementById('idSelectYear').appendChild(opt);
}
for (i = 1; i <= 12; i++) {   //新增月
    var opt = window.document.createElement("option");
    opt.setAttribute("value", i);
    var optinnerHTML = document.createTextNode(i);
    opt.appendChild(optinnerHTML);
    //opt.value = i;
    //opt.innerHTML = i;               			
    document.getElementById('idSelectMonth').appendChild(opt);
}
addDate();
var yy, mm;
function addDate() {		//新增日
    var dlen = document.getElementById('idSelectDate').length;
    for (var i = 0; i < dlen; i++) {
        var opts = document.getElementById('idSelectDate').childNodes[0];
        document.getElementById('idSelectDate').removeChild(opts);
    }
    
    yy = document.getElementById('idSelectYear').value;
    mm = document.getElementById('idSelectMonth').value;
    var date = new Date(yy, mm, 0);
    var dlen = date.getDate();
    for (i = 1; i <= dlen; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        document.getElementById('idSelectDate').appendChild(opt);
    }
    
}

function displayDate() {
    var dd = document.getElementById("idSelectDate").value;
    document.getElementById("idsp").innerHTML = "西元" + yy + "年" + mm + "月" + dd + "日";
}