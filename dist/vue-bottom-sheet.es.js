import { defineComponent as N, useCssVars as O, ref as a, computed as m, nextTick as k, openBlock as x, createBlock as R, Teleport as z, createElementVNode as r, createVNode as W, Transition as P, withCtx as j, withDirectives as q, vShow as G, normalizeClass as J, createElementBlock as K, renderSlot as p, createCommentVNode as Q, pushScopeId as U, popScopeId as X } from "vue";
import s from "hammerjs";
const Z = (n) => (U("data-v-06ce9b71"), n = n(), X(), n), ee = ["aria-hidden"], te = /* @__PURE__ */ Z(() => /* @__PURE__ */ r("div", { class: "bottom-sheet__draggable-area" }, [
  /* @__PURE__ */ r("div", { class: "bottom-sheet__draggable-thumb" })
], -1)), oe = /* @__PURE__ */ N({
  __name: "VueBottomSheet",
  props: {
    overlay: { type: Boolean, default: !0 },
    overlayColor: { default: "#0000004D" },
    maxWidth: { default: 640 },
    maxHeight: {},
    transitionDuration: { default: 0.5 },
    overlayClickClose: { type: Boolean, default: !0 },
    canSwipe: { type: Boolean, default: !0 },
    hideDragHandle: { type: Boolean, default: !1 },
    roundness: { default: "16px" }
  },
  emits: ["opened", "closed", "dragging-up", "dragging-down"],
  setup(n, { expose: f, emit: i }) {
    const t = n;
    O((e) => ({
      "787b198a": B.value,
      38572132: t.overlayColor,
      "87b27978": e.roundness,
      "16c85ef5": $.value,
      "55d0ee76": T.value,
      "0489a318": Y.value,
      "6bbaba8a": V.value
    }));
    const c = a(!1), u = a(0), l = a(100), g = a(!1), b = a(0), y = a(null), S = a(null), d = a(null), w = a(null), E = a(null), C = a(null), D = (e) => document.activeElement === e;
    window.addEventListener("keyup", (e) => {
      const o = y.value.contains(e.target) && D(e.target);
      e.key === "Escape" && !o && v();
    });
    const I = m(() => [
      "bottom-sheet__content",
      {
        "bottom-sheet__content--fullscreen": u.value >= window.innerHeight,
        "bottom-sheet__content--dragging": g.value
      }
    ]), B = m(() => `${t.transitionDuration}s`), T = m(() => u.value && u.value > 0 ? `${u.value + 1}px` : "auto"), V = m(() => t.maxHeight ? `${t.maxHeight}px` : "inherit"), $ = m(() => `${l.value}%`), Y = m(() => `${t.maxWidth}px`), A = async () => {
      await k(), u.value = S.value.offsetHeight + d.value.clientHeight + w.value.offsetHeight;
    }, H = (e, o) => {
      if (t.canSwipe) {
        g.value = !0;
        const h = (M) => {
          M.preventDefault();
        };
        e.deltaY > 0 && (o === "main" && e.type === "panup" && (l.value = _(e.deltaY), e.cancelable && d.value.addEventListener("touchmove", h)), o === "main" && e.type === "pandown" && b.value === 0 && (l.value = _(e.deltaY)), o === "area" && (l.value = _(e.deltaY)), e.type === "panup" && i("dragging-up"), e.type === "pandown" && i("dragging-down")), e.isFinal && (d.value.removeEventListener("touchmove", h), o === "main" && (b.value = d.value.scrollTop), g.value = !1, l.value >= 10 ? v() : l.value = 0);
      }
    };
    k(() => {
      A();
      const e = new s(C.value, {
        inputClass: s.TouchMouseInput,
        recognizers: [[s.Pan, { direction: s.DIRECTION_VERTICAL }]]
      }), o = new s(d.value, {
        inputClass: s.TouchMouseInput,
        recognizers: [[s.Pan, { direction: s.DIRECTION_VERTICAL }]]
      });
      e.on("panstart panup pandown panend", (h) => {
        H(h, "area");
      }), o.on("panstart panup pandown panend", (h) => {
        H(h, "main");
      });
    });
    const F = () => {
      l.value = 0, document.documentElement.style.overflowY = "hidden", document.documentElement.style.overscrollBehavior = "none", c.value = !0, i("opened");
    }, v = async () => {
      c.value = !1, l.value = 100, setTimeout(() => {
        document.documentElement.style.overflowY = "auto", document.documentElement.style.overscrollBehavior = "", i("closed");
      }, t.transitionDuration * 1e3);
    }, L = () => {
      t.overlayClickClose && v();
    }, _ = (e) => {
      const o = t.maxHeight && t.maxHeight <= u.value ? t.maxHeight : u.value;
      return e / o * 100;
    };
    return f({ open: F, close: v }), (e, o) => (x(), R(z, { to: "body" }, [
      r("div", {
        class: "bottom-sheet",
        ref_key: "bottomSheet",
        ref: y,
        "aria-hidden": !c.value,
        role: "dialog"
      }, [
        W(P, null, {
          default: j(() => [
            q(r("div", {
              onClick: L,
              class: "bottom-sheet__overlay"
            }, null, 512), [
              [G, e.overlay && c.value]
            ])
          ]),
          _: 1
        }),
        r("div", {
          ref_key: "bottomSheetContent",
          ref: E,
          class: J(I.value)
        }, [
          r("header", {
            ref_key: "bottomSheetHeader",
            ref: S,
            class: "bottom-sheet__header"
          }, [
            e.hideDragHandle ? Q("", !0) : (x(), K("div", {
              key: 0,
              ref_key: "bottomSheetDraggableArea",
              ref: C
            }, [
              p(e.$slots, "drag-handle", {}, () => [
                te
              ], !0)
            ], 512)),
            p(e.$slots, "header", {}, void 0, !0)
          ], 512),
          r("main", {
            ref_key: "bottomSheetMain",
            ref: d,
            class: "bottom-sheet__main"
          }, [
            p(e.$slots, "default", {}, void 0, !0)
          ], 512),
          r("footer", {
            ref_key: "bottomSheetFooter",
            ref: w,
            class: "bottom-sheet__footer"
          }, [
            p(e.$slots, "footer", {}, void 0, !0)
          ], 512)
        ], 2)
      ], 8, ee)
    ]));
  }
});
const ae = (n, f) => {
  const i = n.__vccOpts || n;
  for (const [t, c] of f)
    i[t] = c;
  return i;
}, se = /* @__PURE__ */ ae(oe, [["__scopeId", "data-v-06ce9b71"]]);
export {
  se as default
};
