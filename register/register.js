import { participantTemplate, successTemplate } from './Templates.js';

document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1;

    document.getElementById("add").addEventListener("click", function () {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        document.querySelector(".participants fieldset").insertAdjacentHTML("beforeend", newParticipantHTML);
    });

    document.querySelector("form").addEventListener("submit", submitForm);
});

function submitForm(event) {
    event.preventDefault();

    const total = totalFees();
    const adultName = document.getElementById("adult_name").value;
    const participantCount = document.querySelectorAll(".participants section").length;

    document.querySelector("form").style.display = "none";
    const summary = document.getElementById("summary");
    summary.innerHTML = successTemplate({ adultName, participantCount, total });
    summary.style.display = "block";
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, el) => sum + Number(el.value), 0);
    return total;
}