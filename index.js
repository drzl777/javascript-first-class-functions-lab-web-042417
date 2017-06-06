countdown = callback => {
  window.setTimeout(callback, 2)

}

createMultiplier = multiplierValue => {return (n) => multiplierValue * n}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


multiplier = (mult1, mult2) => {return mult1 * mult2}

var doublerWithBind = multiplier.bind(2)

var triplerWithBind = multiplier.bind(3)
