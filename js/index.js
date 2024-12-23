console.log(`Analyze a library Collection : `);
let book = ["SOPHIE'S WORLD", "L'ALCHIMISTE", "RICH DAD POOR DAD", "THE 40 RULES OF LOVE", "NE LE DIS PAS A MAMAN"];
for (i = 0; i < book.length; i++) {
    console.log(`${book[i]}`);
    if (book[i] === "JavaScript") {
        console.log(`${book[i]} is about javascript`);
    }
}
let obj_1 = {
    nbr_book: 5,
    nbr_javascript: 0,
}
console.log(obj_1);
console.log(`Grade Analyze : `);
let grade = [85, 92, 78, 90, 88];
for (i = 0; i < grade.length; i++) {
    console.log(grade[i]);
    if (grade[i] === 90) {
        console.log(`Grade ${90} is execellent`);
    }
}
let obj_2 = {
    tnbr_grade: 5,
    ex_grades: 4,
    av_grades: 1,
}
console.log(obj_2);
console.log(`Inventory Tracker : `);
let array = [];
let obj_3 = {
    n:null,
    qu:null,
}
array = [{ n:'Ahmed', qu:5},{n:'Nouhaila',qu:1}];
for (i = 0; i <array.length;i++){
    console.log(`${i+1}:${JSON.stringify(array[i])}`);
}