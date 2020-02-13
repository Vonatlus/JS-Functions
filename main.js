function fun1(num) {
  num = document.getElementById("max_numb").value;
  num = String(num).split(``);
  num = Math.max(...num);
  alert(`Max number is: ${num}`);
  console.log(num);
}

function fun2(base, power) {
  base = Number(prompt(`Enter base number:`));
  power = Number(prompt(`Enter power number:`));
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= base;
  }
  result = alert(`Exponentiation: ${result}`);

  console.log(result);
}

function fun3(str) {
  str = document.getElementById("name").value;
  str = str[0].toUpperCase() + str.slice(1).toLowerCase();
  console.log(str);
  document.getElementById("your_name").innerHTML = str;
}

function fun4(num) {
  let salary = document.getElementById("salary").value;
  let tax = document.getElementById("tax").value;
  num = Number(salary - (salary * tax) / 100);
  alert(`Your salary after taxes is: ${num}`);
  console.log(num);
}

function fun5(num) {
  let n = Math.ceil(document.getElementById("n").value);
  let m = Math.floor(document.getElementById("m").value);
  num = Math.floor(Math.random() * (m - n + 1)) + n;
  console.log(num);
  alert(`Random number: ${num}`);
}

function fun7(num) {
  let a = document.getElementById("money").value;
  let b = document.getElementById("currency").value;

  if (b == `$`) {
    alert(a * 25 + `₴`);
  } else if (b == `₴`) {
    alert(a / 25 + `$`);
  } else {
    alert(`Error 404`);
  }
  console.log(num);
}


