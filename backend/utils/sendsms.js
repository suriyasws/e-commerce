const twilio = require('twilio');

const accountSid = 'your-twilio-account-sid';
const authToken = 'your-twilio-auth-token';
const twilioPhoneNumber = 'your-twilio-phone-number';

const client = twilio(accountSid, authToken);

const sendSMS = async (to, body) => {
  try {
    const message = await client.messages.create({
      body,
      from: twilioPhoneNumber,
      to,
    });

    console.log('SMS sent:', message.sid);
  } catch (error) {
    console.error('Error sending SMS:', error.message);
    throw error;
  }
};

module.exports = sendSMS;