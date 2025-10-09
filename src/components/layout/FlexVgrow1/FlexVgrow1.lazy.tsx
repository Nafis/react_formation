import React, { lazy, Suspense } from 'react';

const LazyFlexVgrow1 = lazy(() => import('./FlexVgrow1'));

const FlexVgrow1 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexVgrow1 {...props} />
  </Suspense>
);

export default FlexVgrow1;
