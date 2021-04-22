let p = new Promise((resolve, reject) => {
  let sum = 2+5;
  if (sum == 4) {
    resolve('Sum does equal 4')
  } else {
    reject('Sum does not equal 4...')
  }
})

p.then((message) => {
  console.log(message)
}).catch((message) => {
  console.log(message)
});