import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full bg-gray-900 min-h-screen px-10">
      <div className="flex flex-col w-full min-h-screen items-center justify-between py-20">
        <div></div>
        <div className="flex flex-col text-center">
          <h1 className="text-white text-5xl font-bold mb-12">LogistiX</h1>
          <p className="text-white text-sm md:text-lg font-light mb-10">
            Jednostavan način da pronađete prevoz ili ponudite svoje usluge
            prevoza — brzo, jednostavno i na jednom mjestu.
          </p>
        </div>

        <div className="w-full cta-buttons text-center flex flex-col items-center justify-center md:flex-row gap-5 md:gap-10">
          <Link
            href="/requests/new"
            className="bg-transparent w-full md:w-auto px-5 py-3 border text-sm md:text-base uppercase border-green-600 rounded-full text-green-600 hover:text-white hover:bg-green-600 transition-all"
          >
            Tražim prevoz
          </Link>
          <Link
            href="/requests"
            className="bg-transparent w-full md:w-auto px-5 py-3 border text-sm md:text-base uppercase border-green-600 rounded-full text-green-600 hover:text-white hover:bg-green-600 transition-all"
          >
            Nudim prevoz
          </Link>
        </div>
      </div>
    </main>
  );
}
