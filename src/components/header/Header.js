
import React, { useEffect } from 'react';
import { hideHeader } from './HeaderSlice';
import { useDispatch } from 'react-redux';
import "./header.css"

const NotificaionHeader = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // wait 3 seconds and then hide the header
        setTimeout(() => {
            dispatch(hideHeader());
        }
        , 3000);
    }, [dispatch]);

    return (
        <header>
            <p>Explore the nature</p>
        </header>
    );
}

export default NotificaionHeader;
