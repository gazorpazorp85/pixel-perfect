import enjoyImg from '../assets/imgs/homepage/enjoyable-place-desktop.jpg';
import locallyImg from '../assets/imgs/homepage/locally-sourced-desktop.jpg';

function Description() {
    return (
        <div className="description-container">
            <div className="main-container w100">
                <div className="flex desc-section-container">
                    <div className="flex desc-img-container">
                        <img src={enjoyImg} alt="" />
                    </div>
                    <div className="flex column desc-text-container">
                        <h2>Enjoyable place for all the family</h2>
                        <div className="text">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
  a tour of the farm before your meal.</div>
                    </div>
                </div>
                <div className="flex desc-section-container-bottom">
                    <div className="flex column desc-text-container">
                        <h2>The most locally sourced food</h2>
                        <div className="text">All our ingredients come directly from our farm or local fishery. So you can be sure that you’re
  eating the freshest, most sustainable food.</div>
                    </div>
                    <div className="flex desc-img-container-bottom">
                        <img src={locallyImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Description }