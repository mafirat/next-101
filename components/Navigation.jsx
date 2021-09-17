import Link from "next/link";
import style from "./Nav.module.css";
export const Navigation = () => {
  return (
    <div className={style.nav}>
      <Link href="/">
        <a className={style.link}>NEXT-101</a>
      </Link>

      <div>
        <Link href="/users">
          <a className={style.link}>Users</a>
        </Link>
        <Link href="/blogs">
          <a className={style.link}>Blogs</a>
        </Link>
        <Link href="/about">
          <a className={style.link}>About</a>
        </Link>

        <Link href="/about/contact">
          <a className={style.link}>Contact</a>
        </Link>
      </div>
    </div>
  );
};
