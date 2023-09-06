
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

console.log("Refresh Token from .env:", process.env.OAUTH_REFRESH_TOKEN);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const oauth2Client = new google.auth.OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
);


async function retrieveAccessToken() {
    oauth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });
    try {
        const { credentials } = await oauth2Client.refreshAccessToken();
        console.log("Received credentials:", credentials);  // For debugging
        return credentials ? credentials.access_token : null;
    } catch (error) {
        console.error("Error retrieving access token: ", error);
        if (error && error.response && error.response.data) {
            console.error("Additional error details: ", error.response.data);
        }
        console.error("Complete error object:", JSON.stringify(error, null, 2))
        return null;
    }
}


app.post('/send', async (req, res) => {
    console.log('received request ', req.body)
    const accessToken = await retrieveAccessToken();
    console.log('access token ', accessToken)
    
    if (!accessToken) {
        return res.status(500).json({ success: false, message: 'Could not retrieve access token' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            accessToken
        }
    });

    const { name, senderEmail, subject, message } = req.body;
    const mailOptions = {
        from: `${name} <${process.env.EMAIL}>`,
        replyTo: senderEmail,
        to: process.env.EMAIL,
        subject,
        text: `Message from ${name} (${senderEmail}): \n\n ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent!');
        return res.status(200).json({ success: true });
    } catch (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
