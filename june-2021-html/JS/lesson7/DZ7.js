function wakeup (energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (energy < 500) {
                reject('Не проснувся')
            } else {
                resolve('Проснувся');
            }
        }, 1000)

    })
}
function breakfast(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (energy < 200){
                reject('Не снідав')
            }
            else {
                resolve('Поснідав')
            }
        },500)

    })
}
function goWork(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(energy<100){
                reject('Не пішов на роботу')
            }
            else {
                resolve('Пішов на роботу')
            }
        },300)
    })

}
function goHome(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(energy<400){
                reject('не прийшов додому')
            }
            else {
                resolve('Прийшов додому')
            }
        },400)
    })

}
function supper(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(energy<400){
                reject('не повечеряв')
            }
            else {
                resolve('Повечеряв')
            }
        },400)
    })

}
function sleep(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(energy<300){
                reject('Не заснув')
            }
            else {
                resolve('Заснув')
            }
        },400)
    })

}


wakeup(1000)
    .then((result) => {
        console.log(result);
        return breakfast(400);
    })
    .then((result) => {
        console.log(result);
        return goWork(500);
    })
    .then((result) => {
        console.log(result);
        return goHome(400);
    })
    .then((result) => {
        console.log(result);
        return supper(400);
    })
    .then((result) => {
        console.log(result);
        return sleep(400);
    })
    .then((result) => {
        console.log(result);})

    .catch((error) => {
        console.log(error);
    })





// wakeup(400)
//     .then((result) => {
//         console.log(result);
//     })
//
//     .catch((error) => {
//         console.log(error);
//     })
