document.getElementById("convertBtn").onclick = function () {
    const km = document.getElementById("kmInput").value;
    const result = document.getElementById("result");

    if (km === "" || isNaN(km)) {
        result.textContent = "Please enter a valid number!";
        result.style.color = "red";
        return;
    }

    const miles = km * 0.621371;
    result.textContent = `${km} km = ${miles.toFixed(3)} miles`;
    result.style.color = "green";
};

document.getElementById("clearBtn").onclick = function () {
    document.getElementById("kmInput").value = "";
    document.getElementById("result").textContent = "";
};
