/**
 * WEB222 – Assignment 06
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Md Hasin Shadab Khan
 *      Student ID: 130899230
 *      Date:       2024-08-03
 */

const { formSubmitHandler, REGEX } = window;
const { URL } = REGEX;

function newSongsVidsField(container) {
  // Create a new sub-container div for the input and "remove" button
  const newSubContainer = document.createElement("div");

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "songsVids";
  newInput.required = true;

  newSubContainer.appendChild(newInput);

  // "Remove" button
  const removeButton = document.createElement("button");
  removeButton.className = "removeButton";
  removeButton.textContent = "⊖";
  removeButton.onclick = () => {
    container.removeChild(newSubContainer);
  };

  newSubContainer.appendChild(removeButton);

  return newSubContainer;
}

function songsVids() {
  // Get the "songsVids" div
  const container = document.getElementById("songsVids");

  // Get the "Add" button
  const button = document.getElementById("songsVidsAdd");

  button.onclick = () => {
    container.appendChild(newSongsVidsField(container));
  };
}

function validateForm() {
  let valid = true;
  const invalidClass = "invalid";

  // Validate each social media URL
  const socialMedias = document.getElementsByName("socialMedias")[0];

  socialMedias.className = "";
  for (const socialMedia of socialMedias.value.split(",")) {
    if (!String(socialMedia).match(URL)) {
      valid = false;
      socialMedias.className = invalidClass;
      break;
    }
  }

  // Validate each songs/videos URL
  const songsVids = document.getElementsByName("songsVids");

  for (const songVid of songsVids) {
    if (!String(songVid.value).match(URL)) {
      valid = false;
      songVid.className = invalidClass;
    } else {
      songVid.className = "";
    }
  }

  return valid;
}

document.addEventListener("DOMContentLoaded", () => {
  songsVids();
  formSubmitHandler("requestForm", validateForm);
});
