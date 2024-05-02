const express = require("express");
const app = express.Router();
const stripe = require("stripe")(
    process.env.STRIPE_PRIVATE_KEY
);
const stripeutil = require("../utils/stripe");

app.post(
    "/create-checkout-session",
    async (req, res) => {
        
        try {
            const lineitems =
                req.body.items.map(
                    ({
                        _id,
                        count,
                        price,
                        name,
                        imageurl
                    }) => {
                        return {
                            price_data:
                                {
                                    currency:
                                        "inr",
                                    product_data:
                                        {
                                            name: name
                                        },
                                    unit_amount:
                                        price *
                                        100
                                },
                            quantity:
                                count
                        };
                    }
                );

            const session =
                await stripeutil(
                    lineitems
                );

            res.json({
                sessionId: session.id
            });
        } catch (e) {
            console.log(e);
            res.status(400).json({
                error: e.message
            });
        }
    }
);

module.exports = app;
