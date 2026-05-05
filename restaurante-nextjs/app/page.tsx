export default function Home() {
  console.log("Probando conexión backend:", process.env.NEXT_PUBLIC_API_URL);
  return (
    <main>
      <h1>Restaurante — Next.js</h1>
    </main>
  )
}
