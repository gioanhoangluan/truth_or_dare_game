import { c as pop, d as rest_props, f as spread_attributes, h as clsx, j as slot, k as bind_props, p as push, l as sanitize_props, m as attr } from './index2-DYsWzxZE.js';
import { w as writable, f as fallback } from './index-Dyo0P6dO.js';

function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}
function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${colWidth}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${colWidth}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
}
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
const classnames = (...args) => args.map(toClassName).filter(Boolean).join(" ");
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "body",
    "color",
    "inverse",
    "outline",
    "theme"
  ]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let body = fallback($$props["body"], false);
  let color = fallback($$props["color"], "");
  let inverse = fallback($$props["inverse"], false);
  let outline = fallback($$props["outline"], false);
  let theme = fallback($$props["theme"], void 0);
  classes = classnames(className, "card", inverse ? "text-white" : false, body ? "card-body" : false, color ? `${outline ? "border" : "bg"}-${color}` : false);
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    "data-bs-theme": theme,
    class: clsx(classes)
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    class: className,
    body,
    color,
    inverse,
    outline,
    theme
  });
  pop();
}
function CardBody($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  classes = classnames(className, "card-body");
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: clsx(classes) })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Col($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl"
  ]);
  push();
  let className = fallback($$props["class"], "");
  let xs = fallback($$props["xs"], void 0);
  let sm = fallback($$props["sm"], void 0);
  let md = fallback($$props["md"], void 0);
  let lg = fallback($$props["lg"], void 0);
  let xl = fallback($$props["xl"], void 0);
  let xxl = fallback($$props["xxl"], void 0);
  const colClasses = [];
  const lookup = { xs, sm, md, lg, xl, xxl };
  Object.keys(lookup).forEach((colWidth) => {
    const columnProp = lookup[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    const isXs = colWidth === "xs";
    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      if (columnProp.size || columnProp.size === "") {
        colClasses.push(colClass);
      }
      if (columnProp.push) {
        colClasses.push(`push${colSizeInterfix}${columnProp.push}`);
      }
      if (columnProp.pull) {
        colClasses.push(`pull${colSizeInterfix}${columnProp.pull}`);
      }
      if (columnProp.offset) {
        colClasses.push(`offset${colSizeInterfix}${columnProp.offset}`);
      }
      if (columnProp.order) {
        colClasses.push(`order${colSizeInterfix}${columnProp.order}`);
      }
    } else {
      colClasses.push(getColumnSizeClass(isXs, colWidth, columnProp));
    }
  });
  if (!colClasses.length) {
    colClasses.push("col");
  }
  if (className) {
    colClasses.push(className);
  }
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    class: clsx(colClasses.join(" "))
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    class: className,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl
  });
  pop();
}
function Row($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "noGutters",
    "form",
    "cols",
    "inner"
  ]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let noGutters = fallback($$props["noGutters"], false);
  let form = fallback($$props["form"], false);
  let cols = fallback($$props["cols"], 0);
  let inner = fallback($$props["inner"], void 0);
  function getCols(cols2) {
    const colsValue = parseInt(cols2);
    if (!isNaN(colsValue)) {
      if (colsValue > 0) {
        return [`row-cols-${colsValue}`];
      }
    } else if (typeof cols2 === "object") {
      return ["xs", "sm", "md", "lg", "xl"].map((colWidth) => {
        const isXs = colWidth === "xs";
        const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
        const value = cols2[colWidth];
        if (typeof value === "number" && value > 0) {
          return `row-cols${colSizeInterfix}${value}`;
        }
        return null;
      }).filter((value) => !!value);
    }
    return [];
  }
  classes = classnames(className, noGutters ? "gx-0" : null, form ? "form-row" : "row", ...getCols(cols));
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: clsx(classes) })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    class: className,
    noGutters,
    form,
    cols,
    inner
  });
  pop();
}
const colorMode = writable(getInitialColorMode());
colorMode.subscribe((mode) => useColorMode(mode));
function getInitialColorMode() {
  const currentTheme = globalThis.document?.documentElement.getAttribute("data-bs-theme") || "light";
  const prefersDarkMode = typeof globalThis.window?.matchMedia === "function" ? globalThis.window?.matchMedia("(prefers-color-scheme: dark)").matches : false;
  return currentTheme === "dark" || currentTheme === "auto" && prefersDarkMode ? "dark" : "light";
}
function useColorMode(element, mode) {
  let target = element;
  if (arguments.length === 1) {
    target = globalThis.document?.documentElement;
    if (!target) {
      return;
    }
    mode = element;
    colorMode.update(() => mode);
  }
  target.setAttribute("data-bs-theme", mode);
}
function _page($$payload, $$props) {
  push();
  let gameState = {
    topic: "bold",
    players: [
      {
        name: "",
        totalFailures: 0,
        lastTurn: "truth",
        lastQuestion: ""
      },
      {
        name: "",
        totalFailures: 0,
        lastTurn: "truth",
        lastQuestion: ""
      }
    ],
    state: "new",
    currentPlayerTurn: -1,
    currentQuestion: { key: "", value: "", isUsed: false },
    data: { truths: [], dares: [] },
    isLoading: false
  };
  $$payload.out += `<div id="main-content" class="d-flex justify-content-center svelte-pdkpcw">`;
  Col($$payload, {
    lg: 6,
    sm: 12,
    class: "",
    children: ($$payload2) => {
      Card($$payload2, {
        class: "card-content",
        children: ($$payload3) => {
          CardBody($$payload3, {
            children: ($$payload4) => {
              Row($$payload4, {
                children: ($$payload5) => {
                  Col($$payload5, { sm: 6 });
                  $$payload5.out += `<!----> `;
                  Col($$payload5, {
                    sm: 6,
                    children: ($$payload6) => {
                      $$payload6.out += `<a href="javascript:void(0);" class="float-end card-button svelte-pdkpcw"><i class="ti ti-reload"></i></a>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<div style="padding-top: 10vh;"><div class="d-flex flex-column text-center game-title svelte-pdkpcw"><span class="truth">Thật</span> <span class="or">hay</span> <span class="dare">Thách</span></div> <div class="mt-4"><form><div class="row mb-2 align-items-center"><div class="col-5 align-self-center"><label for="player1" class="form-label fw-bold text-regular svelte-pdkpcw">Tên bạn nam</label></div> <div class="col"><input type="text" class="form-control" id="player1"${attr("value", gameState.players[0].name)} required></div></div> <div class="row mb-2 align-items-center"><div class="col-5 align-self-center"><label for="player2" class="form-label fw-bold text-regular svelte-pdkpcw">Tên bạn nữ</label></div> <div class="col"><input type="text" class="form-control" id="player2"${attr("value", gameState.players[1].name)} required></div></div> <div class="mt-5 text-center"><button type="submit" class="btn btn-dark minw-40 text-regular btn-lg shadow svelte-pdkpcw">Bắt đầu</button></div></form></div></div>`;
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-6X_wZB8n.js.map
