import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_STRIPE_PRIVATEKEY}`);


export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        "payment_method_types": ["card"],
        // customer: stripeId,
        shipping_address_collection: {
          allowed_countries: ["US", 'IN'],
        },
        allow_promotion_codes: true,
        shipping_options: [{ shipping_rate: "shr_1O2BiySHOlgk1RydYP2cAFN1"}],
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "INR",
              product_data: {
                name: item.Title,
                images: [item.Book_Image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.Price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1
            },
            quantity: item.qnty,
          };
        }),
        //Bring PPL to the success or failure page
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      });

      res.status(200).json(session);
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
