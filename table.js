let table = +prompt("enter any num")
let num = 6;
for (let i = 1; i <= 10; i++) {
    if (table == 0){
        console.log(num + "x" + i + "=" + i * num)
    } else{
        console.log(table + "X" + i + "=" + i * table)
    }
}