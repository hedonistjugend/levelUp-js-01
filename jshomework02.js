// 5. Рекурсия

function isEven(n) {
    var m = Math.sqrt(n * n); //модуль
    if (m == 0) {
        return true;
    } else if (m == 1) {
        return false;
    } else return isEven(m - 2);
}


// 6. Считаем бобы.

function countBs(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == "B") {
            result++;
        }
    }
    return result;
}


// 6. Считаем бобы. ++
function countChar(s, symbol) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == symbol) {
            result++;
        }
    }
    return result;
}


// 7. Сумма диапазона

function range(x, y, z) {
    var arr = [];
    if (z == undefined) {
        z = 1;
    };

    if (x < y) {
        for (x; x <= y; x += z) {
            arr.push(x);
        }
    } else {
        for (x; x >= y; x += z) {
            arr.push(x)
        }
    }
    return arr;
}

function sum(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        x += arr[i];
    }
    return x;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


// 8. Обращаем массив вспять.

function reverseArray(arr) {
 var newArr = [];
 for (var i = 0; i < arr.length; i++) {
   newArr.unshift(arr[i]);
 }
 return newArr;
}

function reverseArrayInPlace(arr) {
 var newArr = [];
     arr = reverseArray(arr);
       console.log(newArr[0]);
   arr = newArr.slice();
 return arr;
}
