let operator = ''
let value1 = ''
let value2 = ''
const button = document.querySelectorAll('#button')

button.forEach((element) => {
  element.addEventListener('click', function () {
    clickFunction(element.value)
  })
})

function clickFunction(value) {
  if (!isNaN(parseFloat(value))) {
    setValue(value)
  } else if (value == 'del') {
    resetInput()
  } else if (value != '=') {
    $('#input').val('')
    value != '√' && value != '!'
      ? (operator = value)
      : countFromOperator((operator = value), value1)
  } else if (value == '=' || value == '√') {
    countFromOperator(operator, value1, value2)
  }
}

function countFromOperator(operator, value1, value2) {
  if (operator == '+') {
    $('#input').val(parseFloat(value1) + parseFloat(value2))
  } else if (operator == '-') {
    $('#input').val(value1 - value2)
  } else if (operator == '*') {
    $('#input').val(value1 * value2)
  } else if (operator == '/') {
    $('#input').val(value1 / value2)
  } else if (operator == '^') {
    $('#input').val(Math.pow(value1, value2))
  } else if (operator == '√') {
    $('#input').val(Math.sqrt(value1))
  } else if (operator == '%') {
    $('#input').val(value1 % value2)
  } else if (operator == '!') {
    $('#input').val(countFactorial(parseFloat(value1)))
  } else if (operator == 'P') {
    $('#input').val(
      countFactorial(parseFloat(value1)) /
        countFactorial(parseFloat(value1) - parseFloat(value2))
    )
  } else if (operator == 'C') {
    $('#input').val(
      countFactorial(parseFloat(value1)) /
        (countFactorial(value2) *
          countFactorial(parseFloat(value1) - parseFloat(value2)))
    )
  }
}

function countFactorial(value) {
  let result = 0
  if (value > 1) {
    while (value > 1) {
      result == 0
        ? (result = value * (value - 1))
        : (result = result * (value - 1))
      value--
    }
  } else if (value > 0 && value < 2) {
    result = 1
  }

  return result
}

function resetInput() {
  value1 = ''
  value2 = ''
  operator = ''
  $('#input').val('')
}

function setValue(value) {
  if (operator == '') {
    $('#input').val('')
    value1 += value.toString()
    $('#input').get(0).value = value1
  } else {
    $('#input').val('')
    value2 += value.toString()
    $('#input').get(0).value = value2
  }
}

$(document).ready(function () {
  $('#input').change(function (e) {
    if (operator == '') {
      value1 = e.target.value
    } else {
      value2 = e.target.value
    }
  })
})
