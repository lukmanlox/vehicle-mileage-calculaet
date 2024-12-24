function calculateMileage() {
    const distance = parseFloat(document.getElementById("distance").value);
    const petrolPrice = parseFloat(document.getElementById("petrolPrice").value);
    const amountSpent = parseFloat(document.getElementById("amountSpent").value);

    if (distance > 0 && petrolPrice > 0 && amountSpent > 0) {
        const litres = amountSpent / petrolPrice;
        const mileage = distance / litres;
        document.getElementById("mileageResult").innerText = mileage.toFixed(2);
    } else {
        alert("Please enter valid positive numbers for all fields!");
    }
}

function calculateFuelSpent() {
    const distance = parseFloat(document.getElementById("fuelDistance").value);
    const fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
    const mileage = parseFloat(document.getElementById("averageMileage").value);

    if (distance > 0 && fuelPrice > 0 && mileage > 0) {
        const litresUsed = distance / mileage;
        const spentPrice = litresUsed * fuelPrice;
        document.getElementById("fuelResult").innerText = spentPrice.toFixed(2);
    } else {
        alert("Please enter valid positive numbers for all fields!");
    }
}