import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Deleasious Meals, creadted{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your faviorite recipe and cook it yourself. It easy to fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your faviorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<h1 className={classes.loading}>Fetching Details......</h1>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
