let compareWithThis = function (param) {
    console.log(this === param);
}

compareWithThis(global); //node runtime

const obj = {};
compareWithThis = compareWithThis.bind(obj);
compareWithThis(global);
compareWithThis(obj);

let compareWithThisArrow = (param) => console.log(this === param);
compareWithThisArrow(global);
compareWithThisArrow(module.exports);

// .bind() doesn't works on arrow functions!


