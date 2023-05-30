import Link from "next/link";

const NavBrand = () => {
  return (
    <>
      <div className="text-center py-1 cursor-pointer flex-1">
        <Link href="/notes">
          <span className="text-2xl text-black font-bold">NotedPak</span>
        </Link>
      </div>
    </>
  );
};

export default NavBrand;
