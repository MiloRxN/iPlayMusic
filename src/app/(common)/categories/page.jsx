import Heading from "@/components/typography/heading";
import { cookies } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "Categories"
};

export default async function CategoriesPage() {
  const cookieStore = await cookies();
  const access_token = cookieStore.get("ipm_access_token");

  const response = await fetch("https://api.spotify.com/v1/browse/categories", {
    headers: {
      "Authorization": `Bearer ${access_token.value}`
    }
  })

  const data = await response.json();

  console.log(data)

  return (
    <>
      <section className="grid gap-4">
        {data.categories.items.map((category) => (
          <article key={category.id} className="relative max-h-20 rounded-lg overflow-hidden">
            <Link
              href={`/categories/${category.id}`}
              className="block w-full h-full"
              aria-label={`Browse ${category.name} music`}
            >
              {category.icons && category.icons[0] && (
                <img
                  src={category.icons[0].url}
                  alt={`${category.name} category`}
                  className="w-full h-full object-cover item-center"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <Heading level={2} className={"text-white"}>
                  {category.name}
                </Heading>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}