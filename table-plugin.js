/* ===========================================================
 * trumbowyg.table.js v3.0
 * Table plugin for Trumbowyg
 * http://alex-d.github.com/Trumbowyg
 * ===========================================================
 * Author : Alexandre Demode (Alex-D)
 *          Twitter : @AlexandreDemode
 *          Website : alex-d.fr
 * Original Author : Sven Dunemann [dunemann@forelabs.eu]
 */
!(function (e) {
  "use strict";
  var t = {
    rows: 8,
    columns: 8,
    allowHorizontalResize: !0,
    colorList: [
      "ffffff",
      "000000",
      "eeece1",
      "1f497d",
      "4f81bd",
      "c0504d",
      "9bbb59",
      "8064a2",
      "4bacc6",
      "f79646",
      "ffff00",
      "f2f2f2",
      "7f7f7f",
      "ddd9c3",
      "c6d9f0",
      "dbe5f1",
      "f2dcdb",
      "ebf1dd",
      "e5e0ec",
      "dbeef3",
      "fdeada",
      "fff2ca",
      "d8d8d8",
      "595959",
      "c4bd97",
      "8db3e2",
      "b8cce4",
      "e5b9b7",
      "d7e3bc",
      "ccc1d9",
      "b7dde8",
      "fbd5b5",
      "ffe694",
      "bfbfbf",
      "3f3f3f",
      "938953",
      "548dd4",
      "95b3d7",
      "d99694",
      "c3d69b",
      "b2a2c7",
      "b7dde8",
      "fac08f",
      "f2c314",
      "a5a5a5",
      "262626",
      "494429",
      "17365d",
      "366092",
      "953734",
      "76923c",
      "5f497a",
      "92cddc",
      "e36c09",
      "c09100",
      "7f7f7f",
      "0c0c0c",
      "1d1b10",
      "0f243e",
      "244061",
      "632423",
      "4f6128",
      "3f3151",
      "31859b",
      "974806",
      "7f6000",
    ],
    backgroundColorList: null,
    allowCustomBackgroundColor: !0,
    displayBackgroundColorsAsList: !1,
    borderColorList: null,
    allowCustomBorderColor: !0,
    displayBorderColorsAsList: !1,
    dropdown: [
      {
        title: "tableRows",
        buttons: [
          "tableAddHeaderRow",
          "tableAddRowAbove",
          "tableAddRow",
          "tableDeleteRow",
        ],
      },
      {
        title: "tableColumns",
        buttons: ["tableAddColumnLeft", "tableAddColumn", "tableDeleteColumn"],
      },
      {
        title: "tableVerticalAlign",
        buttons: [
          "tableVerticalAlignTop",
          "tableVerticalAlignMiddle",
          "tableVerticalAlignBottom",
        ],
      },
      {
        title: "tableOthers",
        buttons: ["tableMergeCells", "tableUnmergeCells", "tableDestroy"],
      },
    ],
  };
  function l(e) {
    return e[0].toUpperCase() + e.slice(1);
  }
  function a(e) {
    return ("0" + parseInt(e).toString(16)).slice(-2);
  }
  function o(e) {
    return -1 === e.search("rgb")
      ? e.replace("#", "")
      : "rgba(0, 0, 0, 0)" === e ||
        null ==
          (e = e.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d?(.\d+)))?\)$/
          ))
      ? "transparent"
      : a(e[1]) + a(e[2]) + a(e[3]);
  }
  e.extend(!0, e.trumbowyg, {
    langs: {
      en: {
        table: "Insert table",
        tableRows: "Rows",
        tableColumns: "Columns",
        tableVerticalAlign: "Vertical align",
        tableOthers: "Others",
        tableAddHeaderRow: "Insert head row",
        tableAddRowAbove: "Insert row above",
        tableAddRow: "Insert row below",
        tableAddColumnLeft: "Insert column to the left",
        tableAddColumn: "Insert column to the right",
        tableDeleteRow: "Delete row",
        tableDeleteColumn: "Delete column",
        tableDestroy: "Delete table",
        tableMergeCells: "Merge cells",
        tableUnmergeCells: "Unmerge cells",
        tableVerticalAlignTop: "Align text to top",
        tableVerticalAlignMiddle: "Center text vertically",
        tableVerticalAlignBottom: "Align text to bottom",
        tableCellBackgroundColor: "Cell background color",
      },
      az: {
        table: "Cədvəl yerləşdir",
        tableAddRow: "Sətir əlavə et",
        tableAddRowAbove: "Yuxarı sətir əlavə et",
        tableAddColumnLeft: "Sola sütun əlavə et",
        tableAddColumn: "Sağa sütun əlavə et",
        tableDeleteRow: "Sətri sil",
        tableDeleteColumn: "Sütunu sil",
        tableDestroy: "Cədvəli sil",
      },
      ca: {
        table: "Inserir taula",
        tableAddRow: "Afegir fila",
        tableAddRowAbove: "Afegir fila a dalt",
        tableAddColumnLeft: "Afegir columna a l'esquerra",
        tableAddColumn: "Afegir columna a la dreta",
        tableDeleteRow: "Esborrar fila",
        tableDeleteColumn: "Esborrar columna",
        tableDestroy: "Esborrar taula",
        error: "Error",
      },
      cs: {
        table: "Vytvořit příkaz Table",
        tableAddRow: "Přidat řádek",
        tableAddRowAbove: "Přidat řádek",
        tableAddColumnLeft: "Přidat sloupec",
        tableAddColumn: "Přidat sloupec",
      },
      da: {
        table: "Indsæt tabel",
        tableAddRow: "Tilføj række",
        tableAddRowAbove: "Tilføj række",
        tableAddColumnLeft: "Tilføj kolonne",
        tableAddColumn: "Tilføj kolonne",
        tableDeleteRow: "Slet række",
        tableDeleteColumn: "Slet kolonne",
        tableDestroy: "Slet tabel",
      },
      de: {
        table: "Tabelle einfügen",
        tableAddRow: "Zeile hinzufügen",
        tableAddRowAbove: "Zeile hinzufügen",
        tableAddColumnLeft: "Spalte hinzufügen",
        tableAddColumn: "Spalte hinzufügen",
        tableDeleteRow: "Zeile löschen",
        tableDeleteColumn: "Spalte löschen",
        tableDestroy: "Tabelle löschen",
      },
      et: {
        table: "Sisesta tabel",
        tableAddRow: "Lisa rida",
        tableAddRowAbove: "Lisa rida üles",
        tableAddColumnLeft: "Lisa tulp vasakule",
        tableAddColumn: "Lisa tulp paremale",
        tableDeleteRow: "Kustuta rida",
        tableDeleteColumn: "Kustuta tulp",
        tableDestroy: "Kustuta tabel",
      },
      fr: {
        table: "Insérer un tableau",
        tableRows: "Lignes",
        tableColumns: "Colonnes",
        tableVerticalAlign: "Alignement vertical",
        tableOthers: "Autres",
        tableAddHeaderRow: "Insérer une line d'en-tête",
        tableAddRowAbove: "Insérer une ligne au dessus",
        tableAddRow: "Insérer une ligne en dessous",
        tableAddColumnLeft: "Insérer une colonne à gauche",
        tableAddColumn: "Insérer une colonne à droite",
        tableDeleteRow: "Supprimer la ligne",
        tableDeleteColumn: "Supprimer la colonne",
        tableDestroy: "Supprimer le tableau",
        tableMergeCells: "Fusionner les cellules",
        tableUnmergeCells: "Dissocier les cellules",
        tableVerticalAlignTop: "Aligner en haut",
        tableVerticalAlignMiddle: "Aligner au milieu",
        tableVerticalAlignBottom: "Aligner en bas",
        tableCellBackgroundColor: "Couleur de fond des cellules",
        tableBorderColor: "Couleur de la bordure du tableau",
      },
      hu: {
        table: "Táblázat beszúrás",
        tableAddRow: "Sor hozzáadás",
        tableAddRowAbove: "Sor beszúrás fönt",
        tableAddColumnLeft: "Sor beszúrás balra",
        tableAddColumn: "Sor beszúrás jobbra",
        tableDeleteRow: "Sor törlés",
        tableDeleteColumn: "Oszlop törlés",
        tableDestroy: "Táblázat törlés",
      },
      id: {
        table: "Sisipkan tabel",
        tableAddRow: "Sisipkan baris",
        tableAddRowAbove: "Sisipkan baris",
        tableAddColumnLeft: "Sisipkan kolom",
        tableAddColumn: "Sisipkan kolom",
        tableDeleteRow: "Hapus baris",
        tableDeleteColumn: "Hapus kolom",
        tableDestroy: "Hapus tabel",
      },
      ja: {
        table: "表の挿入",
        tableAddRow: "行の追加",
        tableAddRowAbove: "行の追加",
        tableAddColumnLeft: "列の追加",
        tableAddColumn: "列の追加",
      },
      ko: {
        table: "표 넣기",
        tableAddRow: "줄 추가",
        tableAddRowAbove: "줄 추가",
        tableAddColumnLeft: "칸 추가",
        tableAddColumn: "칸 추가",
        tableDeleteRow: "줄 삭제",
        tableDeleteColumn: "칸 삭제",
        tableDestroy: "표 지우기",
      },
      pt_br: {
        table: "Inserir tabela",
        tableAddRow: "Adicionar linha",
        tableAddRowAbove: "Adicionar linha",
        tableAddColumnLeft: "Adicionar coluna",
        tableAddColumn: "Adicionar coluna",
        tableDeleteRow: "Deletar linha",
        tableDeleteColumn: "Deletar coluna",
        tableDestroy: "Deletar tabela",
      },
      ru: {
        table: "Вставить таблицу",
        tableAddRow: "Добавить строку",
        tableAddRowAbove: "Добавить строку",
        tableAddColumnLeft: "Добавить столбец",
        tableAddColumn: "Добавить столбец",
        tableDeleteRow: "Удалить строку",
        tableDeleteColumn: "Удалить столбец",
        tableDestroy: "Удалить таблицу",
      },
      sl: {
        table: "Dodaj tabelo",
        tableAddRow: "Dodaj vrstico",
        tableAddRowAbove: "Vrini vrstico",
        tableAddColumnLeft: "Vrini stolpec",
        tableAddColumn: "Dodaj stolpec",
        tableDeleteRow: "Izbriši vrstico",
        tableDeleteColumn: "Izbriši stolpec",
        tableDestroy: "Izbriši tabelo",
      },
      sk: {
        table: "Vytvoriť tabuľky",
        tableAddRow: "Pridať riadok",
        tableAddRowAbove: "Pridať riadok",
        tableAddColumnLeft: "Pridať stĺpec",
        tableAddColumn: "Pridať stĺpec",
      },
      tr: {
        table: "Tablo ekle",
        tableAddRow: "Satır ekle",
        tableAddRowAbove: "Yukarıya satır ekle",
        tableAddColumnLeft: "Sola sütun ekle",
        tableAddColumn: "Sağa sütun ekle",
        tableDeleteRow: "Satırı sil",
        tableDeleteColumn: "Sütunu sil",
        tableDestroy: "Tabloyu sil",
      },
      zh_tw: {
        table: "插入表格",
        tableAddRow: "加入行",
        tableAddRowAbove: "加入行",
        tableAddColumnLeft: "加入列",
        tableAddColumn: "加入列",
        tableDeleteRow: "刪除行",
        tableDeleteColumn: "刪除列",
        tableDestroy: "刪除表格",
      },
      es: {
        table: "Insertar tabla",
        tableAddRow: "Agregar fila",
        tableAddRowAbove: "Agregar fila arriba",
        tableAddColumnLeft: "Agregar columna a la izquierda",
        tableAddColumn: "Agregar columna a la derecha",
        tableDeleteRow: "Borrar fila",
        tableDeleteColumn: "Borrar columna",
        tableDestroy: "Borrar tabla",
      },
    },
    plugins: {
      table: {
        init: function (a) {
          var o;
          a.o.plugins.table = e.extend(!0, {}, t, a.o.plugins.table || {});
          var n = {
              fn: function () {
                a.saveRange();
                var t = "table",
                  l = a.o.prefix + "dropdown",
                  n = {
                    class:
                      l + "-" + t + " " + l + " " + a.o.prefix + "fixed-top",
                  };
                n["data-" + l] = t;
                var d = e("<div/>", n);
                if (
                  (0 === a.$box.find("." + l + "-" + t).length
                    ? a.$box.append(d.hide())
                    : (d = a.$box.find("." + l + "-" + t)),
                  d.html(""),
                  a.$box
                    .find("." + a.o.prefix + "table-button")
                    .hasClass(a.o.prefix + "active-button"))
                ) {
                  var i = e(a.doc.getSelection().anchorNode).closest("table"),
                    c = b(i),
                    u = void 0 !== o;
                  e(a.o.plugins.table.dropdown).each(function (t, l) {
                    d.append(
                      e("<div/>", {
                        html: a.lang[l.title] ? a.lang[l.title] : l.title,
                        class: a.o.prefix + "table-dropdown-title",
                      })
                    ).text();
                    var o = e("<div/>", {
                      class: a.o.prefix + "dropdown-button-group",
                    });
                    e(l.buttons).each(function (t, l) {
                      if (
                        "tableAddHeaderRow" === l &&
                        0 !== e("thead", i).length
                      )
                        return;
                      if ("tableMergeCells" !== l || u) {
                        if ("tableUnmergeCells" === l) {
                          var n = !1;
                          if (
                            (L(function (e) {
                              var t = e.is("[colspan]") || e.is("[rowspan]");
                              n = n || t;
                            }, c),
                            !n)
                          )
                            return;
                        }
                        o.append(a.buildSubBtn(l));
                      }
                    }),
                      d.append(o);
                  });
                } else {
                  var f = e("<table/>");
                  e("<tbody/>").appendTo(f);
                  for (var g = 0; g < a.o.plugins.table.rows; g += 1)
                    for (
                      var p = e("<tr/>").appendTo(f), m = 0;
                      m < a.o.plugins.table.columns;
                      m += 1
                    )
                      e("<td/>").appendTo(p);
                  f.find("td").on("mouseover", r),
                    f.find("td").on("mousedown", s),
                    d.append(f),
                    d.append(e('<div class="trumbowyg-table-size">1x1</div>'));
                }
                a.dropdown(t);
              },
              class: a.o.prefix + "open-dropdown",
            },
            r = function (t) {
              var l = e(t.target).closest("table"),
                a = this.cellIndex,
                o = this.parentNode.rowIndex;
              l.find("td").removeClass("active");
              for (var n = 0; n <= o; n += 1)
                for (var r = 0; r <= a; r += 1)
                  l.find("tr:nth-of-type(" + (n + 1) + ")")
                    .find("td:nth-of-type(" + (r + 1) + ")")
                    .addClass("active");
              l.next(".trumbowyg-table-size").html(a + 1 + "x" + (o + 1));
            },
            d = function (t) {
              var l = a.o.tagClasses[t.tagName.toLowerCase()];
              l && e(t).addClass(l);
            },
            i = function (t) {
              d(t[0]),
                e("*", t).each(function (e, t) {
                  d(t);
                });
            },
            s = function () {
              a.saveRange();
              var t = e("<table/>"),
                l = e("<thead/>"),
                o = e("<tr/>");
              o.appendTo(l);
              for (var n = 0; n <= this.cellIndex; n += 1)
                e("<th/>", {
                  scope: "col",
                }).appendTo(o);
              l.appendTo(t);
              for (
                var r = e("<tbody/>"),
                  d = this.cellIndex,
                  s = this.parentNode.rowIndex,
                  b = 0;
                b <= s;
                b += 1
              )
                for (var c = e("<tr/>").appendTo(r), u = 0; u <= d; u += 1)
                  e("<td/>").appendTo(c);
              r.appendTo(t), i(t);
              for (
                var f = a.range.endContainer;
                f.nodeType !== Node.ELEMENT_NODE;

              )
                f = f.parentNode;
              f !== a.$ed[0] && a.range.setEndAfter(f),
                a.range.collapse(),
                a.range.insertNode(t[0]),
                "P" === f.nodeName &&
                  0 === f.textContent.trim().length &&
                  f.remove(),
                a.syncCode(),
                z();
            },
            b = function (t) {
              for (var l = e("tr", t), a = [], o = 0; o < l.length; o += 1)
                a.push([]);
              return (
                l.each(function (t, l) {
                  var o = 0;
                  e("td, th", e(l)).each(function (l, n) {
                    for (
                      var r = e(n),
                        d = r.attr("colspan"),
                        i = r.attr("rowspan"),
                        s = parseInt(d || 1, 10),
                        b = parseInt(i || 1, 10);
                      void 0 !== a[t][o];

                    )
                      o += 1;
                    a[t][o] = {
                      tag: n.tagName,
                      element: n,
                      colspan: s,
                      rowspan: b,
                    };
                    for (var c = 1; c < s; c += 1)
                      a[t][o + c] = {
                        mergedIn: [t, o],
                      };
                    for (var u = 1; u < b; u += 1) {
                      a[t + u][o] = {
                        mergedIn: [t, o],
                      };
                      for (var f = 1; f < s; f += 1)
                        a[t + u][o + f] = {
                          mergedIn: [t, o],
                        };
                    }
                    o += s;
                  });
                }),
                a
              );
            },
            c = function (t) {
              return function () {
                a.saveRange();
                var l = a.doc.getSelection().anchorNode,
                  o = e(l).closest("table");
                if (0 !== o.length) {
                  "TR" === l.tagName && (l = e("td, th", l)[0]);
                  var n = e(l).closest("tr"),
                    r = b(o);
                  t(o, n, l, r), a.syncCode();
                }
              };
            },
            u = function (t = !1) {
              return c(function (l, a, o, n) {
                var r = e("tr", l),
                  d = e("<tr/>"),
                  s = r.index(a);
                if (t) (s = Math.max(0, s - 1)), (a = e(r[s]));
                else {
                  var b = e(o).closest("td, th").attr("rowspan"),
                    c = parseInt(b || 1, 10);
                  a = e(r[(s += c - 1)]);
                }
                var u = e("tbody tr", l),
                  f = 0 !== a.closest("thead").length;
                f && (a = u.first());
                for (
                  var g = n[s], p = n[s + 1], m = n[0].length, A = 0;
                  A < m;
                  A += 1
                ) {
                  if (void 0 !== p) {
                    var v = g[A],
                      h = D(n, v.mergedIn),
                      w = p[A],
                      C = D(n, w.mergedIn),
                      R = v.element ? v : h,
                      x = R.element;
                    if (x === (w.element ? w.element : C.element)) {
                      x.setAttribute("rowspan", R.rowspan + 1);
                      continue;
                    }
                  }
                  e("<td/>").appendTo(d);
                }
                0 === s && (t || f) ? a.before(d) : a.after(d), i(l), z();
              });
            },
            f = {
              title: a.lang.tableAddRowAbove,
              text: a.lang.tableAddRowAbove,
              ico: "row-above",
              fn: u(!0),
            },
            g = {
              title: a.lang.tableAddRow,
              text: a.lang.tableAddRow,
              ico: "row-below",
              fn: u(!1),
            },
            p = {
              title: a.lang.tableAddHeaderRow,
              text: a.lang.tableAddHeaderRow,
              ico: "header-row",
              fn: c(function (t, l, a, o) {
                if (0 !== e("thead", t).length) return !1;
                for (
                  var n = o[0].length,
                    r = e("<thead/>"),
                    d = e("<tr/>").appendTo(r),
                    s = 0;
                  s < n;
                  s += 1
                )
                  e("<th/>").appendTo(d);
                t.prepend(r), i(t), z();
              }),
            },
            m = function (t = !1) {
              return c(function (l, o, n, r) {
                var d = r[e("tr", l).index(o)],
                  s = e(n).closest("td, th"),
                  b = B(s[0], d);
                if (t) b = Math.max(0, b - 1);
                else {
                  var c = s.attr("colspan");
                  b += parseInt(c || 1, 10) - 1;
                }
                for (var u = r.length, f = t && 0 === b, g = 0; g < u; g += 1) {
                  var p,
                    m = r[g],
                    A = f ? void 0 : m[b + 1];
                  if (void 0 !== A) {
                    var v = m[b],
                      h = D(r, v.mergedIn),
                      w = D(r, A.mergedIn),
                      C = v.element ? v : h,
                      R = C.element;
                    if (R === (A.element ? A.element : w.element)) {
                      R.setAttribute("colspan", C.colspan + 1);
                      continue;
                    }
                  }
                  var x = 0;
                  do {
                    var y = b - x;
                    if (y < 0) break;
                    (p = m[y]), (x += 1);
                  } while (void 0 !== p.mergedIn);
                  var T = p.element,
                    k = a.doc.createElement(T.tagName);
                  0 === b && t ? T.before(k) : T.after(k);
                }
                i(l), z();
              });
            },
            A = {
              title: a.lang.tableAddColumnLeft,
              text: a.lang.tableAddColumnLeft,
              ico: "col-left",
              fn: m(!0),
            },
            v = {
              title: a.lang.tableAddColumn,
              text: a.lang.tableAddColumn,
              ico: "col-right",
              fn: m(!1),
            },
            h = {
              title: a.lang.tableDestroy,
              text: a.lang.tableDestroy,
              ico: "table-delete",
              fn: c(function (e) {
                e.remove();
              }),
            },
            w = {
              title: a.lang.tableDeleteRow,
              text: a.lang.tableDeleteRow,
              ico: "row-delete",
              fn: c(function (t, l, a, o) {
                if (1 !== e("tbody tr", t).length) {
                  var n = l,
                    r = l.parent();
                  r.is("thead") && (n = r);
                  for (
                    var d = e("tr", t), i = d.index(e(a).closest("tr")), s = 0;
                    s < o[0].length;
                    s += 1
                  ) {
                    var b = D(o, [i, s], !1);
                    if (1 !== b.rowspan) {
                      var c = D(o, [i, s]);
                      if (
                        (c.element.setAttribute("rowspan", c.rowspan - 1),
                        void 0 === b.mergedIn)
                      ) {
                        var u = B(b.element, o[i]);
                        if (0 !== u) {
                          var f = D(o, [i + 1, u - 1]);
                          e(f.element).after(c.element);
                        } else e(d[i + 1]).prepend(c.element);
                      }
                    }
                  }
                  n.remove(), R(t), H();
                } else t.remove();
              }),
            },
            C = {
              title: a.lang.tableDeleteColumn,
              text: a.lang.tableDeleteColumn,
              ico: "col-delete",
              fn: c(function (t, l, a, o) {
                for (
                  var n = e("tr", t).index(e(a).closest("tr")),
                    r = B(e(a).closest("td, th")[0], o[n]),
                    d = 0;
                  d < o.length;
                  d += 1
                ) {
                  var i = D(o, [d, r], !1);
                  if (i.colspan > 1) {
                    var s = D(o, [d, r]);
                    s.element.setAttribute("colspan", s.colspan - 1);
                  } else i.element.remove();
                }
                R(), H();
              }),
            },
            D = function (e, t, l = !0) {
              if (void 0 !== t) {
                var a = e[t[0]][t[1]];
                return (
                  l &&
                    void 0 !== a.mergedIn &&
                    (a = e[a.mergedIn[0]][a.mergedIn[1]]),
                  a
                );
              }
            },
            R = function (t) {
              var l = b(t),
                a = e("tr", t);
              e(l).each(function (t, o) {
                o.every(function (e) {
                  return void 0 !== e.mergedIn;
                }) &&
                  (e(l[t - 1]).each(function (e, t) {
                    void 0 !== t.mergedIn && (t = D(l, t.mergedIn)),
                      (t.rowspan -= 1),
                      t.rowspan <= 1
                        ? t.element.removeAttribute("rowspan")
                        : t.element.setAttribute("rowspan", t.rowspan);
                  }),
                  a[t].remove());
              }),
                e('[class=""]', t).removeAttr("class"),
                e('[style=""]', t).removeAttr("style");
            },
            x = {
              title: a.lang.tableMergeCells,
              text: a.lang.tableMergeCells,
              ico: "table-merge",
              fn: c(function (t, l, a, n) {
                if (
                  (function (t) {
                    if (0 === o.length) return !1;
                    var l = o[0],
                      a = D(t, l).tag;
                    if (
                      !o.every(function (e) {
                        return D(t, e).tag === a;
                      })
                    )
                      return !1;
                    var n = [],
                      r = [];
                    if (
                      (e(o).each(function (e, l) {
                        for (
                          var a = l[0],
                            o = l[1],
                            d = t[a][o],
                            i = a + d.rowspan;
                          a < i;
                          a += 1
                        )
                          void 0 === n[a] && (n[a] = t[0].length),
                            void 0 === r[a] && (r[a] = 0),
                            (n[a] = Math.min(n[a], o)),
                            (r[a] = Math.max(r[a], o + d.colspan));
                      }),
                      0 === n.length || 0 === r.length)
                    )
                      return !1;
                    var d = n.every(function (e) {
                        return e === n[n.length - 1];
                      }),
                      i = r.every(function (e) {
                        return e === r[r.length - 1];
                      });
                    return d && i;
                  })(n)
                ) {
                  var r = (function () {
                    var t = 999999,
                      l = t,
                      a = t;
                    if (
                      (e(o).each(function (e, t) {
                        (l = Math.min(t[0], l)), (a = Math.min(t[1], a));
                      }),
                      a !== t && l !== t)
                    )
                      return [l, a];
                  })();
                  if (void 0 !== r) {
                    var d = D(n, r),
                      i = e(d.element),
                      s = 999999,
                      b = 0,
                      c = 999999,
                      u = 0;
                    e(o).each(function (e, t) {
                      var l = t[0],
                        a = t[1],
                        o = n[l][a];
                      (s = Math.min(s, l)),
                        (b = Math.max(b, l + o.rowspan - 1)),
                        (c = Math.min(c, a)),
                        (u = Math.max(u, a + o.colspan - 1)),
                        o.element !== i[0] && o.element.remove();
                    });
                    var f = b - s + 1,
                      g = u - c + 1;
                    f > 1 && i.attr("rowspan", f),
                      g > 1 && i.attr("colspan", g),
                      R(t),
                      z();
                  }
                }
              }),
            },
            y = {
              title: a.lang.tableUnmergeCells,
              text: a.lang.tableUnmergeCells,
              ico: "table-unmerge",
              fn: c(function (t, l, o, n) {
                L(function (l) {
                  l.removeAttr("colspan").removeAttr("rowspan");
                  for (
                    var o = e("tr", t).index(l.closest("tr")),
                      r = B(l[0], n[o]),
                      d = n[o][r],
                      i = 0;
                    i < d.rowspan;
                    i += 1
                  )
                    for (
                      var s = 0 === i ? 1 : 0,
                        b = D(n, [o + i, r + s - 1]).element;
                      s < d.colspan;
                      s += 1
                    ) {
                      var c = a.doc.createElement(b.tagName);
                      e(b).after(c);
                    }
                }, n),
                  i(t),
                  z();
              }),
            },
            B = function (e, t) {
              return t.findIndex(function (t) {
                return void 0 !== t.element && t.element === e;
              });
            },
            T = function () {
              e("table", a.$ed).off("mousedown.tbwTable"),
                e("table", a.$ed).on("mousedown.tbwTable", function (e) {
                  a.doc.getSelection().removeAllRanges(),
                    e.ctrlKey && e.preventDefault();
                });
            },
            k = a.o.prefix + "table-cell-selection-mode",
            I = a.o.prefix + "table-cell-selected";
          setTimeout(function () {
            T(),
              a.$c.on("tbwchange.tbwTable", function () {
                T(), z();
              }),
              z(),
              e(a.doc).on("selectionchange.tbwTable", function () {
                o = void 0;
                var t = a.doc.getSelection(),
                  l = t.rangeCount,
                  n = t.anchorNode,
                  r = t.focusNode;
                if (l > 1) {
                  var d = t.getRangeAt(0),
                    i = t.getRangeAt(l - 1);
                  (n = d.startContainer.childNodes[d.startOffset]),
                    (r = i.startContainer.childNodes[i.startOffset]);
                }
                var s = e(n).closest("td, th"),
                  c = e(r).closest("td, th"),
                  u = s.closest("table"),
                  f = c.closest("table");
                if (
                  (e('[class="' + I + '"]', a.$ed).removeAttr("class"),
                  e("." + I, a.$ed).removeClass(I),
                  (0 === u.length && 0 === f.length) ||
                    u[0] !== f[0] ||
                    s[0] === c[0])
                )
                  e("." + k, a.$ed).removeClass(k);
                else {
                  u.addClass(k);
                  var g = b(u),
                    p = e("tr", u),
                    m = s.closest("tr"),
                    A = p.index(m),
                    v = c.closest("tr"),
                    h = p.index(v),
                    w = B(s[0], g[A]),
                    C = B(c[0], g[h]),
                    D = Math.min(A, h),
                    R = Math.max(A, h),
                    x = Math.min(w, C),
                    y = Math.max(w, C),
                    T = [];
                  p.each(function (t, l) {
                    t < D ||
                      t > R ||
                      e("td, th", l).each(function (l, a) {
                        var o = B(a, g[t]);
                        o < x || o > y || (T.push([t, o]), e(a).addClass(I));
                      });
                  }),
                    (o = T);
                }
              });
          });
          var L = function (t, l) {
              if (void 0 !== o)
                e(o).each(function (a, o) {
                  var n = D(l, o, !1);
                  void 0 === n.mergedIn && t(e(n.element));
                });
              else {
                var n = e(a.doc.getSelection().anchorNode).closest("td, th");
                if (0 === n.length) return;
                t(n);
              }
            },
            S = "trumbowyg-table-handle-for",
            z = function () {
              if (a.o.plugins.table.allowHorizontalResize) {
                var t,
                  l,
                  o,
                  n = e(a.o.prefix + "table-resize-layers"),
                  r = n.length > 0;
                r ||
                  ((n = e("<div/>", {
                    class: a.o.prefix + "table-resize-layers",
                  }).appendTo(a.$edBox)),
                  e(a.o.prefix + "table-resize-vertical-handle", n).each(
                    function (t, l) {
                      e(l).off().remove();
                    }
                  )),
                  e("table", a.$ed).each(function (r, d) {
                    e("td, th", e(d)).each(function (r, d) {
                      e("<div/>", {
                        class: a.o.prefix + "table-resize-vertical-handle",
                      })
                        .prop(S, d)
                        .on("mousedown.tbwTable", function (a) {
                          a.preventDefault(), a.stopPropagation();
                          var n = e(a.target).prop(S);
                          (o = e(n).closest("table")), (t = b(o));
                          var r = e("tr", o),
                            d = e(n).closest("tr"),
                            i = r.index(d),
                            s = t[i],
                            c = B(n, s),
                            u = t[i][c];
                          void 0 !== u.mergedIn &&
                            (u = t[u.mergedIn[0]][u.mergedIn[1]]),
                            (l = c + u.colspan - 1),
                            M(o, t),
                            E(o, t),
                            o.css({
                              maxWidth: "",
                            });
                        })
                        .appendTo(n);
                    });
                  }),
                  H(),
                  r ||
                    (e(a.doc)
                      .on("mousemove.tbwTable", function (a) {
                        if (void 0 !== l) {
                          a.preventDefault(), a.stopPropagation();
                          var n = o[0].getBoundingClientRect(),
                            r =
                              a.pageX -
                              n.left -
                              (V(t, l).element.getBoundingClientRect().left -
                                n.left),
                            d = e("col", o)[l];
                          e(d).css({
                            width: r,
                          }),
                            H();
                        }
                      })
                      .on("mouseup.tbwTable", function (e) {
                        void 0 !== l &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          M(o, t),
                          $(o, t),
                          (o = void 0),
                          (t = void 0),
                          (l = void 0),
                          a.syncCode(),
                          H());
                      }),
                    e(window).on("resize.tbwTable", function () {
                      H();
                    }));
              }
            },
            M = function (t, l) {
              var a = e("colgroup", t);
              0 === a.length && (a = e("<colgroup/>").prependTo(t));
              for (var o = l[0].length, n = e("col", a).length; n < o; n += 1)
                e("<col/>").appendTo(a);
            },
            V = function (e, t) {
              var l,
                a = 0;
              do {
                (l = e[a][t]), (a += 1);
              } while (void 0 === l.element || 1 !== l.colspan);
              return l;
            },
            N = function (t, l, a = !1) {
              var o = e("colgroup", t),
                n = e("col", o),
                r = t[0].offsetWidth;
              t.css({
                maxWidth: t[0].offsetWidth,
              });
              for (var d = l[0].length, i = [], s = 0; s < d; s += 1) {
                var b = V(l, s).element.getBoundingClientRect().width;
                a && (b = (b / r) * 100 + "%"), (i[s] = b);
              }
              for (var c = 0; c < d; c += 1)
                e(n[c]).css({
                  width: i[c],
                });
            },
            E = function (e, t) {
              N(e, t, !1);
            },
            $ = function (e, t) {
              N(e, t, !0);
            },
            H = function () {
              var t = e("." + a.o.prefix + "table-resize-layers", a.$edBox),
                l = Array.from(t).lenght && t[0]?.getBoundingClientRect(),
                o = l?.top,
                n = l?.left;
              e("." + a.o.prefix + "table-resize-vertical-handle", t).each(
                function (t, l) {
                  var a = e(l),
                    r = a.prop(S).getBoundingClientRect();
                  a.css({
                    top: r.top - o,
                    left: r.left - n + r.width,
                    height: r.height,
                  });
                }
              );
            },
            P = function (e) {
              return c(function (t, l, a, o) {
                L(function (t) {
                  t.css({
                    verticalAlign: e,
                  });
                }, o);
              });
            },
            j = {
              title: a.lang.tableVerticalAlignTop,
              text: a.lang.tableVerticalAlignTop,
              ico: "align-top",
              fn: P("top"),
            },
            O = {
              title: a.lang.tableVerticalAlignMiddle,
              text: a.lang.tableVerticalAlignMiddle,
              ico: "align-middle",
              fn: P("middle"),
            },
            U = {
              title: a.lang.tableVerticalAlignBottom,
              text: a.lang.tableVerticalAlignBottom,
              ico: "align-bottom",
              fn: P("bottom"),
            },
            F = function (e) {
              return e ? a.o.prefix + "dropdown--color-list" : "";
            },
            Q = function (t, o, n, r, d) {
              var i = [],
                s = a.o.plugins.table;
              e.each(o, function (e, l) {
                var o = t + l,
                  n = {
                    fn: d("#" + l),
                    hasIcon: !1,
                    text: a.lang["#" + l] || "#" + l,
                    style: "background-color: #" + l + ";",
                  };
                a.addBtnDef(o, n), i.push(o);
              });
              var b = "remove" + l(t),
                c = {
                  fn: d(""),
                  hasIcon: !1,
                  style:
                    "background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2NkQAAfEJMRmwBYhoGBYQtMBYoAADziAp0jtJTgAAAAAElFTkSuQmCC);",
                };
              if (
                (n && (c.style = ""),
                a.addBtnDef(b, c),
                i.push(b),
                s.allowCustomBackgroundColor)
              ) {
                var u = {
                    fn: function () {
                      a.openModalInsert(
                        a.lang.backgroundColor,
                        {
                          color: {
                            label: "backgroundColor",
                            forceCss: !0,
                            type: "color",
                            value: "#FFFFFF",
                          },
                        },
                        function (e) {
                          return d(e.color)(), !0;
                        }
                      );
                    },
                    hasIcon: !1,
                    text: "#",
                    style: "text-indent: 0; line-height: 20px; padding: 0 5px;",
                  },
                  f = "free" + l(t);
                a.addBtnDef(f, u), i.push(f);
              }
              return i;
            },
            W = {
              dropdown: Q(
                "tableCellBackgroundColor",
                a.o.plugins.table.backgroundColorList ||
                  a.o.plugins.table.colorList,
                a.o.plugins.table.displayBackgroundColorsAsList,
                a.o.plugins.table.allowCustomBackgroundColor,
                function (t) {
                  return function () {
                    var l = e(a.doc.getSelection().anchorNode).closest("table");
                    if (0 !== l.length) {
                      var o = b(l);
                      L(function (e) {
                        e.css({
                          backgroundColor: t,
                        });
                      }, o),
                        R(l);
                    }
                  };
                }
              ),
              dropdownClass: F(a.o.plugins.table.displayBackgroundColorsAsList),
            },
            Y = {
              dropdown: Q(
                "tableBorderColor",
                a.o.plugins.table.borderColorList ||
                  a.o.plugins.table.colorList,
                a.o.plugins.table.displayBorderColorsAsList,
                a.o.plugins.table.allowCustomBorderColor,
                function (t) {
                  return function () {
                    var l = e(a.doc.getSelection().anchorNode).closest("table");
                    if (0 !== l.length) {
                      var o = {
                        borderColor: t,
                      };
                      0 === parseInt(l.css("border-width"), 10) &&
                        ((o.borderWidth = "2px"), (o.borderStyle = "solid")),
                        "" === t &&
                          ((o.borderWidth = ""), (o.borderStyle = "")),
                        l.css(o);
                    }
                  };
                }
              ),
              dropdownClass: F(a.o.plugins.table.displayBorderColorsAsList),
            };
          a.addBtnDef("table", n),
            a.addBtnDef("tableAddHeaderRow", p),
            a.addBtnDef("tableAddRowAbove", f),
            a.addBtnDef("tableAddRow", g),
            a.addBtnDef("tableAddColumnLeft", A),
            a.addBtnDef("tableAddColumn", v),
            a.addBtnDef("tableMergeCells", x),
            a.addBtnDef("tableUnmergeCells", y),
            a.addBtnDef("tableVerticalAlignTop", j),
            a.addBtnDef("tableVerticalAlignMiddle", O),
            a.addBtnDef("tableVerticalAlignBottom", U),
            a.addBtnDef("tableCellBackgroundColor", W),
            a.addBtnDef("tableBorderColor", Y),
            a.addBtnDef("tableDeleteRow", w),
            a.addBtnDef("tableDeleteColumn", C),
            a.addBtnDef("tableDestroy", h);
        },
        destroy: function (t) {
          e(window).off("resize.tbwTable"),
            e(t.doc)
              .off("selectionchange.tbwTable")
              .off("mousemove.tbwTable")
              .off("mouseup.tbwTable"),
            t.$c.off("tbwchange.tbwTable"),
            e("table", t.$ed).off("mousedown.tbwTable");
        },
        tagHandler: function (e, t) {
          var a = [];
          if ("TABLE" === e.tagName) {
            a.push("table");
            var n = e.style.borderColor;
            if ("" !== n) {
              var r = o(n);
              t.o.plugins.table.colorList.indexOf(r) >= 0
                ? a.push("tableBorderColor" + r)
                : a.push("freeTableBorderColor");
            }
          }
          if (!e.style) return a;
          var d = e.style.verticalAlign;
          "" !== d && a.push("tableVerticalAlign" + l(d));
          var i = e.style.backgroundColor;
          if (("TH" === e.tagName || "TD" === e.tagName) && "" !== i) {
            var s = o(i);
            t.o.plugins.table.colorList.indexOf(s) >= 0
              ? a.push("tableCellBackgroundColor" + s)
              : a.push("freeTableCellBackgroundColor");
          }
          return a;
        },
      },
    },
  });
})(jQuery);
