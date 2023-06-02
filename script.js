function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

const mainContent = document.querySelector(".main-content");
const addButton = document.querySelector(".add-button");
const formElement = document.querySelector(".form");
formElement.classList.add("none");

addButton.addEventListener("click", formFunction);

const toggleButton = document.querySelector(".form .buttons .toggle");
toggleButton.addEventListener("click", function (event) {
	event.preventDefault();
	switchBUtton(toggleButton);
});

const deleteButton = document.querySelector(".form .buttons .delete");
deleteButton.addEventListener("click", function (event) {
	event.preventDefault();
	clearForm();
	addButton.classList.remove("none");
	formElement.classList.add("none");
});

const submitButton = document.querySelector(".form .buttons .submit");
submitButton.addEventListener("click", function (event) {
	event.preventDefault();
	const titleInput = document.querySelector("#title");
	const authorInput = document.querySelector("#author");
	const pagesInput = document.querySelector("#pages");
	const readInput = document.querySelector(".buttons .toggle").textContent;
	const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput);
	addBook(newBook);
	addButton.classList.remove("none");
	formElement.classList.add("none");
});
function formFunction() {
	addButton.classList.add("none");
	formElement.classList.remove("none");
}

function addBook(newBook) {
	const newBookUnit = document.createElement("div");
	newBookUnit.classList.add("book");
	const cancelImage = document.createElement("img");
	cancelImage.setAttribute("src", "./SVG/delete.svg");
	cancelImage.classList.add("cancel-image");
	newBookUnit.appendChild(cancelImage);
	const bookPara = document.createElement("p");
	bookPara.textContent = newBook.title;
	bookPara.classList.add("book-title");
	newBookUnit.appendChild(bookPara);
	const authorName = document.createElement("p");
	authorName.textContent = `by ${newBook.author}`;
	authorName.classList.add("book-author");
	newBookUnit.appendChild(authorName);
	const bookPage = document.createElement("p");
	bookPage.textContent = `${newBook.pages} Pages`;
	bookPage.classList.add("book-page");
	newBookUnit.appendChild(bookPage);
	const bookToggleButton = document.createElement("button");
	bookToggleButton.classList = toggleButton.classList;
	bookToggleButton.textContent = toggleButton.textContent;
	newBookUnit.appendChild(bookToggleButton);
	bookToggleButton.addEventListener("click", function (event) {
		event.preventDefault();
		switchBUtton(bookToggleButton);
	});
	cancelImage.addEventListener("click", function (event) {
		event.preventDefault();
		removeBook(newBookUnit);
	});
	mainContent.insertBefore(newBookUnit, formElement);
	clearForm();
}

function clearForm() {
	document.querySelector("#title").value = "";
	document.querySelector("#author").value = "";
	document.querySelector("#pages").value = "";
	document.querySelector(".buttons .toggle").textContent = "Read";
	document.querySelector(".buttons .toggle").classList = "toggle read";
}

function switchBUtton(button) {
	if (button.textContent === "Read") {
		button.classList = "toggle not-read";
		button.textContent = "Not Read Yet";
	} else if (button.textContent === "Not Read Yet") {
		button.classList = "toggle read";
		button.textContent = "Read";
	}
}

function removeBook(bookUnit) {
	bookUnit.remove();
}
