import './Join.css';

import { useReducer, useState } from 'react';
import Button from './Button';

// const initialState = {
//   name: '',
//   email: '',
//   confirmEmail: '',
//   phone: '',
//   nameError: '',
//   emailError: '',
//   confirmEmailError: '',
//   phoneError: '',
//   showWelcomeMessage: false,
//   lastSubmittedName: '',
//   selectedOption: '',
//   otherValue: '',
//   showOtherInput: false,
//   isChecked: true,
// };

// function formReducer(state, action) {
//   switch (action.type) {
//     case 'SET_NAME':
//       return { ...state, name: action.payload };
//     case 'SET_EMAIL':
//       return { ...state, email: action.payload };
//     case 'SET_CONFIRM_EMAIL':
//       return { ...state, confirmEmail: action.payload };
//     case 'SET_PHONE':
//       return { ...state, phone: action.payload };
//     case 'SET_NAME_ERROR':
//       return { ...state, nameError: action.payload };
//     case 'SET_EMAIL_ERROR':
//       return { ...state, emailError: action.payload };
//     case 'SET_CONFIRM_EMAIL_ERROR':
//       return { ...state, confirmEmailError: action.payload };
//     case 'SET_PHONE_ERROR':
//       return { ...state, phoneError: action.payload };
//     case 'SET_SHOW_WELCOME_MESSAGE':
//       return { ...state, showWelcomeMessage: action.payload };
//     case 'SET_LAST_SUBMITTED_NAME':
//       return { ...state, lastSubmittedName: action.payload };
//     case 'SET_SELECTED_OPTION':
//       return { ...state, selectedOption: action.payload };
//     case 'SET_OTHER_VALUE':
//       return { ...state, otherValue: action.payload };
//     case 'SET_SHOW_OTHER_INPUT':
//       return { ...state, showOtherInput: action.payload };
//     case 'SET_IS_CHECKED':
//       return { ...state, isChecked: action.payload };
//     case 'RESET_FORM':
//       return initialState;
//     default:
//       return state;
//   }
// }

// function Join() {
//   const [state, dispatch] = useReducer(formReducer, initialState);

//   const resetForm = () => {
//     dispatch({ type: 'RESET_FORM' });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!state.name) {
//       dispatch({ type: 'SET_NAME_ERROR', payload: 'This field is required' });
//     } else {
//       dispatch({ type: 'SET_NAME_ERROR', payload: '' });
//     }

//     if (!state.email) {
//       dispatch({ type: 'SET_EMAIL_ERROR', payload: 'This field is required' });
//     } else if (!state.email.includes('@')) {
//       dispatch({ type: 'SET_EMAIL_ERROR', payload: 'Email must include @' });
//     } else {
//       dispatch({ type: 'SET_EMAIL_ERROR', payload: '' });
//     }

//     if (!state.confirmEmail) {
//       dispatch({ type: 'SET_CONFIRM_EMAIL_ERROR', payload: 'This field is required' });
//     } else if (state.email !== state.confirmEmail) {
//       dispatch({ type: 'SET_CONFIRM_EMAIL_ERROR', payload: 'Email addresses do not match' });
//     } else {
//       dispatch({ type: 'SET_CONFIRM_EMAIL_ERROR', payload: '' });
//     }

//     if (!state.phone) {
//       dispatch({ type: 'SET_PHONE_ERROR', payload: 'This field is required' });
//     } else {
//       dispatch({ type: 'SET_PHONE_ERROR', payload: '' });
//     }

//     if (state.name && state.email && state.confirmEmail && state.phone && state.email === state.confirmEmail) {
//       dispatch({ type: 'SET_LAST_SUBMITTED_NAME', payload: state.name });
//       dispatch({ type: 'SET_SHOW_WELCOME_MESSAGE', payload: true });
//       resetForm();
//     }
//   };

//   const handleEmailChange = (event) => {
//     const value = event.target.value;
//     const errorMessage = value.includes('@') ? '' : 'Email must include @';
//     dispatch({ type: 'SET_EMAIL', payload: value });
//     dispatch({ type: 'SET_EMAIL_ERROR', payload: errorMessage });
//   };

