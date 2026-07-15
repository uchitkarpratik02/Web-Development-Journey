const quotes=[
"Never Give Up",
"Practice Daily",
"Stay Consistent",
"Dream Big",
"Keep Learning"
];

setInterval(() => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(quotes[randomIndex]);
}, 5000);

function NextQuote(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex])
}