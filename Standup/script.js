// check if the user has already signed up or not
// if he is signing up first time then ckeck password and confirm password
// if he is signing up first time the check passowrd and confirm password
// are same then store it in the local storage in a form of array objects
// key name in the local storage

// access all the html elements
// add event listner to the sign up button
// if the user is already registered
// check in localstorage
// run one loop and try to match the email

// if i found the email => alert => "You have already signed up please login => redirect to login page"
// create an user object
// {
//      fullName:
//      emai:
//      phon:
//      password:
//  }

// push it to the existing array
// store it in the local storage

let email = document.getElementById("email");
let name = document.getElementById("fullname");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let reenter = document.getElementById("confirmPassword");
let signBtn = document.getElementById("singup");

signBtn.addEventListener("click", () => {
  let useremail = email.value;

  let user = JSON.parse(localStorage.getItem("users")) || [];

  for(let i=0; i<user.length; i++){
    if (user[i].email === useremail) {
      alert("You have already signed up please login");
      window.location.href = "login.html";
      return;
    }
  };

  if (password.value !== reenter. ) {
    alert("passowrd and confirm password is not matching");
    return;
  }

  let userObj = {
    fullName: name.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
  };

  user.push(userObj);
  localStorage.setItem("users", JSON.stringify(user));

});
