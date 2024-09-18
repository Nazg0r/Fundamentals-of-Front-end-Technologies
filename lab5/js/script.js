const FIOPattern = /^([А-я|\w]|І|і|Ї|ї|Є|є)+\s(([А-я|\w]|І|і|Ї|ї|Є|є)\.){2}$/;
const groupPattern = /^([А-я|\w]|І|і|Ї|ї|Є|є){2}-\d{2}$/;
const phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
const idCardPattern = /^([А-я|\w]|І|і|Ї|ї|Є|є){2}\s№\d{6}$/;
const departmentPattern = /^([А-я|\w]|І|і|Ї|ї|Є|є){4}/;

document.addEventListener("DOMContentLoaded", function () {
  // Task one
  const submitBtn = document.querySelector(".form__submit-btn");
  const errorsField = document.querySelector(".form__errors");
  const userDataCard = document.querySelector(".user-data__container");
  const userDataList = document.querySelectorAll(".user-data__list li");

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!ValidateAllInputs(this.form, errorsField)) {
      userDataCard.style.display = "block";
      userDataCard.parentElement.style.justifyContent = "space-between";
      ShowData(this.form, userDataList);
    }
  });

  // Task two

  const workCell = document.querySelector(
    ".table tr:nth-child(1) td:nth-child(2)",
  );
  const colorSelector = document.querySelector(
    ".table tr:nth-child(1) td:nth-child(2) input",
  );
  const workCellColumn = document.querySelectorAll(".table tr td:nth-child(2)");

  workCell.addEventListener("mouseover", function () {
    workCell.style.background = GetRandomColor();
    workCell.style.color = GetRandomColor();
  });

  workCell.addEventListener("dblclick", function () {
    colorSelector.click();
  });

  workCell.addEventListener("click", function () {
    for (let cell of workCellColumn) {
      cell.style.background = workCell.style.background;
      cell.style.color = workCell.style.color;
    }
  });

  colorSelector.addEventListener("input", function (e) {
    workCell.style.background = e.target.value;
    workCell.style.color = "#000";
  });
});

function ValidateAllInputs(data, errorsField) {
  let faild = false;
  errorsField.innerHTML = "";

  for (let child of data.children) {
    if (child.className === "form__submit-btn") continue;
    child.style.borderColor = "lightgreen";
  }

  if (!FIOPattern.test(data.FIO.value) || data.FIO.value.length < 7) {
    ShowError("Неправильно введено ПІБ", errorsField);
    data.FIO.style.borderColor = "red";
    faild = true;
  }
  if (!groupPattern.test(data.group.value)) {
    ShowError("Неправильно введена група", errorsField);
    data.group.style.borderColor = "red";
    faild = true;
  }
  if (!phonePattern.test(data.phone.value)) {
    ShowError("Невірний формат номера телефону", errorsField);
    data.phone.style.borderColor = "red";
    faild = true;
  }
  if (!idCardPattern.test(data.idCard.value)) {
    ShowError("Неправильно введена id картка", errorsField);
    data.idCard.style.borderColor = "red";
    faild = true;
  }
  if (!departmentPattern.test(data.department.value)) {
    ShowError("Неправильно введений факультет", errorsField);
    data.department.style.borderColor = "red";
    faild = true;
  }

  return faild;
}

function ShowError(errorMessage, field) {
  const errorField = document.createElement("p");
  errorField.innerText = errorMessage;
  field.appendChild(errorField);
}

function ShowData(data, dataListCard) {
  for (let i = 0; i < dataListCard.length; i++) {
    const fieldValueNode =
      dataListCard[i].children[dataListCard[i].children.length - 1];
    fieldValueNode.innerText = data[i].value;
    dataListCard[i].appendChild(fieldValueNode);
  }
}

function GetRandomColor() {
  const randomValue = () => Math.floor(Math.random() * 256);
  return `rgba(${randomValue()}, ${randomValue()}, ${randomValue()}, 1)`;
}
