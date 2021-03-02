import '../App.css';
import React, { useState, useEffect } from 'react';

function EditTask({ match }) {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        item:{
            images: {
                information: '',
                background: ''
            }
        }
    });

    const fetchItem = async () => {
        try {
            const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }

            const item = await response.json();

            setItem(item.data);

            console.log(item)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

        </div>
    )
}

export default EditTask;
