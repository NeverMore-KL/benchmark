var Benchmark = require('benchmark')
var suite = new Benchmark.Suite()

var number = '100'
var parse1 = function(str) {
  return +str
}
var parse2 = function(str) {
  return parseInt(str, 10)
}
var parse3 = function(str) {
  return Number(str)
}
suite
  .add('+', function() {
    parse1(number)
  })
  .add('parseInt', function() {
    parse2(number)
  })
  .add('Number', function() {
    parse3(number)
  })
  .on('cycle', function(event) {
    console.log(event)
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
