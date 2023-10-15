import React from "react";

import MealsSummary from "./OfferText";
import AvailableMeals from "./AvailableMeals";

const MealsPageContent: React.FC = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default MealsPageContent;
