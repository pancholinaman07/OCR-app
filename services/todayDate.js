
function getDate(){// Get the current date
    const currentDate = new Date();

// Extract year, month, and day
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');

// Format the date in "yyyy-mm-dd" format
    return `${year}-${month}-${day}`;
}

module.exports = {
    getDate,
}
