const box = document.querySelector('div.ui.grid');
const items = [
  {
    name: 'item 1',
  },
  {
    name: 'item 2',
  },
  {
    name: 'item 3',
  },
  {
    name: 'item 4',
  },
];
function addItem(item) {
  const item1 = document.createElement('div');
  item1.className = 'four wide column';
  item1.innerText = item.name;
  box.appendChild(item1);
}

// làm thủ công

// addItem(items[0]);
// addItem(items[1]);
// addItem(items[2]);
// addItem(items[3]);

// cải tiến

items.forEach(function (item) {
  addItem(item);
});

// bài tập về nhà
// Tạo ra một danh sách các sản phẩm
