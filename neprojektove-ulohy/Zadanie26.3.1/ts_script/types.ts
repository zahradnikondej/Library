export enum Species {
  Mammal = "Mammal",
  Bird = "Bird",
  Reptile = "Reptile",
}

export type Animal = {
  species: Species;
  name: string;
  isEndangered: boolean;
};

export enum Position {
  Director = "director",
  AnimalCaretaker = "animal caretaker",
  Gatekeeper = "gatekeeper",
}

export type Employee = {
  firstName: string;
  lastName: string;
  position: Position;
};

export type ZooLocation = [number, number];

export type ZooResident = Animal | Employee;
