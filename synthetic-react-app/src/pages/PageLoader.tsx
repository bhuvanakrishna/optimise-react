import React from 'react';
import { useParams } from 'react-router-dom';

const PageLoader = () => {
  const { pageName } = useParams();

  try {
    const PageComponent = React.lazy(() =>
      import(`./test-data/${pageName}/index`)
    );

    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PageComponent />
      </React.Suspense>
    );
  } catch (err) {
    return <div>Page not found: {pageName}</div>;
  }
};

export default PageLoader;
