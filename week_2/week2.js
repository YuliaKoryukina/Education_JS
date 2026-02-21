//Задача 1
function checkPalindrom(valueText) {
    let lowerText = valueText.toLowerCase();
    let reversText = lowerText.split('').reverse().join('');
    if (lowerText === reversText) {
        return true + " " + "Это палиндром";
    } else {
        return false;
    }
}
console.log(checkPalindrom("шалаш"))
//Задача 2
function formatPhone(phone) {
  if (phone[0] === "8" || phone[0] === "7") {
    return "+7" + phone.slice(1);
  } else {
    return "Некорректный код";
  }
}
console.log(formatPhone("79261234567"));
//Задача 3
function checkString(yourText, separator) {
  return yourText.split(separator).length;
}
console.log(checkString("Текст, текст, еще, текст", " "));
//Задача 4
function passwordGenerate(length) {
  return Math.random().toString(36).slice(-length);
}
console.log(passwordGenerate(10));
//Задача 5
function checkText(text) {
  return text.replace(/\b\p{L}/gu, (c) => c.toUpperCase());
}
console.log(checkText("hello world"));
