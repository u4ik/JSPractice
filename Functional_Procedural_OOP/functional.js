const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const connectForm = (formId, formSubmitHandler) => {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
};

const validator = (value, flag, validatorValue) => {
    if (flag === REQUIRED) {
        //returning true
        return value.trim().length > 0;
    };
    if (flag === MIN_LENGTH) {
        //returning true
        return value.trim().length > validatorValue;
    };

};

const getUserInput = (inputElementId) => {
    return document.getElementById(inputElementId).value
};

const showAlert = (err) => {
    alert(err.message)
};

const greetUser = (user) => {
    console.log(`Hi, I am ${user.userName}`);
};

const createUser = (userName, userPassword) => {
    if (!validator(userName, REQUIRED) || !validator(userPassword, MIN_LENGTH, 5)) {
        throw new Error('Invalid Input')
    };

    return {
        userName: userName,
        password: userPassword
    }
};
const signupHandler = (event) => {
    event.preventDefault();

    const enteredUserName = getUserInput('username');
    const enteredPassword = getUserInput('password');

    try {
        const newUser = createUser(enteredUserName, enteredPassword);
        console.log(newUser);
        greetUser(newUser);
    } catch (err) {
        showAlert(err);
    };
};


connectForm('user-input', signupHandler);
