export default function getData() {
  // eslint-disable-next-line no-prototype-builtins
  if (localStorage.hasOwnProperty('notesArray')) {
    return JSON.parse(localStorage.getItem('notesArray')).data;
  }
  // eslint-disable-next-line no-prototype-builtins
  if (!localStorage.hasOwnProperty('notesArray')) {
    const data = {
      data: [],
    };
    localStorage.setItem('notesArray', JSON.stringify(data));
    return JSON.parse(localStorage.getItem('notesArray')).data;
  }
  return false;
}
