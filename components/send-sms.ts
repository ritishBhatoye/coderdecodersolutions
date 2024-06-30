// pages/api/send-sms.ts
import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const client = twilio(accountSid, authToken);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { phoneNumber, message } = req.body;

        try {
            const messageInstance = await client.messages.create({
                body: message,
                from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
                to: phoneNumber
            });

            res.status(200).json({ success: true, messageSid: messageInstance.sid });
        } catch (error: unknown) {
            let errorMessage = 'Unknown error';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            res.status(500).json({ success: false, error: errorMessage });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
