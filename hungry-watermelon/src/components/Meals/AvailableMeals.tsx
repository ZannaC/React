import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import MealItemUpdate from "./MealItem/MealItemUpdate";

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AvailableMeals: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>("monday");

  const dayNames: string[] = ["monday", "tuesday", "wednesday", "thursday"];
  const dayIndex: number = dayNames.indexOf(selectedDay);
  const nextDayIndex: number = (dayIndex + 1) % dayNames.length;
  const nextDay: string = dayNames[nextDayIndex];

  const handleToggleDay = () => {
    setSelectedDay(nextDay);
  };

  const fetchData = async (selectedMenuDay: string) => {
    try {
      const offerURLs: Record<string, string> = {
        monday: "https://api.jsonbin.io/v3/b/65102c5f12a5d37659827999",
        tuesday: "https://api.jsonbin.io/v3/b/6510346f12a5d37659827c59",
        wednesday: "https://api.jsonbin.io/v3/b/65104eeb54105e766fb91137",
        thursday: "https://api.jsonbin.io/v3/b/651068b40574da7622afb2d9",
      };

      const response = await fetch(offerURLs[selectedMenuDay], {
        headers: {
          "X-Master-Key":
            "$2b$10$QicGxsrGEpmODOSNZP7Tlu5P8nENEG7zNy9kuQ94evxU4HFpIEErW",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await response.json();
      setMeals(data.record);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(selectedDay);
  }, [selectedDay]);

  const dayOffer = `${selectedDay.charAt(0).toUpperCase()}${selectedDay.slice(
    1
  )} Offer`;

  const mealsList =
    meals.length > 0 ? (
      meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))
    ) : (
      <p>No meals available for {selectedDay}.</p>
    );
  return (
    <section className={classes.meals}>
      <div className={classes.buttons}>
        <button onClick={handleToggleDay} className={classes.dayOfferButton}>
          {dayOffer}
        </button>
      </div>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      <MealItemUpdate />
    </section>
  );
};

export default AvailableMeals;