const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const createCheckoutSession = async (lineItems) => {
  try {
    console.log(lineItems);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });

    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    throw error;
  }
};

module.exports = createCheckoutSession;