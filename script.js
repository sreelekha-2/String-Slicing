let str = 'My Name is Sreelekha';

function fstTask() {
  for (let i = 0; i < str.length; i++) {
    setTimeout(function () {
      console.log(str.slice(0, i + 1));
    }, i * 1000);
  }
}

function secTask() {
  for (let i = 0; i < str.length; i++) {
    setTimeout(function () {
      let j = str.length - i;
      console.log(str.slice(0, j));
    }, i * 1000);
  }
}

fstTask();

setTimeout(secTask, str.length * 1000);
