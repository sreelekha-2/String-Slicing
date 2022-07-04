let str = 'My Name is Sreelekha';

let fstTask = false;
for (let i = 0; i < str.length; i++) {
  setTimeout(function () {
    console.log(str.slice(0, i + 1));
  }, i * 1000);
}
