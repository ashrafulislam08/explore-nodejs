const userData = new Promise((resolve, reject) => {
  const isUserAvailable = false;
  const users = ["Sakib", "Emon", "Bapparaz", "Alamgir"];
  if (isUserAvailable) {
    resolve(users);
  } else {
    reject("User not available");
  }
});

userData
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

const getAmount = new Promise((resolve, reject) => {
  const amount = 10;
  if (amount > 0) {
    resolve("Got amount");
  } else {
    reject("Enter a valid amount");
  }
});

getAmount
  .then((amount) => console.log(amount))
  .catch((amount) => console.log(amount));

const balance = 20000;

const transferAmount = (amount) => {
  const transfer = new Promise((resolve, reject) => {
    if (amount > 0 && amount <= balance) {
      resolve(`You have transferred amount ${amount} `);
    } else {
      reject("You have not much balance, You stupid poor!");
    }
  });
  return transfer;
};

transferAmount(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => console.log(error));
