function Car(maxVelocity = 200, delta = 5) {

    // Private attribute
    let currentVelocity = 0;

    // Public method
    this.accelerate = () => {
        if (currentVelocity + delta < maxVelocity) {
            currentVelocity += delta;
        } else {
            currentVelocity = maxVelocity;
        }
    }

    this.getCurrentVelocity = () => {
        return currentVelocity;
    }
}  

const rx7 = new Car(280, 30);
rx7.accelerate();
rx7.accelerate();
rx7.accelerate();
rx7.accelerate();
rx7.accelerate();
rx7.accelerate();
rx7.accelerate();
console.log(rx7.getCurrentVelocity());

console.log(typeof Car);
console.log(typeof rx7);

