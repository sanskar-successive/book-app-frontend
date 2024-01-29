
import { Card, Table, Space, Anchor, Checkbox, InputNumber, Button, Search, Sider } from '../../../../lib/generics'
import { useEffect } from 'react';
import { useState } from 'react';
import { BookService } from '../../Service';
import { useNavigate, useParams } from 'react-router-dom'


function CsvUploadErrors() {

    const [csvUploadErrors, setCsvUploadErrors] = useState([]);
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(true);

    const { session_id } = useParams();

    const columns = [
        {
            title: 'Row No.',
            dataIndex: 'rowNumber',
            // key: 'Title',
        },
        {
            title: 'Error Details',
            dataIndex: 'errorDetails',
            // key: 'Author',
        },
        {
            title: 'Id',
            dataIndex: 'session_id',
            // key: 'Rating',
        },
    ];

    const fetchCSVUploadErrors = async () => {
        setLoading(true);
        try {

            const { data } = await BookService.getCSVUploadErrors(session_id);

            console.log("data", data.bulkUploadErrorDetail);
            setCsvUploadErrors(data.bulkUploadErrorDetail);
        } catch (error) {
            setErrors(error.message);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCSVUploadErrors();
    }, []);

    if (loading) {
        return <h2>loading</h2>
    }

    if (errors) {
        return <h2>some error occured</h2>
    }
    return (
        <>


            <Table style={{ marginLeft: 400 }} dataSource={csvUploadErrors} columns={columns} />

        </>
    );
}

export default CsvUploadErrors;
