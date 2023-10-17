const showAndHide = () => {
  const arrayList = document.querySelectorAll('.description__item');
  console.log('arrayList: ', arrayList);
  arrayList.forEach((item) => {
    const btn = item.querySelector('.description__icon');
    const text = item.querySelector('.description_text-block');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      text.classList.toggle('description_text-block_active');
    });
    // console.log('item.children.children: ', item.children[0].children[1]);

  })
};

export default showAndHide;