import { useEffect } from 'react';
import { Card, Table, Space, Anchor, Checkbox, InputNumber, Button, Search, Sider } from '../../../../lib/generics'
import { BookService } from '../../Service';
import { useState } from 'react';
import useFetchBook from '../../hooks/useFetchBook';
import { useNavigate } from 'react-router-dom'
import Filters from './components/Filters';
import SearchBar from './components/Search';
import TablePagination from './components/Pagination';
import { Popconfirm, message } from 'antd';
import Sort from './components/Sort';



const categories = [
    "fiction",
    "mystery",
    "arts",
    "science",
    "romance",
    "horror",
    "religion",
    "philosophy",
    "history",
    "poetry",
    "biography",
    "technology",
];

const languages = ["english", "hindi", "sanskrit", "telugu", "bengali"];

const List = () => {

    // const [book, setBook] = useState([]);
    // const [errors, setErrors] = useState("");
    // const [loading, setLoading] = useState(true);

    // const fetchBookData = async () => {
    //     setLoading(true);
    //     try {
    //         const { data } = await BookService.getBooksForHomePage();
    //         console.log("data", data.books);
    //         setBook(data.books);
    //     } catch (error) {
    //         setErrors(error.message);
    //     }
    //     finally {
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchBookData();
    // }, []);

    const navigate = useNavigate()

    const { loading, error, book, count } = useFetchBook();

    if (loading) {
        return <h2>loading</h2>
    }

    if (error) {
        return <h2>Oops! Something went wrong</h2>
    }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            // key: 'Title',
        },
        {
            title: 'Author',
            dataIndex: ['author', 'name'],
            // key: 'Author',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            // key: 'Price',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            // key: 'Rating',
        },

        {
            title: 'Created At',
            dataIndex: 'createdAt',
            // key: 'Created At',
        },
        {
            title: 'Action',
            dataIndex: '_id',
            // key: 'action',
            render: (_, { _id }) => (
                <Space size="small" >
                    {/* <Anchor items={actionItems} /> */}
                    <Button onClick={() => navigate(`/book/${_id}`)} >View</Button>
                    <Button onClick={() => navigate(`/add-book/${_id}`)} >Edit</Button>
                    <Popconfirm
                        title="Delete the Book"
                        description="Are you sure to delete this Item?"
                        onConfirm={async () => {

                            try {
                                console.log("deleted");
                                await BookService.deleteBook(_id);
                                await message.success('Deleted successfully');
                                window.location.reload();
                            } catch (error) {
                                message.error(error.message);
                            }
                        }}
                        onCancel={() => {
                            console.log("cancelled");
                            message.error('Operation cancelled');
                        }}
                        okText="Yes"
                        cancelText="Cancel"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
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

            <Space direction='vertical'>
                <SearchBar />
                <Sort />
            </Space>

            <Space direction='horizontal'>


                <Filters />

                <Table style={{ marginLeft: 400 }} dataSource={book} columns={columns} pagination={false} />


            </Space>

            <Space>
                <TablePagination totalItems={count} />

            </Space>

        </Space>
    )
}

export default List