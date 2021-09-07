import Link from "next/link";
export const Navigation = () => {
  return (
    <div>
      <Link href="/">
        <a>Mainpage</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/about/contact">
        <a>contact</a>
      </Link>
    </div>
  );
};
