import nodemailer from 'nodemailer';

// Create a test account with Ethereal Email
const createTransporter = async () => {
  try {
    // Create a test account (only once)
    let testAccount = await nodemailer.createTestAccount();
    console.log('📧 Ethereal Email account created:');
    console.log('   Email:', testAccount.user);
    console.log('   Password:', testAccount.pass);
    console.log('   Login: https://ethereal.email');

    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } catch (error) {
    console.error('Error creating email transporter:', error);
    return null;
  }
};

let transporter;

// Initialize transporter
createTransporter().then(t => {
  if (t) {
    transporter = t;
    console.log('✅ Email transporter ready!');
  }
});

export const sendVerificationCode = async (email, code) => {
  try {
    if (!transporter) {
      console.log('⏳ Email transporter not ready yet, using fallback...');
      console.log(`📧 [FALLBACK] Verification code for ${email}: ${code}`);
      return;
    }

    const mailOptions = {
      from: '"2FA Auth System" <noreply@2fa-auth.com>',
      to: email,
      subject: 'Your Verification Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Your Verification Code</h2>
          <p>Hello!</p>
          <p>Your verification code is:</p>
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 10px; margin: 20px 0; border-radius: 8px;">
            ${code}
          </div>
          <p>This code will expire in 10 minutes.</p>
          <p>If you didn't attempt to login, please ignore this email.</p>
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">This is a test email from Ethereal Email service.</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Verification code sent!');
    console.log(`📨 Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    
    return info;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    // Fallback to console log
    console.log(`📧 [FALLBACK] Verification code for ${email}: ${code}`);
  }
};