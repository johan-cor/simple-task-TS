import { Note } from "./Note";


export const createNote = (title: string) => {
    const id = Date.now().toString(36) + Math.random().toString().slice(2);
    // console.log(title);

    return new Note(id, title)
}

export const createNotesCard = (notes: Note[]) => {
    const nodeList = document.querySelector(".node-list") as HTMLLIElement;
    const formItem = document.querySelector(".note-form") as HTMLLIElement;

    // ! agregamos nuestro listado a el local storage

    // localStorage.setItem("Notes",JSON.stringify(notes))


    nodeList.innerHTML = "";
    nodeList.append(formItem);
    notes.forEach(note => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        const checkBox = document.createElement("input");

        input.classList.add("title");
        input.value = note.getTitle();

        checkBox.type = "checkbox";
        li.classList.add("note-card")
        li.append(input);
        li.append(checkBox);

        nodeList.append(li)

    })
}