const value = 'Global';

function fun() {
    console.log(value);
}

function exec() {
    const value = 'Local';
    fun();
}

exec();

