import Home from './Home';
import Learn from './Learn';
import Shop from './Shop';
import Modal from './Modal';
import Join from './Join';
import Chat from './Chat';
import PlaceOrder from './PlaceOrder';
import PrivacyPolicy from './PrivacyPolicy';
import ContactUs from './ContactUs';
import CafeLocations from './CafeLocations';
import BeanOrigins from './BeanOrigins';
import Loading from './Loading';


import './MainPart.css';

import { useState } from 'react';

function MainPart({ page, setPage, isDark, username, setUsername, isContentPending, addShopItem, cart, clearCart, updateItem, changeName, messages, onlineUsers, getMessagesAndOnlineUsers, addMessage, onLogout }) {
    const [isOpen, setIsOpen] = useState(true);
    const openClass = isOpen ? "" : "rename-modal-close";
    const modeClass = isDark ? "dark-mode" : "";

    return (
        isContentPending ? <Loading className="content-loading">Loading ...</Loading>
            :
            <main className={`main main-${modeClass}`} id="main">
                {(page === 'Home' && <Home />)}
                {(page === 'Learn' && <Learn />)}
                {(page === 'Shop' && <Shop setPage={setPage} addShopItem={addShopItem} cart={cart} />)}
                {(page === 'Join' && <Join setPage={setPage} />)}
                {(page === 'Chat' && <Chat username={username} messages={messages} onlineUsers={onlineUsers} getMessagesAndOnlineUsers={getMessagesAndOnlineUsers} addMessage={addMessage} onLogout={onLogout} />)}
                {(page === 'PlaceOrder' && <PlaceOrder cart={cart} clearCart={clearCart} updateItem={updateItem} />)}
                {(page === 'Privacy Policy' && <PrivacyPolicy />)}
                {(page === 'Contact Us' && <ContactUs />)}
                {(page === 'Cafe Locations' && <CafeLocations />)}
                {(page === 'Coffee Bean Origins' && <BeanOrigins />)}

                <div className={`rename-modal ${openClass}`}>
                    <Modal username={username} setUsername={setUsername} changeName={changeName} title="Hope we call you:" />
                    <button
                        className='modal-button'
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label='Click this button can make the Welcome section dispear.'
                    >
                        <i className="gg-close-o"></i>
                    </button>
                </div>
            </main>
    );
}


export default MainPart;