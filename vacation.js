function vacation(peopleCount, typeOfGroup, day) {

    let totalPrice = '';

    switch (typeOfGroup) {
        case "Students":
            if (day === "Friday") {
                totalPrice = peopleCount * 8.45;
            }
            else if (day === "Saturday") {
                totalPrice = peopleCount * 9.80;
            }
            else if (day === "Sunday") {
                totalPrice = peopleCount * 10.46;
            }

            if (peopleCount >= 30) {
                totalPrice = totalPrice * 0.85;
            }
            break;

        case "Business":
            if (day === "Friday") {
                totalPrice = peopleCount * 10.90;
            }

            else if (day === "Saturday") {
                totalPrice = peopleCount * 15.60;
            }

            else if (day === "Sunday") {
                totalPrice = peopleCount * 16;
            }

            if (peopleCount >= 100) {
                totalPrice = totalPrice * 10;
            }
            break;

        case "Regular":
            if (day === "Friday") {
                totalPrice = peopleCount * 15;
            }
            else if (day === "Saturday") {
                totalPrice = peopleCount * 20;
            }
            else if (day === "Sunday") {
                totalPrice = peopleCount * 22.50;
            }

            if (peopleCount >= 10 && peopleCount <= 20) {
                totalPrice = totalPrice * 0.95;
            }
            break;

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30, "Students", "Sunday")