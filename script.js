let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

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
table_obj = table_obj.pop;
console.log(table_obj);

