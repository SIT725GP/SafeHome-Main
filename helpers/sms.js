export const sendSMS = async (to, message, country = "AU") => {
  let url = "https://rest.clicksend.com/v3/sms/send";

  try {
    let source = "js";

    // Recipient phone number in E.164 format.
    to = normalizePhoneNumber(to);
    const { data } = await axios({
      method: "POST",
      url,
      data: JSON.stringify({
        // Your sender id
        from: process.env.REACT_APP_CLICKSEND_SENDER_ID,
        to,
        body: message,
        // method of sending e.g. 'wordpress', 'php', 'c#'.
        source,
        // ISO alpha-2 character country code e.g. 'US', we use this to format the recipient number if it's not in international format.
        country,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + process.env.REACT_APP_CLICK_SEND_API_TOKEN,
      },
    });

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      error: error.response.data,
      success: false,
    };
  }
};

/**
 * "If the phone number starts with a plus sign, return it as is, otherwise, return the phone number
 * with a plus sign prepended to it."
 *
 * This is a pure function. It takes in a phone number and returns a phone number. It
 * doesn't mutate the input, and it doesn't have any side effects
 * @param phoneNumber - The phone number to send the message to.
 * @returns the phone number with a + in front of it.
 */
const normalizePhoneNumber = (phoneNumber) => {
  if (phoneNumber.startsWith("+")) {
    return phoneNumber;
  }

  return `+${phoneNumber}`;
};
