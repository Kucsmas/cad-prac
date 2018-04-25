let menu = {

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    let dishIndex = Math.floor(Math.random() * dishes.length);
    return dishes[dishIndex];
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    //1
    this._courses[courseName].push(dish);

    console.log( this._courses )

  /* 2  if (courseName === 'appetizers') {
      this.appetizers.push(dish)
    } else if (courseName === 'mains') {
      this.mains.push(dish)
    } else if (courseName === 'desserts') {
      this.desserts.push(dish)
    }; */
   // 3 #8
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = (this.appetizer.price + this.main.price + this.dessert.price);
    return console.log(`Your meal will begin with the ${appetizer} followed by the ${main} finishing with the ${dessert}. It will cost a total of $${totalPrice}USD`)
  },


  _courses: {
    get courses() {
      return {
      appetizers: this._appetizers,
      mains: this._mains,
      desserts: this._desserts,
      }
    },

    appetizers: [],
    mains: [],
    desserts: [],
  },

  get appetizers() {},
  set appetizers(appetizerIn) { },
  get mains() {},
  set mains(mainsIn) {},
  get desserts() { },
  set desserts(desserstIn) {},

};

menu.addDishToCourse('appetizers', 'soup', 5);
menu.addDishToCourse('appetizers', 'salad', 6);
menu.addDishToCourse('appetizers', 'fries', 7);

menu.addDishToCourse('mains', 'chicken', 8);
menu.addDishToCourse('mains', 'beef', 9);
menu.addDishToCourse('mains', 'pork', 10);

menu.addDishToCourse('desserts', 'ice cream', 2);
menu.addDishToCourse('desserts', 'brownie', 3);
menu.addDishToCourse('desserts', 'cake', 4);

const meal = menu.generateRandomMeal();

console.log(meal);
