import Link from "next/link";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen p-4 pb-20">
      <div className="[&>*]:mb-2 max-w-[600px] text-sm text-balance">
        <h1>not found</h1>
        <Link href="/">return home</Link>
      </div>
    </main>
  );
}
