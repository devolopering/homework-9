import Image from "next/image";

export default function Home() {
  return (
    <div className=" mt-5">
      <h1 className="text-3xl mb-3">Home page</h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Image
        src={`https://images.unsplash.com/photo-1725900737080-54b5a571b38c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        alt="photo"
        width={700}
        height={200}
        className="max-w-[1100px] mx-auto w-full h-[500px] mb-5"
      />
    </div>
  );
}
