import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// export function giveFunnySurname(name:string){
//   const surNames = ["Sexy", "Cute", "Beautiful", "Charming", "Attractive", "Beautiful", "Charming", "Attractive", "Beautiful", "Charming", "Attractive"];

//   const firstName = name.split(" ")[0];
//   const firstLetter=name.charAt(0).toUpperCase();

//   if(name.trim().toLowerCase().includes("tarikul")){
//     return "Luthario";
//   }

//   switch (firstLetter) {
//     case "A":
//       return "Sexy";
//       break;
//     case "B":
//       return "Bhojurike";
//       break;
//     case "M":
//       return "Naughty";
//       break;
//     case "S":
//       return "Sexy";
//       break;
  
//     default:
//       return "Xudling Pong";
//       break;
//   }

// }
// export function giveFunnySurname(name: string): string {
//   if (!name || !name.trim()) return "Xudling Pong";


//   let specificName=name.trim().toLowerCase();  

//   // Special case
//   if (specificName.includes("tarikul")) {
//     return "Luthario";
//   }else if(specificName.includes("mahim")){
//     return "Bichi";
//   }

//   const firstLetter = specificName.charAt(0).toUpperCase();

//   const surnameMap: Record<string, string> = {
//     A: "Abul",
//     B: "Bad**R",
//     C: "Chu**a",
//     D:"D****r",
//     E: "H**o**y",
//     F: "F***k",
//     G: "Gorgeous",
//     H: "Handsome",
//     I: "Irresistible",
//     J: "Juicy",
//     K: "Killer Smile",
//     L: "Lovely",
//     M: "Naughty",
//     N: "Noble",
//     O: "Outstanding",
//     P: "Playboy",
//     Q: "Queen Slayer",
//     R: "Romantic",
//     S: "Sexy",
//     T: "Tempting",
//     U: "Unstoppable",
//     V: "Vibey",
//     W: "Wild",
//     X: "X-Factor",
//     Y: "Youngblood",
//     Z: "Zesty"
//   };

//   return surnameMap[firstLetter] ?? "Xudling Pong";
// }
export function giveFunnySurname(name: string): string {
  if (!name || !name.trim()) return "Naughty";

  // Special case
  if (name.trim().toLowerCase().includes("tarikul")) {
    return "Luthario";
  }

  const funWords = [
    "Naughty",
    "Sexy",
    "Cummy",
    "Flirty",
    "Hotty",
    "Spicy",
    "Chueyy",
    "Playful",
    "Sassy",
    "Cheeky",
    "Busty",
    "Lovely",
    "Juicy",
    "Playboy",
    "Wild",
    "Sweet",
    "Luthario",
    "Bichi",
    "Hoken",
    "Shoken",
    "Xudling Pong",
    
  ];

  // Add some name-based entropy + randomness
  const seed =
    name
      .toLowerCase()
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) +
    Math.floor(Math.random() * funWords.length);

  const index = seed % funWords.length;

  return funWords[index];
}
