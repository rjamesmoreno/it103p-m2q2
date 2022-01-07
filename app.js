let inputData = {};
new URLSearchParams(window.location.search).forEach((value, name) => {
    inputData[name] = value;
});

function calculateCalories(userData) {
    let gender = userData["gender"];
    let userBMR = 0;
    let userCalories = 0;

    if (gender === "genderMale") {
        userBMR = 10 * userData["weight"] + 6.25 * userData["height"] - 5 * userData["age"] + 5;
    } else {
        userBMR = 10 * userData["weight"] + 6.25 * userData["height"] - 5 * userData["age"] - 161;
    }

    switch (userData["activity"]) {
        case "1":
            userCalories = userBMR * 1.2;
            break;
        case "2":
            userCalories = userBMR * 1.375;
            break;
        case "3":
            userCalories = userBMR * 1.55;
            break;
        case "4":
            userCalories = userBMR * 1.725;
            break;
        case "5":
            userCalories = userBMR * 1.9;
            break;
        default:
            break;
    }

    console.log(gender);
    console.log(userCalories);
    console.log(userBMR)
    console.log(userData["weight"]);
    console.log(userData["activity"]);

    return userCalories;
}

document.getElementById("display-result")["innerHTML"] = calculateCalories(inputData);
