console.log("<html>");
console.log("\t<head>");
console.log("\t\t<title>Node outputs HTML</title>");
console.log("\t</head>");
console.log("\t<body>");
console.log("\t\t<table>");
for (let i = 1; i <= 10; i++) {
    console.log("\t\t\t<tr>");
	console.log("\t\t\t\t<td> Row </td>" + "<td> " + i + " </td>");
    console.log("\t\t\t</tr>");
}
console.log("\t\t</table>");
console.log("\t</body>");
console.log("</html>");