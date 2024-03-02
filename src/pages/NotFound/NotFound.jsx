import Loading from '@/components/Loading';
import routes from '@/config/routes';
import { Button, Result } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timerId);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Result
          status='404'
          title='404'
          subTitle='Sorry, the page you visited does not exist.'
          extra={
            <Link to={routes.home}>
              <Button className='bg-primary'>Back Home</Button>
            </Link>
          }
        />
      )}
    </>
  );
};

export default NotFound;