//   const handleConfirmEmailChange = (event) => {
//     const value = event.target.value;
//     const errorMessage = state.email === value ? '' : 'Email addresses do not match';
//     dispatch({ type: 'SET_CONFIRM_EMAIL', payload: value });
//     dispatch({ type: 'SET_CONFIRM_EMAIL_ERROR', payload: errorMessage });
//   };

//   const handleOptionChange = (event) => {
//     const selectedValue = event.target.value;
//     if (selectedValue === 'other') {
//       dispatch({ type: 'SET_SHOW_OTHER_INPUT', payload: true });
//       dispatch({ type: 'SET_SELECTED_OPTION', payload: selectedValue });
//     } else {
//       dispatch({ type: 'SET_SHOW_OTHER_INPUT', payload: false });
//       dispatch({ type: 'SET_SELECTED_OPTION', payload: selectedValue });
//     }
//   };

//   const handleOtherInputChange = (event) => {
//     const value = event.target.value;
//     dispatch({ type: 'SET_OTHER_VALUE', payload: value });
//   };

//   return (
//     <form className="register-form" onSubmit={handleSubmit}>
//       <h2 className="form-title">Member Information</h2>
//       <label htmlFor="register-name">
//         <span>Membership Name: *required</span>
//         <input type="text" id="register-name" value={state.name} onChange={(event) => dispatch({ type: 'SET_NAME', payload: event.target.value })} />
//         <span className="error name-error">{state.nameError}</span>
//       </label>
//       <label htmlFor="email">
//         <span>Email: *required</span>
//         <input type="text" id="email" value={state.email} onChange={(event) => dispatch({ type: 'SET_EMAIL', payload: event.target.value })} onBlur={handleEmailChange} />
//         <span className="error email-error">{state.emailError}</span>
//       </label>
//       <label htmlFor="confirm-email">
//         <span>Confirm Email: *required</span>
//         <input type="text" id="confirm-email" value={state.confirmEmail} onChange={(event) => dispatch({ type: 'SET_CONFIRM_EMAIL', payload: event.target.value })} onBlur={handleConfirmEmailChange} />
//         <span className="error confirm-error">{state.confirmEmailError}</span>
//       </label>
//       <label htmlFor="phone">
//         <span>Phone: *required</span>
//         <input type="text" id="phone" value={state.phone} onChange={(event) => dispatch({ type: 'SET_PHONE', payload: event.target.value })} />
//         <span className="error phone-error">{state.phoneError}</span>
//       </label>
//       <label htmlFor="preference">
//         <span>Taste Preference:</span>
//         <select id="preference" value={state.selectedOption} onChange={handleOptionChange}>
//           <option value="">(Select an option)</option>
//           <option value="dark">Dark Roast</option>
//           <option value="medium">Medium Roast</option>
//           <option value="light">Light Roast</option>
//           <option value="other">Other</option>
//         </select>
//         {state.showOtherInput && (
//           <input
//             className="other-choice"
//             id="preference-other"
//             type="text"
//             value={state.otherValue}
//             onChange={handleOtherInputChange}
//           />
//         )}
//       </label>
//       <label htmlFor="annoy-me" id="annoy-me-checkbox">
//         <span>Want to receive more coffee news?</span>
//         <input
//           id="annoy-me"
//           type="checkbox"
//           checked={state.isChecked}
//           onChange={() => {
//             dispatch({ type: 'SET_IS_CHECKED', payload: !state.isChecked });
//           }}
//         />
//       </label>
//       <Button visual="button" type="submit">
//         Register
//       </Button>
//       {state.showWelcomeMessage && (
//         <p className="welcome-message">Welcome {state.lastSubmittedName}!</p>
//       )}
//     </form>
//   );
// }

// export default Join;

