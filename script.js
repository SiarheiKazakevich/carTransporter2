document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burgerMenu');
  const sideMenu = document.getElementById('sideMenu');
  const cabDropdown = document.getElementById('cabDropdown');
  const photoSlider = document.getElementById('photoSlider');

  // Логика для бургер-меню
  burgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });

  // Логика для выпадающего списка "Тип кабины"
  cabDropdown.addEventListener('click', () => {
    cabDropdown.classList.toggle('open');
  });

  // Логика для многоуровневого раскрытия вложенных пунктов
  document.querySelectorAll('.dropdown-content ul li').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation(); // Останавливаем всплытие события, чтобы не закрывался родительский список
      const subList = item.querySelector('ul');
      if (subList) {
        subList.classList.toggle('open'); // Раскрываем или скрываем вложенный список
      }

      // Проверяем выбранные параметры и выводим сообщение
      const cabType = e.target.closest('li[data-cab]')?.dataset.cab;
      const trailerType = e.target.closest('li[data-trailer]')?.dataset.trailer;
      const subType = e.target.dataset.subtype;
      if (cabType && trailerType && subType) {
        photoSlider.innerHTML = `<p>Показаны фото для кабины: ${cabType}, типа прицепа: ${trailerType}, подтипа: ${subType}</p>`;
      }
    });
  });
});