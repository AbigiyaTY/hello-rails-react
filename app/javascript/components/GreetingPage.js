import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../redux/greetingRedux/greetingRedux';

const GreetingPage = () => {
    const array = useSelector((state) => state.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataAction());
    }, []);

    return (
        <div className="container">
            <div>
                <h2>👋{array.message}</h2>
            </div>
        </div>
    )
}

export default GreetingPage;