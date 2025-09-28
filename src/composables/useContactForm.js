export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateContactForm(form) {
  const errors = {};

  if (!form.name || form.name.length < 3) {
    errors.name = "Full Name must be at least 3 characters";
  }

  if (!form.subject || form.subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters";
  }

  if (!form.email || !validateEmail(form.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!form.message || form.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}
