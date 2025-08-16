function findAcademicYear(age) {
  switch (age) {
    case 5: return "Year 1";
    case 6: return "Year 2";
    case 7: return "Year 3";
    case 8: return "Year 4";
    case 9: return "Year 5";
    case 10: return "Year 6";
    case 11: return "Year 7";
    case 12: return "Year 8";
    case 13: return "Year 9";
    case 14: return "Year 10";
    case 15: return "Year 11";
    case 16: return "Year 12 (Start of A-Levels / Sixth Form)";
    case 17: return "Year 13 (Final year of Sixth Form)";
    case 18: return "University - 1st Year";
    case 19: return "University - 2nd Year";
    case 20: return "University - 3rd Year";
    case 21: return "University - Final Year / Postgraduate";
    default:
      if (age < 5) {
        return "Too young for school";
      } else if (age > 21 && age < 100) {
        return "Graduate or working adult";
      } else {
        return "Invalid age";
      }
  }
}

// Example usage
console.log(findAcademicYear(10));  // Output: "Year 6"
console.log(findAcademicYear(3));   // Output: "Too young for school"
console.log(findAcademicYear(25));  // Output: "Graduate or working adult"
console.log(findAcademicYear(15)); // Output: "Invalid age"
 
 