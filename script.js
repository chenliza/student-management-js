// ចាប់យកelementទាំងអស់ពីhtml
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
//មុខងារ បង្ហាញ/លាក់ ពាក្យសម្ងាត់ (show/hide password)
togglePasswordBtn.addEventListener("click", function () {
  // ពិនិត្យប្រភេទ(type)បច្ចុប្បន្នរួចផ្លាស់ប្ដូរ
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.textContent = "លាក់";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.textContent = "បង្ហាញ";
  }
});
//មុខងារត្រួតពិនិត្យទិន្នន័យ (Form Validation)ពេលចុច"ចូលប្រព័ន្ធ"
loginForm.addEventListener("submit", function (event) {
  //ទប់ស្កាត់មិនឲ្យ Browser Refresh ទំព័រ
  event.preventDefault();
  //សម្អាតសារកំហុសចាស់ៗចេញ
  emailError.textContent = "";
  passwordError.textContent = "";
  let isValid = true;
  //ត្រួតពិនិត្យ អ៊ីមែល
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
  if (emailValue === "") {
    emailError.textContent = "Enter your email!";
    isValid = false;
  } else if (!emailValue.match(emailPattern)) {
    emailError.textContent = "Incorrect email!";
    isValid = false;
  }
  //ត្រួតពិនិត្យពាក្យសម្ងាត់(យ៉ាងតិច៦អក្សរ)
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === "") {
    passwordError.textContent = "Enter email";
    isValid = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = "password has at least 6 characters!";
    isValid = false;
  }
  //ប្រសិនបើទិន្នន័យត្រឹមត្រូវទាំងអស់
  if (isValid) {
    alert("login success!");
    //អ្នកអាចលុបទិន្នន័យក្នុងFormចោលវិញបន្ទាប់ពីsubmitជោគជ័យ
    loginForm.reset();
    togglePasswordBtn.textContent = "Show";
  }
});
