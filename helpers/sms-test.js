import { sendSMS } from "./sms.js";

const Main = async () => {
  //get cmd line args
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log("Usage: node sms-test.js <phone number> <message>");
    process.exit(1);
  }

  //get phone number
  const to = args[0];

  //get message
  const message = args[1] || "Hello World";

  // get country
  let country = args[2] || "AU";

  console.log(
    `Sending sms to: ${to} with message: \`${message}\` and country: ${country}`
  );
  let { success, data, error } = await sendSMS(to, message, country);

  console.log({ success, data, error });
};

Main();
