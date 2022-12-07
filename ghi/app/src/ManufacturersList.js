import React, { useState, useEffect } from 'react';

function ManufacturerList() {
    const [manufacturer, setManufacturer] = useState([]);
    const getManufacturer = async () => {
        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(manufacturerUrl);
        if (response.ok) {
            const listManufacturer = await response.json();
            setManufacturer(listManufacturer.manufacturer);
        }
    }
}
