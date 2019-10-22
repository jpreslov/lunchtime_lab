// let timer = (function() {
//     const wait = (delay) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, delay);
//         });
//     };

//   function timerInstant(a, b) {
//         return wait(3000)
//         .then(console.log('One'));
//     } 

//     function timer3Seconds(a, b) {
//         return wait(2000)
//         .then(console.log('Two'))
//     }

//     function timer2Seconds(a, b) {
//         return wait(1000)
//         .then(console.log('Three'))
//     }

//     function timer1Second(a, b) {
//         return wait(1000)
//         .then(console.log('Four'))
//     }


//     return { timerInstant, timer3Seconds, timer2Seconds, timer1Second };
// })();

// async function testFunction(){
//     try {
//         let result = await timer.timerInstant();
//         let result2 = await timer.timer3Seconds();
//         let result3 = await timer.timer2Seconds();
//         let result4 = await timer.timer1Second();
        
//     } catch (err) {
//         console.error(err)
//     }
// };

// testFunction();

///// Countdown
// let num 
// function done(){
//     console.log('Job\'s done!')
// }

// function countdown (num, callback){
  
//     console.log(num);
//     if (num > 1) {
//         setTimeout(() => {
//         num = num - 1;
//         countdown(num, done)  
//     }, 1000)
//     } else{
//         callback()
//     }

// }

// countdown (5, done)

//lunch promise
let lunchTime = true
const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime == true) {
            let object = {
                lunch: 'Makarios',
                drink: 'Yerba Mate'
            }
            resolve(console.log(object))
        } else {
        reject(new Error('There was a mistake.'))
        }
    })
}

orderMeSomeFood().then('do something')


    
 




