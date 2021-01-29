import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await fetch('https://fortnite-api.theapinetwork.com/store/get');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const items = await response.json();
            // console.log('items 1', items)
            setItems(items.data);

            // console.log('items 2', items);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {items.map(item => (
                <h1 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h1>
            ))}
        </div>
    )
}

export default Shop;