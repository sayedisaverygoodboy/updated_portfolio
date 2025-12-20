import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function giveFunnySurname(name:string){
  const surNames = ["Sexy", "Cute", "Beautiful", "Charming", "Attractive", "Beautiful", "Charming", "Attractive", "Beautiful", "Charming", "Attractive"];

  const firstName = name.split(" ")[0];
  const firstLetter=name.charAt(0).toUpperCase();

  if(name.trim().toLowerCase().includes("tarikul")){
    return "Luthario";
  }

  switch (firstLetter) {
    case "A":
      return "Sexy";
      break;
    case "M":
      return "Naughty";
      break;
    case "S":
      return "Sexy";
      break;
  
    default:
      return ".";
      break;
  }

}
