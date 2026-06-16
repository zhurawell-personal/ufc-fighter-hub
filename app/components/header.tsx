import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="mx-auto max-w-6xl px-[20px] md:px-[30px] lg:px-[40px] flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold hover:text-red-500 transition-colors duration-200"
        >
          <Image src="/ufc_logo.svg" alt="UFC logo" width={64} height={22} />
           Fighter Hub
        </Link>

        <nav>
          <ul className="flex flex-wrap gap-10 text-lg font-medium">
            <li>
              <Link href="/compare" className="hover:text-red-500 transition-colors duration-200">
                Compare
              </Link>
            </li>
            <li>
              <Link href="/predict" className="hover:text-red-500 transition-colors duration-200">
                Predict
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
