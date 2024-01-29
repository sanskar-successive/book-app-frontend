import React, { useState, useEffect, memo } from 'react';
import { Segmented } from 'antd';
import { useLocation, useSearchParams } from 'react-router-dom';

const options = ['newest', 'title', 'price low to high', 'price high to low', 'popularity'];

const Sort = () => {
    // const [sortBy, setSortBy] = useState('newest');
    const location = useLocation();
    const [queryParams, setQueryParams] = useSearchParams(location.search);

    if (queryParams.has("skip")) {
        queryParams.delete("skip");
    }
    if (queryParams.has("limit")) {
        queryParams.delete("limit");
    }

    let sortBy = "newest";

    if (queryParams.has('sortBy')) {

        sortBy = queryParams.get("sortBy");
    }

    const handleSortBy = (value) => {

        sortBy = value;
        if (sortBy !== 'newest') {
            queryParams.set('sortBy', value);
        } else {
            queryParams.delete('sortBy');
        }

        setQueryParams(queryParams);
    };

    return <Segmented value={sortBy} onChange={handleSortBy} options={options} />;
};

export default memo(Sort);
