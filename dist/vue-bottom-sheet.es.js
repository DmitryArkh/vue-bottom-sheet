import { defineComponent as N, useCssVars as O, ref as a, computed as h, nextTick as k, openBlock as E, createBlock as z, Teleport as R, createElementVNode as s, createVNode as W, Transition as P, withCtx as j, withDirectives as q, vShow as G, normalizeClass as J, normalizeStyle as K, createElementBlock as Q, renderSlot as f, createCommentVNode as U, pushScopeId as X, popScopeId as Z } from "vue";
import r from "hammerjs";
const ee = (n) => (X("data-v-f053054e"), n = n(), Z(), n), te = ["aria-hidden"], oe = /* @__PURE__ */ ee(() => /* @__PURE__ */ s("div", { class: "bottom-sheet__draggable-area" }, [
  /* @__PURE__ */ s("div", { class: "bottom-sheet__draggable-thumb" })
], -1)), ae = /* @__PURE__ */ N({
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
  setup(n, { expose: p, emit: i }) {
    const t = n;
    O((e) => ({
      "1984398e": B.value,
      "49963c76": t.overlayColor,
      "793846c8": $.value,
      "10bf4f83": T.value,
      "66439ef2": Y.value,
      "414039f0": V.value
    }));
    const c = a(!1), u = a(0), l = a(100), g = a(!1), y = a(0), b = a(null), S = a(null), d = a(null), w = a(null), x = a(null), C = a(null), D = (e) => document.activeElement === e;
    window.addEventListener("keyup", (e) => {
      const o = b.value.contains(e.target) && D(e.target);
      e.key === "Escape" && !o && v();
    });
    const I = h(() => [
      "bottom-sheet__content",
      {
        "bottom-sheet__content--fullscreen": u.value >= window.innerHeight,
        "bottom-sheet__content--dragging": g.value
      }
    ]), B = h(() => `${t.transitionDuration}s`), T = h(() => u.value && u.value > 0 ? `${u.value + 1}px` : "auto"), V = h(() => t.maxHeight ? `${t.maxHeight}px` : "inherit"), $ = h(() => `${l.value}%`), Y = h(() => `${t.maxWidth}px`), A = async () => {
      await k(), u.value = S.value.offsetHeight + d.value.clientHeight + w.value.offsetHeight;
    }, H = (e, o) => {
      if (t.canSwipe) {
        g.value = !0;
        const m = (M) => {
          M.preventDefault();
        };
        e.deltaY > 0 && (o === "main" && e.type === "panup" && (l.value = _(e.deltaY), e.cancelable && d.value.addEventListener("touchmove", m)), o === "main" && e.type === "pandown" && y.value === 0 && (l.value = _(e.deltaY)), o === "area" && (l.value = _(e.deltaY)), e.type === "panup" && i("dragging-up"), e.type === "pandown" && i("dragging-down")), e.isFinal && (d.value.removeEventListener("touchmove", m), o === "main" && (y.value = d.value.scrollTop), g.value = !1, l.value >= 10 ? v() : l.value = 0);
      }
    };
    k(() => {
      A();
      const e = new r(C.value, {
        inputClass: r.TouchMouseInput,
        recognizers: [[r.Pan, { direction: r.DIRECTION_VERTICAL }]]
      }), o = new r(d.value, {
        inputClass: r.TouchMouseInput,
        recognizers: [[r.Pan, { direction: r.DIRECTION_VERTICAL }]]
      });
      e.on("panstart panup pandown panend", (m) => {
        H(m, "area");
      }), o.on("panstart panup pandown panend", (m) => {
        H(m, "main");
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
    return p({ open: F, close: v }), (e, o) => (E(), z(R, { to: "body" }, [
      s("div", {
        class: "bottom-sheet",
        ref_key: "bottomSheet",
        ref: b,
        "aria-hidden": !c.value,
        role: "dialog"
      }, [
        W(P, null, {
          default: j(() => [
            q(s("div", {
              onClick: L,
              class: "bottom-sheet__overlay"
            }, null, 512), [
              [G, e.overlay && c.value]
            ])
          ]),
          _: 1
        }),
        s("div", {
          ref_key: "bottomSheetContent",
          ref: x,
          class: J(I.value),
          style: K(`border-radius: ${e.roundness} ${e.roundness} 0 0`)
        }, [
          s("header", {
            ref_key: "bottomSheetHeader",
            ref: S,
            class: "bottom-sheet__header"
          }, [
            e.hideDragHandle ? U("", !0) : (E(), Q("div", {
              key: 0,
              ref_key: "bottomSheetDraggableArea",
              ref: C
            }, [
              f(e.$slots, "drag-handle", {}, () => [
                oe
              ], !0)
            ], 512)),
            f(e.$slots, "header", {}, void 0, !0)
          ], 512),
          s("main", {
            ref_key: "bottomSheetMain",
            ref: d,
            class: "bottom-sheet__main"
          }, [
            f(e.$slots, "default", {}, void 0, !0)
          ], 512),
          s("footer", {
            ref_key: "bottomSheetFooter",
            ref: w,
            class: "bottom-sheet__footer"
          }, [
            f(e.$slots, "footer", {}, void 0, !0)
          ], 512)
        ], 6)
      ], 8, te)
    ]));
  }
});
const ne = (n, p) => {
  const i = n.__vccOpts || n;
  for (const [t, c] of p)
    i[t] = c;
  return i;
}, se = /* @__PURE__ */ ne(ae, [["__scopeId", "data-v-f053054e"]]);
export {
  se as default
};
