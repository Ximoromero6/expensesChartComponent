(function() {
    const chart = document.querySelector(".chart");

    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            const dateToday = new Date();

            data.forEach((element, i) => {
                const newBar = document.createElement("div");

                dateToday.getDay() - 1 === i ? newBar.classList.add("today") : null;
                newBar.classList.add("bar");
                newBar.style.height = `${element.amount}%`;
                newBar.innerHTML = `
                    <span class="tooltip">$${element.amount}</span>
                    <small>${element.day}</small>
                `;

                chart.append(newBar);
            });
        });

})();