import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <header className=" py-3 shadow-slate-500">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-10 lg:px-3">
        <div className="flex items-center w-auto">
          <div className="text-base text-gray-900 flex">
            <div className="px-5 py-3 transform transition hover:scale-[1.05]">
              <Link href="#">
                <p className=" text-gray-800 hover:text-gray-800 ">Dashboard</p>
              </Link>
            </div>
            <div class="px-5 py-3 transform transition hover:scale-[1.05]">
              <Link href="#">
                <p className=" text-gray-800"> Report</p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link href="#">
            <div class="rounded-md w-auto px-4 py-2 bg-sky-600/40">
              <div class="flex justify-start items-center">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-700 hover:text-gray-800" />
                <p className=" text-gray-700 hover:text-gray-800">
                  &nbsp; Search &nbsp; &nbsp; &nbsp;
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
