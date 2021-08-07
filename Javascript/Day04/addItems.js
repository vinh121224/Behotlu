const itemsBox = document.querySelector('div.items-box');

let items = [
  {
    id: 0,
    name: 'Luân',
    createAt: new Date(),
    description: 'is an art director living in New York.',
    friends: 22,
    image:
      'https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=316&q=80',
  },
  {
    id: 1,
    name: 'Luân',
    createAt: new Date(),
    description: 'is an art director living in New York.',
    friends: 22,
    image:
      'https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=316&q=80',
  },
  {
    id: 2,
    name: 'Luân',
    createAt: new Date(),
    description: 'is an art director living in New York.',
    friends: 22,
    image:
      'https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=316&q=80',
  },
  {
    id: 3,
    name: 'Luân',
    createAt: new Date(),
    description: 'is an art director living in New York.',
    friends: 22,
    image:
      'https://images.unsplash.com/photo-1627715646696-59be15ef1a55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=316&q=80',
  },
];
const itemsInStorage = localStorage.getItem('items');
if (itemsInStorage) {
  items = JSON.parse(itemsInStorage);
}
function createItem(item) {
  const itemWrapper = document.createElement('div');
  itemWrapper.className = 'four wide column card-box';
  itemWrapper.innerText = 'Items 1';
  let date = new Date(item.createAt).toLocaleString();
  if (!date) {
    date = new Date().toLocaleString();
  }
  itemWrapper.innerHTML = `<div class="ui card">
  <div class="image">
    <img src="${item.image}">
  </div>
  <div class="content">
    <a class="header">${item.name}</a>
    <div class="meta">
      <span class="date">Joined in ${date}</span>
    </div>
    <div class="description">
      ${item.description}
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      ${item.friends} Friends
    </a>
  </div>
</div>`;
  itemsBox.appendChild(itemWrapper);
}
items.forEach((item) => {
  createItem(item);
});
function saveItems(_items) {
  localStorage.setItem('items', JSON.stringify(_items));
}
function addItemToItems(item) {
  if (!localStorage.getItem('items')) {
    saveItems(items);
  }
  const itemsToStorage = JSON.parse(localStorage.getItem('items'));
  console.log(itemsToStorage);
  itemsToStorage.push(item);
  saveItems(itemsToStorage);
  createItem(item);
}
function addItem() {
  const nameInput = document.querySelector('input#name'); // cách 1 để lấy thẻ
  const descriptionInput = document.querySelector('input.description'); // cách 2 để lấy thẻ
  const friendsInput = document.getElementById('friends'); // cách 3
  const imageUrlInput = document.getElementById('image-item'); // cách 3
  const item = {
    id: 0,
    name: nameInput.value,
    createAt: new Date(),
    description: descriptionInput.value,
    friends: friendsInput.value,
    image: imageUrlInput.value,
  };-
  nameInput.value = '';
  descriptionInput.value = '';
  friendsInput.value = '';
  imageUrlInput.value = '';
  addItemToItems(item);
}


// 1.Xác định nhu cầu 
// 2.tạo một container để chứa
// 3.tạo ra các item có sẵn bên trong
// 3.1 Tạo một array cho item
// 3.2 Tạo một hàm để thêm item vào trong container
// 4. Coi thành quả