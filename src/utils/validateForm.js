/** @format */

function validateForm(email, password, fullName) {
  if (fullName === "") return "Full Name not Valid";
  if (!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email))
    return "Email not Valid";
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password))
    return "Password not Valid";

  return null;
}

export default validateForm;
