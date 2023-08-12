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

oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN
})


let accessToken;
async function retrieveAccessToken(){
    try{
        accessToken = oauth2Client.getAccessToken();
    } catch (error) {
        console.error("error retrieving access token")
    }
}
retrieveAccessToken()
 
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

const sendMail = async({ name, senderEmail, subject, message }) => {
    let mailOptions = {
        from: `${name} <${process.env.EMAIL}>`,
        replyTo: senderEmail,
        to: process.env.EMAIL,
        subject,
        text: `Message from ${name} (${senderEmail}): \n\n ${message}`
    };
    try{
        await transporter.sendMail(mailOptions);
        console.log('Email sent!');
        return true;
    } catch (error) {
        console.log('Error sending email:', error);
        return false;
    }
}

app.post('/send', async (req, res) => {
    const isMailSent = await sendMail(req.body);
    res.status(isMailSent ? 200 : 500).json({ success: isMailSent });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

