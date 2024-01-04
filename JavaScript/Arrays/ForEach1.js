const approved = ['Tom', 'Marco', 'Jennie', 'Rachel'];

approved.forEach((name, index) => console.log(`${index + 1}) ${name}`));

approved.forEach((name) => console.log(name));

const displayApproved = approved => console.log(approved);
approved.forEach(displayApproved);