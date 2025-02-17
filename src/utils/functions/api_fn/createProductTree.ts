import { CategorieInterface, RecordsInterface } from "@/utils/interfaces/interfaces";

export const createProductTree = (products: RecordsInterface | undefined) => {
  const categoriesTree: CategorieInterface[] = []

  products?.records.forEach((item) => {
    const categoryName = item.fields.grupo || null;
    const subcategoryName = item.fields.subgrupo || null;

    let category = categoriesTree.find(cat => cat.name === categoryName);
    if (!category) {
      category = { name: categoryName, subcategories: [] };
      categoriesTree.push(category);
    }

    if (!category.subcategories.includes(subcategoryName)) {
      category.subcategories.push(subcategoryName);
    }
  });

  console.log(categoriesTree)

  return categoriesTree;
}