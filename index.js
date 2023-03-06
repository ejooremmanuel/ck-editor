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

let metaDataList = [];

metaDataTitleInputField.value = "";

metaDataTypeInputField.value = "";

metaDataForm.addEventListener("submit", (e) => {
  e.preventDefault();
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

// append child to metadata list container
const addMetadata = () => {
  if (metaDataListContainer.hasChildNodes()) {
    metaDataListContainer.innerHTML = "";
  }

  console.log(metaDataList);

  metaDataList.map((item) => {
    const IDItem = document.createElement("p");
    IDItem.innerHTML = `ID: ${item.id}`;
    IDItem.className = "data__item__id";

    const titleItem = document.createElement("p");
    titleItem.innerHTML = item.title;
    titleItem.className = "data__item__title";

    const typeItem = document.createElement("p");
    typeItem.innerHTML = `Type:${item.type}`;
    typeItem.className = "data__item__type";

    const metadataItem = document.createElement("a");
    metadataItem.href = `#${item.id}`;
    // metadataItem.onclick = (e) => {
    //   const mtItem = document.getElementById(item.id);
    //   href = item.id;
    //   console.log(mtItem);
    // };
    metadataItem.appendChild(IDItem);
    metadataItem.appendChild(titleItem);
    metadataItem.appendChild(typeItem);
    metadataItem.className = "data__item";

    metaDataListContainer.appendChild(metadataItem);
  });
};

// initialize state
metaDataState.title = "";
metaDataState.type = "";

metaDataTitleInputField.value = "";
metaDataTypeInputField.value = "";

const resetState = () => {
  metaDataState.title = "";
  metaDataState.type = "";

  metaDataTitleInputField.value = "";
  metaDataTypeInputField.value = "";
};
// handle close
closeBtn.onclick = () => {
  contextMenu.style.display = "none";
  resetState();
  document.querySelectorAll(".poniter__span").forEach((el) => el.remove());
  // console.log( $("#trumbowyg-demo").trumbowyg("html").replace(//, ""))
};

// listen for caret point
document.getElementById("trumbowyg-demo").addEventListener("input", (e) => {
  console.log(e);
  console.log(getCaretPosition());
});

// handle submit
metaDataSumbitBtn.onclick = () => {
  // generate ID
  const id = Math.random().toString(36).substr(2, 9);

  // get the html content of the editor
  const editor = $("#trumbowyg-demo").trumbowyg("html");
  contextMenu.style.display = "none";

  // create a new element and add some content to it
  const newContent = $(
    `<multonion-tf contenteditable="false" id="${id}" title="${metaDataState.title}" reponseType="${metaDataState.type}">${metaDataState.title}</multonion-tf>`
  );

  // get the index of the last '#' symbol in the editor content
  const lastIndex = editor.lastIndexOf(`<span class="poniter__span" contenteditable="false">[entering Value...]</span>`);

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
  const cleanedEditorContent = newEditorContent.replace(`<span class="poniter__span" contenteditable="false">[entering Value...]</span>`, "");

  // set the new content to the editor
  $("#trumbowyg-demo").trumbowyg("html", cleanedEditorContent);

  //   console.log(cleanedEditorContent);

  //   set states and inputfield to default empty

  //   metaDataList.push({
  //     title: metaDataState.title,
  //     type: metaDataState.type,
  //     id: id,
  //   });
  // metaDataList = [
  //   ...metaDataList,
  //   {
  //     title: metaDataState.title,
  //     type: metaDataState.type,
  //     id: id,
  //   },
  // ];
  console.log(metaDataList);
  addMetadata();
  //   reset state
  resetState();
  // document.querySelectorAll(".poniter__span").forEach((el) => el.remove());
};

document.getElementById("trumbowyg-demo").addEventListener("input", (e) => {
  // console.log(e);
  // console.log(getCaretPosition());
  const editor = $("#trumbowyg-demo").trumbowyg("html");
  const newContent = $(
    `<span class="poniter__span" contenteditable="false">[entering Value...]</span>`
  );
  if (e.data === "#") {
    const position = getCaretPosition() + 2;
    if (getCaretPosition() > 0) {
      newEditorContent =
        editor.slice(0, position) +
        newContent.prop("outerHTML") +
        editor.slice(position);
    } else {
      newEditorContent = newContent.prop("outerHTML") + editor.slice(position);
    }
    $("#trumbowyg-demo").trumbowyg("html", newEditorContent);
    pointerSpan = document.querySelector(".poniter__span");
    contextMenu.style.display = "block";
    contextMenu.style.top = `${pointerSpan.offsetTop + 80}px`;
    contextMenu.style.left = `${pointerSpan.offsetLeft + 10}px`;
    console.log("poniter__span", pointerSpan);
  }
});

//open modal when shift+3 is pressed
// document.addEventListener("keypress", (e) => {
//   e.stopPropagation();

//   if (e.shiftKey) {
//     if (e.code === "Digit3") {
//       contextMenu.style.display = "block";
//       //   metaDataTitleInputField.focus();
//     }
//   }
// });

class MultonionTF extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // console.log("connectedCallback");
    console.log(this.attributes.reponseType);

    metaDataList = [
      {
        title: this.title,
        type: this.attributes.reponseType.value,
        id: this.id,
      },
      ...metaDataList,
    ];
  }

  disconnectedCallback() {
    console.log("disconnectedCallback", this.id);
    metaDataList = metaDataList?.filter(
      (metaDataList) => metaDataList.id !== this.id
    );

    // metaDataList = [];
    console.log("metaDataList", metaDataList);
    addMetadata();
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

function getCaretPosition() {
  if (window.getSelection && window.getSelection().getRangeAt) {
    var range = window.getSelection().getRangeAt(0);
    var selectedObj = window.getSelection();
    var rangeCount = 0;
    var childNodes = selectedObj.anchorNode.parentNode.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      if (childNodes[i] == selectedObj.anchorNode) {
        break;
      }
      if (childNodes[i].outerHTML) rangeCount += childNodes[i].outerHTML.length;
      else if (childNodes[i].nodeType == 3) {
        rangeCount += childNodes[i].textContent.length;
      }
    }
    return range.startOffset + rangeCount;
  }
  return -1;
}

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
      // console.log(e.clientX);
      // console.log(document.caretPositionFromPoint());
      if (e.target.childNodes) {
        [].forEach.call(e.target.childNodes, function (elm) {
          if (elm.nodeName == "TABLE") {
            const parentNode = document.createElement("multonion-dt");
            parentNode.appendChild(elm);
            e.target.appendChild(parentNode);
          }
        });
      }
    });
  // .on("mousedown mouseup keydown keyup", update);
});
