document.write("使用Table印出九九乘法表<br>");
document.write("<table>");
for (var i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (var j = 2; j <= 9; j++) {
        document.write("<td>" + j + "*" + i + "=" + i * j + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");