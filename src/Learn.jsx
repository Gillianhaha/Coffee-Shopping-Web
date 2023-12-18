import AccordionSection from "./AccordionSection";

import './Learn.css';

import theme1 from './photos/coffee1.jpg';
import theme2 from './photos/coffee2.jpg';
import theme3 from './photos/coffee3.jpg';

function Learn() {
    return (
        <div className="panels">

            <AccordionSection title="Coffee Origin Distribution">
                <div className="theme theme1">
                    <img 
                        className="theme-pic" 
                        alt="A coffee farm shows the growing coffee beans." 
                        src={ theme1 }
                    />
                    <div className="theme-description">
                        <h2 className="theme-title">The Global Reach of Coffee</h2>
                        <p className="theme-description-content">Coffee is grown in over 60 countries across the world, from Latin America to Africa to Asia. However, only a handful of countries dominate the production and export of coffee.<br/>Brazil, for example, is the world's largest coffee producer, followed by Vietnam and Colombia.<br/> Ethiopia, the birthplace of coffee, is also a significant producer, as are other African nations like Kenya and Uganda.</p>                        
                    </div>
                </div>
            </AccordionSection>

            <AccordionSection title="Coffee Bean Processing Process">
                <div className="theme theme2">
                    <img 
                        className="theme-pic" 
                        alt="A coffee bean processing machine at work." 
                        src={ theme2 }
                    />
                    <div className="theme-description">
                        <h2 className="theme-title">Complex and Delicate</h2>
                        <p className="theme-description-content">The first step in the coffee bean processing process is sorting, where the harvested cherries are separated based on ripeness and quality.<br/> After sorting, the outer skin of the cherries is removed in a process called pulping. The beans are then fermented to break down any remaining fruit flesh and washed to remove any impurities.<br/> Finally, the coffee beans are dried either naturally in the sun or artificially in a mechanical dryer.</p>
                    </div>
                </div>
            </AccordionSection>
                
            <AccordionSection title="Coffee Flavor Categories">
                <div className="theme theme3">
                    <img 
                        className="theme-pic" 
                        alt="A latte and an Americano." 
                        src={ theme3 }
                    />
                    <div className="theme-description">
                        <h2 className="theme-title">Always a kind to suit you</h2>
                        <p className="theme-description-content">There are several categories of coffee flavors, including fruity, nutty, chocolatey, floral, and spicy.<br/> Fruity flavors are often associated with African coffees and can range from berry and citrus notes to more tropical flavors like mango and pineapple.<br/> Nutty flavors, such as almond and hazelnut, are commonly found in South American coffees.<br/> Chocolatey flavors, which can range from milk chocolate to dark chocolate, are also prevalent in South American coffees.</p>                       
                    </div>
                </div>  
            </AccordionSection>
            
        </div>
    );

}
export default Learn;