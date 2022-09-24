ёёёёёёёёёёёёёёёёёёёёёёёёёёёёёё//function greet() {
    //console.log('Привет - ')
  //}
  //const arrow = (name, age) => {
    //console.log('Привет - ', name, age)
  //}
  //const arrow2 = name => console.log('Привет - ', name)
  //const pow2 = num => num ** 2
  //const sum = (a = 40, b = a * 2) => a + b
  //function sumAll(...all) {
    //let result = 0
    //for (let num of all) {
      //result += num
    //}
    //return result
  //}

  //const res = sumAll(1, 2, 3, 4, 5)
  //function createMember(name) {
    //return function(lastName) {
      //console.log(name + lastName)
    //}
  //}
  
  //const logWithLastName = createMember('Artem')
  //console.log(logWithLastName('artem'))
  //console.log(logWithLastName('ARTEM')) 



  //const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседс']
// const people = [
//   {name: 'Artem', budget: 1337},
//   {name: 'artem', budget: 322},
//   {name: 'ARTEM', budget: 228}
// ]
//const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
//function addItemToEnd() {



// Method
// cars.push('Рено')
// cars.unshift('Волга')
//
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//   if (person.budget === 3500) {
//     findedPerson = person
//   }
// }

// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//   return person.budget === 3500
// })
// const person = people.find(function(person) {
//   return person.budget === 3500
// })
// console.log(person)
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('Мазда!'))

// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })
//
//const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

//const people = [
  //{name: 'Artem', budget: 1337},
  //{name: 'artem', budget: 322},
  //{name: 'ARTEM', budget: 228}
//]

//const allBudget = people
  //.filter(person => person.budget > 2000)
  //.reduce((acc, person) => {
  //  acc += person.budget
//return acc
 // }, 0)

//console.log(allBudget)



/*
const person = {
  name: 'Artem',
  age: 19,
  isProgrammer: false,
  languages: ['ru', 'en'],
  'complex key': 'Complex value',           //если брать в '.', то это тоже будет являться ключем 
  ['key_' + (1+3)]: 'Computed Key',         //обрачивать свойство в квадратные скобки, тоже будет являться ключем
  greet() {
    console.log('greet from person')
  },
  info() {
    //console.log('this:', this)
    console.info('Выводит информацию про человека', this.name)
  }
}          
/*                                          //возможности обьекта:
console.log(person.name)                    //обращение к полям
console.log(person['age'])                  //обращение к полям через строковую составляющую
console.log(['complex key'])                //такая форма обращение к динамическим составляющим
person.greet()                              //вызывание методов

delete person('key_4')                      //удаляет ненужный ключ полностьюcью
console.log(person)
*/


//Object.keys(person).forEach((key)=> {       //делает итерацию по массиву где первым параметром принимает collback ф-цию(в нашем случае key)
//console.log('key:', key)
//console.log('value:', person[key])
//})


                                                                  //OBJECT
/*
                                                                  
const logger = {
  keys() {
    console.log('Object keys:', Object.keys(this))      //вот в этом методе 'this' будет тем обьектом, который мы сами передадим, в нашем случае это 'person' и на выходе мы получаем ф-цию bound который можем пользоваться
  },
  keysAndValues() {
    Object.keys(this).forEach((key)=> {
      console.log(`"${key}": ${this[key]}`)
    })
  },
  withParams(top=false, between=false, bottom=false,){
    if (top) {
      console.log('---Start---')
    }
    Object.keys(this).forEach((key, index, array)=> {                //forEach принимает 3 параметра 'key, index, array'
      console.log(`"${key}": ${this[key]}`)
      if (between && index !== array.length - 1) {
        console.log('----------')
      }
    })
    if (bottom) {
      console.log('---End---')
    }
  }
} 
//const bound = logger.keys.bind(logger)         // возвращает новую ф-цию
//bound() 
//logger.keys.call(person)                       //он сразу же вызывает функцию (одна из версий вызова)
//logger.keysAndValues.call(logger)              
//logger.withParams.call(person, true, true, true)      //метод call принимает в себя неограниченное кол-во параметров
logger.withParams.apply(person, [true, true, true])     //метод apply принмает всегда в себя 2 параметра, второй параметр ВСЕГДА является массивом из тех аргументов, которые нужны для фун-ции




*/
                                                                        //ASYNC



/*
const timeout = setTimeout(()=>{
 console.log('After timeout') 
}, 2500)

clearTimeout(timeout)

const interval = setInterval(()=>{
  console.log('After timeout') 
 }, 1000)

 clearInterval(interval)
*/
/*
const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {         //два параметра resolve-сообщает что ошибок не обнаружено, и метод reject-говорит что при выполнении асинхр. кода произошла ошибка
    setTimeout(() => {
      reosolve('Что-то пошло не так.')
    }, wait)  
  })
  return promise
} 

delay(2500)
  .then(() => {
      console.log('after 2 seconds')
  })
  .catch(err => console.error('Error',err))                 //попадаем сюда, когда выдает ошибку
  .finally( ()=> console.log('Finally'))                    //не принимаем никаких параметров 

const getData = () => new Promise(resolve => resolve([      //обернули асинх. код в promise
  1, 2, 3, 4, 5
]))
getData().then(data => console.log(data))

async function asyncExample() {                             //сделать функцию асинхронной, дописать спереди фун-ции 'async'
  try{
    await delay(3000)
    const data = await getData()
    console.log('Data', data)
  } catch (e) {
    console.log(e)
  }
  finally {
    console.log('finally')
  }
} 
asyncExample()
*/


                                                                      //DOM
                                                                      
                                                                      

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
const heading2 = document.querySelector('h2')


const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')


setTimeout(() => {
  addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Click on link', event.target.getAttribute('href'))
  const url = event.target.getAttribute('href')

  window.location = url
})


setTimeout(() => {
  addStylesTo(link, 'Привет', 'blue')
}, 3000)

setTimeout(() => {
  addStylesTo(heading2, 'Здарова', 'yellow', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = 'black'
  node.style.padding = '2rem'
  node.style.display = 'block'
  node.style.width = '100%'

 
  if (fontSize) {                                           // falsy: '', undefined, null, 0, false - все случаи
    node.style.fontSize = fontSize
  }
}

heading.onclick = () => {
  if (heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.backgroundColor = '#fff'
  } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = '#000'
  }
}


heading2.addEventListener('dblclick', () => {
  if (heading2.style.color === 'yellow') {
    heading2.style.color = '#000'
    heading2.style.backgroundColor = '#fff'
  } else {
    heading2.style.color = 'yellow'
    heading2.style.backgroundColor = '#000'
  }
})








