
// Convert 20 Jul. 2001 to YYYY-MM-DD
const convertToDate = (dateString) => {

    try{

        if (dateString === null) return '';

        const parts = dateString.split(' ');

        const monthIndex = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'].indexOf(parts[1]) + 1;

        const month = monthIndex.toString().padStart(2, '0');

        return `${parts[2]}-${month}-${parts[0].toString().padStart(2, '0')}`;

    }catch (error) {

        console.log('error while converting to Date', error);
        return '';
    }
};

module.exports = {
    convertToDate,
};