import React from 'react';
import { Descriptions } from 'antd';
import useFetchBookDetails from '../../hooks/useFetchBookDetails';
import { useParams } from "react-router-dom";

const flattenObj = (ob) => {

    let result = {};

    for (const i in ob) {

        if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
            const temp = flattenObj(ob[i]);
            for (const j in temp) {

                result[j] = temp[j];
            }
        }

        else {
            result[i] = ob[i];
        }
    }
    return result;
};

const BookDetails = () => {

    const { bookId } = useParams();

    const { loading, error, book } = useFetchBookDetails(bookId);

    const flattenbook = flattenObj(book);

    console.log(flattenbook);
    const items = Object.keys(flattenbook).map((item, index) => {

        return {
            key: index,
            label: item,
            children: flattenbook[item]
        }

    })


    if (loading) {
        return <h2>loading..</h2>
    }

    if (error) {
        return <h2>some error occured</h2>
    }

    return (
        <Descriptions layout='horizontal' title="Book Details" items={items} />
    )
}

export default BookDetails;