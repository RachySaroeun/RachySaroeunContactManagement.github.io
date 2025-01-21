document.addEventListener("DOMContentLoaded", () => {
  const contactsTable = document.querySelector("#contactsTable tbody");
  const addEntryBtn = document.getElementById("addEntryBtn");
  const contactModal = document.getElementById("contactModal");
  const closeModal = document.querySelector(".modal .close");
  const contactForm = document.getElementById("contactForm");

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  let editingIndex = null;

  function renderContacts() {
    contactsTable.innerHTML = "";
    contacts.forEach((contact, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.phone}</td>
        <td>
          <button data-index="${index}" class="edit-btn">Edit</button>
          <button data-index="${index}" class="delete-btn">Delete</button>
        </td>
      `;
      contactsTable.appendChild(row);
    });
  }

  function openModal(index = null) {
    contactModal.style.display = "block";
    if (index !== null) {
      const contact = contacts[index];
      document.getElementById("name").value = contact.name;
      document.getElementById("email").value = contact.email;
      document.getElementById("phone").value = contact.phone;
      editingIndex = index;
    } else {
      contactForm.reset();
      editingIndex = null;
    }
  }

  function closeModalHandler() {
    contactModal.style.display = "none";
  }

  function saveContact(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const contact = { name, email, phone };

    if (editingIndex !== null) {
      contacts[editingIndex] = contact;
    } else {
      contacts.push(contact);
    }

    localStorage.setItem("contacts", JSON.stringify(contacts));
    renderContacts();
    closeModalHandler();
  }

  function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    renderContacts();
  }

  contactsTable.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    if (e.target.classList.contains("edit-btn")) {
      openModal(index);
    } else if (e.target.classList.contains("delete-btn")) {
      deleteContact(index);
    }
  });

  addEntryBtn.addEventListener("click", () => openModal());
  closeModal.addEventListener("click", closeModalHandler);
  contactForm.addEventListener("submit", saveContact);

  renderContacts();
});
