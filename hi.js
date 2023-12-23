const text = `'บัตรประจำตัวประชาชน Thai National ID Card\n' +
      '1 1037 02071 81 1\n' +
      'เลขประจำตัวประชาชน\n' +
      'Identification Number\n' +
      'ชื่อตัวและชื่อสกุล น.ส. ณัฐริกา ยางสวย\n' +
      'Name Miss Nattarika\n' +
      'Last name Yangsuai\n' +
      'เกิดวันที่ 25 มิ.ย. 2539\n' +
      'Date of Birth 25 Jun. 1996\n' +
      'ศาสนา พุทธ\n' +
      'ที่อยู่ 111/17 หมู่ที่ 2 ต.ลาดหญ้า อ.เมืองกาญจนบุรี\n' +
      'จ.กาญจนบุรี\n' +
      '24 ก.ค. 2553 -\n' +
      'วันออกบัตร\n' +
      '24 Jul. 2020\n' +
      'Date of Issue\n' +
      'from\n' +
      '(นายธนาคม จงจิระ\n' +
      'เจ้าพนักงานออกบัตร\n' +
      '24 9.8. 2572\n' +
      'วันบัตรหมดอายุ\n' +
      '24 Jun. 2023 2\n' +
      'Date of Expiry\n' +
      '160\n' +
      '15\n' +
      '_160\n' +
      '150\n' +
      '40\n' +
      '1398-09-07241719';`

// Extract Identification Number
const idNumberMatch = text.match(/(\d{1,4}\s\d{4}\s\d{5}\s\d{2}\s\d{1})/);
const identificationNumber = idNumberMatch ? idNumberMatch[0] : null;

// Extract Name
const nameMatch = text.match(/Name Miss (.+?)\n/);
const name = nameMatch ? nameMatch[1] : null;

// Extract Last Name
const lastNameMatch = text.match(/Last name (.+?)\n/);
const lastName = lastNameMatch ? lastNameMatch[1] : null;

// Extract Dates
const dateMatches = text.match(/(\d{1,2} [A-Za-z]+\.* \d{4})/g);

// Assign dates to variables
const dateOfBirth = dateMatches ? dateMatches[0] : null;
const dateOfIssue = dateMatches ? dateMatches[1] : null;
const dateOfExpiry = dateMatches ? dateMatches[2] : null;



// Display the results
console.log("Identification Number:", identificationNumber);
console.log("Name:", name);
console.log("Last Name:", lastName);
// Display the results
console.log("Date of Birth:", dateOfBirth);
console.log("Date of Issue:", dateOfIssue);
console.log("Date of Expiry:", dateOfExpiry);