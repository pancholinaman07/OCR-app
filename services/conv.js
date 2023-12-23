const convertToDate = (dateString) => {
    const parts = dateString.split(' ');
    const monthIndex = ['Jan.', 'Feb.', 'Mar.', 'Apr..', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'].indexOf(parts[1]).toString().padStart(2, '0');
    return `${parts[2]}-${monthIndex}-${parts[0].toString().padStart(2, '0')}`;
};

module.exports = {
    convertToDate,
};