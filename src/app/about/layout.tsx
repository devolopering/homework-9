import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  products: React.ReactNode;
}

function Layout({ children, users, products }: LayoutProps) {
  return (
    <div>
       <main>
          <div>{children}</div>
        <div className="grid grid-cols-3 items-start gap-10 justify-between w-full  ">
          <div className="col-span-1">{users}</div>
          <div className="col-span-2">{products}</div>
        </div>
        </main>
    </div>
  );
}

export default Layout;
