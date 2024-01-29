import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs';
import {
    Button,
    Cascader,
    Checkbox,
    ColorPicker,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
import useCreateBook from '../../hooks/useCreateBook';
import useFetchBookDetails from '../../hooks/useFetchBookDetails';
import useUpdateBook from '../../hooks/useUpdateBook';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};


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

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
};


const EditBook = () => {

    const { bookId } = useParams();


    const { loading, error, book } = useFetchBookDetails(bookId);

    const useUpdatedBookInstance = useUpdateBook();


    const handleUpdateBookDetails = async (value) => {

        await useUpdatedBookInstance.updateBook(bookId, value);
    }


    if (loading) {
        return <h2>loading</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    const originalDate = book.moreDetails.firstPublished

    const formattedBook = {
        ...book,
        moreDetails: {
            ...book.moreDetails,
            firstPublished: dayjs(new Date(originalDate).toISOString().split('T')[0].replace(/-/g, '/'), 'YYYY/MM/DD')
        },
    };




    if (useUpdatedBookInstance.loading) {
        return <h2>loading</h2>
    }


    if (useUpdatedBookInstance.error) {
        return <h2>{error}</h2>
    }

    return (

        <Form
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            style={{
                maxWidth: 600,
            }}
            validateMessages={validateMessages}
            initialValues={formattedBook}
            scrollToFirstError={true}
            onFinish={handleUpdateBookDetails}
            onFinishFailed={() => { }}
        >

            <Form.Item label="Book Title" name={'title'} rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Author" name={['author', 'name']} rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label="About Author" name={['author', 'about']} rules={[{ required: true }]}>
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item label="Category" name={'category'} rules={[{ required: true }]}>
                <Select>
                    {categories.map((item) => {
                        return (
                            <Select.Option value={item}>{item}</Select.Option>
                        )
                    })}
                </Select>
            </Form.Item>


            <Form.Item label="Price" name={'price'} rules={[{ required: true, type: 'number' }]}>
                <InputNumber />
            </Form.Item>


            <Form.Item label="Rating" name={'rating'} rules={[{ required: true, type: 'number' }]}>
                <Rate />
            </Form.Item>


            <Form.Item label="Language" name={['moreDetails', 'text_language']} rules={[{ required: true }]}>
                <Select>
                    {languages.map((item) => {
                        return (
                            <Select.Option value={item}>{item}</Select.Option>
                        )
                    })}
                </Select>
            </Form.Item>


            <Form.Item label="Description" name={['moreDetails', 'description']} rules={[{ required: true }]}>
                <TextArea rows={4} />
            </Form.Item>


            <Form.Item label="Seller" name={['moreDetails', 'seller']} rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Publisher" name={['moreDetails', 'publisher']} rules={[{ required: true }]}>
                <Input />
            </Form.Item>


            <Form.Item label="First Published" name={['moreDetails', 'firstPublished']}>
                <DatePicker />
            </Form.Item>

            <Form.Item label="Page Count" name={['moreDetails', 'pages']} rules={[{ required: true, type: 'number' }]}>
                <InputNumber />
            </Form.Item>

            <Form.Item label="File Size" name={['moreDetails', 'fileSize']} rules={[{ required: true, type: 'number' }]}>
                <InputNumber />
            </Form.Item>


            <Form.Item label="Verified" valuePropName="checked" name={['moreDetails', 'verified']}>
                <Checkbox />
            </Form.Item>

            {/* <Form.Item label="Cover Image" name={'coverImage'} valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload action="/upload.do" listType="picture-card"  >
                    <button
                        style={{
                            border: 0,
                            background: 'none',
                        }}
                        type="button"
                    >
                        <PlusOutlined />
                        <div
                            style={{
                                marginTop: 8,
                            }}
                        >
                            Select
                        </div>
                    </button>
                </Upload>
            </Form.Item> */}


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form.Item>


        </Form>

    );
};
export default EditBook;