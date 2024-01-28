import { Species, Position } from "./types.js";
var ZooData;
(function (ZooData) {
  const animals = [
    { name: "Elephant", species: Species.Mammal, isEndangered: true },
    { name: "Eagle", species: Species.Bird, isEndangered: false },
    { name: "Crocodile", species: Species.Reptile, isEndangered: false },
  ];
  const employees = [
    { firstName: "John", lastName: "Doe", position: Position.Director },
    {
      firstName: "Jane",
      lastName: "Smith",
      position: Position.AnimalCaretaker,
    },
    { firstName: "Bob", lastName: "Brown", position: Position.Gatekeeper },
  ];
  function displayZooInformation() {
    const animalInfoDiv = document.getElementById("zoo-info");
    const employeeInfoDiv = document.getElementById("employee-info");
    animals.forEach((animal) => {
      const p = document.createElement("p");
      p.textContent = `${animal.name} - Type: ${animal.species} - ${
        animal.isEndangered ? "Endangered" : "Not Endangered"
      }`;
      animalInfoDiv === null || animalInfoDiv === void 0
        ? void 0
        : animalInfoDiv.appendChild(p);
    });
    employees.forEach((employee) => {
      const p = document.createElement("p");
      p.textContent = `Full Name: ${employee.firstName} ${employee.lastName} on position ${employee.position}`;
      employeeInfoDiv === null || employeeInfoDiv === void 0
        ? void 0
        : employeeInfoDiv.appendChild(p);
    });
  }
  ZooData.displayZooInformation = displayZooInformation;
})(ZooData || (ZooData = {}));
document.addEventListener("DOMContentLoaded", () => {
  ZooData.displayZooInformation();
});
