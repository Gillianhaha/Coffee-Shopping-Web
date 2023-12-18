import './Home.css';

import Carousel from './Carousel';

import carousel1 from './photos/carousel-1.jpg';
import carousel2 from './photos/carousel-2.jpg';
import carousel3 from './photos/carousel-3.jpg';

function Home() {
    const imageData = [
        { id: 1, url: carousel1 },
        { id: 2, url: carousel2 },
        { id: 3, url: carousel3 },
    ];

    return (
        <div className="homepage-content">
            <h2 className="page-title">Discover Your Coffee Adventure with Us</h2>
            <Carousel className="photo-carousel" images={imageData}/>
            <div className="main-instruction">
                <div className="topic1">
                    <h3 className="topic-title">Coffee Origin</h3>
                    <p>Coffee is believed to have originated in Ethiopia, where it grows wild in the mountain forests. The earliest evidence of coffee drinking comes from the Sufi monasteries in Yemen in the 15th century. From Yemen, coffee spread to other parts of the Arab world, and eventually to Europe and the Americas. Today, coffee is grown in many parts of the world, including Latin America, Africa, and Asia, and is one of the most widely consumed beverages in the world. Different regions and countries produce different types and varieties of coffee, each with their own unique flavors and characteristics.</p>
                </div>
                <div className="topic2">
                    <h3 className="topic-title">Coffee Craft</h3>
                    <p>Coffee craft refers to the art and science of preparing coffee, from selecting the beans to brewing and serving the final product. It involves various techniques and methods, such as roasting, grinding, brewing, and latte art, to create a high-quality, flavorful, and visually appealing coffee beverage. It involves building a relationship between the barista, the coffee, and the customer, and creating a unique and personalized coffee experience.</p>
                </div>
                <div className="topic3">
                    <h3 className="topic-title">Coffee Category</h3>
                    <p>Coffee can be categorized based on several factors, including the origin of the beans, roast level, processing method, and brewing method. Single-origin coffee comes from a specific geographic region, while blend coffee is made by combining different beans to achieve a desired flavor profile. Roast level ranges from light to dark, with lighter roasts typically having brighter and fruitier flavors, and darker roasts having more smoky and caramelized flavors. </p>
                </div>
            </div>
        </div>
    );
}

export default Home;