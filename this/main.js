// Aşağıdakı tələblərə uyğun adlı obyekt yaradın və this açar sözünün istifadəsini izah edən bir kod nümunəsi hazırlayın: obyektində aşağıdakı xüsusiyyətlər olsun:
// brand (string)
// model (string)
// year (number)
// getCarInfo() metodu – bu metod this istifadə edərək maşının markasını və modelini qaytarsın.
// updateYear(newYear) metodu – bu metod this istifadə edərək year dəyərini yeniləsin.
// displayInfo() metodu setTimeout içərisində this istifadəsini göstərsin.

let array = {
  brand: "Porsche",
  model: "911 Turbo S",
  year: 2024,

  getCarInfo: function () {
    return `${this.brand} ${this.model}`;
  },

  updateYear: function (newYear) {
    this.year = newYear;
  },

  displayInfo: function () {
    setTimeout(() => {
      console.log(`${this.brand} ${this.model} ${this.year}`);
    }, 1000);
  },
};

console.log(array.getCarInfo());
array.updateYear(2025);
array.displayInfo();
