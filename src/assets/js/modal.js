const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close')
const modal = document.querySelectorAll('.modal')

modalBtn.forEach(item => {
  item.addEventListener('click', e => {
    let $this = e.currentTarget;
    let modalId = $this.getAttribute('data-modal');
    let modal = document.getElementById(modalId);
    let modalContent = modal.querySelector('.modal__content');

    modalContent.addEventListener('click', e => {
      e.stopPropagation();
    });

    modal.classList.add('show');
    body.classList.add('no-scroll');

    setTimeout(() => {
      modalContent.style.transform = 'none';
    }, 1);
  })
})

modalClose.forEach(item => {
  item.addEventListener('click', e => {
    let currentModal = e.currentTarget.closest('.modal');

    closeModal(currentModal)
  })
});

modal.forEach((item) => {
  item.addEventListener('click', (e) => {
    let currentModal = e.currentTarget

    closeModal(currentModal)
  })
});

function closeModal(modal) {
  
  setTimeout(() => {
    modal.classList.remove('show');
    body.classList.remove('no-scroll');
    modal.querySelector('.modal__content').style.transform =
      'translateY(-250px)'
  }, 250)
}