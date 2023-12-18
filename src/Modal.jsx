import { useRef, useState } from 'react';

import Button from './Button';

import './Modal.css';

function Modal({ username, setUsername, changeName, title }) {
  const dialogRef = useRef();
  const [name, setName] = useState('');
  // const [showError, setShowError] = useState(false);
  return (
    <>
      <Button visual="button" onClick={() => dialogRef.current.showModal()}>
        {username}, Change name 
      </Button>

      <dialog className="modal" ref={dialogRef}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">{title}</h1>
            <Button visual="link" onClick={() => dialogRef.current.close()}>
              <span>close</span>
            </Button>
          </div>
          <div className="modal-body">
            <form className="rename-form" onSubmit={(e) => {e.preventDefault();}}>
              <div> 
                <label htmlFor="name">Change Name: </label> 
                <input name="name" className="name-input" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>         
              <Button visual="link" type="submit" onClick={() => { changeName(name); setUsername(name); }}>
                Use It
              </Button>
              {/* {showError && <p className="error">Name is illeagel!</p>} */}
            </form>
          </div>
        </div>
      </dialog> 
    </>
  );
}

export default Modal;

