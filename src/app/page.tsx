import Navbar from "@/src/app/components/Navbar";

{/* TODO: 
    Make this look prettier. Could use inspiration from `/projects` page?
    Not sure how I want layout to look or what style is quite yet
*/}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">About Me</h2>
        <p>About me description here...</p>
      </div>
      <div className="p-4 mb-auto grow">
        <h2 className="text-xl font-bold">Highlighted Projects</h2>
        <p>List of highlighted projects here...</p>
      </div>
    </main>
  )
}
