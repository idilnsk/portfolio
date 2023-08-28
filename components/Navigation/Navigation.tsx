import { FC } from "react";
import Link from "next/link";

const Navigation: FC = () => {
  return (
    <div>
      <nav>
        <ul className=" font-mukta md:flex gap-8 p-6 uppercase bg-black bg-opacity-10 rounded-2xl items-center">
          <li>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
