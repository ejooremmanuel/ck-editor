const metaDataSumbitBtn = document.querySelector(".submit__btn");
const metaDataForm = document.querySelector(".metadata__form");
const contextMenu = document.getElementById("contextMenu");
const closeBtn = document.querySelector(".close__btn");
const editorInputArea = $("#trumbowyg-demo").trumbowyg("html");
const metaDataTitleInputField = document.querySelector(".meta__data__title");
const metaDataTypeInputField = document.querySelector(".meta__data__type");
const metaDataListContainer = document.querySelector(".metadata__list");

const metaDataState = {
  title: "",
  type: "",
};

const metaDataList = {
  title: "",
  type: "",
};

metaDataTitleInputField.value = "";
metaDataTypeInputField.value = "";

metaDataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(metaDataState);
});

if (metaDataTitleInputField.value === "") {
  metaDataSumbitBtn.disabled = true;
  metaDataSumbitBtn.style.opacity = 0.2;
}

metaDataTitleInputField.addEventListener("change", (e) => {
  metaDataState.title = e.target.value;
  if (e.target.value === "" || null) {
    metaDataSumbitBtn.disabled = true;
    metaDataSumbitBtn.style.opacity = 0.2;
  } else {
    metaDataSumbitBtn.disabled = false;
    metaDataSumbitBtn.style.opacity = 1;
  }
});

metaDataTypeInputField.addEventListener("change", (e) => {
  metaDataState.type = e.target.value;
});

if (editorInputArea) {
  editorInputArea.style.position = "absolute";
  editorInputArea.addEventListener("input", (event) => {
    console.log("eee");
    // Check if the event data is a string
    if (typeof event.data === "string") {
      // Trim the event data to remove leading/trailing whitespace
      const eventData = event.data.trim();

      // Check if the trimmed event data is equal to the forward slash character
      if (eventData === "#") {
        // Get the range and bounding rectangle of the current selection
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          contextMenu.style.top = `${rect.top}px`;
          contextMenu.style.left = `${rect.right}px`;
          contextMenu.style.display = "block";
        }
      }
    }
  });
}

metaDataSumbitBtn.onclick = () => {
  // get the html content of the editor
  const editor = $("#trumbowyg-demo").trumbowyg("html");
  contextMenu.style.display = "none";

  // create a new element and add some content to it
  const newContent = $(
    `<multonion-tf contenteditable="false">${metaDataState.title}</multonion-tf>`
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
    // remove all the '#' symbols from the new editor content
    const cleanedEditorContent = newEditorContent.replace(/#/g, "");

    // set the new content to the editor
    $("#trumbowyg-demo").trumbowyg("html", cleanedEditorContent);
  }

  // remove all the '#' symbols from the new editor content
  const cleanedEditorContent = newEditorContent.replace(/#/g, "");

  // set the new content to the editor
  $("#trumbowyg-demo").trumbowyg("html", cleanedEditorContent);

  //   set states and inputfield to default empty

  const dataItem = document.createElement("p");
  dataItem.innerHTML = metaDataState.title;
  dataItem.className = "data__item";
  //   const dataItem = document.createElement('p')

  metaDataListContainer.appendChild(dataItem);
  metaDataState.title = "";
  metaDataState.type = "";

  metaDataTitleInputField.value = "";
  metaDataTypeInputField.value = "";
};

//open modal when shift+3 is pressed
document.addEventListener("keypress", (e) => {
  e.stopPropagation();

  if (e.shiftKey) {
    if (e.code === "Digit3") {
      contextMenu.style.display = "block";
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

// Initialize the editor
$(document).ready(function () {
  $("#trumbowyg-demo")
    .trumbowyg({
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
    })
    .on("tbwchange", function (e) {
      if (e.target.childNodes) {
        [].forEach.call(e.target.childNodes, function (elm) {
          if (elm.nodeName == "TABLE") {
            const parentNode = document.createElement("multonion-dt");
            parentNode.appendChild(elm);
            e.target.appendChild(parentNode);
            console.log(e.target.childNodes);
          }
        });
      }
    });
});
