import './CafeLocations.css';
import shop1 from './photos/coffee shop1.jpg';
import shop2 from './photos/coffee shop2.jpg';

function CoffeLocations (){

    return (
        <div className="location-cards">
            <div className="location-card location-card1">
                <img 
                    className="location-card-pic" 
                    alt="Our Seattle location has a lively atmosphere." 
                    src={shop1}
                />
                <div className="location-card-content1">
                    <h2 className="location-card-title1">Seattle, WA</h2>
                    <p className="location-card-text">Address: 1255 Harrison Street.</p>
                    <p className="location-card-text">Welcome to our cozy cafe store, a perfect spot for coffee lovers and foodies alike. Our cafe offers a warm and inviting atmosphere with comfortable seating, warm lighting, and a rustic decor that adds to the charm of the place. </p>
                    <p className="location-card-text">Whether you're looking for a place to work, catch up with friends, or simply relax, we invite you to visit our cafe and experience the warm and welcoming ambiance that we have to offer.</p>
                </div>
            </div>
            <div className="location-card location-card2">
                <img 
                    className="location-card-pic" 
                    alt="Our Seattle location has a literary atmosphere." 
                    src={shop2}
                />
                <div className="location-card-content2">
                    <h2 className="location-card-title2">Boston, MA</h2>
                    <p className="location-card-text">Address: 459 Boylston Street.</p>
                    <p className="location-card-text">Welcome to our quirky little cafe store, where the coffee is hot, the food is delicious, and the atmosphere is just a little bit weird. We have mismatched chairs, funky art on the walls, and a staff that's just a little bit too enthusiastic about coffee. </p>
                    <p className="location-card-text">So come on down and join us for a cup of coffee and a side of weirdness. We promise you won't regret it (well, maybe just a little bit).</p>
                </div>
            </div>
        </div>
    );
}

export default CoffeLocations;