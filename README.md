# Assignment 4. Forms and Validation

**Name:** Ingkar Tolegen
**Group:** SE-2540

---

## Links:

- Github:
- URL Task 0-1: https://inkartolegen2.github.io/Assignment4_WEB1/
- URL Task 2-3: https://inkartolegen2.github.io/Assignment4_WEB1/bootstrap
- URL Task 4: https://inkartolegen2.github.io/Assignment4_WEB1/register

---

## Part 1. Basic HTML Forms

### Task 0. Simple Contact Form
Create a basic contact form with Name, Email, Message and a Submit button. All fields have `<label>` elements.



![Task 0](screenshots/task0.png)



### Task 1. Form with HTML5 Validation
Add built-in validation attributes (`required`, `minlength`, `maxlength`, `type="email"`) and test how the browser enforces them.

Empty form:


![Task 1 empty](screenshots/task1_empty.png)



Invalid email:


![Task 1 email](screenshots/task1_email.png)



Short name:


![Task 1 minlength](screenshots/task1_minlength.png)



---

## Part 2. Bootstrap Forms

### Task 2. Bootstrap Form Styling
Recreate the contact form using Bootstrap classes, grid system, placeholders and helper text.

Wide screen:


![Task 2 desktop](screenshots/task2_desktop.png)



Narrow screen:


![Task 2 mobile](screenshots/task2_mobile.png)



### Task 3. Bootstrap Validation Styles
Apply `is-valid` / `is-invalid` classes and show feedback messages below inputs.

Invalid data:


![Task 3 invalid](screenshots/task3_invalid.png)



Valid data:


![Task 3 valid](screenshots/task3_valid.png)



---

## Part 3. Advanced Form Project

### Task 4. Registration Form
Create a registration form: First/Last Name, Email, Password + Confirm Password, Gender (radio), Hobbies (checkboxes), Country (select), Submit and Reset. Responsive with Bootstrap Grid, HTML5 validation and Bootstrap feedback.

Empty form submitted:


![Task 4 invalid](screenshots/task4_invalid.png)



Passwords do not match:


![Task 4 passwords](screenshots/task4_passwords.png)



All data valid:


![Task 4 valid](screenshots/task4_valid.png)



Mobile view:


![Task 4 mobile](screenshots/task4_mobile.png)



After Reset:


![Task 4 reset](screenshots/task4_reset.png)



---

## Summary

I built a contact form with labels and HTML5 validation  (`required`, `minlength`, `type="email"`),  then recreated it with Bootstrap 5 using the grid system, placeholders and helper text. I added Bootstrap validation (`is-valid` / `is-invalid`)  with JavaScript and `checkValidity()`.  Finally, I made a  responsive registration form with password confirmation (`setCustomValidity()`) and a Reset button that clears the validation styles.

The main difficulties were connecting Bootstrap correctly and structuring the grid (`row` and `col-md-6`).