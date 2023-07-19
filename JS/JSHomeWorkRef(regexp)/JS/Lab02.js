var flag1=false,flag2= false,flag3 = false;

document.getElementById("account").onblur = accblur;
document.getElementById("pwd").onblur = pwbblur;
document.getElementById("date").onblur = dateblur;
document.getElementById("btnsubmit").onclick = formSubmit;


function accblur() {
    var theName = document.getElementById("account").value;
    var theNameLen = theName.length;
    if (theNameLen == 0) {
        document.getElementById("acccheck").innerHTML = "<img src='../images/error.png' />此欄位必須輸入";
    }
    else if (theNameLen >= 2) {
        var re = new RegExp("^[\u4E00-\u9FA5]{2,}$");
        if (re.test(theName)){
            document.getElementById("acccheck").innerHTML = "<img src='../images/check.png' />正確";
            flag1=true;
        }
        else {
            document.getElementById("acccheck").innerHTML = "<img src='../images/error.png' />姓名必須為中文字";
            
        }     
    }
    else {
        document.getElementById("acccheck").innerHTML = "<img src='../images/error.png' />姓名必須大於2個字";
    }
}

function pwbblur() {
    var thePwd = document.getElementById("pwd").value;
    var thePwdLen = thePwd.length;
    if (thePwdLen == 0) {
        document.getElementById("pwdcheck").innerHTML = "<img src='../images/error.png' />此欄位必須輸入";
    } else if (thePwdLen >= 6) {
        var re = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{6,}$/;
        if (re.test(thePwd)) {
            document.getElementById("pwdcheck").innerHTML = "<img src='../images/check.png' />正確";
            flag2 = true;
        } else {
            document.getElementById("pwdcheck").innerHTML = "<img src='../images/error.png' />密碼必須英文字母、數字、特殊字元";
        }
    } else {
        document.getElementById("pwdcheck").innerHTML = "<img src='../images/error.png' />密碼必須大於6個字";
    }
}

function dateblur() {
    var theDate = document.getElementById("date").value;
    var sDate = theDate.split("/");
    var nDate = new Date(theDate);
    if (theDate == "") {
        document.getElementById("dcheck").innerHTML = "<img src='../images/error.png' />此欄位必須輸入";
    } else if (theDate != "" && sDate[0] == nDate.getFullYear() && sDate[1] == (nDate.getMonth() + 1) && sDate[2] == nDate.getDate()) {
        document.getElementById("dcheck").innerHTML = "<img src='../images/check.png' />正確";
        flag3 = true;
    } else {
        document.getElementById("dcheck").innerHTML = "<img src='../images/error.png' />日期不正確";
    }
}

function formSubmit() {
    if (flag1 && flag2 && flag3) {
        document.getElementById("iddisplay").style.display = "block";
        document.getElementById("idName").innerHTML = document.getElementById("account").value;
        document.getElementById("idPwd").innerHTML = document.getElementById("pwd").value;
        document.getElementById("idDate").innerHTML = document.getElementById("date").value;
    } 

}