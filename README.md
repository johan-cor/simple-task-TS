
## Ejemplo de Código

```typescript
export const createNotesCard = (notes: Note[]) => {
    const nodeList = document.querySelector(".node-list") as HTMLLIElement;
    const formItem = document.querySelector(".note-form") as HTMLLIElement;

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