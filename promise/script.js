// People in the Argos queue
const peopleQueue = ["Ali", "Fatima", "Mohamed", "Ayaan"];

// Warehouse Lady: gets the box (sometimes fails)
function getBox(order) {
  return new Promise((resolve, reject) => {
    console.log(`Warehouse lady is getting box for ${order}...`);

    setTimeout(() => {
      let success = Math.random() > 0.3; // 70% success, 30% fail

      if (success) {
        resolve(`✅ Box for ${order} is ready`);
      } else {
        reject(`❌ Sorry, box for ${order} is out of stock!`);
      }
    }, 2000);
  });
}

// Counter Lady: serves one person
function servePerson(person) {
  console.log(`Counter lady is serving ${person}...`);

  return getBox(person)
    .then((message) => {
      console.log(`${person} receives their order: ${message}`);
    })
    .catch((error) => {
      console.log(`${person} is upset: ${error}`);
    })
    .finally(() => {
      console.log("------");
    });
}

// Process the queue step by step
let promiseChain = Promise.resolve();

peopleQueue.forEach((person) => {
  promiseChain = promiseChain.then(() => servePerson(person));
});

promiseChain.then(() => {
  console.log("All customers have been served (success or fail) 🎉");
});
