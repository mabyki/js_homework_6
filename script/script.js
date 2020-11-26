console.log('================== 1 ==================');

    let str = 'aaa@bbb@ccc';

    str = str.replace(/@/g, '!');

    console.log(str);


console.log('================== 2 ==================');


    let date = '2025-12-31';
    date = date.replace(/(2025)-12-(31)/, '$2/12/$1');
    
    console.log(date);


console.log('================== 3 ==================');


    let str1 = 'Я учу javascript!';

    console.log(str1.substr(2, 3));
    console.log(str1.substr(6, 10));
    console.log(str1.substring(2, 6));
    console.log(str1.substring(6, 16));
    console.log(str1.slice(2, 6));
    console.log(str1.slice(6, 16));


console.log('================== 4 ==================');


    let arr = [4, 2, 5, 19, 13, 0, 10],
        sum = 0,
        cube = 0;
        for(let i = 0; i < arr.length; i++){
            cube = Math.pow(arr[i], 3);
            sum += cube;
        }
        console.log(Math.sqrt(sum));


console.log('================== 5 ==================');


    let a = 3,
        b = 5,
        c;
        c = Math.abs(a - b);
        console.log(c)


console.log('================== 6 ==================');


let dateTime = new Date();

function gettDate(p){
        if(p > 0 && p < 10){
            return p = '0' + p;
        }else{
            return p;
        }
    }
console.log(`${gettDate(dateTime.getHours())}:${gettDate(dateTime.getMinutes())}:${gettDate(dateTime.getSeconds())} ${gettDate(dateTime.getDate())}.${gettDate(dateTime.getMonth()+1)}.${gettDate(dateTime.getFullYear())}`)

console.log('================== 7 ==================');


    let str2 = 'aa aba abba abbba abca abea';
        console.log(str2.match(/ab+a/g));


console.log('================== 8 ==================');

function telephone(a){
    let regExp = /\+[0-9]{3}\s?\(?-?[0-9]{2}\)?\s??-?[0-9]{3}\s?-?[0-9]{2}\s?-?[0-9]{2}/,
        tel = a;
        if(regExp.test(tel) == true){
            return true;
        }else{
            return false;
        }
}
console.log(telephone('+234659876572')) // ?


console.log('================== 9 ==================');





console.log('================== 10 ==================');