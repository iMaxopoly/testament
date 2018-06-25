export default class Dress {
  constructor() {
    this.storeDresses = [
      {
        id: 1,
        name: "Floune Sleeve Scuba Knit Dress",
        sizes: ["S", "M", "L"],
        colors: {
          black: []
        },
        price: 38.0
      },
      {
        id: 2,
        name: "High Neck Sweater Dress",
        sizes: ["S", "M", "L"],
        colors: {
          black: [],
          olive: []
        },
        price: 38.0
      },
      {
        id: 3,
        name: "Floral Open Shoulder Romper",
        sizes: ["S", "M", "L"],
        colors: {
          red: []
        },
        price: 45.0
      },
      {
        id: 4,
        name: "Floral Open Shoulder Dress",
        sizes: ["S", "M", "L"],
        colors: {
          white: []
        },
        price: 48.0
      },
      {
        id: 5,
        name: "Floral Open Shoulder Dress",
        sizes: ["S", "M", "L"],
        colors: {
          white: []
        },
        price: 48.0
      },
      {
        id: 6,
        name: "Floral Sleeve Mini Dress",
        sizes: ["S", "M", "L"],
        colors: {
          white: []
        },
        price: 48.0
      },
      {
        id: 7,
        name: "Floral Surplice Halter Dress",
        sizes: ["S", "M", "L"],
        colors: {
          white: []
        },
        price: 48.0
      },
      {
        id: 8,
        name: "Flounce Open Shoulder Dress",
        sizes: ["S", "M", "L"],
        colors: {
          white: [],
          red: []
        },
        price: 48.0
      },
      {
        id: 9,
        name: "Gingham Frill Sleeve Dress",
        sizes: ["S", "M", "L"],
        colors: {
          white: [],
          red: []
        },
        price: 48.0
      },
      {
        id: 10,
        name: "Pleated Floral Cami Romper",
        sizes: ["S", "M", "L"],
        colors: {
          black: [],
          yellow: [],
          navy: []
        },
        price: 48.0
      }
    ]
  }

  getDresses() {
    return this.storeDresses
  }

  getDress(dressId) {
    this.storeDresses.find(dress => dress.id === dressId)
  }
}
