

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-cyan-700 p-4 text-white">
        <h1 className="text-xl">REJECT</h1>
        <div className="flex justify-end space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="text-center py-20">
          <h2 className="text-4xl mb-4">Welcome To Rejection</h2>
          <p className="text-lg">You&apos;ll never be the same again.</p>
        </section>

        {/* Add more sections as required */}
      </main>

      <footer className="p-4 text-center bg-cyan-700 text-white">

      </footer>
    </div>
  )
}