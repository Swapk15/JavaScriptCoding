let a = [2,3,4,5];
let b = [4,5,6,7];
let commonArr = [];
function commonArray() {
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            commonArr.push(a[i]);
        }
    }
    return commonArr;
}
console.log(commonArray())