function Join() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [showWelcomeMessage,setShowWelcomeMessage] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('');
        setConfirmEmail('');
        setPhone('');
        setNameError('');
        setEmailError('');
        setConfirmEmailError('');
        setPhoneError('');
        setSelectedOption('');
        setOtherValue('');
        setShowOtherInput(false);
        setIsChecked(true);
    };

    const [lastSubmittedName, setLastSubmittedName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name) {
            setNameError('This field is required');
        } else {
            setNameError('');
        }

        if (!email) {
            setEmailError('This field is required');
        } else if (!email.includes('@')) {
            setEmailError('Email must include @');
        } else {
            setEmailError('');
        }

        if (!confirmEmail) {
            setConfirmEmailError('This field is required');
        } else if (email !== confirmEmail) {
            setConfirmEmailError('Email addresses do not match');
        } else {
            setConfirmEmailError('');
        }

        if (!phone) {
            setPhoneError('This field is required');
        } else {
            setPhoneError('');
        }

        if (name && email && confirmEmail && phone && email === confirmEmail) {
            setLastSubmittedName(name);
            setShowWelcomeMessage(true);
            resetForm();
        }
    }

    const handleEmailChange = (event) => {
        const value = event.target.value;
        const errorMessage = value.includes('@') ? '' : 'Email must include @';
        setEmail(value);
        setEmailError(errorMessage);
    }

    const handleConfirmEmailChange = (event) => {
        const value = event.target.value;
        const errorMessage = email === value ? '' : 'Email addresses do not match';
        setConfirmEmail(value);
        setConfirmEmailError(errorMessage);
    }

    const [selectedOption, setSelectedOption] = useState('');
    const [otherValue, setOtherValue] = useState('');
    const [showOtherInput, setShowOtherInput] = useState(false);
    const [isChecked, setIsChecked] = useState(true);


    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === 'other') {
            setShowOtherInput(true);
            setSelectedOption(selectedValue);
        } else {
            setShowOtherInput(false);
            setSelectedOption(selectedValue);
        }
    };

    const handleOtherInputChange = (event) => {
        const value = event.target.value;
        setOtherValue(value);
    };


    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Member Information</h2>
            <label htmlFor="register-name">
                <span>Membership Name: *required</span>
                <input type="text" id="register-name" value={name} onChange={(event) => setName(event.target.value)}/>
                <span className="error name-error">{nameError}</span>
            </label>
            <label htmlFor="email">
                <span>Email: *required</span>
                <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} onBlur={handleEmailChange}/>
                <span className="error email-error">{emailError}</span>
            </label>
            <label htmlFor="confirm-email">
                <span>Confirm Email: *required</span>
                <input type="text" id="confirm-email" value={confirmEmail} onChange={(event) => setConfirmEmail(event.target.value)} onBlur={handleConfirmEmailChange}/>
                <span className="error confirm-error">{confirmEmailError}</span>
            </label>
            <label htmlFor="phone">
                <span>Phone: *required</span>
                <input type="text" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)}/>
                <span className="error phone-error">{phoneError}</span>
            </label>
            <label htmlFor="preference">
                <span>Taste Preference:</span>
                <select id="preference" value={selectedOption} onChange={handleOptionChange}>
                    <option value="">(Select an option)</option>
                    <option value="dark">Dark Roast</option>
                    <option value="medium">Mediuem Roast</option>
                    <option value="light">Light Roast</option>
                    <option value="other">Other</option>
                </select>
                {showOtherInput && (
                    <input
                        className="other-choice"
                        id="preference-other"
                        type="text"
                        value={otherValue}
                        onChange={handleOtherInputChange}
                    />
                )}
            </label>
            <label htmlFor="annoy-me" id="annoy-me-checkbox">
                <span>Want to receive more coffee news?</span>
                <input id="annoy-me" type="checkbox" 
                    checked={isChecked}
                    onChange={() => {
                        setIsChecked(!isChecked);
                    }}
                />
            </label>
            <Button visual="button" type="submit">Register</Button>
            {showWelcomeMessage && <p className="welcome-message">Welcome {lastSubmittedName} !</p>}
        </form>
    );

}

export default Join;