function calculateAge() {
    // Get the input values for day, month, and year
    const birthDay = parseInt(document.getElementById("day").value, 10);
    const birthMonth = parseInt(document.getElementById("month").value, 10);
    const birthYear = parseInt(document.getElementById("year").value, 10);

    // If any field is empty or not a valid number, show an error message
    if (!birthDay || !birthMonth || !birthYear || birthDay > 31 || birthMonth > 12) {
        document.getElementById("result").textContent = "Please fill in valid fields.";
        return;
    }

    // Parse the inputs as a date object
    const dob = new Date(birthYear, birthMonth - 1, birthDay); // Month is zero-indexed
    const currentDate = new Date();

    // Check if date of birth is in the future
    if (dob > currentDate) {
        document.getElementById("result").textContent = "Date of birth cannot be in the future.";
        return;
    }

    // Calculate the difference in years, months, and days
    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    // Adjust the values if needed
    if (days < 0) {
        // Borrow days from the previous month
        months--;
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0); // Last day of the previous month
        days += lastMonthDate.getDate();
    }

    if (months < 0) {
        // Borrow months from the previous year
        years--;
        months += 12;
    }

    // Display the result
    document.getElementById("dash").textContent = years;
    document.getElementById("dash2").textContent = months;
    document.getElementById("dash3").textContent = days;

    // Clear any previous error message
    document.getElementById("result").textContent = "";
}
