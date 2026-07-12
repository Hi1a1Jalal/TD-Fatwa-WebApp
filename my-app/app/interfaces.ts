import * as z from "zod";

const SubCategoryWithId = z.object({
    id: z.int(),
    subCategory: z.string()
})
const Categories = z.object({
  baseCategory: z.string(),
  subCategories: SubCategoryWithId.array(),
});

export type Categories = z.infer<typeof Categories>;
