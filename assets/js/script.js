// Simple script for future use

// Example: Welcome message in console
console.log("Welcome to Abdin Cyber Hub and Services!");

// Example: Dynamic greeting on homepage (optional)
window.onload = function() {
  let noticeBoard = document.getElementById("notice-board");
  if (noticeBoard) {
    let notice = localStorage.getItem("notice");
    noticeBoard.innerText = notice ? notice : "No notices yet.";
  }
};
