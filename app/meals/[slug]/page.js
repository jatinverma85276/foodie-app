import Image from "next/image";
import classed from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealsPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={classed.header}>
        <div className={classed.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classed.headerText}>
          <h1>{meal.title}</h1>
          <p className={classed.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classed.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classed.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
