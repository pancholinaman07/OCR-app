const Record = require('../models/record');
const { extract } = require('../services/extract');
const fs = require('fs');


// POST /record/add
// Take the image convert to text than extraction and after saved to database
async function handleAddRecord(req, res) {
    //todo convImgToTxt
    // const text = convImgToTxt(`/uploads/${req.file.filename}`);
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
      '1398-09-07241719';`;
    const extracted = extract(text);

    const record = await Record.create({
        status: extracted.status,
        inputImageURL:  `/uploads/${req.file.filename}`,
        identification_number: extracted.identification_number,
        name: extracted.name,
        last_name: extracted.last_name,
        date_of_birth: extracted.date_of_birth,
        date_of_issue: extracted.date_of_issue,
        date_of_expiry: extracted.date_of_expiry
    });
    return res.redirect(`/record/${record._id}`);
}

// POST /record/edit/:recordId
// Update the database with Updated Info
async function handleEditRecord(req, res) {
    try {
        const {identification_number, name, last_name, date_of_birth, date_of_issue, date_of_expiry} = req.body;
        const record = await Record.findByIdAndUpdate(req.params.recordId,{
                identification_number,
                name,
                last_name,
                date_of_birth,
                date_of_issue,
                date_of_expiry
            });
        return res.redirect(`/record/${req.params.recordId}`);
    }catch (error) {
        return res.render('404');
    }
}

//TODO log handling
async function handleDeleteRecord(req, res) {
    try{
        const record =await Record.findByIdAndDelete(req.params.recordId);
        fs.unlink(`./public/${record.inputImageURL}`, (err) => console.log(err));
        return res.redirect(`/`);
    }catch (error) {
        return res.render('404');
    }
}
module.exports = {
    handleAddRecord,
    handleEditRecord,
    handleDeleteRecord,
};


