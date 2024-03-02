import PropTypes from 'prop-types';

const Card = ({
  data,
  maxWidth = 'max-w-[400px]',
  borderRadius = 'rounded-[10px]',
  padding = 'p-[20px]',
  textAlign = 'text-center',
  titleSize = 'text-xl',
  contentSize = 'text-sm',
  headerSeparate = false,
  footerSeparate = false,
  headerImageOneLine = false,
  headerImageTwoLine = false,
  className,
  layout,
}) => {
  const renderContent = () => {
    if (Array.isArray(data.content)) {
      return (
        <div
          className={`w-full flex flex-col gap-3 ${
            headerSeparate && 'border-t-[1px] border-border pt-4'
          } ${footerSeparate && 'border-b-[1px] pb-4'}`}
        >
          {data.content.map((item, index) => {
            if (item.href) {
              return (
                <a
                  href={item.href}
                  className={`${textAlign} ${contentSize} flex justify-between hover:text-hover-text-primary`}
                  key={index}
                >
                  {item.text}
                  <svg
                    className='w-2.5 h-2.5 text-inherit'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m1 1 4 4 4-4'
                    />
                  </svg>
                </a>
              );
            }
            return (
              <p className={`${textAlign} ${contentSize}`} key={index}>
                {item}
              </p>
            );
          })}
        </div>
      );
    }
    return (
      <div className={`${textAlign} ${contentSize}`}>
        <p>{data.content}</p>
      </div>
    );
  };
  const renderHeader = () => {
    if (headerImageOneLine) {
      return (
        <div className='w-full flex justify-start items-center gap-3'>
          {data.image && (
            <img src={data.image} alt='image-card' className='w-[60px]' />
          )}
          {data.title && (
            <h3 className={`${titleSize} font-semibold ${textAlign}`}>
              {data.title}
            </h3>
          )}
        </div>
      );
    } else if (headerImageTwoLine) {
      return (
        <>
          {data.image && (
            <img src={data.image} alt='image-card' className='w-[80px]' />
          )}
          {data.title && (
            <h3 className={`${titleSize} font-semibold ${textAlign}`}>
              {data.title}
            </h3>
          )}
        </>
      );
    } else {
      return (
        <h3 className={`${titleSize} font-semibold ${textAlign}`}>
          {data.title}
        </h3>
      );
    }
  };
  return (
    <div
      className={`shadow-card ${maxWidth} w-full ${borderRadius} ${padding} ${className} flex flex-col justify-center items-center gap-2 mx-auto`}
    >
      <Layout
        type={layout}
        renderHeader={renderHeader}
        image={data.image}
        title={data.title}
        textAlign={textAlign}
        titleSize={titleSize}
      >
        {renderContent()}
      </Layout>
    </div>
  );
};

const Layout = ({
  children,
  type,
  renderHeader,
  image,
  titleSize,
  textAlign,
  title,
}) => {
  switch (type) {
    case 'two-col': {
      return (
        <div className='flex justify-start w-full gap-2'>
          <img src={image} alt='' className='w-[100px] h-[100px]' />
          <div>
            <h3 className={`${titleSize} font-semibold ${textAlign}`}>
              {title}
            </h3>
            {children}
          </div>
        </div>
      );
    }
    default: {
      return (
        <>
          {renderHeader()}
          {children}
        </>
      );
    }
  }
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  maxWidth: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  titleSize: PropTypes.string,
  className: PropTypes.string,
  contentSize: PropTypes.string,
  textAlign: PropTypes.string,
  headerSeparate: PropTypes.bool,
  footerSeparate: PropTypes.bool,
  headerImageOneLine: PropTypes.bool,
  headerImageTwoLine: PropTypes.bool,
  layout: PropTypes.string,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  textAlign: PropTypes.string,
  titleSize: PropTypes.string,
  renderHeader: PropTypes.func.isRequired,
};

export default Card;
