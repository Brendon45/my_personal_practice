
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop
// for (i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }


// for each 
// companies.forEach(function(company, index) {
//     console.log(company);
//     console.log(company.name);
// });


// for (let i = 0; i < ages.length; i++)
// {
//     if(ages[i] >= 25) {
//        oldAge.push(ages[i]); 
//     }
// }


// // filter
// const oldAge = ages.filter(function(age){
//     if (age = 21){
//         return true;
//     }
// });

// const oldAge = ages.filter(age => age >= 21)
// console.log(oldAge);

// filter the companies
// const companiesRetail = companies.filter(function(companies) {
//     if (companies.category === 'Retail')
//     {
//         return companies;
//     }
// });

// const companiesRetail = companies.filter(company => company.category === "Retail")

// console.log(companiesRetail);

// map

// const testMap = companies.map(function(company) {
//     return company.name;
// });

// const testMap = companies.map( company => company.name)

// const testMap = companies.map(function(company) {
//     if (company.category === "Retail") {
//         return `This company ${company.name} was created at ${company.start}`
//     }
//     else{
//         return "company not found";
//     }
// });

// const ageSquare = ages.map(function (age) {
//     return Math.sqrt(age)
// }).map( age => age * 2)

// // const agetimesTwo = ages.map( age => age * 2)
// console.log(ageSquare);


// sort companies by start year 
// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start)
//     {
//         return 1;
//     }else {
//         return -1;
//     }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1)); 

// console.log(sortedCompanies);

// sort companies by age 

// const sortAges = ages.sort((a, b) => a - b );

// console.log(sortAges);


// reduce 
// using a foor loop 
// let ageSum = 0;

// for (i =0 ; i < ages.length; i++) 
// {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce( function(total, age) {
//     return total + age;
// }, 0);

// const ageSum = ages.reduce((total, ages) => (total + ages), 0)



// get total years for all companies 
 
const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
}, 0);

console.log(totalYears);
