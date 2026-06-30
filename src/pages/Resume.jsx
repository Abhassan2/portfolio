export default function Resume() {
  return (
    <div className="bg-[#050816] min-h-screen text-white px-5">

      <h1 className="text-center text-3xl font-bold pt-4">
        Resume
      </h1>

      <div className="bg-slate-900 p-5 rounded-xl mt-8">
        <h2 className="font-bold">
          B.Tech Computer Science
        </h2>

        <p className="text-gray-400">
          J.C. Bose University
        </p>
      </div>

      <button className="w-full bg-purple-600 py-4 rounded-xl mt-8">
        Download Resume
      </button>
    </div>
  );
}