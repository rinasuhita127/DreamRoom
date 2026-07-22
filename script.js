const roomGrid = document.getElementById('roomGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const bookingModal = document.getElementById('bookingModal');
const bookNowBtn = document.getElementById('bookNowBtn');
const heroBookBtn = document.getElementById('heroBookBtn');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');

function filterRooms(type) {
  const rooms = roomGrid.querySelectorAll('.room-card');
  rooms.forEach((room) => {
    const roomType = room.dataset.type;
    room.style.display = type === 'all' || roomType === type ? 'grid' : 'none';
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    filterRooms(button.dataset.type);
  });
});

function openModal() {
  bookingModal.classList.add('active');
  bookingModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  bookingModal.classList.remove('active');
  bookingModal.setAttribute('aria-hidden', 'true');
}

bookNowBtn.addEventListener('click', openModal);
heroBookBtn.addEventListener('click', () => {
  document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
});
modalCloseBtn.addEventListener('click', closeModal);
bookingModal.addEventListener('click', (event) => {
  if (event.target === bookingModal) {
    closeModal();
  }
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const booking = {
    name: formData.get('fullName'),
    roomType: formData.get('roomType'),
    duration: formData.get('duration'),
  };
  alert(`Terima kasih, ${booking.name}! Permintaan untuk ${booking.roomType} selama ${booking.duration} telah dikirim.`);
  bookingForm.reset();
  closeModal();
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const message = {
    name: formData.get('name'),
    email: formData.get('email'),
    text: formData.get('message'),
  };
  alert(`Pesan dari ${message.name} berhasil dikirim. Kami akan menghubungi Anda di ${message.email}.`);
  contactForm.reset();
});
