import { db } from "../db.ts";
import { seed } from "../seed.ts";

import { AboutMeType } from "@/src/components/types.ts";

export { db };

export async function listAboutMes(): Promise<AboutMeType[]> {
  await seed();
  const aboutMes = await db.orm.public.AboutMe.orderBy((a) => a.id.asc()).all();

  return aboutMes;
}
