var Husky = {
    "name": "Ngáo",
    "legs": 4,
    "color": "brown"
};


Var fruit = [["Grape",15],["Apple",10],["Orange",5]];
for (let i = 0; i < fruit.length; i++) {
    for (let j = 0; j < 2; j ++) {
        console.log(fruit[i][j])
    }
}


for (let i of fruit) {
    for (let j = 0; j < 2; j ++) {
        console.log(i[j])
    }
}



let i = 0
let j = 0
while (i < fruit.length) {
    while (j < 2) {
        console.log(fruit[i][j])
        j++
    }
    j = 0
    i++
}
