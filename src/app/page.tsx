import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href="/login">Login</a>
      <a href="/dashboard">
        Dashboard (page only accessible by logged in user protected by auth
        guard)
      </a>
    </main>
  );
}
