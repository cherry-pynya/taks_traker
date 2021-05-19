export default function updateStorage(arr) {
  localStorage.removeItem('notesArray');
  const data = {
    data: arr,
  };
  localStorage.setItem('notesArray', JSON.stringify(data));
  return JSON.parse(localStorage.getItem('notesArray')).data;
}
