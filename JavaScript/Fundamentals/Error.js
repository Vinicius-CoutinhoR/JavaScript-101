function threatError(error) {
    // throw new Error('...');
    // throw 10;
    // throw true;
    throw {
        name: error.name,
        msg: error.message,
        date: new Date()
    }
}


function printUpperCaseName(objError) {
    try {
        console.log(objError.name.toUpperCase() + '!!!');
    } catch (e) {
        threatError(error);
    } finally {
        console.log('Finished');
    }
} 
    
    

const objError = { name: 'Daniel' } 
printUpperCaseName(objError);