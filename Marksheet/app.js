Question # 6
var tableHeadings = ["Subject", "Total Marks", "Obtained Marks", "Percentage"];
var sub = [];
var marks = [];
var subPer = [];
var maxMarks = 100;
var obtMarks = 0;
var perTot = 0;
// Input & Calculations
var noOfSubjects = prompt("How many Subjects do you want to enter?")
var totMarks = maxMarks*noOfSubjects;
for(var i=0; i<noOfSubjects; i++){
    sub[i] = prompt("Enter Subject " + (i+1) + " Name");
    marks[i] = parseInt(prompt("Enter Subject " + (i+1) + " Marks"));
    subPer[i] = marks[i]/maxMarks*100;
    obtMarks = obtMarks + marks[i];
}
var totPer = obtMarks/totMarks*100;
document.write("<table border=1px>")
// Output
document.write("<tr>");
for(var i=0; i<tableHeadings.length; i++)
{
    document.write("<th>" + tableHeadings[i] + "</th>");
}
document.write("</tr>");
for(var i=0; i<noOfSubjects; i++){
    document.write("<tr>");
    document.write("<td>" + sub[i] + "</td>");
    document.write("<td>" + maxMarks + "</td>");
    document.write("<td>" + marks[i] + "</td>");
    document.write("<td>" + subPer[i] + "</td>");
    document.write("</tr>");
}
document.write("<tr>");
document.write("<td>" + "</td>");
document.write("<td>" + totMarks + "</td>");
document.write("<td>" + obtMarks + "</td>");
document.write("<td>" + totPer + "</td>");
document.write("</tr>");
document.write("</table>")