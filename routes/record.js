const { Router } = require('express');
const { upload } = require('../services/upload');
const { handleAddRecord, handleEditRecord } = require('../controllers/record');
const {
    handleRenderAddRecord,
    handleRenderRecord,
    handleRenderEditRecord,
} = require('../controllers/renderRecord');

const { handleRenderHistory } = require('../controllers/renderRecordHistory');

const router = Router();

router.get('/history', handleRenderHistory);
router.get('/add', handleRenderAddRecord);
router.get('/:recordId', handleRenderRecord);
router.get('/edit/:recordId', handleRenderEditRecord);

router.post('/add', upload.single('inputImage'), handleAddRecord);
router.post('/edit/:recordId', handleEditRecord);


module.exports = router;