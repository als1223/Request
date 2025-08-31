function generateFixedLengthNumbers(count, length) {
  const numbers = [];
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(num);
  }

  return numbers.join(",");
}

const requests = [];
for (let i = 0; i < 1; i++) {
  const ids = generateFixedLengthNumbers(3, 3);
  const url = "https://it-kharkiv.com/";

  const request = fetch(url, {
    headers: {
    "accept": "application/sn, text/plain, */*",
    "accept-language": "en,en-US;q=0.9,ru;q=0.8,uk;q=0.7",
    "Referer": "https://it-kharkiv.com/spetsvuzavtomatyka-v-rejtyngu-next-250-vid-forbes/"
    },
    method: "GET"
  });

  requests.push(request);
}


Promise.all(requests).then(res => {
  console.log(res)
})

console.log(requests)