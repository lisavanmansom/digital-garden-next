import Link from "next/link";

export default function Home() {
  const titles = ["Dixie Spectacular", "Extreme Surf & Turf", "Dynamite Shrimp Po'Boy", "Cape Canaveral Special", "Maine Lobster & Snow Crab", "Sand Point Sampler"]
  const categories = ["notes", "experiments", "weluvweb", "capaciteiten-en-beperkingen", "student-assistent", "progress-questions" ]; // blog categories

  return (
    <main>
      <h1>Dixie Crossroad specials</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={category}>
            <Link href={`/blogs/${category}`}>
              {titles[index] || charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}