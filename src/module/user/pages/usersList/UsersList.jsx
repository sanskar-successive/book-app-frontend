import { useEffect } from 'react';
import { Card, Table, Space, Anchor, Checkbox, InputNumber, Button, Search, Sider } from '../../../../lib/generics'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserService } from '../../Service';


const UsersList = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState("");

    const fetchAllUsers = async () => {
        try {
            const { data } = await UserService.getAllUsers();
            setUsers(data.users);
        } catch (error) {
            setErrors(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAllUsers()
    }, [])

    if (loading) {
        return <h2>loading</h2>
    }

    if (errors) {
        return <h2>some error occured</h2>
    }

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            // key: 'Title',
        },
        {
            title: 'Email',
            dataIndex: ["contact", "email"],
            // key: 'Price',
        },
        {
            title: 'Phone',
            dataIndex: ["contact", "phone"],
            // key: 'Rating',
        },
        {
            title: 'Action',
            dataIndex: '_id',
            // key: 'action',
            render: (_, { _id }) => (
                <Space size="small" >
                    <Button onClick={() => navigate(`/users-list/${_id}`)} >View</Button>
                </Space>
            ),
        },
    ];


    return (
        <Space style={{
            marginLeft: 200,
            width: 150,
        }}
            direction='vertical'>

            <Space>
                {/* <SearchBar /> */}

            </Space>

            <Space direction='horizontal'>


                <Table style={{ marginLeft: 400 }} dataSource={users} columns={columns} pagination={false} />

            </Space>

            <Space>
                {/* <TablePagination totalItems={200} /> */}

            </Space>

        </Space>
    )
}

export default UsersList;