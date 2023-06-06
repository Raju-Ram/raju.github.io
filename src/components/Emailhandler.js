import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Contect } from './Contect';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'my_user',
    pass: 'my_password',
  },
});

const emailHtml = render(<Contect url="/" />);

const options = {
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  html: emailHtml,
};

transporter.sendMail(options);