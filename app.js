const libraryArray = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281, status: 'read' },
  { title: '1984', author: 'George Orwell', pages: 328, status: 'unread' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 218, status: 'read' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 320, status: 'unread' },
];

function book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#numPages");
const Readstatus = document.querySelector("#status");
const cardContainer = document.querySelector('#cardContainer');

showBooks = () => {
  cardContainer.innerHTML = "";
  libraryArray.forEach((book, index) => {
      cardContainer.innerHTML += `
          <div class="card mt-3 ms-2" style="width: 22.5%; margin-right: 1px;" data-index="${index}">
              <div class="card-img-top bg-secondary p-5" alt="Card image cap"></div>
              <div class="card-body">
                  <h4 class="card-title">${book.title}</h4>
                  <p class="card-text">Author: ${book.author}</p>
                  <p class="card-text">Pages: ${book.pages}</p>
                  <p class="card-text">Status: ${book.status}</p>
              </div>
                <div><button href="#" class="btn btn-danger mb-3" id="removeBtn" data-index="${index}">remove</button>
                <button href="#" class="btn btn-success mb-3" id="changeBtn" data-index="${index}">Change Status</button>
              </div>
          </div>
          `;
  });
  document.querySelectorAll("#removeBtn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        libraryArray.splice(index, 1);
        showBooks();
      });
  });

  document.querySelectorAll("#changeBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      if (libraryArray[index].status=== "read"){
        libraryArray[index].status = "unread";
        showBooks();
      }
      else{
        libraryArray[index].status = "read";
        showBooks();
      }

    });
});
}

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  let Newbook = new book(title.value, author.value, pages.value, Readstatus.value);
  libraryArray.push(Newbook);
  showBooks();
});
showBooks();