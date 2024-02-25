// That's a function that formats the received date
const dateFormat = (date: string) => {

    // Breaking the string in many parts through the '-' character
    let splittedDate = date.split('-');
    // Inverting the splitted string
    let invertedDate = splittedDate.reverse();
    // Joinning the inverted date string
    let joinnedDate = invertedDate.join('/');
    // Returning the formatted date
    return joinnedDate;

}

// Exporting Area
export { dateFormat };