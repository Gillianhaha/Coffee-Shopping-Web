import './ContactUs.css';

import { useReducer } from 'react';
import SelectedDropdown from './SelectedDropdown';
import Button from './Button';

const initialState = {
  name: '',
  email: '',
  phone: '',
  comment: '',
  emailError: '',
  showSendMessage: false,
  category: '',
  options: [],
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_COMMENT':
      return { ...state, comment: action.payload };
    case 'SET_EMAIL_ERROR':
      return { ...state, emailError: action.payload };
    case 'SET_SHOW_SEND_MESSAGE':
      return { ...state, showSendMessage: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_OPTIONS':
      return { ...state, options: action.payload };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

function ContactUs() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!state.email) {
      dispatch({ type: 'SET_EMAIL_ERROR', payload: 'This field is required' });
    } else if (!state.email.includes('@')) {
      dispatch({ type: 'SET_EMAIL_ERROR', payload: 'Email must include @' });
    } else {
      dispatch({ type: 'SET_EMAIL_ERROR', payload: '' });
    }

    if (state.email && state.email.includes('@')) {
      dispatch({ type: 'SET_SHOW_SEND_MESSAGE', payload: true });
      resetForm();
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="contact-form-title">Contact Us</h2>
      <SelectedDropdown category={state.category} setCategory={(value) => dispatch({ type: 'SET_CATEGORY', payload: value })} options={state.options} setOptions={(value) => dispatch({ type: 'SET_OPTIONS', payload: value })} />
      <label className="name-label" htmlFor="contact-name">
        <span>Name: </span>
        <input type="text" id="contact-name" value={state.name} onChange={(event) => dispatch({ type: 'SET_NAME', payload: event.target.value })} />
      </label>
      <label className="phone-label" htmlFor="contact-phone">
        <span>Phone:</span>
        <input type="text" id="contact-phone" value={state.phone} onChange={(event) => dispatch({ type: 'SET_PHONE', payload: event.target.value })} />
      </label>
      <label className="email-label" htmlFor="contact-email">
        <span>Email: *required</span>
        <span className="error contact-email-error">{state.emailError}</span>
        <input type="text" id="contact-email" value={state.email} onChange={(event) => dispatch({ type: 'SET_EMAIL', payload: event.target.value })} />
      </label>
      <label className="comment-label" htmlFor="contact-comment">
        <span>Comment:</span>
        <textarea rows="5" id="contact-comment" value={state.comment} onChange={(event) => dispatch({ type: 'SET_COMMENT', payload: event.target.value })} />
      </label>
      <Button visual="button" type="submit">Send</Button>
      {state.showSendMessage && <p className="send-message">We got your message!</p>}
    </form>
  );
}

export default ContactUs;

// import SelectedDropdown from './SelectedDropdown';
// import Button from './Button';

// import { useState } from 'react';

// function ContactUs(){
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [comment, setComment] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [showsendMessage,setShowSendMessage] = useState(false);
//     const [category, setCategory] = useState('');
//     const [options, setOptions] = useState([]);

//     const resetForm = () => {
//         setName('');
//         setEmail('');
//         setPhone('');
//         setComment('')
//         setEmailError('');
//         setCategory('');
//         setOptions([]);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (!email) {
//             setEmailError('This field is required');
//         } else if (!email.includes('@')) {
//             setEmailError('Email must include @');
//         } else {
//             setEmailError('');
//         }

//         if (email && email.includes('@')) {
//             console.log('Category:', category);
//             console.log('Name:', name);
//             console.log('Email:', email);
//             console.log('Phone:', phone);
//             console.log('Comment:', comment);
//             setShowSendMessage(true);
//             resetForm();
//         }
//     }

//     return (
//         <form className="contact-form" onSubmit={handleSubmit}>
//             <h2 className="contact-form-title">Contact Us</h2>
//             <SelectedDropdown category={category} setCategory={setCategory} options={options} setOptions={setOptions}/>
//             <label className="name-label" htmlFor="contact-name">
//                 <span>Name: </span>
//                 <input type="text" id="contact-name" value={name} onChange={(event) => setName(event.target.value)}/>
//             </label>
//             <label className="phone-label" htmlFor="contact-phone">
//                 <span>Phone:</span>
//                 <input type="text" id="contact-phone" value={phone} onChange={(event) => setPhone(event.target.value)}/>
//             </label>
//             <label className="email-label" htmlFor="contact-email">
//                 <span>Email: *required</span> 
//                 <span className="error contact-email-error">{emailError}</span>     
//                 <input type="text" id="contact-email" value={email} onChange={(event) => setEmail(event.target.value)}/>
//             </label>
//             <label className="comment-label" htmlFor="contact-comment">
//                 <span>Comment:</span>
//                 <textarea rows="5" id="contact-comment" value={comment} onChange={(event) => setComment(event.target.value)}/> 
//             </label>
//             <Button visual="button" type="submit">Send</Button>
//             {showsendMessage && <p className="send-message">We got your message!</p>}
//         </form>
//     );
// }

// export default ContactUs;