// Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
function deliveryMessage(day) {
    day.forEach(day => {
        switch (day) {
            case "Mon":
                console.log('Same-day delivery!');
                break;

            case "Tue":
                console.log('To be delivered next week!');
                break;

            case "Wed":
                console.log('To be delivered tomorrow!');
                break;

            case "Thur":
                console.log('To be delivered during the weekend!');
                break;

            case "Fri":
                console.log('To be delivered next month!');
                break;

            case "Sat":
            case "Sun":
                console.log("We'll get back to you shortly!");
                break;
        };
    });
};

const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
deliveryMessage(days);


// Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".
function checkBookStatus(statuses) {
    statuses.forEach(status => {
        if (status === "available") {
            console.log("Ready to lend");
        } else if (status === "borrowed") {
            console.log("Checked out");
        } else if (status === "booked") {
            console.log("Borrowed");
        } else 
            console.log("Status Unknown");
    });
};

const bookStatus = ["available", "borrowed", "booked", "shelved"];
checkBookStatus(bookStatus);

// Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
function checkCustomerAges(ages) {
    ages.forEach(age => {
        if (age >= 18) {
            console.log("Adult");
        } else {
            console.log("Minor");
        }
    });
}

const customerAge = [34, 12, 21, 32, 11,22];
checkCustomerAges(customerAge);


// Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
function countdownLives(startLives) {
    while (startLives > 0) {
        console.log(`You have ${startLives} lives left`);
        startLives--;
    }
};

countdownLives(5);

// Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
function processFeedback(feedbackArray) {
    do {
        console.log(feedbackArray.shift());
    } while (feedbackArray.length > 0);
}

const userFeedback = ["Good", "Improvement Needed", "Great", "Amazing", "Beautiful"];
processFeedback(userFeedback);


// Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
function checkLoginStatuses(statuses) {
    statuses.forEach(status => {
        if (status === "logged in") {
            console.log("Welcome back!");
        } else {
            console.log("Please log in");
        }
    });
}

const loginStatus = ["logged in", "not logged in"];
checkLoginStatuses(loginStatus);


// Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
function addressUrgency (supportTickets){
    supportTickets.forEach(supportTicket => {
        switch (supportTicket){
            case "low":
                console.log("Please take a seat and wait to be helped")
                break;

            case "medium":
                console.log("Please join the queue")
                break;

            case "high":
                console.log("Be with you in a sec")
                break;

            default:
                console.log("Welcome to the Amusement Park, please get a ticket!")
        }
    });
}

const ticketPriority = ["low", "medium", "high", "just arrived"];
addressUrgency(ticketPriority);


// Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
function quizCountdown(seconds) {
    while (seconds >= 0) {
        console.log(seconds);
        seconds--;
    }
}

quizCountdown(10);