
import { Card, Table, Space, Anchor, Checkbox, InputNumber, Button, Search, Sider } from '../../../../lib/generics'
import { useEffect } from 'react';
import { useState } from 'react';
import { BookService } from '../../Service';
import { useNavigate } from 'react-router-dom'


function CsvUploads() {

  const [csvUploads, setCsvUploads] = useState([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Records Processed',
      dataIndex: 'recordsProcessed',
      // key: 'Title',
    },
    {
      title: 'Errors',
      dataIndex: 'totalErrors',
      // key: 'Author',
    },
    {
      title: 'Time Taken',
      dataIndex: 'timeTaken',
      // key: 'Price',
    },
    {
      title: 'Id',
      dataIndex: 'session_id',
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
      render: (_, { session_id }) => (
        <Space size="small" >
          <Button onClick={() => navigate(`/bulk-uploads/${session_id}`)} >View</Button>
        </Space>
      ),

    },
  ];

  const fetchCSVUploadsData = async () => {
    setLoading(true);
    try {
      // const { data } = await BookService.getBooksForHomePage();

      const { data } = await BookService.getCSVUploads();

      console.log("data", data.bulkUploads);
      setCsvUploads(data.bulkUploads);
    } catch (error) {
      setErrors(error.message);
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCSVUploadsData();
  }, []);

  if (loading) {
    return <h2>loading</h2>
  }

  if (errors) {
    return <h2>some error occured</h2>
  }
  return (
    <>


      <Table style={{ marginLeft: 400 }} dataSource={csvUploads} columns={columns} />

    </>
  );
}

export default CsvUploads;
