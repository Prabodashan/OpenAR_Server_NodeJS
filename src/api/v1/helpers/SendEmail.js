// ----------Third-party libraries and modules----------
const axios = require("axios");

//test

// ----------Custom libraries and modules----------
const Configs = require("../../../configs");

// ----------Function for initializing the mongo db connection----------
const SendEmail = async ({ name, email, subject, htmlContent }) => {
  try {
    const response = await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      {
        sender: { name: "AMAM", email: "amamfouinfo@gmail.com" },
        to: [{ name: name, email: email }],
        subject: subject,
        htmlContent:
          "<html><head></head><body><p>Hello,</p>Here is your verification code.<br><strong>" +
          htmlContent +
          "</strong></p></body></html>",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key":
            "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",
        },
      }
    );

    // console.log("Email sent successfully:", response.data);
    return {
      status: "success",
      message: "Email sent successfully",
      data: response.data,
    };
  } catch (error) {
    // console.error("Error sending email:", error);
    return { status: "error", message: error };
  }
};

module.exports = SendEmail;
