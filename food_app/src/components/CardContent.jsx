import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMenu } from '../hooks/menu';
import { toggle } from '../utils/Slices/loginSlice';
import { useSelector } from 'react-redux';

const CardContent = ({ name, price, address, cuisine, id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const themeSwitcher = useSelector((store) => store.theme.switch);

    const showMore = async () => {
        await fetchMenu(id, dispatch);
        dispatch(toggle(true));
        navigate("/menu");
    };

    // Format price to Indian Rupees
    const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(price);

    return (
        <div className={`p-6  shadow-md ${themeSwitcher ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}>
            <h1 className="text-xl font-bold mb-2">{name}</h1>
            <p className="mb-2">Price: {formattedPrice}</p>
            <p className="mb-2">Address: {address}</p>
            <button
                className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ${themeSwitcher ? "hover:bg-red-700" : "hover:bg-red-600"}`}
                onClick={showMore}
            >
                Show more
            </button>
        </div>
    );
};

export default CardContent;
