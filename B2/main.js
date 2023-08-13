let x = 0;
while (x<10) {
    console.log(x+=1);
}

do {
    console.log(x++);
} while (x<10);

for (var i=0;i<10;i++) {
    alert(i);
}

let myNumber = [0,1,2];
let myString = ["một","hai","ba"];

let i = 0;
while (i < 3) {
    console.log(i + ":" + myString[i]);
    i++;
} while (i < 3);



alert(myString[2]);
console.log(myString);
console.log(myNumber);

for (i=0; i < 2; i++) {
    alert(i + ":" + myString[i]);
}
