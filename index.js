
document.querySelector('.signup').addEventListener('invalid', (event) => {
    if (event.target.validity.valueMissing) {
      event.target.nextElementSibling.textContent = 'This field is required.';
      event.target.style.border = "red";
    } else if (event.target.validity.typeMismatch) {
      switch (event.target.type) {
        case 'email':
          event.target.nextElementSibling.textContent = 'Please enter a valid email address.';
          break;
        case 'tel':
          event.target.nextElementSibling.textContent = 'Please enter a valid phone number in the format XXX-XXX-XXXX.';
          break;
        case 'password':
          event.target.nextElementSibling.textContent = 'Please enter a valid password.';
          event.target.style.bordercolor = "red";
          break;
        default:
          break;
      }
    }
  }, true);