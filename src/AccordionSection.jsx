import { useState } from 'react';
import './AccordionSection.css';

function AccordionSection({title,children}) {
    const [isOpen, setIsOpen] = useState(false);
    const openClass = isOpen ? "accordionSection-button-open" : "";
  
    return (
        <div className="accordionSection">
            <button 
                className={`accordionSection-button ${openClass}`} 
                onClick={ ()=> setIsOpen(!isOpen) } 
                aria-expanded={isOpen}
            >
                <span>{title}</span>
            </button>

            {isOpen && (
                <div className="accordionSection-content">
                    {children}
                </div>
            )}
        </div>
    );
}

export default AccordionSection;
