const showAndHide = () => {
  const arrayList = document.querySelectorAll('.description__item');
  console.log('arrayList: ', arrayList);
  arrayList.forEach((item) => {
    const btn = item.querySelector('.description__subheader');
    const icon = item.querySelector('.description__icon');
    const text = item.querySelector('.description__text-block');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      text.classList.toggle('description__text-block_active');
      icon.classList.toggle('description__icon_active');
    });
  })
};

export default showAndHide;