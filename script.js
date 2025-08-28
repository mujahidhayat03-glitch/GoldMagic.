let balance = 1000;

// Auto profit every 2 hours (+2%)
setInterval(() => {
  let profit = balance * 0.02;
  balance += profit;
  document.getElementById("balance").innerText = balance.toFixed(2);
}, 7200000); // 2 hours in ms

function deposit() {
  let amount = parseFloat(document.getElementById("depositAmount").value);
  if (amount > 0) {
    balance += amount;
    document.getElementById("balance").innerText = balance.toFixed(2);
    alert("Deposit successful!");
  }
}

function withdraw() {
  let amount = parseFloat(document.getElementById("withdrawAmount").value);
  if (amount >= 1000 && amount <= balance) {
    balance -= amount;
    document.getElementById("balance").innerText = balance.toFixed(2);
    alert("Withdraw request sent!");
  } else {
    alert("Minimum withdraw is 1000 and must be <= balance.");
  }
}
