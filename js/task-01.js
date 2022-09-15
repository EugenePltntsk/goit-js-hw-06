
const findItems = document.querySelectorAll(".item"); 

console.log(`Number of categories: ${findItems.length}`);

findItems.forEach(item => { 
    const title = item.querySelector("h2").textContent;
    console.log(`Category: ${title}`);
    const newItems = item.querySelectorAll("li");
    console.log(`Elements: ${newItems.length}`);

})