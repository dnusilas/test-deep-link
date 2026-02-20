export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">Test Link</h1>
        <ul>
          <li className="text-2xl text-gray-500 dark:text-gray-400">
            <a href="https://app.true.th/profile/?openWebview=1" className="underline">With</a>
          </li>
          <li className="text-2xl text-gray-500 dark:text-gray-400">
            <a href="https://app.true.th/profile/" className="underline">Without</a>
          </li>
        </ul>
      </main >
    </div >
  );
}
