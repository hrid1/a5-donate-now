function getInputElement(eLementId) {
  const input = document.getElementById(eLementId);
  const elementValue = parseInt(input.value);
  input.value = "";
  return elementValue;
}

function getElement(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseInt(element.innerText);
  return elementValue;
}

function setElement(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function updateHistory(amount, title) {
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
}

// ----------------------Handle Amount-----------------------

function handleDonation(amountId, accountId, titleId) {
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

    // Update History Section
    updateHistory(donationAmount, donationTitle);

    // modal open and close
    const modal = document.getElementById("my_modal");
    modal.showModal();

    const closeModalBtn = document.getElementById("closeModalBtn");
    closeModalBtn.addEventListener("click", () => {
      modal.close();
    });
  }
}

// ---------------TOOGLE Donation and History----------------

function toggleBtn ()  {
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
