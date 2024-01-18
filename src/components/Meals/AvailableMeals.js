import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Teriyaki",
    description: "It's not meant to be sweet",
    price: 795,
  },
  {
    id: "m2",
    name: "Dragon Chicken",
    description: "Just Eat It!",
    price: 420,
  },
  {
    id: "m3",
    name: "Tandoori Momo",
    description: "Tandoori But Momo",
    price: 380,
  },
  {
    id: "m4",
    name: "Hawaiian Pizza",
    description: "Pineapples on Pizza Huh",
    price: 549,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
