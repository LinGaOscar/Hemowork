
document.getElementById("account").onblur = accblur;
document.getElementById("pwd").onblur = pwbblur;
document.getElementById("date").onblur = dateblur;

function accblur() {
    let flag = false;
    let theName = document.getElementById("account").value;
    let theNameLen = theName.length;
    if (theName== "") {
        document.getElementById("acccheck").innerHTML = "<img src='../images/error.png' />此欄位必須輸入";
    }
    else if (theNameLen >= 2) {        
        for (let i = 0; i <theNameLen; i++) {
            let ch = theName.charCodeAt(i);
            if (ch >= 0x4E00 && ch <= 0x9FA5)
               flag = true;
            else {
                flag = false;
                break;
            }
        }    
        if (flag){
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
    let thePwd = document.getElementById("pwd").value;
    let thePwdLen = thePwd.length;
    
    let flag1 = false, flag2 = false, flag3 = false;

    if (thePwd == "")
        document.getElementById("pwdcheck").innerHTML = "<img src='../images/error.png' />此欄位必須輸入";
    else if (thePwdLen < 6)
        document.getElementById("pwdcheck").innerHTML = "<img src='../images/error.png' />密碼長度必須大於6";
    else {
        for (let i = 0; i <thePwdLen; i++) {
            let ch = thePwd.charAt(i).toUpperCase();
            if (ch >= "A" && ch <= "Z")
                flag1 = true;
            else if (ch >= "0" && ch <= "9")
                flag2 = true;
            else if (ch == "!" || ch == "@" || ch == "#" || ch == "$" || ch == "%" || ch == "^" || ch == "&" || ch == "*")
                flag3 = true;
            if (flag1 && flag2 && flag3) break;
        }
        if (flag1 && flag2 && flag3)
            document.getElementById("pwdcheck").innerHTML = "<img src='../images/check.png' />正確"; 
        else
            document.getElementById("pwdcheck").innerHTML = "<img src='../images/error.png' />密碼必須英文字母、數字、特殊字元";
    }    
}

function dateblur() {
    let flag = false;
    var theDate = document.getElementById("date").value;
    var sDate = theDate.split("/");
    var nDate = new Date(theDate);
    if (theDate == "") {
        document.getElementById("dcheck").innerHTML = "<img src='../images/error.png' />此欄位必須輸入";
    } else if (theDate != "" && sDate[0] == nDate.getFullYear() && sDate[1] == (nDate.getMonth() + 1) && sDate[2] == nDate.getDate()) {
        document.getElementById("dcheck").innerHTML = "<img src='../images/check.png' />正確";
        flag = true;
    } else {
        document.getElementById("dcheck").innerHTML = "<img src='../images/error.png' />日期不正確";
    }
}

