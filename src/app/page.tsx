export const dynamic = "force-dynamic";
import Image from "next/image"

export default async function Home() {

  const { listProjects } = await import("../prisma/projects");
  const formatter = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const projects = await listProjects().catch(() => undefined);

  return (
    <main className="shell">
      <div className="hero">
        <p className="eyebrow">Next.js + Prisma 8</p>

        <h1>Users from your database, loaded on the server.</h1>
        <p className="lede">
          This page reads from <code>src/app/page.tsx</code> using the Prisma 8 helper in{" "}
          <code>src/prisma/users.ts</code>.
        </p>
      </div>

      <section className="panel">
        <div className="panelHeader">
          <h2>Seeded users</h2>
          <span>{projects?.length ?? 0} total</span>
        </div>

        {!projects ? (
          <p className="empty">
            Could not query users yet. Run <code>contract:emit</code> and apply your schema,
            then refresh.
          </p>
        ) : projects.length === 0 ? (
          <p className="empty">No users found.</p>
        ) : (
          <ul className="users">
            {projects.map((project) => (
              <li key={project.id}>
                <div>
                  <strong>{project.title}</strong>
                  <p>{project.desc}</p>
                  {project.images.map((image, index) => (
                    <Image key={project.id - index} {...image} src={image.url}/>
                  ))}
                  <p>{project.publishLink}</p>
                  <p>{project.githubLink}</p>
                  <p>{project.insights}</p>
                  <p>{project.tools}</p>
                </div>
                <time dateTime={project.creationDate}>
                  {formatter.format(new Date(project.creationDate))}
                </time>
              </li>
            ))}
          </ul>
        )}
      </section>

    </main>
  );
}
