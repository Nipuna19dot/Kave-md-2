
function checkLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "kave-md" && password === "Kavee") {
    document.querySelector('.login-box').style.opacity = '0';
    document.querySelector('.login-box').style.transform = 'translate(-50%, -50%) scale(0.9)';
    setTimeout(() => {
      document.querySelector('.login-box').style.display = 'none';
      document.querySelector('.business-page').style.display = 'block';
    }, 1000);
  } else {
    alert("❌ වැරදි Username හෝ Password");
  }
}
