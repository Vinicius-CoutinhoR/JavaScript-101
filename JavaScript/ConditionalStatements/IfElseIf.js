Number.prototype.enter = function (begin, end) {
    return this >= begin && this <= end;
}

const printResult = function (grade) {
    if (grade.enter(9, 10)) {
        console.log('Congrats!');
    } else if(grade.enter(7, 8.99)) {
        console.log('Approved');
    } else if(grade.enter(4, 6.99)) {
        console.log('Recovery exam');
    } else if(grade.enter(0, 3.99)) {
        console.log('Reproved');
    } else {
        console.log('Invalid grade!');
    }
}

printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2.3);
printResult(-1);
printResult(11);