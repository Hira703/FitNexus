const express = require('express');
const router = express.Router();
const { createPaymentIntent, savePayment,  getDetailedBookings, getFinancialOverview, getBookedMembersByTrainerId, getBookedMembersByTrainerEmail } = require('../controllers/paymentController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/create-payment-intent', verifyToken,createPaymentIntent);
router.post('/save-payment',verifyToken, savePayment);
// router.get('/bookings/user/:email', slotController.getBookingsByUserEmail);
router.get("/trainer/booked-members/:email",verifyToken, getBookedMembersByTrainerEmail);



router.get("/details/:email",verifyToken, getDetailedBookings);
router.get('/overview',verifyToken, getFinancialOverview);

module.exports = router;
