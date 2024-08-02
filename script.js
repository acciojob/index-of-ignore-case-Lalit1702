function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 // Convert both strings to lowercase
    let lowerStr = str.toLowerCase();
    let lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the position of lowerSubStr in lowerStr
    return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
