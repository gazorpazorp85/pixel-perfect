import { useState } from 'react';

import img from '../assets/imgs/homepage/family-gathering-desktop.jpg'
import lines from '../assets/imgs/patterns/pattern-lines.svg';

function FamilyGathering() {

    const itemsDB = [
        {
            id: 'i101',
            title: 'Family Gathering',
            txt: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones.We’ll provide a memorable experience for all.',
            isSelected: true
        },
        {
            id: 'i102',
            title: 'Special Events',
            txt: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
            isSelected: false
        },
        {
            id: 'i103',
            title: 'Social Events',
            txt: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
            isSelected: false
        }
    ]

    const [items, setItems] = useState(itemsDB)
    const [item, setItem] = useState(items[0]);

    const selectionHandler = (selectedItem) => {
        const newItems = items.map(item => ({ ...item, isSelected: item.id !== selectedItem.id ? false : true }));
        selectedItem = { ...selectedItem, isSelected: !selectedItem.isSelected };
        setItems(newItems);
        setItem(selectedItem);
    }

    const selectedClassHandler = (item) => {
        return item.isSelected ? 'selected' : ''
    }

    return (
        <div className="family-container">
            <div className="flex main-container family-content-container w100">
                <div className="imgs-container">
                    <img className="pattern" src={lines} alt="" />
                    <img className="img" src={img} alt="" />
                </div>
                <div className="flex column family-list-container">
                    <h2>{item.title}</h2>
                    <div>{item.txt}</div>
                    <button className="family-btn">Book a table</button>
                    <ul className="clean-list family-list">
                        {items.map(item => {
                            return (
                                <li
                                    key={item.id}
                                    className={`pointer uppercase ${selectedClassHandler(item)}`}
                                    onClick={() => selectionHandler(item)}>
                                    {item.title}
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { FamilyGathering }