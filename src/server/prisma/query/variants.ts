import { db } from "../db.ts";
import { seed } from "../seed.ts";

import { VariantType } from "@/src/components/types.ts";

export { db };

export async function listVariants(): Promise<VariantType[]> {
  await seed();
  const variants = await db.orm.public.Variant.all();

  return variants
}
