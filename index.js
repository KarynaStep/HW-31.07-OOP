"use strict";
// Створити абстрактний клас Figeure3D з властивостю ім'я (string не пуста) і методом обчислити об'єм.
// Створити класи нащадки: сфера, куб, *циліндр. Написати сеттери для властивостей.
// Створити функцію getVolume3DFigure, яка приймає будь яку 3d фігуру і повертає її об'єм.

// v - 1 (Перевірки окремо)
function checkValueString(value) {
  if (typeof value !== "string") {
    throw new TypeError("enter to string");
  }
  if (value.trimStart() === "") {
    throw new RangeError("enter name");
  }
}
function checkValueNumber(value) {
  if (typeof value !== "number") {
    throw new TypeError("enter the numder");
  }
  if (Number.isNaN(value)) {
    throw new TypeError("enter the numder");
  }
  if (value <= 0) {
    throw new TypeError("enter more 0");
  }
}

class Figeure3D {
  #name;
  constructor(name) {
    this.name = name;
  }
  getVolume() {}
  get name() {
    return this.#name;
  }
  set name(name) {
    checkValueString(name);
    return (this.#name = name);
  }
}

class Sphere extends Figeure3D {
  #radius;
  constructor(radius) {
    super("Sphere");
    this.radius = radius;
  }
  getVolume() {
    return Number(((4 * Math.PI * this.#radius ** 3) / 3).toFixed(2));
  }
  get radius() {
    return this.#radius;
  }
  set radius(radius) {
    checkValueNumber(radius);
    return (this.#radius = radius);
  }
}

class Cube extends Figeure3D {
  #cubeEdgeLength;
  constructor(cubeEdgeLength) {
    super("Cube");
    this.cubeEdgeLength = cubeEdgeLength;
  }
  getVolume() {
    return Number((this.#cubeEdgeLength ** 3).toFixed(2));
  }
  get cubeEdgeLength() {
    return this.#cubeEdgeLength;
  }
  set cubeEdgeLength(cubeEdgeLength) {
    checkValueNumber(cubeEdgeLength);
    return (this.#cubeEdgeLength = cubeEdgeLength);
  }
}

class Cylinder extends Figeure3D {
  #baseRadius;
  #height;
  constructor(baseRadius, height) {
    super("Cylinder");
    this.baseRadius = baseRadius;
    this.height = height;
  }
  getVolume() {
    return Number(
      (Math.PI * this.#baseRadius * this.#baseRadius * this.#height).toFixed(2)
    );
  }
  get baseRadius() {
    return this.#baseRadius;
  }
  set baseRadius(baseRadius) {
    checkValueNumber(baseRadius);
    return (this.#baseRadius = baseRadius);
  }
  get height() {
    return this.#height;
  }
  set height(height) {
    checkValueNumber(height);
    return (this.#height = height);
  }
}

function getVolume3DFigure(figure) {
  if (figure instanceof Figeure3D) {
    return figure.getVolume();
  }
  throw new TypeError("must be instance Figure");
}

try {
  console.group();
  const sphere = new Sphere(09);
  console.log(sphere.getVolume());

  const cube = new Cube(10);
  console.log(cube.getVolume());

  const cylinder = new Cylinder(7, 8);
  console.log(cylinder.getVolume());
  console.groupEnd();

  console.log(getVolume3DFigure(cube));
} catch (error) {
  console.log(error.message);
}


// v - 2 (Перевірки в класах)
// class Figeure3D {
//   #name;
//   constructor(name) {
//     this.name = name;
//   }
//   getVolume() {}
//   get name() {
//     return this.#name;
//   }
//   set name(name) {
//     if (typeof name !== "string") {
//       throw new TypeError("enter the string");
//     }
//     if (name.trimStart() === "") {
//       throw new RangeError("enter name");
//     }
//     this.#name = name;
//   }
// }

// class Sphere extends Figeure3D {
//   #radius
//   constructor(radius) {
//     super("Sphere");
//     this.radius = radius;
//   }
//   getVolume() {
//     return ((4 * Math.PI * this.#radius ** 3) / 3)//.toFixed(2);
//   }
//   get radius() {
//   return this.#radius
//   }
//   set radius(radius) {
//     if (typeof radius !== "number" || Number.isNaN(radius)) {
//       throw new TypeError("enter the numder");
//     }
//     if (radius <= 0) {
//       throw new TypeError("enter radius more 0");
//     }
//     return this.#radius = radius
//   }
// }

// class Cube extends Figeure3D {
//   #cubeEdgeLength;
//   constructor(cubeEdgeLength) {
//     super("Cube");
//     this.cubeEdgeLength = cubeEdgeLength;
//   }
//   getVolume() {
//     return this.#cubeEdgeLength**3 ; //.toFixed(2);
//   }
//   get cubeEdgeLength() {
//     return this.#cubeEdgeLength;
//   }
//   set cubeEdgeLength(cubeEdgeLength) {
//     if (typeof cubeEdgeLength !== "number" || Number.isNaN(cubeEdgeLength)) {
//       throw new TypeError("enter the numder");
//     }
//     if (cubeEdgeLength <= 0) {
//       throw new TypeError("enter cube edge length more 0");
//     }
//     return this.#cubeEdgeLength = cubeEdgeLength;
//   }
// }

// class Cylinder extends Figeure3D {
//   #baseRadius;
//   #height;
//   constructor(baseRadius, height) {
//     super("Cube");
//     this.baseRadius = baseRadius;
//     this.height = height;
//   }
//   getVolume() {
//     return Math.PI * this.#baseRadius * this.#baseRadius * this.#height; //.toFixed(2);
//   }
//   get baseRadius() {
//     return this.#baseRadius;
//   }
//   set baseRadius(baseRadius) {
//     if (typeof baseRadius !== "number" || Number.isNaN(baseRadius)) {
//       throw new TypeError("enter the numder");
//     }
//     if (baseRadius <= 0) {
//       throw new TypeError("enter cube edge length more 0");
//     }
//     return (this.#baseRadius = baseRadius);
//   }
//   get height() {
//     return this.#height;
//   }
//   set height(height) {
//     if (typeof height !== "number" || Number.isNaN(height)) {
//       throw new TypeError("enter the numder");
//     }
//     if (height <= 0) {
//       throw new TypeError("enter cube edge length more 0");
//     }
//     return (this.#height = height);
//   }
// }

// function getVolume3DFigure(figure) {
//   if (figure instanceof Figeure3D) {
//     return figure.getVolume();
//   }
//   throw new TypeError("must be instance Figure");
// }


// try {
//   console.group()
//   const sphere = new Sphere(8);
//   console.log(sphere.getVolume());

//   const cube = new Cube(10);
//   console.log(cube.getVolume());

//   const cylinder = new Cylinder(7, 8);
//   console.log(cylinder.getVolume());
//   console.groupEnd()

//   console.log(getVolume3DFigure(cube));
// } catch (error) {
//   console.log(error.message);
// }