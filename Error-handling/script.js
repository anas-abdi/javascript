let missingNameError = new Error("name can not be empty")
try {
    // Open db
    let firstName = "Anazi";
    if (firstName == undefined) {
        throw missingNameError
    } else {
        firstName = firstName.toUpperCase()
        console.log(firstName);
    }
    console.log("I reached at the end if try block")
} catch (error) {
    console.log(missingNameError.message);
} finally {
    // close db
    console.log("error or not code in my block always runs");
}



