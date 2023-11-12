import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import './searchForm.styles.css'

const SearchForm = () => {
    const { reset, handleSubmit, register } = useForm();
    const [state, setState] = useState('');
    const navigate = useNavigate();

    console.log(state);

    useEffect(() => {
        if (state) {
            navigate(`/search/movie?query=${state}`);
        }
    }, [state]);

    const onSubmit = (data: any) => {
        setState(data.search);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('search')}  className={'input'} placeholder={'Enter films'}/>
                <button type="submit" className={'buttonInput'}>Search</button>
            </form>
        </div>
    );
};

export {SearchForm};
