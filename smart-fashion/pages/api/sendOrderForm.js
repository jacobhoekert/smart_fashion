const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors')({origin: true});
const creds = require('../../config/email.config');

export default async (req, res) => {
  cors(req, res, () => {  
    let transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      secure: true,
      auth: {
          user: 'jshoekert@gmail.com',
          pass: creds.password
      }
    }));

    let content = 
    `New Order
      Package Name: ${req.body.package.name}
      Fabric Quality: ${req.body.package.fabricQuality}
      Quantity: ${req.body.package.quantity}

      Suit Style: ${req.body.styles.suitStyle}
      Shirt Style: ${req.body.styles.shirtStyle}
      Cuff Style: ${req.body.styles.cuffStyle}
      Collar Style: ${req.body.styles.collarStyle}
      Overcoat Style: ${req.body.styles.overcoatStyle}
      Ladies Style: ${req.body.styles.ladiesStyle}

      Suit Fabric: ${req.body.fabrics.suitFabric}
      Shirt Fabric: ${req.body.fabrics.shirtFabric}
      Overcoat Fabric: ${req.body.fabrics.overcoatFabric}

      First Name: ${req.body.details.firstName}
      Last Name: ${req.body.details.lastName}
      Email: ${req.body.details.email}
      Address Line 1: ${req.body.details.addressL1}
      Address Line 2: ${req.body.details.addressL2}
      City: ${req.body.details.city}
      State: ${req.body.details.state}
      Postal Code: ${req.body.details.postalCode}
      Country: ${req.body.details.country}
    `

    const mail = {
      from: `${req.body.details.firstName} ${req.body.details.lastName} <${req.body.details.email}>`,
      to: 'jshoekert@gmail.com',
      subject: `New Order from ${req.body.details.firstName} ${req.body.details.lastName} <${req.body.details.email}>`,
      text: content
    }

    return transporter.sendMail(mail, (err, info) => {
      if(err){
        return res.send(err.toString());
      }
      return res.send('Email sent');
    });
  });    
};