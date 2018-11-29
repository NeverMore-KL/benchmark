var a = [],
  b = []
for (var i = 1; i < 1000; i++) {
  a.push(i)
  b.push(i)
}
console.time('耗时forEach')
a.forEach(i => {})
console.timeEnd('耗时forEach')

console.time('耗时map')
b.map(i => i)
console.timeEnd('耗时map')
