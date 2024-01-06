const count = true
let counFunction = function (resolve, reject) {
    if (count === true) {
        resolve('yes')
    }
    else{
        reject('no')
    }
}
let countv = new Promise(counFunction)
countv.then(_ => console.log(_)).catch( _ => console.log(_))
console.log(countv)