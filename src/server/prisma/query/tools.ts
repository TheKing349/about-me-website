import { db } from "../db.ts";
import { seed } from "../seed.ts";

import { ToolType } from "@/src/components/types.ts";

export { db };

export async function listTools(): Promise<ToolType[]> {
  await seed();
  const tools = await db.orm.public.Tool.all();

  return tools
}
