
let nums = new Set();

nums.add(4);
nums.add(6);
nums.add(true)
nums.add("Cobby");
nums.add("Sefah");
nums.add("Yees")

console.log(nums);

nums.forEach( num => {
    console.log(num);
})

nums.forEach( value => console.log(value));

console.log(nums.has(4))