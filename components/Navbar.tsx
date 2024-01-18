import Link from "next/link";
import { ThemeSwitcher } from "./ThemeToggle";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex gap-4">
          <li className="text-blue-950 hover:text-blue-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-blue-950 hover:text-blue-500">
            <Link href={"/event"}>Event</Link>
          </li>
          <li>
            <ThemeSwitcher></ThemeSwitcher>
          </li>
        </ul>
      </nav>
    </div>
  );
}
