function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000); 
}

let p1 = new Person();
console.log(p1.age);