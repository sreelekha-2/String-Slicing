let str = 'My Name is Sreelekha';

function fstTask() {
  for (let i = 0; i < str.length; i++) {
    setTimeout(function () {
      console.log(str.slice(0, i + 1));
    }, i * 1000);
  }
}
// let out = '';

// str.split('').forEach((ele, index) => {
//   setTimeout(function () {
//     out += ele;
//     console.log(out);
//   }, index * 1000);
// });

// let res = '';

// str.split('').forEach((ele, index) => {
//   setTimeout(function () {
//     console.log(str);
//   }, index * 1000);
// });

function secTask() {
  let k = 0;
  for (let j = str.length; j > 0; j--) {
    k = k + 1000;
    setTimeout(function () {
      console.log(str.slice(0, j));
    }, k + 1000);
  }
}

fstTask();

setTimeout(secTask, str.length * 1000);
