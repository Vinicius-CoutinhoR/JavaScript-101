class GrandFather {
    constructor(lastname = 'Smith') {
        this.lastname = lastname;
    }
}

class Father extends GrandFather {
    constructor(lastname = 'Smith', profession = 'Software Engineer') {
        super(lastname);
        this.profession = profession;
    }
}

class Son extends Father {
    constructor(lastname = 'Smith', profession) {
        super(lastname, profession);
    }
}

const son = new Son(undefined, 'Student');
console.log(son);