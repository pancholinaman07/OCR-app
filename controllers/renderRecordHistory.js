// GET /record/history
// Render all the records
async function handleRenderHistory(req, res) {
    const records = await Record.find({});
    return res.render('history', {
        records: records
    });
}
module.exports = {
    handleRenderHistory,
};