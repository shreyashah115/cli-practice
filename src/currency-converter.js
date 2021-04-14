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
