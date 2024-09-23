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

const updateHistory = (amount, title) => {
  const currentDate = new Date();

  // For Title
  const titleWord = title.split(" ");
  titleWord.shift();
  const newTitle = titleWord.join(" ");

  const historyDiv = document.getElementById("history-section");

  // create a new Div
  const donateDiv = document.createElement("div");
  donateDiv.classList.add("md:p-5", "p-2", "border", "shadow", "rounded");

  donateDiv.innerHTML = `
  
          <h3 class="text-xl font-semibold">
            ${amount} Taka is Donated ${newTitle}
          </h3>
          <p>
           ${currentDate}
          </p>

  `;

  historyDiv.appendChild(donateDiv);
};

// ----------------------Handle Amount-----------------------

const handleDonation = (amountId, accountId, titleId) => {
  const donationAmount = getInputElement(amountId);
  const totalBalance = getElement("main-balance");
  const feniAccount = getElement(accountId);
  const donationTitle = document.getElementById(titleId).innerText;

  //   console.log(donationTitle);

  console.log(donationAmount, totalBalance, feniAccount);

  //   validate
  if (!donationAmount || donationAmount < 0 || donationAmount > totalBalance) {
    alert("Invalid Amount !!!");
  } else {
    // Update Donation
    setElement(accountId, feniAccount + donationAmount);
    // Update Main Balance
    setElement("main-balance", totalBalance - donationAmount);

    updateHistory(donationAmount, donationTitle);
  }
};

// ---------------TOOGLE Donation and History----------------

const toggleBtn = () => {
  const donationDiv = document.getElementById("donation-section");
  const historyDiv = document.getElementById("history-section");
  const donationBtn = document.getElementById("donation-btn");
  const historyBtn = document.getElementById("history-btn");

  //   for donation
  document.getElementById("donation-btn").addEventListener("click", () => {
    donationDiv.classList.remove("hidden");
    donationBtn.classList.add("bg-teal-300");
    historyDiv.classList.add("hidden");
    historyBtn.classList.remove("bg-teal-300");
  });

  //   for History

  document.getElementById("history-btn").addEventListener("click", () => {
    historyDiv.classList.remove("hidden");
    historyBtn.classList.add("bg-teal-300");
    donationDiv.classList.add("hidden");
    donationBtn.classList.remove("bg-teal-300");
  });
};

toggleBtn();
