function goodNews(grade) {
    if(grade >= 7) {
        console.log('Passed with ' + grade);
    }
}

goodNews(8.1);
goodNews(6.1);

function ifTrue(value) {
    if(value) {
        console.log('True: ' + value)
    }
}

ifTrue();
ifTrue(null);
ifTrue(undefined);
ifTrue(NaN);
ifTrue('');
ifTrue(0);
ifTrue(-1);
ifTrue(' ');
ifTrue('?');
ifTrue([]);
ifTrue([1, 2]);
ifTrue({});