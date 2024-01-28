// // app.ts
// import { Animal, Employee, Species, Position } from "./types";
// namespace ZooData {
//   const animals: Animal[] = [
//     { name: "Elephant", species: Species.Mammal, isEndangered: false },
//     { name: "Eagle", species: Species.Bird, isEndangered: true },
//     { name: "Crocodile", species: Species.Reptile, isEndangered: false },
//   ];
//   const employees: Employee[] = [
//     { firstName: "John", lastName: "Doe", position: Position.Director },
//     {
//       firstName: "Jane",
//       lastName: "Smith",
//       position: Position.AnimalCaretaker,
//     },
//     { firstName: "Bob", lastName: "Brown", position: Position.Gatekeeper },
//   ];
//   export function displayZooInformation(): void {
//     const animalInfo = document.getElementById("zoo-info");
//     const employeeInfo = document.getElementById("employee-info");
//     animals.forEach((animal) => {
//       const p = document.createElement("p");
//       p.textContent = `${animal.name} - Type: ${animal.species} - Endangered: ${animal.isEndangered}`;
//       animalInfo?.appendChild(p);
//     });
//     employees.forEach((employee) => {
//       const p = document.createElement("p");
//       p.textContent = `Full Name: ${employee.firstName} ${employee.lastName} on position ${employee.position}`;
//       employeeInfo?.appendChild(p);
//     });
//   }
// }
// document.addEventListener("DOMContentLoaded", () => {
//   ZooData.displayZooInformation();
// });
// app.ts
import { Species, Position, } from "./types";
var ZooData;
(function (ZooData) {
    const animals = [
        { name: "Elephant", species: Species.Mammal, isEndangered: false },
        { name: "Eagle", species: Species.Bird, isEndangered: true },
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
    // Tuple example usage
    const zooLocation = [48.8566, 2.3522]; // Example coordinates
    // Union example usage
    const displayZooResident = (resident) => {
        if ("species" in resident) {
            // It's an animal
            console.log(`${resident.name} is a ${resident.species}`);
        }
        else {
            // It's an employee
            console.log(`${resident.firstName} ${resident.lastName} works as a ${resident.position}`);
        }
    };
    function displayZooInformation() {
        const animalInfoDiv = document.getElementById("zoo-info");
        const employeeInfoDiv = document.getElementById("employee-info");
        animals.forEach((animal) => {
            const p = document.createElement("p");
            p.textContent = `${animal.name} (${animal.species}) - Endangered: ${animal.isEndangered}`;
            animalInfoDiv === null || animalInfoDiv === void 0 ? void 0 : animalInfoDiv.appendChild(p);
            displayZooResident(animal); // Using the union type
        });
        employees.forEach((employee) => {
            const p = document.createElement("p");
            p.textContent = `${employee.firstName} ${employee.lastName} - ${employee.position}`;
            employeeInfoDiv === null || employeeInfoDiv === void 0 ? void 0 : employeeInfoDiv.appendChild(p);
            displayZooResident(employee); // Using the union type
        });
    }
    ZooData.displayZooInformation = displayZooInformation;
})(ZooData || (ZooData = {}));
document.addEventListener("DOMContentLoaded", () => {
    ZooData.displayZooInformation();
});
