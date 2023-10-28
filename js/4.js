// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(n) {
    const a = [n - 1, n, n + 1];
    return a;
}

// Место для третьей задачи
function getMathResult(a, b) {
    if(typeof b != 'number' || b<=0){
        return a;
    }
    let res = '';
    for (let i = 0; i < b; i++){
        res = res + a*(i + 1);
        res = `${res}${(i === (b - 1))?'':'---'}`;
    }
    return res;
}