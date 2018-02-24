module.exports = function solveEquation(equation) {
  var equationStringArr = equation.split(' ');
  var a = Number(equationStringArr[0]);
  if (equationStringArr[3] == "+"){
    var b = Number(equationStringArr[4]);
  }
  else {
    var b = -Number(equationStringArr[4]);
  }
  if (equationStringArr[7] == "+"){
    var c = Number(equationStringArr[8]);
  }
  else {
    var c = -Number(equationStringArr[8]);
  }
  var D = (b * b) - (4 * a * c);
  var x1 = Math.round(-b + Math.sqrt(D)) / (2 * a);
  var x2 = Math.round(-b - Math.sqrt(D)) / (2 * a);
  if (x1 > x2) {
    var results = [x2, x1];
  }
  else {
    var results = [x1, x2];
  }
  return results;
}