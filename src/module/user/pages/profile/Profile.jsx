import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import { UserService } from '../../Service';
import { flattenObj } from '../../../../lib/helpers/flattenObj';



const Profile = () => {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState("");

    const flattenUser = flattenObj(profile);

    const items = Object.keys(flattenUser).map((item, index) => {

        return {
            key: index,
            label: item,
            children: flattenUser[item]
        }
    })

    const fetchUserAccount = async () => {
        try {
            const { data } = await UserService.getUserAccount();
            setProfile(data.user);
        } catch (error) {
            setErrors(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserAccount();
    }, [])



    if (loading) {
        return <h2>loading..</h2>
    }

    if (errors) {
        return <h2>some error occured</h2>
    }

    return (
        <Descriptions title="My Account" items={items} />
    )
}

export default Profile;