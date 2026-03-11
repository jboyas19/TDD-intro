export function sumDouble(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 2;
  }
  return num1 + num2;
}

export function makes10(num1, num2) {
  return num1 === 10 || num2 === 10 || num1 + num2 === 10;
}

export function near100(n, distance) {
  return Math.abs(100 - n) <= distance;
}

export function isMultiple35(n) {
  return n % 3 === 0 || n % 5 === 0;
}

export function shareLastDigit(num1, num2) {
  return num1 % 10 === num2 % 10;
}

export function isColdAndHot(temp1, temp2) {
  return (temp1 < 0 && temp2 > 100) || (temp2 < 0 && temp1 > 100);
}

export function makeABBA(A, B) {
  return A + B + B + A;
}

export function makeSLS(str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  }
  return str2 + str1 + str2;
}

export function canEnterClub(you, date) {
  if (you <= 2 || date <= 2) {
    return 0;
  }
  if (you >= 8 || date >= 8) {
    return 2;
  }
  return 1;
}

export function shouldAnswerPhone(isMorning, isBoss, isAsleep) {
  if (isAsleep) {
    return false;
  }
  if (isMorning && !isBoss) {
    return false;
  }
  return true;
}