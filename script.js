let balance = 5000;

function checkBalance() {
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("message").innerHTML =
        "Your balance is ₹" + balance;
}

function deposit() {
    let amount = Number(document.getElementById("amount").value);

    if (amount > 0) {
        balance = balance + amount;

        document.getElementById("balance").innerHTML = balance;
        document.getElementById("message").innerHTML =
            "₹" + amount + " deposited successfully!";
    } else {
        document.getElementById("message").innerHTML =
            "Please enter a valid amount.";
    }
}

function withdraw() {
    let amount = Number(document.getElementById("amount").value);

    if (amount > 0 && amount <= balance) {
        balance = balance - amount;

        document.getElementById("balance").innerHTML = balance;
        document.getElementById("message").innerHTML =
            "₹" + amount + " withdrawn successfully!";
    } else if (amount > balance) {
        document.getElementById("message").innerHTML =
            "Insufficient balance!";
    } else {
        document.getElementById("message").innerHTML =
            "Please enter a valid amount.";
    }
}