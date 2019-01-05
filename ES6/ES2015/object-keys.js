let obj = { a: "foo", b: "bar" }
Object.keys(obj).forEach(key => {
    console.log(`prop ${key}: ${obj[key]}`)
})
/* == RESULTS

  prop a :  foo
  prop b :  bar

*/
