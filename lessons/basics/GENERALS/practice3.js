
person = {
    name : 'Cobby',
    age : 21,
    nationality : 'Ghanaian',
    city : 'Accra',
    gender: 'Male'
};

// Accessing element 
console.log(person.name);
console.log(person["age"]);

// modifying element 
console.log(person.nationality = "American");
console.log(person["age"] = 22);

// Add new property 
console.log(person.height = 23.5);
console.log(person['maritalStatus'] = null);

// Deleting property
delete person.height;

// check if property exists
console.log("name" in person);
console.log(person.hasOwnProperty("height"));

for (let key in person)
{
    console.log(key,":", person[key]);
}