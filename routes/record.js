const { Router } = require('express');
const {
    handleRenderAddRecord,
    handleAddRecord,
    handleRenderRecord,
    handleRenderEditRecord,
    handleEditRecord,
    handleRenderHistory
} = require('../controllers/record');

const  multer = require('multer');
const path = require("path");
const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/uploads/`));
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    },
});

const upload = multer({storage : storage});

router.get('/history', handleRenderHistory);
router.get('/add', handleRenderAddRecord);
router.get('/:recordId', handleRenderRecord);
router.get('/edit/:recordId', handleRenderEditRecord);

router.post('/add', upload.single('inputImage'), handleAddRecord);
router.post('/edit/:recordId', handleEditRecord);


module.exports = router;