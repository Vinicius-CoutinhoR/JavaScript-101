Array.prototype.forEach2 = (array) => {
    for (let index = 0; index < this.length; index++) {
        array(this[i], i, this);
    }
}

const approved = ['Tom', 'Marco', 'Jennie', 'Rachel'];
approved.forEach2((name, index) => console.log(`${index + 1}) ${name}`));