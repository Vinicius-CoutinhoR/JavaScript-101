const person = {
    greetings: 'Good Morning!',
    talk() {
        console.log(this.greetings);
    }
}

person.talk();
const talk = person.talk;
talk(); // OO and Functional paradigms in conflict

const personTalk = person.talk.bind(person);
personTalk();