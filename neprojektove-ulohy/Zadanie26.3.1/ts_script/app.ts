import {
  Animal,
  Employee,
  Species,
  Position,
  ZooLocation,
  ZooResident,
} from "./types";

namespace ZooData {
  const animals: Animal[] = [
    { name: "Elephant", species: Species.Mammal, isEndangered: true },
    { name: "Eagle", species: Species.Bird, isEndangered: false },
    { name: "Crocodile", species: Species.Reptile, isEndangered: false },
  ];

  const employees: Employee[] = [
    { firstName: "John", lastName: "Doe", position: Position.Director },
    {
      firstName: "Jane",
      lastName: "Smith",
      position: Position.AnimalCaretaker,
    },
    { firstName: "Bob", lastName: "Brown", position: Position.Gatekeeper },
  ];

  export function displayZooInformation(): void {
    const animalInfoDiv = document.getElementById("zoo-info");
    const employeeInfoDiv = document.getElementById("employee-info");

    animals.forEach((animal) => {
      const p = document.createElement("p");
      p.textContent = `${animal.name} - Type: ${animal.species} - ${
        animal.isEndangered ? "Endangered" : "Not Endangered"
      }`;
      animalInfoDiv?.appendChild(p);
    });

    employees.forEach((employee) => {
      const p = document.createElement("p");
      p.textContent = `Full Name: ${employee.firstName} ${employee.lastName} on position ${employee.position}`;
      employeeInfoDiv?.appendChild(p);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ZooData.displayZooInformation();
});
