const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();

const nodemailer = require("nodemailer");

const port = 3010;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mikhailkaramzin@gmail.com', // generated ethereal user
        pass: '@M14882301m$', // generated ethereal password
    },
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/sendMessage', async function (req, res) {

let {name, email, text} =req.body

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'MY PROFILE PAGE', // sender address
        to: "mikhailkaramzin@gmail.com", // list of receivers
        subject: "HR WANTS ME!!!", // Subject line
        html: `<b>Сообщение с Вашего portfolio!</b>
                <div>Name: ${name}</div>
                <div>Email: ${email}</div>
                <div>Message: ${text}</div>
                <a href="https://www.youtube.com/watch?v=esf69qTJzQQ&feature=youtu.be">Руководство по отправке</a>
                ` // html body
    });

    res.send('ok!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});