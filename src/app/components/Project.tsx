import Image from "next/image"

{/* TODO: 
    Use types from `types.ts` and define props to pass in. Both for `Project` and for `Tool`.
    Then query database and populate from that, using a map in main projects page
*/}


export default function Project() {
  return (
    <section className="p-4 border rounded-lg bg-gray-100">
      <div className="flex flex-row">
        <div>
          <h2 className="text-xl">Title</h2>
          <p className="text-xs">Sep. 19, 2026</p>
          <p>Description here...</p>

          <div className="flex flex-row gap-2 pt-2">
            <Tool />
            <Tool />
            <Tool />
          </div>
        </div>
        {/* Eventually will want a carousel of images if multiple, if do multiple at all? */}
        <Image className="ml-auto" width={110} height={110} src="https://placehold.net/default.svg" alt="ALT" />
      </div>
    </section>
  )
}

function Tool() { 
  return (
    <div className="p-1 border rounded-lg bg-gray-300">
      Name
    </div>
  )
}