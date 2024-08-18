// exports.generateOtp = () => {
//     let otp = '';
//     for(let i=0; i<6; i++) 
//         {
//             const randVal = Math.round(Math.random()*7)
//             otp = otp + randVal;
//         }
//         return otp;
//   }
  
  var nodemailer = require('nodemailer');
  
  transport = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port:465,
    auth: {
      // user: 'swaadsay01@gmail.com',
      // pass: 'swaadsay@0198'
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD
    }
  });
  
  exports.mailTransport = transport;
  
  exports.generateEmailTemplate = (code) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Your OTP Code</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            width: 100%;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #007bff;
            color: white;
            padding: 10px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            padding: 20px;
            text-align: center;
          }
          .otp {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Your OTP Code</h1>
          </div>
          <div class="content">
            <p>Thank you for choosing our service. Use the following OTP code to complete your action:</p>
            <div class="otp">${code}</div>
            <p>This code is valid for the next 10 minutes. If you did not request this code, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Flick. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
    `;
  }
  
  
  
  
  
  exports.plainEmailTemplate = (heading,message) => {
      return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .header h1 {
          font-size: 24px;
          margin: 0;
        }
        .content {
          font-size: 16px;
        }
        .footer {
          margin-top: 20px;
          border-top: 1px solid #ddd;
          padding-top: 10px;
          font-size: 14px;
          color: #777;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${heading}</h1>
        </div>
        <div class="content">
          <p>${message}</p>
        </div>
        <div class="footer">
          <p>Best regards,</p>
          <p>Flick</p>
        </div>
      </div>
    </body>
    </html>
      `;
    };
    
  
    exports.generatePasswordResetTemplate = (link, message) => {
      return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .header h1 {
          font-size: 24px;
          margin: 0;
        }
        .content {
          font-size: 16px;
        }
        .footer {
          margin-top: 20px;
          border-top: 1px solid #ddd;
          padding-top: 10px;
          font-size: 14px;
          color: #777;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Password Reset Link</h1>
        </div>
        <div class="content">
          <p>${message}</p>
          <p>To reset your password, click on the following link:</p>
          <p><a href="${link}">${link}</a></p>
        </div>
        <div class="footer">
          <p>Best regards,</p>
          <p>Flick</p>
        </div>
      </div>
    </body>
    </html>
      `;
  };
  