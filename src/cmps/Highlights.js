import { List } from './List';

import { items } from '../data/item';

function Highlights() {
    return (
        <div className="highlights-container">
            <div className="main-container">
                <div className="flex highlights-content-container w100">
                    <div className="highlights-title-container">
                        <h2>A few highlights from our menu</h2>
                        <div className="text">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                        Our menu is revamped every season.
                        </div>
                    </div>
                    <div className="flex column list-container">
                        <List items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Highlights }