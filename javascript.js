// Задача 1
function typeOfType(value1, value2, operator) {
  if (typeof Value1 !== "number" || typeof Value2 !== "number") {
    return "Ошибка! Значения должны быть только числами";
  }
  switch (operator) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      if (value2 === 0) {
        return "Ошибка! На ноль делить нельзя";
      }
      return value1 / value2;
    case "%":
      if (value2 === 0) {
        return "Ошибка! Деление на ноль";
      }
      return value1 % value2;
    default:
      return "Ошибка! Неподдерживаемый оператор";
  }
}
console.log(typeOfType(12, 5, "+"));
// Задача 2
function defineType(yourValue) {
  return "Тип данных:" + " " + typeof yourValue;
}
console.log(defineType("Проверка"));
// Задача 3
function checkNum(num) {
  return (
    typeof num === "number" && Number.isFinite(num) && Number.isInteger(num)
  );
}
console.log(checkNum(20));
//Задача 4
function changeTemperature(value) {
  console.log("Температура в Фаренгейтах" + " " + ((value * 9) / 5 + 32));
  console.log("Температура в Кельвинах" + " " + (value + 273.15));
}
changeTemperature(40);
//Задача 5
function generatePassword(num) {
  let password = "";
  let symbol =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
  let i = 0;
  while (i < num) {
    password += symbol.charAt(Math.floor(Math.random() * symbol.length));
    i++;
  }
  return password;
}
console.log("Твой пароль:" + " " + generatePassword(10));
//Задача 6
function CheckOperation (a,b,c,result,predictedValue) {
  a = 1;
  b = 3;
  c = 4;
  result =  Boolean (a + b && (c * a)) || ((c / a) && b - 1);
  predictedValue = true;
  if (result === predictedValue) {
    return true
  }
  else 
  return false;
}
console.log(CheckOperation());
//Задача 7
function educationRating (assessment) {
    if (typeof assessment !== "number")
    return "Введите цифры"
    else if (assessment < 0)
    return "Ошибка, отрицательное значение";
    else if ( assessment>=90 && assessment<=100)
    return "A (Excellent/Very Good)";
    else if ( assessment>=80 && assessment<=89)
    return "B (Good/Above average)"
    else if ( assessment>=70 && assessment<=79)
    return "C (Satisfactory/Average)"
    else if ( assessment>=60 && assessment<=69)
    return "D (Poor/Below average)"
    else if(assessment >= 0 && assessment < 60)
    return "F (Fail)"
    else
    return "Некорректное значение";
}
console.log(educationRating(11))
//Задача 8
function nameOfDay(numDate) {
  switch (numDate) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
      default:
        return "Ошибка! Других дней недели не существует"
  }
}
console.log(nameOfDay(9));
//Задача 9
function determineYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
    return "Год високосный:" + year;
  else return "Год невисокосный:" + year;
}
console.log(determineYear(2010));
