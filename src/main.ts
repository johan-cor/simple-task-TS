import { Note } from "./clases/Note";
import { createNote, createNotesCard } from "./clases/NoteList";




// const note1 = createNote ("ir por el pan")
// const note2 = createNote ("ir por otro pan")


const notes: Note[] = []



// notes.push(note1)
// notes.push(note2)

//     // ! despues de que cargue el documento buscamos hay información en localSotrage: tener cuidado con los valores del storage (no metodos)
// document.addEventListener("DOMContentLoaded", () => {

//     let localstorage = localStorage.getItem("Notes")

//     if (localstorage) {
//         console.log(localstorage);
//         // createNotesCard(JSON.parse(localstorage))
//     } else {
//         localStorage.setItem("Notes", JSON.stringify([]))
//     }
// })




// const btn = document.querySelector(".btn") as HTMLButtonElement

// btn.addEventListener ("click", ()=> createNotesCard(notes));


const noteForm = document.querySelector(".note-form") as HTMLFormElement;

noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;

    const newNote = createNote(input.value);
    notes.unshift(newNote);
    createNotesCard(notes);
    input.value = "";
})
