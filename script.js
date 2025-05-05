//let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26\n7,Bilbo,None,111';



let cell = ''
let table = []
let row = []

for (let i = 0; i < csv.length; i++) {
	let char = csv[i] 


	if (char !== ',' && char !== '\n') {
		cell = cell + char
	} 

	if (char === ',') {
		row.push(cell)
		cell = ''
	} 

	if (char === '\n' || i === csv.length - 1) {
		row.push(cell)
		cell = ''
		table.push(row)
		row = []
	}
}
console.log(table)


// let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26';

// let rows = csv.split('\n'); // Split by new line
// let headers = rows.shift().split(',').map(h => h.toLowerCase()); // Extract and lowercase headers
// let data = rows.map(row => {
//     let values = row.split(',');
//     return headers.reduce((obj, header, index) => {
//         obj[header] = values[index];
//         return obj;
//     }, {});
// });

// console.log(data);

//******************************************this code is more dynamic using .map and .split************ */
// *****************************************Alot of googlegling so I dont want to use it but it works******
// ---------------------------Part 3 -----------------------------------------------------------
let table_obj = []
let row_template = {
    id: undefined,
    name: undefined,
    occupation: undefined,
    age: undefined
}
for (let r=1; r < table.length; r++) {
    let row = JSON.parse(JSON.stringify(row_template));
    row.id = table[r][0];
    row.name = table[r][1];
    row.occupation = table[r][2];
    row.age = table[r][3];
    table_obj.push(row);
}
console.log(table_obj)

//------------------------------Part 4 --------------------------------------------------------------
// Remove the last element
table_obj.pop();

// Insert new object at index 1
let newEntry = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
table_obj.splice(1, 0, newEntry); // Inserts at index 1

console.log(table_obj);

let totalAge = 0;
for (let i = 0; i < table_obj.length; i++) {
    totalAge += parseInt(table_obj[i].age, 10); // Convert age to an integer and add to total
}

let averageAge = totalAge / table_obj.length; // Divide by total number of objects
console.log(`Average Age: ${averageAge}`);




// ------------------------------Part 5 ---------------------------------------------------------------
let csvString = 'ID,Name,Occupation,Age\n';

csvString += '42,Bruce,Knight,41\n';
csvString += '48,Barry,Runner,25\n';
csvString += '57,Bob,Fry Cook,19\n';
csvString += '63,Blaine,Quiz Master,58\n';
csvString += '07,Bilbo,None,111\n';

console.log(csvString);



