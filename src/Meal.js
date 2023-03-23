class Meal {
    constructor(name, calories) {
      // generates random hexidecimal value for id
      this.id = Math.random().toString(16).slice(2);
      this.name = name;
      this.calories = calories;
    }
  }

  export default Meal;