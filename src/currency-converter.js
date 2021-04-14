// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.

const API_KEY = "f0cd2f101af74318f36b6bb7137bb6fe";

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.

// node currency-converter.js 50 USD CAD

const amount = process.argv[2];
let initialCurrency = process.argv[3];
let targetCurrency = process.argv[4];

initialCurrency = initialCurrency.toUpperCase();
targetCurrency = targetCurrency.toUpperCase();

// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.

if (amount === undefined) {
  console.error("You must provide a valid amount. Please try again.");
  process.exit();
}

if (initialCurrency === undefined) {
  console.error("You must provide a valid initial currency. Please try again.");
  process.exit();
}

if (targetCurrency === undefined) {
  console.error("You must provide a valid target currency. Please try again.");
  process.exit();
}

// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------

// -------------- USING CURRENCY CONVERSION API FOR THIS STEP --------------

// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.

const axios = require("axios");

const supportedEndpointsAPI = `http://data.fixer.io/api/symbols?access_key=${API_KEY}`;

axios
  .get(supportedEndpointsAPI)
  .then((res) => {
    let currencies = res.data.symbols;

    if (currencies[initialCurrency] === undefined) {
      console.error(
        "The initial currency is not a valid currency. Please try again."
      );
      process.exit();
    }
    if (currencies[targetCurrency] === undefined) {
      console.error(
        "The target currency is not a valid currency. Please try again."
      );
      process.exit();
    }
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });

// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.

let conversionAPI = `https://free.currconv.com/api/v7/convert?q=${initialCurrency}_${targetCurrency}&compact=ultra&apiKey=33efeb6a1b51c1947137`;

let convertedRate = "";

axios
  .get(conversionAPI)
  .then((res) => {
    convertedRate = res.data[`${initialCurrency}_${targetCurrency}`];

    // --------------------------------------------------
    // Step 6: Display results
    // --------------------------------------------------
    // Finally we will display the result as part of a meaningful message.
    console.log(
      `The converted currency rate for ${initialCurrency} ${amount} to ${targetCurrency} is ${convertedRate}.`
    );
    // This message should also include the original amount and currency information
    // supplied by the user.
  })

  .catch((err) => {
    console.log("Error: ", err.message);
  });
