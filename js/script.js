const getInputElement = (eLementId) => {
  const input = document.getElementById(eLementId);
  const elementValue = parseInt(input.value);
  input.value = "";
  return elementValue;
};

const getElement = (elementId) => {
  const element = document.getElementById(elementId);
  const elementValue = parseInt(element.innerText);
  return elementValue;
};

const setElement = (elementId, value) => {
  const element = document.getElementById(elementId);
  element.innerText = value;
};

// -----------------------Handle Amount-----------------------

const handleDonation = (amountId, accountId) => {
  const donationAmount = getInputElement(amountId);
  const totalBalance = getElement("main-balance");
  const feniAccount = getElement(accountId);

  console.log(donationAmount, totalBalance, feniAccount);

  //   validate
  if (!donationAmount || donationAmount < 0 || donationAmount > totalBalance) {
    alert("Invalid Amount !!!");
  } else {
    // Update Donation
    setElement(accountId, feniAccount + donationAmount);
    // Update Main Balance
    setElement("main-balance", totalBalance - donationAmount);
  }
};
