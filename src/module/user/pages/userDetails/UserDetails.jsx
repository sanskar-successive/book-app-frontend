import React from 'react';
import { Descriptions } from 'antd';
import { useParams } from "react-router-dom";
import useFetchUserDetails from '../../hooks/useFetchUserDetails';
import { flattenObj } from '../../../../lib/helpers/flattenObj';


const UserDetails = () => {

    const { userId } = useParams();

    const { loading, error, user } = useFetchUserDetails(userId);

    const flattenUser = flattenObj(user);

    const items = Object.keys(flattenUser).map((item, index) => {

        return {
            key: index,
            label: item,
            children: flattenUser[item]
        }
    })

    if (loading) {
        return <h2>loading..</h2>
    }

    if (error) {
        return <h2>some error occured</h2>
    }

    return (
        <Descriptions title="User Details" items={items} />
    )
}

export default UserDetails;