const metaDataSumbitBtn = document.querySelector(".submit__btn");
const metaDataSumbitForm = document.querySelector(".metadata__form");

metaDataSumbitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close__btn");

closeBtn.onclick = function () {
  // get the html content of the editor
  const editor = $("#trumbowyg-demo").trumbowyg("html");
  modal.style.display = "none";

  // create a new element and add some content to it
  const newContent = $(
    `<div><multonion-tf style='color:red;'>I am from function</multonion-tf><p></p></div>`
  );

  // get the index of the last '#' symbol in the editor content
  const lastIndex = editor.lastIndexOf("#");

  // add the new content after the last '#' symbol
  let newEditorContent = "#";
  if (lastIndex > 0) {
    newEditorContent =
      editor.slice(0, lastIndex) +
      newContent.prop("outerHTML") +
      editor.slice(lastIndex);
  } else {
    newEditorContent = newContent.prop("outerHTML") + editor.slice(lastIndex);
  }

  // remove all the '#' symbols from the new editor content
  const cleanedEditorContent = newEditorContent.replace(/#/g, "");

  // set the new content to the editor
  $("#trumbowyg-demo").trumbowyg("html", cleanedEditorContent);
};

//open modal when shift+3 is pressed
document.addEventListener("keypress", (e) => {
  e.stopPropagation();

  if (e.shiftKey) {
    if (e.code === "Digit3") {
      modal.style.display = "block";
    }
  }
});

class MultonionTF extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("connectedCallback");
  }

  disconnectedCallback() {
    console.log("disconnectedCallback");
  }
}

customElements.define("multonion-tf", MultonionTF);

class MultonionDT extends HTMLElement {
  connectedCallback() {
    const table = this.querySelector("table");
    if (table) {
      const id = Math.random().toString(36).substr(2, 9);
      this.setAttribute("id", id);
      console.log(`Element with id '${id}' connected.`);

      console.log("Table thing:", table);
    } else {
      console.log("No table found");
    }
  }
  disconnectedCallback() {
    const id = this.getAttribute("id");
    console.log(`Element with id '${id}' disconnected.`);
  }
}

customElements.define("multonion-dt", MultonionDT);

// metaDataSumbitForm.onSubmit = (e) => {

// };

// Initialize the editor
$(document).ready(function () {
  $("#trumbowyg-demo").trumbowyg({
    autogrow: true,
    tagClasses: {
      table: "table",
    },
    btns: [
      ["viewHTML"],
      ["undo", "redo"], // Only supported in Blink browsers
      ["formatting"],
      ["strong", "em", "del"],
      ["superscript", "subscript"],
      ["link"],
      ["insertImage"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
      ["table"],
      ["tableCellBackgroundColor"],
      [("unorderedList", "orderedList")],
      ["horizontalRule"],
      ["tableBorderColor"]["removeformat"],
      ["fullscreen"],
    ],
  });
});
