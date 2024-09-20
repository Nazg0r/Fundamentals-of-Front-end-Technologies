document.addEventListener("DOMContentLoaded", async function () {
  const users = document.querySelectorAll(".r-users__content .r-user__card");
  const reloadBtn = document.querySelector(".btn");

  reloadBtn.addEventListener("click", async function () {
    await FillUsersCard(users);
  });

  await FillUsersCard(users);
});

/**
 * @property {object} data.results
 */
async function GetRandomUser() {
  const responseUrl = new URL("https://randomuser.me/api");
  try {
    const response = await fetch(responseUrl.href);
    const data = await response.json();
    return data.results[0];
  } catch (err) {
    console.error(err);
    return await GetRandomUser();
  }
}

async function GetRandomUsers(quantity) {
  const users = [];
  for (let i = 0; i < quantity; i++) {
    users.push(GetRandomUser());
  }
  return Promise.all(users);
}

async function FillUsersCard(usersCard) {
  const usersData = await GetRandomUsers(usersCard.length);

  for (let i = 0; i < usersCard.length; i++) {
    const preparedUserData = PrepareData(usersData[i]);
    usersCard[i].children[0].children[0].src = usersData[i].picture.large;
    FillUserStats(usersCard[i].children[1].children, preparedUserData);
  }
}

function FillUserStats(statsList, data) {
  const statsLabels = ["Country: ", "Email: ", "Phone: ", "Coordinates: "];
  for (let i = 0; i < statsList.length; i++) {
    statsList[i].innerHTML =
      "<strong>" + statsLabels[i] + "</strong>" + data[i];
  }
}

/**
 * @param {object} objData
 * @param {object} objData.location
 * @param {string} objData.location.country
 * @param {string} objData.email
 * @param {string} objData.phone
 * @param {string} objData.location.coordinates
 */
function PrepareData(objData) {
  const preparedData = [];
  preparedData.push(objData.location.country);
  preparedData.push(objData.email);
  preparedData.push(objData.phone);
  preparedData.push(
    objData.location.coordinates.latitude +
      " " +
      objData.location.coordinates.longitude,
  );

  return preparedData;
}
