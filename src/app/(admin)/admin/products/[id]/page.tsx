'use client';

import EditProductPage from '@/app/_components/(admin)/products/editproducts/EditProductPage';

const page = (id: number) => {
  return (
    <>
      <EditProductPage id={id} />
    </>
  );
};

export default page;
