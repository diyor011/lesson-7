let users = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(users, 'boshlanishdagi array');

let juftSonlar = [];

for (let i = 0; i < users.length; i++) {
  if (users[i] % 2 == 0) {
    juftSonlar.push(users[i]);
  }
}

console.log(juftSonlar , 'juft sonlarga ajratilgan array');
