import { db } from "../db.ts";
import { seed } from "../seed.ts";

import { StatusType } from "@/src/components/types.ts";

export { db };

export async function listStatuses(): Promise<StatusType[]> {
  await seed();
  const statuses = await db.orm.public.Status.all();

  return statuses
}
