import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { json } from "stream/consumers";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const priceId = 'price_1MzgAxCoV556m926VHoBtV0q'

    const successUrl = `${process.env.NEXT_URL}/success`
    const cancelUrl = `${process.env.NEXT_URL}`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
            {
                price:priceId, 
                quantity: 1
            }
        ]
        
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}