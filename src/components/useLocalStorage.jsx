import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialsValue) {
  const [item, setItem] = useState(initialsValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);




  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialsValue));
          parsedItem = initialsValue;

        } else {

          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    },2000);

  },[ ]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };



  /*const defaultTODOS = [
    { text: "cortar cebolla", completed: true },
    { text: "cortar cabello", completed: false },
    { text: "pasear perro", completed: true },
    { text: "Bailar", completed: false },
    { text: "rock", completed: true },
  ];*/



  //localStorage.removeItem("ToDoHero_V1");
  return {item, saveItem, error,loading};
}