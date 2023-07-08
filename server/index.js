const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001

const oauth2Client = new google.auth.OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground' // This is the redirect URL where Google will send the authorization code
);

console.log('Refresh token:',);

oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN
})

const accessToken = oauth2Client.getAccessToken();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken
    }
});

const sendMail = ({ name, senderEmail, subject, message }) => {
    let mailOptions = {
        from: `${name} <${process.env.EMAIL}>`,
        replyTo: senderEmail,
        to: process.env.EMAIL,
        subject,
        text: `Message from ${name} (${senderEmail}): \n\n ${message}`
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Error:', err);
            return false;
        } else {
            console.log('Email sent!');
            return true;
        }
    });
};

app.post('/send', (req, res) => {
    const isMailSent = sendMail(req.body);
    res.status(isMailSent ? 200 : 500).json({ success: isMailSent });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

