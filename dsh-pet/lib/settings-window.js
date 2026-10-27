(function() {

"use strict";
//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb$1, mod) => function() {
	return mod || (0, cb$1[__getOwnPropNames(cb$1)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i$1 = 0, n$2 = keys.length, key; i$1 < n$2; i$1++) {
		key = keys[i$1];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k$2) => from[k$2]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion

//#region node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({ "node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(exports) {
	var l$2 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$2 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
	function A$2(a) {
		if (null === a || "object" !== typeof a) return null;
		a = z$2 && a[z$2] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var B$2 = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, C$1 = Object.assign, D$2 = {};
	function E$2(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D$2;
		this.updater = e || B$2;
	}
	E$2.prototype.isReactComponent = {};
	E$2.prototype.setState = function(a, b) {
		if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, a, b, "setState");
	};
	E$2.prototype.forceUpdate = function(a) {
		this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F$1() {}
	F$1.prototype = E$2.prototype;
	function G$2(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D$2;
		this.updater = e || B$2;
	}
	var H$2 = G$2.prototype = new F$1();
	H$2.constructor = G$2;
	C$1(H$2, E$2.prototype);
	H$2.isPureReactComponent = !0;
	var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function M$2(a, b, e) {
		var d, c = {}, k$2 = null, h$1 = null;
		if (null != b) for (d in void 0 !== b.ref && (h$1 = b.ref), void 0 !== b.key && (k$2 = "" + b.key), b) J$1.call(b, d) && !L$2.hasOwnProperty(d) && (c[d] = b[d]);
		var g$1 = arguments.length - 2;
		if (1 === g$1) c.children = e;
		else if (1 < g$1) {
			for (var f$2 = Array(g$1), m$2 = 0; m$2 < g$1; m$2++) f$2[m$2] = arguments[m$2 + 2];
			c.children = f$2;
		}
		if (a && a.defaultProps) for (d in g$1 = a.defaultProps, g$1) void 0 === c[d] && (c[d] = g$1[d]);
		return {
			$$typeof: l$2,
			type: a,
			key: k$2,
			ref: h$1,
			props: c,
			_owner: K$2.current
		};
	}
	function N$2(a, b) {
		return {
			$$typeof: l$2,
			type: a.type,
			key: b,
			ref: a.ref,
			props: a.props,
			_owner: a._owner
		};
	}
	function O$2(a) {
		return "object" === typeof a && null !== a && a.$$typeof === l$2;
	}
	function escape(a) {
		var b = {
			"=": "=0",
			":": "=2"
		};
		return "$" + a.replace(/[=:]/g, function(a$1) {
			return b[a$1];
		});
	}
	var P$2 = /\/+/g;
	function Q$2(a, b) {
		return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R$2(a, b, e, d, c) {
		var k$2 = typeof a;
		if ("undefined" === k$2 || "boolean" === k$2) a = null;
		var h$1 = !1;
		if (null === a) h$1 = !0;
		else switch (k$2) {
			case "string":
			case "number":
				h$1 = !0;
				break;
			case "object": switch (a.$$typeof) {
				case l$2:
				case n$1: h$1 = !0;
			}
		}
		if (h$1) return h$1 = a, c = c(h$1), a = "" === d ? "." + Q$2(h$1, 0) : d, I$2(c) ? (e = "", null != a && (e = a.replace(P$2, "$&/") + "/"), R$2(c, b, e, "", function(a$1) {
			return a$1;
		})) : null != c && (O$2(c) && (c = N$2(c, e + (!c.key || h$1 && h$1.key === c.key ? "" : ("" + c.key).replace(P$2, "$&/") + "/") + a)), b.push(c)), 1;
		h$1 = 0;
		d = "" === d ? "." : d + ":";
		if (I$2(a)) for (var g$1 = 0; g$1 < a.length; g$1++) {
			k$2 = a[g$1];
			var f$2 = d + Q$2(k$2, g$1);
			h$1 += R$2(k$2, b, e, f$2, c);
		}
		else if (f$2 = A$2(a), "function" === typeof f$2) for (a = f$2.call(a), g$1 = 0; !(k$2 = a.next()).done;) k$2 = k$2.value, f$2 = d + Q$2(k$2, g$1++), h$1 += R$2(k$2, b, e, f$2, c);
		else if ("object" === k$2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
		return h$1;
	}
	function S$2(a, b, e) {
		if (null == a) return a;
		var d = [], c = 0;
		R$2(a, d, "", "", function(a$1) {
			return b.call(e, a$1, c++);
		});
		return d;
	}
	function T$2(a) {
		if (-1 === a._status) {
			var b = a._result;
			b = b();
			b.then(function(b$1) {
				if (0 === a._status || -1 === a._status) a._status = 1, a._result = b$1;
			}, function(b$1) {
				if (0 === a._status || -1 === a._status) a._status = 2, a._result = b$1;
			});
			-1 === a._status && (a._status = 0, a._result = b);
		}
		if (1 === a._status) return a._result.default;
		throw a._result;
	}
	var U$2 = { current: null }, V$1 = { transition: null }, W$1 = {
		ReactCurrentDispatcher: U$2,
		ReactCurrentBatchConfig: V$1,
		ReactCurrentOwner: K$2
	};
	exports.Children = {
		map: S$2,
		forEach: function(a, b, e) {
			S$2(a, function() {
				b.apply(this, arguments);
			}, e);
		},
		count: function(a) {
			var b = 0;
			S$2(a, function() {
				b++;
			});
			return b;
		},
		toArray: function(a) {
			return S$2(a, function(a$1) {
				return a$1;
			}) || [];
		},
		only: function(a) {
			if (!O$2(a)) throw Error("React.Children.only expected to receive a single React element child.");
			return a;
		}
	};
	exports.Component = E$2;
	exports.Fragment = p$3;
	exports.Profiler = r$1;
	exports.PureComponent = G$2;
	exports.StrictMode = q$2;
	exports.Suspense = w;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
	exports.cloneElement = function(a, b, e) {
		if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		var d = C$1({}, a.props), c = a.key, k$2 = a.ref, h$1 = a._owner;
		if (null != b) {
			void 0 !== b.ref && (k$2 = b.ref, h$1 = K$2.current);
			void 0 !== b.key && (c = "" + b.key);
			if (a.type && a.type.defaultProps) var g$1 = a.type.defaultProps;
			for (f$2 in b) J$1.call(b, f$2) && !L$2.hasOwnProperty(f$2) && (d[f$2] = void 0 === b[f$2] && void 0 !== g$1 ? g$1[f$2] : b[f$2]);
		}
		var f$2 = arguments.length - 2;
		if (1 === f$2) d.children = e;
		else if (1 < f$2) {
			g$1 = Array(f$2);
			for (var m$2 = 0; m$2 < f$2; m$2++) g$1[m$2] = arguments[m$2 + 2];
			d.children = g$1;
		}
		return {
			$$typeof: l$2,
			type: a.type,
			key: c,
			ref: k$2,
			props: d,
			_owner: h$1
		};
	};
	exports.createContext = function(a) {
		a = {
			$$typeof: u$1,
			_currentValue: a,
			_currentValue2: a,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		};
		a.Provider = {
			$$typeof: t$2,
			_context: a
		};
		return a.Consumer = a;
	};
	exports.createElement = M$2;
	exports.createFactory = function(a) {
		var b = M$2.bind(null, a);
		b.type = a;
		return b;
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(a) {
		return {
			$$typeof: v$2,
			render: a
		};
	};
	exports.isValidElement = O$2;
	exports.lazy = function(a) {
		return {
			$$typeof: y$1,
			_payload: {
				_status: -1,
				_result: a
			},
			_init: T$2
		};
	};
	exports.memo = function(a, b) {
		return {
			$$typeof: x,
			type: a,
			compare: void 0 === b ? null : b
		};
	};
	exports.startTransition = function(a) {
		var b = V$1.transition;
		V$1.transition = {};
		try {
			a();
		} finally {
			V$1.transition = b;
		}
	};
	exports.unstable_act = function() {
		throw Error("act(...) is not supported in production builds of React.");
	};
	exports.useCallback = function(a, b) {
		return U$2.current.useCallback(a, b);
	};
	exports.useContext = function(a) {
		return U$2.current.useContext(a);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(a) {
		return U$2.current.useDeferredValue(a);
	};
	exports.useEffect = function(a, b) {
		return U$2.current.useEffect(a, b);
	};
	exports.useId = function() {
		return U$2.current.useId();
	};
	exports.useImperativeHandle = function(a, b, e) {
		return U$2.current.useImperativeHandle(a, b, e);
	};
	exports.useInsertionEffect = function(a, b) {
		return U$2.current.useInsertionEffect(a, b);
	};
	exports.useLayoutEffect = function(a, b) {
		return U$2.current.useLayoutEffect(a, b);
	};
	exports.useMemo = function(a, b) {
		return U$2.current.useMemo(a, b);
	};
	exports.useReducer = function(a, b, e) {
		return U$2.current.useReducer(a, b, e);
	};
	exports.useRef = function(a) {
		return U$2.current.useRef(a);
	};
	exports.useState = function(a) {
		return U$2.current.useState(a);
	};
	exports.useSyncExternalStore = function(a, b, e) {
		return U$2.current.useSyncExternalStore(a, b, e);
	};
	exports.useTransition = function() {
		return U$2.current.useTransition();
	};
	exports.version = "18.2.0";
} });

//#endregion
//#region node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var require_react = __commonJS({ "node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(exports, module) {
	module.exports = require_react_production_min();
} });
var import_react = __toESM(require_react(), 1);

//#endregion
//#region node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js
var require_scheduler_production_min = __commonJS({ "node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
	function f$1(a, b) {
		var c = a.length;
		a.push(b);
		a: for (; 0 < c;) {
			var d = c - 1 >>> 1, e = a[d];
			if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
			else break a;
		}
	}
	function h(a) {
		return 0 === a.length ? null : a[0];
	}
	function k$1(a) {
		if (0 === a.length) return null;
		var b = a[0], c = a.pop();
		if (c !== b) {
			a[0] = c;
			a: for (var d = 0, e = a.length, w$1 = e >>> 1; d < w$1;) {
				var m$2 = 2 * (d + 1) - 1, C$2 = a[m$2], n$2 = m$2 + 1, x$1 = a[n$2];
				if (0 > g(C$2, c)) n$2 < e && 0 > g(x$1, C$2) ? (a[d] = x$1, a[n$2] = c, d = n$2) : (a[d] = C$2, a[m$2] = c, d = m$2);
				else if (n$2 < e && 0 > g(x$1, c)) a[d] = x$1, a[n$2] = c, d = n$2;
				else break a;
			}
		}
		return b;
	}
	function g(a, b) {
		var c = a.sortIndex - b.sortIndex;
		return 0 !== c ? c : a.id - b.id;
	}
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var l$1 = performance;
		exports.unstable_now = function() {
			return l$1.now();
		};
	} else {
		var p$2 = Date, q$1 = p$2.now();
		exports.unstable_now = function() {
			return p$2.now() - q$1;
		};
	}
	var r = [], t$1 = [], u = 1, v$1 = null, y = 3, z$1 = !1, A$1 = !1, B$1 = !1, D$1 = "function" === typeof setTimeout ? setTimeout : null, E$1 = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
	"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function G$1(a) {
		for (var b = h(t$1); null !== b;) {
			if (null === b.callback) k$1(t$1);
			else if (b.startTime <= a) k$1(t$1), b.sortIndex = b.expirationTime, f$1(r, b);
			else break;
			b = h(t$1);
		}
	}
	function H$1(a) {
		B$1 = !1;
		G$1(a);
		if (!A$1) if (null !== h(r)) A$1 = !0, I$1(J);
		else {
			var b = h(t$1);
			null !== b && K$1(H$1, b.startTime - a);
		}
	}
	function J(a, b) {
		A$1 = !1;
		B$1 && (B$1 = !1, E$1(L$1), L$1 = -1);
		z$1 = !0;
		var c = y;
		try {
			G$1(b);
			for (v$1 = h(r); null !== v$1 && (!(v$1.expirationTime > b) || a && !M$1());) {
				var d = v$1.callback;
				if ("function" === typeof d) {
					v$1.callback = null;
					y = v$1.priorityLevel;
					var e = d(v$1.expirationTime <= b);
					b = exports.unstable_now();
					"function" === typeof e ? v$1.callback = e : v$1 === h(r) && k$1(r);
					G$1(b);
				} else k$1(r);
				v$1 = h(r);
			}
			if (null !== v$1) var w$1 = !0;
			else {
				var m$2 = h(t$1);
				null !== m$2 && K$1(H$1, m$2.startTime - b);
				w$1 = !1;
			}
			return w$1;
		} finally {
			v$1 = null, y = c, z$1 = !1;
		}
	}
	var N$1 = !1, O$1 = null, L$1 = -1, P$1 = 5, Q$1 = -1;
	function M$1() {
		return exports.unstable_now() - Q$1 < P$1 ? !1 : !0;
	}
	function R$1() {
		if (null !== O$1) {
			var a = exports.unstable_now();
			Q$1 = a;
			var b = !0;
			try {
				b = O$1(!0, a);
			} finally {
				b ? S$1() : (N$1 = !1, O$1 = null);
			}
		} else N$1 = !1;
	}
	var S$1;
	if ("function" === typeof F) S$1 = function() {
		F(R$1);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var T$1 = new MessageChannel(), U$1 = T$1.port2;
		T$1.port1.onmessage = R$1;
		S$1 = function() {
			U$1.postMessage(null);
		};
	} else S$1 = function() {
		D$1(R$1, 0);
	};
	function I$1(a) {
		O$1 = a;
		N$1 || (N$1 = !0, S$1());
	}
	function K$1(a, b) {
		L$1 = D$1(function() {
			a(exports.unstable_now());
		}, b);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(a) {
		a.callback = null;
	};
	exports.unstable_continueExecution = function() {
		A$1 || z$1 || (A$1 = !0, I$1(J));
	};
	exports.unstable_forceFrameRate = function(a) {
		0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P$1 = 0 < a ? Math.floor(1e3 / a) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return y;
	};
	exports.unstable_getFirstCallbackNode = function() {
		return h(r);
	};
	exports.unstable_next = function(a) {
		switch (y) {
			case 1:
			case 2:
			case 3:
				var b = 3;
				break;
			default: b = y;
		}
		var c = y;
		y = b;
		try {
			return a();
		} finally {
			y = c;
		}
	};
	exports.unstable_pauseExecution = function() {};
	exports.unstable_requestPaint = function() {};
	exports.unstable_runWithPriority = function(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: a = 3;
		}
		var c = y;
		y = a;
		try {
			return b();
		} finally {
			y = c;
		}
	};
	exports.unstable_scheduleCallback = function(a, b, c) {
		var d = exports.unstable_now();
		"object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
		switch (a) {
			case 1:
				var e = -1;
				break;
			case 2:
				e = 250;
				break;
			case 5:
				e = 1073741823;
				break;
			case 4:
				e = 1e4;
				break;
			default: e = 5e3;
		}
		e = c + e;
		a = {
			id: u++,
			callback: b,
			priorityLevel: a,
			startTime: c,
			expirationTime: e,
			sortIndex: -1
		};
		c > d ? (a.sortIndex = c, f$1(t$1, a), null === h(r) && a === h(t$1) && (B$1 ? (E$1(L$1), L$1 = -1) : B$1 = !0, K$1(H$1, c - d))) : (a.sortIndex = e, f$1(r, a), A$1 || z$1 || (A$1 = !0, I$1(J)));
		return a;
	};
	exports.unstable_shouldYield = M$1;
	exports.unstable_wrapCallback = function(a) {
		var b = y;
		return function() {
			var c = y;
			y = b;
			try {
				return a.apply(this, arguments);
			} finally {
				y = c;
			}
		};
	};
} });

//#endregion
//#region node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js
var require_scheduler = __commonJS({ "node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js"(exports, module) {
	module.exports = require_scheduler_production_min();
} });

//#endregion
//#region node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.production.min.js
var require_react_dom_production_min = __commonJS({ "node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
	var aa = require_react(), ca = require_scheduler();
	function p$1(a) {
		for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
		return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = new Set(), ea = {};
	function fa(a, b) {
		ha(a, b);
		ha(a + "Capture", b);
	}
	function ha(a, b) {
		ea[a] = b;
		for (a = 0; a < b.length; a++) da.add(b[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
	function oa(a) {
		if (ja.call(ma, a)) return !0;
		if (ja.call(la, a)) return !1;
		if (ka.test(a)) return ma[a] = !0;
		la[a] = !0;
		return !1;
	}
	function pa(a, b, c, d) {
		if (null !== c && 0 === c.type) return !1;
		switch (typeof b) {
			case "function":
			case "symbol": return !0;
			case "boolean":
				if (d) return !1;
				if (null !== c) return !c.acceptsBooleans;
				a = a.toLowerCase().slice(0, 5);
				return "data-" !== a && "aria-" !== a;
			default: return !1;
		}
	}
	function qa(a, b, c, d) {
		if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
		if (d) return !1;
		if (null !== c) switch (c.type) {
			case 3: return !b;
			case 4: return !1 === b;
			case 5: return isNaN(b);
			case 6: return isNaN(b) || 1 > b;
		}
		return !1;
	}
	function v(a, b, c, d, e, f$2, g$1) {
		this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
		this.attributeName = d;
		this.attributeNamespace = e;
		this.mustUseProperty = c;
		this.propertyName = a;
		this.type = b;
		this.sanitizeURL = f$2;
		this.removeEmptyString = g$1;
	}
	var z = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
		z[a] = new v(a, 0, !1, a, null, !1, !1);
	});
	[
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(a) {
		var b = a[0];
		z[b] = new v(b, 1, !1, a[1], null, !1, !1);
	});
	[
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
		z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(a) {
		z[a] = new v(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function(a) {
		z[a] = new v(a, 4, !1, a, null, !1, !1);
	});
	[
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(a) {
		z[a] = new v(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function(a) {
		z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
		return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	[
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	[
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b, c, d) {
		var e = z.hasOwnProperty(b) ? z[b] : null;
		if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
	Symbol.for("react.scope");
	Symbol.for("react.debug_trace_mode");
	var Ia = Symbol.for("react.offscreen");
	Symbol.for("react.legacy_hidden");
	Symbol.for("react.cache");
	Symbol.for("react.tracing_marker");
	var Ja = Symbol.iterator;
	function Ka(a) {
		if (null === a || "object" !== typeof a) return null;
		a = Ja && a[Ja] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var A = Object.assign, La;
	function Ma(a) {
		if (void 0 === La) try {
			throw Error();
		} catch (c) {
			var b = c.stack.trim().match(/\n( *(at )?)/);
			La = b && b[1] || "";
		}
		return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b) {
		if (!a || Na) return "";
		Na = !0;
		var c = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (b) if (b = function() {
				throw Error();
			}, Object.defineProperty(b.prototype, "props", { set: function() {
				throw Error();
			} }), "object" === typeof Reflect && Reflect.construct) {
				try {
					Reflect.construct(b, []);
				} catch (l$3) {
					var d = l$3;
				}
				Reflect.construct(a, [], b);
			} else {
				try {
					b.call();
				} catch (l$3) {
					d = l$3;
				}
				a.call(b.prototype);
			}
			else {
				try {
					throw Error();
				} catch (l$3) {
					d = l$3;
				}
				a();
			}
		} catch (l$3) {
			if (l$3 && d && "string" === typeof l$3.stack) {
				for (var e = l$3.stack.split("\n"), f$2 = d.stack.split("\n"), g$1 = e.length - 1, h$1 = f$2.length - 1; 1 <= g$1 && 0 <= h$1 && e[g$1] !== f$2[h$1];) h$1--;
				for (; 1 <= g$1 && 0 <= h$1; g$1--, h$1--) if (e[g$1] !== f$2[h$1]) {
					if (1 !== g$1 || 1 !== h$1) do
						if (g$1--, h$1--, 0 > h$1 || e[g$1] !== f$2[h$1]) {
							var k$2 = "\n" + e[g$1].replace(" at new ", " at ");
							a.displayName && k$2.includes("<anonymous>") && (k$2 = k$2.replace("<anonymous>", a.displayName));
							return k$2;
						}
					while (1 <= g$1 && 0 <= h$1);
					break;
				}
			}
		} finally {
			Na = !1, Error.prepareStackTrace = c;
		}
		return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
		switch (a.tag) {
			case 5: return Ma(a.type);
			case 16: return Ma("Lazy");
			case 13: return Ma("Suspense");
			case 19: return Ma("SuspenseList");
			case 0:
			case 2:
			case 15: return a = Oa(a.type, !1), a;
			case 11: return a = Oa(a.type.render, !1), a;
			case 1: return a = Oa(a.type, !0), a;
			default: return "";
		}
	}
	function Qa(a) {
		if (null == a) return null;
		if ("function" === typeof a) return a.displayName || a.name || null;
		if ("string" === typeof a) return a;
		switch (a) {
			case ya: return "Fragment";
			case wa: return "Portal";
			case Aa: return "Profiler";
			case za: return "StrictMode";
			case Ea: return "Suspense";
			case Fa: return "SuspenseList";
		}
		if ("object" === typeof a) switch (a.$$typeof) {
			case Ca: return (a.displayName || "Context") + ".Consumer";
			case Ba: return (a._context.displayName || "Context") + ".Provider";
			case Da:
				var b = a.render;
				a = a.displayName;
				a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
				return a;
			case Ga: return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
			case Ha:
				b = a._payload;
				a = a._init;
				try {
					return Qa(a(b));
				} catch (c) {}
		}
		return null;
	}
	function Ra(a) {
		var b = a.type;
		switch (a.tag) {
			case 24: return "Cache";
			case 9: return (b.displayName || "Context") + ".Consumer";
			case 10: return (b._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
			case 7: return "Fragment";
			case 5: return b;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return Qa(b);
			case 8: return b === za ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if ("function" === typeof b) return b.displayName || b.name || null;
				if ("string" === typeof b) return b;
		}
		return null;
	}
	function Sa(a) {
		switch (typeof a) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return a;
			case "object": return a;
			default: return "";
		}
	}
	function Ta(a) {
		var b = a.type;
		return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
		var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
		if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
			var e = c.get, f$2 = c.set;
			Object.defineProperty(a, b, {
				configurable: !0,
				get: function() {
					return e.call(this);
				},
				set: function(a$1) {
					d = "" + a$1;
					f$2.call(this, a$1);
				}
			});
			Object.defineProperty(a, b, { enumerable: c.enumerable });
			return {
				getValue: function() {
					return d;
				},
				setValue: function(a$1) {
					d = "" + a$1;
				},
				stopTracking: function() {
					a._valueTracker = null;
					delete a[b];
				}
			};
		}
	}
	function Va(a) {
		a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
		if (!a) return !1;
		var b = a._valueTracker;
		if (!b) return !0;
		var c = b.getValue();
		var d = "";
		a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
		a = d;
		return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
		a = a || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof a) return null;
		try {
			return a.activeElement || a.body;
		} catch (b) {
			return a.body;
		}
	}
	function Ya(a, b) {
		var c = b.checked;
		return A({}, b, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != c ? c : a._wrapperState.initialChecked
		});
	}
	function Za(a, b) {
		var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
		c = Sa(null != b.value ? b.value : c);
		a._wrapperState = {
			initialChecked: d,
			initialValue: c,
			controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
		};
	}
	function ab(a, b) {
		b = b.checked;
		null != b && ta(a, "checked", b, !1);
	}
	function bb(a, b) {
		ab(a, b);
		var c = Sa(b.value), d = b.type;
		if (null != c) if ("number" === d) {
			if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
		} else a.value !== "" + c && (a.value = "" + c);
		else if ("submit" === d || "reset" === d) {
			a.removeAttribute("value");
			return;
		}
		b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
		null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function db(a, b, c) {
		if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
			var d = b.type;
			if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
			b = "" + a._wrapperState.initialValue;
			c || b === a.value || (a.value = b);
			a.defaultValue = b;
		}
		c = a.name;
		"" !== c && (a.name = "");
		a.defaultChecked = !!a._wrapperState.initialChecked;
		"" !== c && (a.name = c);
	}
	function cb(a, b, c) {
		if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	var eb = Array.isArray;
	function fb(a, b, c, d) {
		a = a.options;
		if (b) {
			b = {};
			for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
			for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
		} else {
			c = "" + Sa(c);
			b = null;
			for (e = 0; e < a.length; e++) {
				if (a[e].value === c) {
					a[e].selected = !0;
					d && (a[e].defaultSelected = !0);
					return;
				}
				null !== b || a[e].disabled || (b = a[e]);
			}
			null !== b && (b.selected = !0);
		}
	}
	function gb(a, b) {
		if (null != b.dangerouslySetInnerHTML) throw Error(p$1(91));
		return A({}, b, {
			value: void 0,
			defaultValue: void 0,
			children: "" + a._wrapperState.initialValue
		});
	}
	function hb(a, b) {
		var c = b.value;
		if (null == c) {
			c = b.children;
			b = b.defaultValue;
			if (null != c) {
				if (null != b) throw Error(p$1(92));
				if (eb(c)) {
					if (1 < c.length) throw Error(p$1(93));
					c = c[0];
				}
				b = c;
			}
			b ??= "";
			c = b;
		}
		a._wrapperState = { initialValue: Sa(c) };
	}
	function ib(a, b) {
		var c = Sa(b.value), d = Sa(b.defaultValue);
		null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
		null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
		var b = a.textContent;
		b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	function kb(a) {
		switch (a) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function lb(a, b) {
		return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb, nb = function(a) {
		return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
			MSApp.execUnsafeLocalFunction(function() {
				return a(b, c, d, e);
			});
		} : a;
	}(function(a, b) {
		if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
		else {
			mb = mb || document.createElement("div");
			mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
			for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
			for (; b.firstChild;) a.appendChild(b.firstChild);
		}
	});
	function ob(a, b) {
		if (b) {
			var c = a.firstChild;
			if (c && c === a.lastChild && 3 === c.nodeType) {
				c.nodeValue = b;
				return;
			}
		}
		a.textContent = b;
	}
	var pb = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, qb = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(pb).forEach(function(a) {
		qb.forEach(function(b) {
			b = b + a.charAt(0).toUpperCase() + a.substring(1);
			pb[b] = pb[a];
		});
	});
	function rb(a, b, c) {
		return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	}
	function sb(a, b) {
		a = a.style;
		for (var c in b) if (b.hasOwnProperty(c)) {
			var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
			"float" === c && (c = "cssFloat");
			d ? a.setProperty(c, e) : a[c] = e;
		}
	}
	var tb = A({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function ub(a, b) {
		if (b) {
			if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p$1(137, a));
			if (null != b.dangerouslySetInnerHTML) {
				if (null != b.children) throw Error(p$1(60));
				if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p$1(61));
			}
			if (null != b.style && "object" !== typeof b.style) throw Error(p$1(62));
		}
	}
	function vb(a, b) {
		if (-1 === a.indexOf("-")) return "string" === typeof b.is;
		switch (a) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var wb = null;
	function xb(a) {
		a = a.target || a.srcElement || window;
		a.correspondingUseElement && (a = a.correspondingUseElement);
		return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null, zb = null, Ab = null;
	function Bb(a) {
		if (a = Cb(a)) {
			if ("function" !== typeof yb) throw Error(p$1(280));
			var b = a.stateNode;
			b && (b = Db(b), yb(a.stateNode, a.type, b));
		}
	}
	function Eb(a) {
		zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
		if (zb) {
			var a = zb, b = Ab;
			Ab = zb = null;
			Bb(a);
			if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
		}
	}
	function Gb(a, b) {
		return a(b);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b, c) {
		if (Ib) return a(b, c);
		Ib = !0;
		try {
			return Gb(a, b, c);
		} finally {
			if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
		}
	}
	function Kb(a, b) {
		var c = a.stateNode;
		if (null === c) return null;
		var d = Db(c);
		if (null === d) return null;
		c = d[b];
		a: switch (b) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
				a = !d;
				break a;
			default: a = !1;
		}
		if (a) return null;
		if (c && "function" !== typeof c) throw Error(p$1(231, b, typeof c));
		return c;
	}
	var Lb = !1;
	if (ia) try {
		var Mb = {};
		Object.defineProperty(Mb, "passive", { get: function() {
			Lb = !0;
		} });
		window.addEventListener("test", Mb, Mb);
		window.removeEventListener("test", Mb, Mb);
	} catch (a) {
		Lb = !1;
	}
	function Nb(a, b, c, d, e, f$2, g$1, h$1, k$2) {
		var l$3 = Array.prototype.slice.call(arguments, 3);
		try {
			b.apply(c, l$3);
		} catch (m$2) {
			this.onError(m$2);
		}
	}
	var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = { onError: function(a) {
		Ob = !0;
		Pb = a;
	} };
	function Tb(a, b, c, d, e, f$2, g$1, h$1, k$2) {
		Ob = !1;
		Pb = null;
		Nb.apply(Sb, arguments);
	}
	function Ub(a, b, c, d, e, f$2, g$1, h$1, k$2) {
		Tb.apply(this, arguments);
		if (Ob) {
			if (Ob) {
				var l$3 = Pb;
				Ob = !1;
				Pb = null;
			} else throw Error(p$1(198));
			Qb || (Qb = !0, Rb = l$3);
		}
	}
	function Vb(a) {
		var b = a, c = a;
		if (a.alternate) for (; b.return;) b = b.return;
		else {
			a = b;
			do
				b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
			while (a);
		}
		return 3 === b.tag ? c : null;
	}
	function Wb(a) {
		if (13 === a.tag) {
			var b = a.memoizedState;
			null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
			if (null !== b) return b.dehydrated;
		}
		return null;
	}
	function Xb(a) {
		if (Vb(a) !== a) throw Error(p$1(188));
	}
	function Yb(a) {
		var b = a.alternate;
		if (!b) {
			b = Vb(a);
			if (null === b) throw Error(p$1(188));
			return b !== a ? null : a;
		}
		for (var c = a, d = b;;) {
			var e = c.return;
			if (null === e) break;
			var f$2 = e.alternate;
			if (null === f$2) {
				d = e.return;
				if (null !== d) {
					c = d;
					continue;
				}
				break;
			}
			if (e.child === f$2.child) {
				for (f$2 = e.child; f$2;) {
					if (f$2 === c) return Xb(e), a;
					if (f$2 === d) return Xb(e), b;
					f$2 = f$2.sibling;
				}
				throw Error(p$1(188));
			}
			if (c.return !== d.return) c = e, d = f$2;
			else {
				for (var g$1 = !1, h$1 = e.child; h$1;) {
					if (h$1 === c) {
						g$1 = !0;
						c = e;
						d = f$2;
						break;
					}
					if (h$1 === d) {
						g$1 = !0;
						d = e;
						c = f$2;
						break;
					}
					h$1 = h$1.sibling;
				}
				if (!g$1) {
					for (h$1 = f$2.child; h$1;) {
						if (h$1 === c) {
							g$1 = !0;
							c = f$2;
							d = e;
							break;
						}
						if (h$1 === d) {
							g$1 = !0;
							d = f$2;
							c = e;
							break;
						}
						h$1 = h$1.sibling;
					}
					if (!g$1) throw Error(p$1(189));
				}
			}
			if (c.alternate !== d) throw Error(p$1(190));
		}
		if (3 !== c.tag) throw Error(p$1(188));
		return c.stateNode.current === c ? a : b;
	}
	function Zb(a) {
		a = Yb(a);
		return null !== a ? $b(a) : null;
	}
	function $b(a) {
		if (5 === a.tag || 6 === a.tag) return a;
		for (a = a.child; null !== a;) {
			var b = $b(a);
			if (null !== b) return b;
			a = a.sibling;
		}
		return null;
	}
	var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
	function mc(a) {
		if (lc && "function" === typeof lc.onCommitFiberRoot) try {
			lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
		} catch (b) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
	function nc(a) {
		a >>>= 0;
		return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64, sc = 4194304;
	function tc(a) {
		switch (a & -a) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return a & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return a & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return a;
		}
	}
	function uc(a, b) {
		var c = a.pendingLanes;
		if (0 === c) return 0;
		var d = 0, e = a.suspendedLanes, f$2 = a.pingedLanes, g$1 = c & 268435455;
		if (0 !== g$1) {
			var h$1 = g$1 & ~e;
			0 !== h$1 ? d = tc(h$1) : (f$2 &= g$1, 0 !== f$2 && (d = tc(f$2)));
		} else g$1 = c & ~e, 0 !== g$1 ? d = tc(g$1) : 0 !== f$2 && (d = tc(f$2));
		if (0 === d) return 0;
		if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f$2 = b & -b, e >= f$2 || 16 === e && 0 !== (f$2 & 4194240))) return b;
		0 !== (d & 4) && (d |= c & 16);
		b = a.entangledLanes;
		if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
		return d;
	}
	function vc(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 4: return b + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return b + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function wc(a, b) {
		for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f$2 = a.pendingLanes; 0 < f$2;) {
			var g$1 = 31 - oc(f$2), h$1 = 1 << g$1, k$2 = e[g$1];
			if (-1 === k$2) {
				if (0 === (h$1 & c) || 0 !== (h$1 & d)) e[g$1] = vc(h$1, b);
			} else k$2 <= b && (a.expiredLanes |= h$1);
			f$2 &= ~h$1;
		}
	}
	function xc(a) {
		a = a.pendingLanes & -1073741825;
		return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
		var a = rc;
		rc <<= 1;
		0 === (rc & 4194240) && (rc = 64);
		return a;
	}
	function zc(a) {
		for (var b = [], c = 0; 31 > c; c++) b.push(a);
		return b;
	}
	function Ac(a, b, c) {
		a.pendingLanes |= b;
		536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
		a = a.eventTimes;
		b = 31 - oc(b);
		a[b] = c;
	}
	function Bc(a, b) {
		var c = a.pendingLanes & ~b;
		a.pendingLanes = b;
		a.suspendedLanes = 0;
		a.pingedLanes = 0;
		a.expiredLanes &= b;
		a.mutableReadLanes &= b;
		a.entangledLanes &= b;
		b = a.entanglements;
		var d = a.eventTimes;
		for (a = a.expirationTimes; 0 < c;) {
			var e = 31 - oc(c), f$2 = 1 << e;
			b[e] = 0;
			d[e] = -1;
			a[e] = -1;
			c &= ~f$2;
		}
	}
	function Cc(a, b) {
		var c = a.entangledLanes |= b;
		for (a = a.entanglements; c;) {
			var d = 31 - oc(c), e = 1 << d;
			e & b | a[d] & b && (a[d] |= b);
			c &= ~e;
		}
	}
	var C = 0;
	function Dc(a) {
		a &= -a;
		return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = new Map(), Pc = new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b) {
		switch (a) {
			case "focusin":
			case "focusout":
				Lc = null;
				break;
			case "dragenter":
			case "dragleave":
				Mc = null;
				break;
			case "mouseover":
			case "mouseout":
				Nc = null;
				break;
			case "pointerover":
			case "pointerout":
				Oc.delete(b.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Pc.delete(b.pointerId);
		}
	}
	function Tc(a, b, c, d, e, f$2) {
		if (null === a || a.nativeEvent !== f$2) return a = {
			blockedOn: b,
			domEventName: c,
			eventSystemFlags: d,
			nativeEvent: f$2,
			targetContainers: [e]
		}, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
		a.eventSystemFlags |= d;
		b = a.targetContainers;
		null !== e && -1 === b.indexOf(e) && b.push(e);
		return a;
	}
	function Uc(a, b, c, d, e) {
		switch (b) {
			case "focusin": return Lc = Tc(Lc, a, b, c, d, e), !0;
			case "dragenter": return Mc = Tc(Mc, a, b, c, d, e), !0;
			case "mouseover": return Nc = Tc(Nc, a, b, c, d, e), !0;
			case "pointerover":
				var f$2 = e.pointerId;
				Oc.set(f$2, Tc(Oc.get(f$2) || null, a, b, c, d, e));
				return !0;
			case "gotpointercapture": return f$2 = e.pointerId, Pc.set(f$2, Tc(Pc.get(f$2) || null, a, b, c, d, e)), !0;
		}
		return !1;
	}
	function Vc(a) {
		var b = Wc(a.target);
		if (null !== b) {
			var c = Vb(b);
			if (null !== c) {
				if (b = c.tag, 13 === b) {
					if (b = Wb(c), null !== b) {
						a.blockedOn = b;
						Ic(a.priority, function() {
							Gc(c);
						});
						return;
					}
				} else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
					a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
					return;
				}
			}
		}
		a.blockedOn = null;
	}
	function Xc(a) {
		if (null !== a.blockedOn) return !1;
		for (var b = a.targetContainers; 0 < b.length;) {
			var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
			if (null === c) {
				c = a.nativeEvent;
				var d = new c.constructor(c.type, c);
				wb = d;
				c.target.dispatchEvent(d);
				wb = null;
			} else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
			b.shift();
		}
		return !0;
	}
	function Zc(a, b, c) {
		Xc(a) && c.delete(b);
	}
	function $c() {
		Jc = !1;
		null !== Lc && Xc(Lc) && (Lc = null);
		null !== Mc && Xc(Mc) && (Mc = null);
		null !== Nc && Xc(Nc) && (Nc = null);
		Oc.forEach(Zc);
		Pc.forEach(Zc);
	}
	function ad(a, b) {
		a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
		function b(b$1) {
			return ad(b$1, a);
		}
		if (0 < Kc.length) {
			ad(Kc[0], a);
			for (var c = 1; c < Kc.length; c++) {
				var d = Kc[c];
				d.blockedOn === a && (d.blockedOn = null);
			}
		}
		null !== Lc && ad(Lc, a);
		null !== Mc && ad(Mc, a);
		null !== Nc && ad(Nc, a);
		Oc.forEach(b);
		Pc.forEach(b);
		for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
		for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig, dd = !0;
	function ed(a, b, c, d) {
		var e = C, f$2 = cd.transition;
		cd.transition = null;
		try {
			C = 1, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f$2;
		}
	}
	function gd(a, b, c, d) {
		var e = C, f$2 = cd.transition;
		cd.transition = null;
		try {
			C = 4, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f$2;
		}
	}
	function fd(a, b, c, d) {
		if (dd) {
			var e = Yc(a, b, c, d);
			if (null === e) hd(a, b, d, id, c), Sc(a, d);
			else if (Uc(e, a, b, c, d)) d.stopPropagation();
			else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
				for (; null !== e;) {
					var f$2 = Cb(e);
					null !== f$2 && Ec(f$2);
					f$2 = Yc(a, b, c, d);
					null === f$2 && hd(a, b, d, id, c);
					if (f$2 === e) break;
					e = f$2;
				}
				null !== e && d.stopPropagation();
			} else hd(a, b, d, null, c);
		}
	}
	var id = null;
	function Yc(a, b, c, d) {
		id = null;
		a = xb(d);
		a = Wc(a);
		if (null !== a) if (b = Vb(a), null === b) a = null;
		else if (c = b.tag, 13 === c) {
			a = Wb(b);
			if (null !== a) return a;
			a = null;
		} else if (3 === c) {
			if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
			a = null;
		} else b !== a && (a = null);
		id = a;
		return null;
	}
	function jd(a) {
		switch (a) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (ec()) {
				case fc: return 1;
				case gc: return 4;
				case hc:
				case ic: return 16;
				case jc: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var kd = null, ld = null, md = null;
	function nd() {
		if (md) return md;
		var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f$2 = e.length;
		for (a = 0; a < c && b[a] === e[a]; a++);
		var g$1 = c - a;
		for (d = 1; d <= g$1 && b[c - d] === e[f$2 - d]; d++);
		return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
		var b = a.keyCode;
		"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
		10 === a && (a = 13);
		return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
		return !0;
	}
	function qd() {
		return !1;
	}
	function rd(a) {
		function b(b$1, d, e, f$2, g$1) {
			this._reactName = b$1;
			this._targetInst = e;
			this.type = d;
			this.nativeEvent = f$2;
			this.target = g$1;
			this.currentTarget = null;
			for (var c in a) a.hasOwnProperty(c) && (b$1 = a[c], this[c] = b$1 ? b$1(f$2) : f$2[c]);
			this.isDefaultPrevented = (null != f$2.defaultPrevented ? f$2.defaultPrevented : !1 === f$2.returnValue) ? pd : qd;
			this.isPropagationStopped = qd;
			return this;
		}
		A(b.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var a$1 = this.nativeEvent;
				a$1 && (a$1.preventDefault ? a$1.preventDefault() : "unknown" !== typeof a$1.returnValue && (a$1.returnValue = !1), this.isDefaultPrevented = pd);
			},
			stopPropagation: function() {
				var a$1 = this.nativeEvent;
				a$1 && (a$1.stopPropagation ? a$1.stopPropagation() : "unknown" !== typeof a$1.cancelBubble && (a$1.cancelBubble = !0), this.isPropagationStopped = pd);
			},
			persist: function() {},
			isPersistent: pd
		});
		return b;
	}
	var sd = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(a) {
			return a.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, td = rd(sd), ud = A({}, sd, {
		view: 0,
		detail: 0
	}), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: zd,
		button: 0,
		buttons: 0,
		relatedTarget: function(a) {
			return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		},
		movementX: function(a) {
			if ("movementX" in a) return a.movementX;
			a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
			return wd;
		},
		movementY: function(a) {
			return "movementY" in a ? a.movementY : xd;
		}
	}), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
		return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Nd = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Od = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Pd(a) {
		var b = this.nativeEvent;
		return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
		return Pd;
	}
	var Qd = A({}, ud, {
		key: function(a) {
			if (a.key) {
				var b = Md[a.key] || a.key;
				if ("Unidentified" !== b) return b;
			}
			return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: zd,
		charCode: function(a) {
			return "keypress" === a.type ? od(a) : 0;
		},
		keyCode: function(a) {
			return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		},
		which: function(a) {
			return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		}
	}), Rd = rd(Qd), Sd = A({}, Ad, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}), Td = rd(Sd), Ud = A({}, ud, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: zd
	}), Vd = rd(Ud), Wd = A({}, sd, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}), Xd = rd(Wd), Yd = A({}, Ad, {
		deltaX: function(a) {
			return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		},
		deltaY: function(a) {
			return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	}), Zd = rd(Yd), $d = [
		9,
		13,
		27,
		32
	], ae = ia && "CompositionEvent" in window, be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
	function ge(a, b) {
		switch (a) {
			case "keyup": return -1 !== $d.indexOf(b.keyCode);
			case "keydown": return 229 !== b.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function he(a) {
		a = a.detail;
		return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b) {
		switch (a) {
			case "compositionend": return he(b);
			case "keypress":
				if (32 !== b.which) return null;
				fe = !0;
				return ee;
			case "textInput": return a = b.data, a === ee && fe ? null : a;
			default: return null;
		}
	}
	function ke(a, b) {
		if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
		switch (a) {
			case "paste": return null;
			case "keypress":
				if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
					if (b.char && 1 < b.char.length) return b.char;
					if (b.which) return String.fromCharCode(b.which);
				}
				return null;
			case "compositionend": return de && "ko" !== b.locale ? null : b.data;
			default: return null;
		}
	}
	var le = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function me(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne(a, b, c, d) {
		Eb(d);
		b = oe(b, "onChange");
		0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
			event: c,
			listeners: b
		}));
	}
	var pe = null, qe = null;
	function re(a) {
		se(a, 0);
	}
	function te(a) {
		var b = ue(a);
		if (Wa(b)) return a;
	}
	function ve(a, b) {
		if ("change" === a) return b;
	}
	var we = !1;
	if (ia) {
		var xe;
		if (ia) {
			var ye = "oninput" in document;
			if (!ye) {
				var ze = document.createElement("div");
				ze.setAttribute("oninput", "return;");
				ye = "function" === typeof ze.oninput;
			}
			xe = ye;
		} else xe = !1;
		we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
		pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
		if ("value" === a.propertyName && te(qe)) {
			var b = [];
			ne(b, qe, a, xb(a));
			Jb(re, b);
		}
	}
	function Ce(a, b, c) {
		"focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
		if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b) {
		if ("click" === a) return te(b);
	}
	function Fe(a, b) {
		if ("input" === a || "change" === a) return te(b);
	}
	function Ge(a, b) {
		return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b) {
		if (He(a, b)) return !0;
		if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
		var c = Object.keys(a), d = Object.keys(b);
		if (c.length !== d.length) return !1;
		for (d = 0; d < c.length; d++) {
			var e = c[d];
			if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
		}
		return !0;
	}
	function Je(a) {
		for (; a && a.firstChild;) a = a.firstChild;
		return a;
	}
	function Ke(a, b) {
		var c = Je(a);
		a = 0;
		for (var d; c;) {
			if (3 === c.nodeType) {
				d = a + c.textContent.length;
				if (a <= b && d >= b) return {
					node: c,
					offset: b - a
				};
				a = d;
			}
			a: {
				for (; c;) {
					if (c.nextSibling) {
						c = c.nextSibling;
						break a;
					}
					c = c.parentNode;
				}
				c = void 0;
			}
			c = Je(c);
		}
	}
	function Le(a, b) {
		return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Me() {
		for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
			try {
				var c = "string" === typeof b.contentWindow.location.href;
			} catch (d) {
				c = !1;
			}
			if (c) a = b.contentWindow;
			else break;
			b = Xa(a.document);
		}
		return b;
	}
	function Ne(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	function Oe(a) {
		var b = Me(), c = a.focusedElem, d = a.selectionRange;
		if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
			if (null !== d && Ne(c)) {
				if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
				else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
					a = a.getSelection();
					var e = c.textContent.length, f$2 = Math.min(d.start, e);
					d = void 0 === d.end ? f$2 : Math.min(d.end, e);
					!a.extend && f$2 > d && (e = d, d = f$2, f$2 = e);
					e = Ke(c, f$2);
					var g$1 = Ke(c, d);
					e && g$1 && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g$1.node || a.focusOffset !== g$1.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f$2 > d ? (a.addRange(b), a.extend(g$1.node, g$1.offset)) : (b.setEnd(g$1.node, g$1.offset), a.addRange(b)));
				}
			}
			b = [];
			for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
				element: a,
				left: a.scrollLeft,
				top: a.scrollTop
			});
			"function" === typeof c.focus && c.focus();
			for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		}
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
	function Ue(a, b, c) {
		var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
		Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
			start: d.selectionStart,
			end: d.selectionEnd
		} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
			anchorNode: d.anchorNode,
			anchorOffset: d.anchorOffset,
			focusNode: d.focusNode,
			focusOffset: d.focusOffset
		}), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
			event: b,
			listeners: d
		}), b.target = Qe)));
	}
	function Ve(a, b) {
		var c = {};
		c[a.toLowerCase()] = b.toLowerCase();
		c["Webkit" + a] = "webkit" + b;
		c["Moz" + a] = "moz" + b;
		return c;
	}
	var We = {
		animationend: Ve("Animation", "AnimationEnd"),
		animationiteration: Ve("Animation", "AnimationIteration"),
		animationstart: Ve("Animation", "AnimationStart"),
		transitionend: Ve("Transition", "TransitionEnd")
	}, Xe = {}, Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
		if (Xe[a]) return Xe[a];
		if (!We[a]) return a;
		var b = We[a], c;
		for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
		return a;
	}
	var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b) {
		df.set(a, b);
		fa(b, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
		var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
		ff(jf, "on" + kf);
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b, c) {
		var d = a.type || "unknown-event";
		a.currentTarget = c;
		Ub(d, b, void 0, a);
		a.currentTarget = null;
	}
	function se(a, b) {
		b = 0 !== (b & 4);
		for (var c = 0; c < a.length; c++) {
			var d = a[c], e = d.event;
			d = d.listeners;
			a: {
				var f$2 = void 0;
				if (b) for (var g$1 = d.length - 1; 0 <= g$1; g$1--) {
					var h$1 = d[g$1], k$2 = h$1.instance, l$3 = h$1.currentTarget;
					h$1 = h$1.listener;
					if (k$2 !== f$2 && e.isPropagationStopped()) break a;
					nf(e, h$1, l$3);
					f$2 = k$2;
				}
				else for (g$1 = 0; g$1 < d.length; g$1++) {
					h$1 = d[g$1];
					k$2 = h$1.instance;
					l$3 = h$1.currentTarget;
					h$1 = h$1.listener;
					if (k$2 !== f$2 && e.isPropagationStopped()) break a;
					nf(e, h$1, l$3);
					f$2 = k$2;
				}
			}
		}
		if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D(a, b) {
		var c = b[of];
		void 0 === c && (c = b[of] = new Set());
		var d = a + "__bubble";
		c.has(d) || (pf(b, a, 2, !1), c.add(d));
	}
	function qf(a, b, c) {
		var d = 0;
		b && (d |= 4);
		pf(c, a, d, b);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
		if (!a[rf]) {
			a[rf] = !0;
			da.forEach(function(b$1) {
				"selectionchange" !== b$1 && (mf.has(b$1) || qf(b$1, !1, a), qf(b$1, !0, a));
			});
			var b = 9 === a.nodeType ? a : a.ownerDocument;
			null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
		}
	}
	function pf(a, b, c, d) {
		switch (jd(b)) {
			case 1:
				var e = ed;
				break;
			case 4:
				e = gd;
				break;
			default: e = fd;
		}
		c = e.bind(null, b, c, a);
		e = void 0;
		!Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
		d ? void 0 !== e ? a.addEventListener(b, c, {
			capture: !0,
			passive: e
		}) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, !1);
	}
	function hd(a, b, c, d, e) {
		var f$2 = d;
		if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
			if (null === d) return;
			var g$1 = d.tag;
			if (3 === g$1 || 4 === g$1) {
				var h$1 = d.stateNode.containerInfo;
				if (h$1 === e || 8 === h$1.nodeType && h$1.parentNode === e) break;
				if (4 === g$1) for (g$1 = d.return; null !== g$1;) {
					var k$2 = g$1.tag;
					if (3 === k$2 || 4 === k$2) {
						if (k$2 = g$1.stateNode.containerInfo, k$2 === e || 8 === k$2.nodeType && k$2.parentNode === e) return;
					}
					g$1 = g$1.return;
				}
				for (; null !== h$1;) {
					g$1 = Wc(h$1);
					if (null === g$1) return;
					k$2 = g$1.tag;
					if (5 === k$2 || 6 === k$2) {
						d = f$2 = g$1;
						continue a;
					}
					h$1 = h$1.parentNode;
				}
			}
			d = d.return;
		}
		Jb(function() {
			var d$1 = f$2, e$1 = xb(c), g$2 = [];
			a: {
				var h$2 = df.get(a);
				if (void 0 !== h$2) {
					var k$3 = td, n$2 = a;
					switch (a) {
						case "keypress": if (0 === od(c)) break a;
						case "keydown":
						case "keyup":
							k$3 = Rd;
							break;
						case "focusin":
							n$2 = "focus";
							k$3 = Fd;
							break;
						case "focusout":
							n$2 = "blur";
							k$3 = Fd;
							break;
						case "beforeblur":
						case "afterblur":
							k$3 = Fd;
							break;
						case "click": if (2 === c.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							k$3 = Bd;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							k$3 = Dd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							k$3 = Vd;
							break;
						case $e:
						case af:
						case bf:
							k$3 = Hd;
							break;
						case cf:
							k$3 = Xd;
							break;
						case "scroll":
							k$3 = vd;
							break;
						case "wheel":
							k$3 = Zd;
							break;
						case "copy":
						case "cut":
						case "paste":
							k$3 = Jd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": k$3 = Td;
					}
					var t$3 = 0 !== (b & 4), J$2 = !t$3 && "scroll" === a, x$1 = t$3 ? null !== h$2 ? h$2 + "Capture" : null : h$2;
					t$3 = [];
					for (var w$1 = d$1, u$2; null !== w$1;) {
						u$2 = w$1;
						var F$2 = u$2.stateNode;
						5 === u$2.tag && null !== F$2 && (u$2 = F$2, null !== x$1 && (F$2 = Kb(w$1, x$1), null != F$2 && t$3.push(tf(w$1, F$2, u$2))));
						if (J$2) break;
						w$1 = w$1.return;
					}
					0 < t$3.length && (h$2 = new k$3(h$2, n$2, null, c, e$1), g$2.push({
						event: h$2,
						listeners: t$3
					}));
				}
			}
			if (0 === (b & 7)) {
				a: {
					h$2 = "mouseover" === a || "pointerover" === a;
					k$3 = "mouseout" === a || "pointerout" === a;
					if (h$2 && c !== wb && (n$2 = c.relatedTarget || c.fromElement) && (Wc(n$2) || n$2[uf])) break a;
					if (k$3 || h$2) {
						h$2 = e$1.window === e$1 ? e$1 : (h$2 = e$1.ownerDocument) ? h$2.defaultView || h$2.parentWindow : window;
						if (k$3) {
							if (n$2 = c.relatedTarget || c.toElement, k$3 = d$1, n$2 = n$2 ? Wc(n$2) : null, null !== n$2 && (J$2 = Vb(n$2), n$2 !== J$2 || 5 !== n$2.tag && 6 !== n$2.tag)) n$2 = null;
						} else k$3 = null, n$2 = d$1;
						if (k$3 !== n$2) {
							t$3 = Bd;
							F$2 = "onMouseLeave";
							x$1 = "onMouseEnter";
							w$1 = "mouse";
							if ("pointerout" === a || "pointerover" === a) t$3 = Td, F$2 = "onPointerLeave", x$1 = "onPointerEnter", w$1 = "pointer";
							J$2 = null == k$3 ? h$2 : ue(k$3);
							u$2 = null == n$2 ? h$2 : ue(n$2);
							h$2 = new t$3(F$2, w$1 + "leave", k$3, c, e$1);
							h$2.target = J$2;
							h$2.relatedTarget = u$2;
							F$2 = null;
							Wc(e$1) === d$1 && (t$3 = new t$3(x$1, w$1 + "enter", n$2, c, e$1), t$3.target = u$2, t$3.relatedTarget = J$2, F$2 = t$3);
							J$2 = F$2;
							if (k$3 && n$2) b: {
								t$3 = k$3;
								x$1 = n$2;
								w$1 = 0;
								for (u$2 = t$3; u$2; u$2 = vf(u$2)) w$1++;
								u$2 = 0;
								for (F$2 = x$1; F$2; F$2 = vf(F$2)) u$2++;
								for (; 0 < w$1 - u$2;) t$3 = vf(t$3), w$1--;
								for (; 0 < u$2 - w$1;) x$1 = vf(x$1), u$2--;
								for (; w$1--;) {
									if (t$3 === x$1 || null !== x$1 && t$3 === x$1.alternate) break b;
									t$3 = vf(t$3);
									x$1 = vf(x$1);
								}
								t$3 = null;
							}
							else t$3 = null;
							null !== k$3 && wf(g$2, h$2, k$3, t$3, !1);
							null !== n$2 && null !== J$2 && wf(g$2, J$2, n$2, t$3, !0);
						}
					}
				}
				a: {
					h$2 = d$1 ? ue(d$1) : window;
					k$3 = h$2.nodeName && h$2.nodeName.toLowerCase();
					if ("select" === k$3 || "input" === k$3 && "file" === h$2.type) var na = ve;
					else if (me(h$2)) if (we) na = Fe;
					else {
						na = De;
						var xa = Ce;
					}
					else (k$3 = h$2.nodeName) && "input" === k$3.toLowerCase() && ("checkbox" === h$2.type || "radio" === h$2.type) && (na = Ee);
					if (na && (na = na(a, d$1))) {
						ne(g$2, na, c, e$1);
						break a;
					}
					xa && xa(a, h$2, d$1);
					"focusout" === a && (xa = h$2._wrapperState) && xa.controlled && "number" === h$2.type && cb(h$2, "number", h$2.value);
				}
				xa = d$1 ? ue(d$1) : window;
				switch (a) {
					case "focusin":
						if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d$1, Se = null;
						break;
					case "focusout":
						Se = Re = Qe = null;
						break;
					case "mousedown":
						Te = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Te = !1;
						Ue(g$2, c, e$1);
						break;
					case "selectionchange": if (Pe) break;
					case "keydown":
					case "keyup": Ue(g$2, c, e$1);
				}
				var $a;
				if (ae) b: {
					switch (a) {
						case "compositionstart":
							var ba = "onCompositionStart";
							break b;
						case "compositionend":
							ba = "onCompositionEnd";
							break b;
						case "compositionupdate":
							ba = "onCompositionUpdate";
							break b;
					}
					ba = void 0;
				}
				else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
				ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e$1, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d$1, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e$1), g$2.push({
					event: ba,
					listeners: xa
				}), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
				if ($a = ce ? je(a, c) : ke(a, c)) d$1 = oe(d$1, "onBeforeInput"), 0 < d$1.length && (e$1 = new Ld("onBeforeInput", "beforeinput", null, c, e$1), g$2.push({
					event: e$1,
					listeners: d$1
				}), e$1.data = $a);
			}
			se(g$2, b);
		});
	}
	function tf(a, b, c) {
		return {
			instance: a,
			listener: b,
			currentTarget: c
		};
	}
	function oe(a, b) {
		for (var c = b + "Capture", d = []; null !== a;) {
			var e = a, f$2 = e.stateNode;
			5 === e.tag && null !== f$2 && (e = f$2, f$2 = Kb(a, c), null != f$2 && d.unshift(tf(a, f$2, e)), f$2 = Kb(a, b), null != f$2 && d.push(tf(a, f$2, e)));
			a = a.return;
		}
		return d;
	}
	function vf(a) {
		if (null === a) return null;
		do
			a = a.return;
		while (a && 5 !== a.tag);
		return a ? a : null;
	}
	function wf(a, b, c, d, e) {
		for (var f$2 = b._reactName, g$1 = []; null !== c && c !== d;) {
			var h$1 = c, k$2 = h$1.alternate, l$3 = h$1.stateNode;
			if (null !== k$2 && k$2 === d) break;
			5 === h$1.tag && null !== l$3 && (h$1 = l$3, e ? (k$2 = Kb(c, f$2), null != k$2 && g$1.unshift(tf(c, k$2, h$1))) : e || (k$2 = Kb(c, f$2), null != k$2 && g$1.push(tf(c, k$2, h$1))));
			c = c.return;
		}
		0 !== g$1.length && a.push({
			event: b,
			listeners: g$1
		});
	}
	var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
	function zf(a) {
		return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b, c) {
		b = zf(b);
		if (zf(a) !== b && c) throw Error(p$1(425));
	}
	function Bf() {}
	var Cf = null, Df = null;
	function Ef(a, b) {
		return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
		return Hf.resolve(null).then(a).catch(If);
	} : Ff;
	function If(a) {
		setTimeout(function() {
			throw a;
		});
	}
	function Kf(a, b) {
		var c = b, d = 0;
		do {
			var e = c.nextSibling;
			a.removeChild(c);
			if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
				if (0 === d) {
					a.removeChild(e);
					bd(b);
					return;
				}
				d--;
			} else "$" !== c && "$?" !== c && "$!" !== c || d++;
			c = e;
		} while (c);
		bd(b);
	}
	function Lf(a) {
		for (; null != a; a = a.nextSibling) {
			var b = a.nodeType;
			if (1 === b || 3 === b) break;
			if (8 === b) {
				b = a.data;
				if ("$" === b || "$!" === b || "$?" === b) break;
				if ("/$" === b) return null;
			}
		}
		return a;
	}
	function Mf(a) {
		a = a.previousSibling;
		for (var b = 0; a;) {
			if (8 === a.nodeType) {
				var c = a.data;
				if ("$" === c || "$!" === c || "$?" === c) {
					if (0 === b) return a;
					b--;
				} else "/$" === c && b++;
			}
			a = a.previousSibling;
		}
		return null;
	}
	var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
	function Wc(a) {
		var b = a[Of];
		if (b) return b;
		for (var c = a.parentNode; c;) {
			if (b = c[uf] || c[Of]) {
				c = b.alternate;
				if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
					if (c = a[Of]) return c;
					a = Mf(a);
				}
				return b;
			}
			a = c;
			c = a.parentNode;
		}
		return null;
	}
	function Cb(a) {
		a = a[Of] || a[uf];
		return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
		if (5 === a.tag || 6 === a.tag) return a.stateNode;
		throw Error(p$1(33));
	}
	function Db(a) {
		return a[Pf] || null;
	}
	var Sf = [], Tf = -1;
	function Uf(a) {
		return { current: a };
	}
	function E(a) {
		0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G(a, b) {
		Tf++;
		Sf[Tf] = a.current;
		a.current = b;
	}
	var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
	function Yf(a, b) {
		var c = a.type.contextTypes;
		if (!c) return Vf;
		var d = a.stateNode;
		if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
		var e = {}, f$2;
		for (f$2 in c) e[f$2] = b[f$2];
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
		return e;
	}
	function Zf(a) {
		a = a.childContextTypes;
		return null !== a && void 0 !== a;
	}
	function $f() {
		E(Wf);
		E(H);
	}
	function ag(a, b, c) {
		if (H.current !== Vf) throw Error(p$1(168));
		G(H, b);
		G(Wf, c);
	}
	function bg(a, b, c) {
		var d = a.stateNode;
		b = b.childContextTypes;
		if ("function" !== typeof d.getChildContext) return c;
		d = d.getChildContext();
		for (var e in d) if (!(e in b)) throw Error(p$1(108, Ra(a) || "Unknown", e));
		return A({}, c, d);
	}
	function cg(a) {
		a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		Xf = H.current;
		G(H, a);
		G(Wf, Wf.current);
		return !0;
	}
	function dg(a, b, c) {
		var d = a.stateNode;
		if (!d) throw Error(p$1(169));
		c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		G(Wf, c);
	}
	var eg = null, fg = !1, gg = !1;
	function hg(a) {
		null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
		fg = !0;
		hg(a);
	}
	function jg() {
		if (!gg && null !== eg) {
			gg = !0;
			var a = 0, b = C;
			try {
				var c = eg;
				for (C = 1; a < c.length; a++) {
					var d = c[a];
					do
						d = d(!0);
					while (null !== d);
				}
				eg = null;
				fg = !1;
			} catch (e) {
				throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
			} finally {
				C = b, gg = !1;
			}
		}
		return null;
	}
	var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
	function tg(a, b) {
		kg[lg++] = ng;
		kg[lg++] = mg;
		mg = a;
		ng = b;
	}
	function ug(a, b, c) {
		og[pg++] = rg;
		og[pg++] = sg;
		og[pg++] = qg;
		qg = a;
		var d = rg;
		a = sg;
		var e = 32 - oc(d) - 1;
		d &= ~(1 << e);
		c += 1;
		var f$2 = 32 - oc(b) + e;
		if (30 < f$2) {
			var g$1 = e - e % 5;
			f$2 = (d & (1 << g$1) - 1).toString(32);
			d >>= g$1;
			e -= g$1;
			rg = 1 << 32 - oc(b) + e | c << e | d;
			sg = f$2 + a;
		} else rg = 1 << f$2 | c << e | d, sg = a;
	}
	function vg(a) {
		null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
		for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null, yg = null, I = !1, zg = null;
	function Ag(a, b) {
		var c = Bg(5, null, null, 0);
		c.elementType = "DELETED";
		c.stateNode = b;
		c.return = a;
		b = a.deletions;
		null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	}
	function Cg(a, b) {
		switch (a.tag) {
			case 5:
				var c = a.type;
				b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
				return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
			case 6: return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
			case 13: return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
				id: rg,
				overflow: sg
			} : null, a.memoizedState = {
				dehydrated: b,
				treeContext: c,
				retryLane: 1073741824
			}, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
			default: return !1;
		}
	}
	function Dg(a) {
		return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
		if (I) {
			var b = yg;
			if (b) {
				var c = b;
				if (!Cg(a, b)) {
					if (Dg(a)) throw Error(p$1(418));
					b = Lf(c.nextSibling);
					var d = xg;
					b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
				}
			} else {
				if (Dg(a)) throw Error(p$1(418));
				a.flags = a.flags & -4097 | 2;
				I = !1;
				xg = a;
			}
		}
	}
	function Fg(a) {
		for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
		xg = a;
	}
	function Gg(a) {
		if (a !== xg) return !1;
		if (!I) return Fg(a), I = !0, !1;
		var b;
		(b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
		if (b && (b = yg)) {
			if (Dg(a)) throw Hg(), Error(p$1(418));
			for (; b;) Ag(a, b), b = Lf(b.nextSibling);
		}
		Fg(a);
		if (13 === a.tag) {
			a = a.memoizedState;
			a = null !== a ? a.dehydrated : null;
			if (!a) throw Error(p$1(317));
			a: {
				a = a.nextSibling;
				for (b = 0; a;) {
					if (8 === a.nodeType) {
						var c = a.data;
						if ("/$" === c) {
							if (0 === b) {
								yg = Lf(a.nextSibling);
								break a;
							}
							b--;
						} else "$" !== c && "$!" !== c && "$?" !== c || b++;
					}
					a = a.nextSibling;
				}
				yg = null;
			}
		} else yg = xg ? Lf(a.stateNode.nextSibling) : null;
		return !0;
	}
	function Hg() {
		for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
		yg = xg = null;
		I = !1;
	}
	function Jg(a) {
		null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b) {
		if (a && a.defaultProps) {
			b = A({}, b);
			a = a.defaultProps;
			for (var c in a) void 0 === b[c] && (b[c] = a[c]);
			return b;
		}
		return b;
	}
	var Mg = Uf(null), Ng = null, Og = null, Pg = null;
	function Qg() {
		Pg = Og = Ng = null;
	}
	function Rg(a) {
		var b = Mg.current;
		E(Mg);
		a._currentValue = b;
	}
	function Sg(a, b, c) {
		for (; null !== a;) {
			var d = a.alternate;
			(a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
			if (a === c) break;
			a = a.return;
		}
	}
	function Tg(a, b) {
		Ng = a;
		Pg = Og = null;
		a = a.dependencies;
		null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
	}
	function Vg(a) {
		var b = a._currentValue;
		if (Pg !== a) if (a = {
			context: a,
			memoizedValue: b,
			next: null
		}, null === Og) {
			if (null === Ng) throw Error(p$1(308));
			Og = a;
			Ng.dependencies = {
				lanes: 0,
				firstContext: a
			};
		} else Og = Og.next = a;
		return b;
	}
	var Wg = null;
	function Xg(a) {
		null === Wg ? Wg = [a] : Wg.push(a);
	}
	function Yg(a, b, c, d) {
		var e = b.interleaved;
		null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
		b.interleaved = c;
		return Zg(a, d);
	}
	function Zg(a, b) {
		a.lanes |= b;
		var c = a.alternate;
		null !== c && (c.lanes |= b);
		c = a;
		for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
		return 3 === c.tag ? c.stateNode : null;
	}
	var $g = !1;
	function ah(a) {
		a.updateQueue = {
			baseState: a.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function bh(a, b) {
		a = a.updateQueue;
		b.updateQueue === a && (b.updateQueue = {
			baseState: a.baseState,
			firstBaseUpdate: a.firstBaseUpdate,
			lastBaseUpdate: a.lastBaseUpdate,
			shared: a.shared,
			effects: a.effects
		});
	}
	function ch(a, b) {
		return {
			eventTime: a,
			lane: b,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function dh(a, b, c) {
		var d = a.updateQueue;
		if (null === d) return null;
		d = d.shared;
		if (0 !== (K & 2)) {
			var e = d.pending;
			null === e ? b.next = b : (b.next = e.next, e.next = b);
			d.pending = b;
			return Zg(a, c);
		}
		e = d.interleaved;
		null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
		d.interleaved = b;
		return Zg(a, c);
	}
	function eh(a, b, c) {
		b = b.updateQueue;
		if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	function fh(a, b) {
		var c = a.updateQueue, d = a.alternate;
		if (null !== d && (d = d.updateQueue, c === d)) {
			var e = null, f$2 = null;
			c = c.firstBaseUpdate;
			if (null !== c) {
				do {
					var g$1 = {
						eventTime: c.eventTime,
						lane: c.lane,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null
					};
					null === f$2 ? e = f$2 = g$1 : f$2 = f$2.next = g$1;
					c = c.next;
				} while (null !== c);
				null === f$2 ? e = f$2 = b : f$2 = f$2.next = b;
			} else e = f$2 = b;
			c = {
				baseState: d.baseState,
				firstBaseUpdate: e,
				lastBaseUpdate: f$2,
				shared: d.shared,
				effects: d.effects
			};
			a.updateQueue = c;
			return;
		}
		a = c.lastBaseUpdate;
		null === a ? c.firstBaseUpdate = b : a.next = b;
		c.lastBaseUpdate = b;
	}
	function gh(a, b, c, d) {
		var e = a.updateQueue;
		$g = !1;
		var f$2 = e.firstBaseUpdate, g$1 = e.lastBaseUpdate, h$1 = e.shared.pending;
		if (null !== h$1) {
			e.shared.pending = null;
			var k$2 = h$1, l$3 = k$2.next;
			k$2.next = null;
			null === g$1 ? f$2 = l$3 : g$1.next = l$3;
			g$1 = k$2;
			var m$2 = a.alternate;
			null !== m$2 && (m$2 = m$2.updateQueue, h$1 = m$2.lastBaseUpdate, h$1 !== g$1 && (null === h$1 ? m$2.firstBaseUpdate = l$3 : h$1.next = l$3, m$2.lastBaseUpdate = k$2));
		}
		if (null !== f$2) {
			var q$3 = e.baseState;
			g$1 = 0;
			m$2 = l$3 = k$2 = null;
			h$1 = f$2;
			do {
				var r$2 = h$1.lane, y$2 = h$1.eventTime;
				if ((d & r$2) === r$2) {
					null !== m$2 && (m$2 = m$2.next = {
						eventTime: y$2,
						lane: 0,
						tag: h$1.tag,
						payload: h$1.payload,
						callback: h$1.callback,
						next: null
					});
					a: {
						var n$2 = a, t$3 = h$1;
						r$2 = b;
						y$2 = c;
						switch (t$3.tag) {
							case 1:
								n$2 = t$3.payload;
								if ("function" === typeof n$2) {
									q$3 = n$2.call(y$2, q$3, r$2);
									break a;
								}
								q$3 = n$2;
								break a;
							case 3: n$2.flags = n$2.flags & -65537 | 128;
							case 0:
								n$2 = t$3.payload;
								r$2 = "function" === typeof n$2 ? n$2.call(y$2, q$3, r$2) : n$2;
								if (null === r$2 || void 0 === r$2) break a;
								q$3 = A({}, q$3, r$2);
								break a;
							case 2: $g = !0;
						}
					}
					null !== h$1.callback && 0 !== h$1.lane && (a.flags |= 64, r$2 = e.effects, null === r$2 ? e.effects = [h$1] : r$2.push(h$1));
				} else y$2 = {
					eventTime: y$2,
					lane: r$2,
					tag: h$1.tag,
					payload: h$1.payload,
					callback: h$1.callback,
					next: null
				}, null === m$2 ? (l$3 = m$2 = y$2, k$2 = q$3) : m$2 = m$2.next = y$2, g$1 |= r$2;
				h$1 = h$1.next;
				if (null === h$1) if (h$1 = e.shared.pending, null === h$1) break;
				else r$2 = h$1, h$1 = r$2.next, r$2.next = null, e.lastBaseUpdate = r$2, e.shared.pending = null;
			} while (1);
			null === m$2 && (k$2 = q$3);
			e.baseState = k$2;
			e.firstBaseUpdate = l$3;
			e.lastBaseUpdate = m$2;
			b = e.shared.interleaved;
			if (null !== b) {
				e = b;
				do
					g$1 |= e.lane, e = e.next;
				while (e !== b);
			} else null === f$2 && (e.shared.lanes = 0);
			hh |= g$1;
			a.lanes = g$1;
			a.memoizedState = q$3;
		}
	}
	function ih(a, b, c) {
		a = b.effects;
		b.effects = null;
		if (null !== a) for (b = 0; b < a.length; b++) {
			var d = a[b], e = d.callback;
			if (null !== e) {
				d.callback = null;
				d = c;
				if ("function" !== typeof e) throw Error(p$1(191, e));
				e.call(d);
			}
		}
	}
	var jh = new aa.Component().refs;
	function kh(a, b, c, d) {
		b = a.memoizedState;
		c = c(d, b);
		c = null === c || void 0 === c ? b : A({}, b, c);
		a.memoizedState = c;
		0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var nh = {
		isMounted: function(a) {
			return (a = a._reactInternals) ? Vb(a) === a : !1;
		},
		enqueueSetState: function(a, b, c) {
			a = a._reactInternals;
			var d = L(), e = lh(a), f$2 = ch(d, e);
			f$2.payload = b;
			void 0 !== c && null !== c && (f$2.callback = c);
			b = dh(a, f$2, e);
			null !== b && (mh(b, a, e, d), eh(b, a, e));
		},
		enqueueReplaceState: function(a, b, c) {
			a = a._reactInternals;
			var d = L(), e = lh(a), f$2 = ch(d, e);
			f$2.tag = 1;
			f$2.payload = b;
			void 0 !== c && null !== c && (f$2.callback = c);
			b = dh(a, f$2, e);
			null !== b && (mh(b, a, e, d), eh(b, a, e));
		},
		enqueueForceUpdate: function(a, b) {
			a = a._reactInternals;
			var c = L(), d = lh(a), e = ch(c, d);
			e.tag = 2;
			void 0 !== b && null !== b && (e.callback = b);
			b = dh(a, e, d);
			null !== b && (mh(b, a, d, c), eh(b, a, d));
		}
	};
	function oh(a, b, c, d, e, f$2, g$1) {
		a = a.stateNode;
		return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f$2, g$1) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f$2) : !0;
	}
	function ph(a, b, c) {
		var d = !1, e = Vf;
		var f$2 = b.contextType;
		"object" === typeof f$2 && null !== f$2 ? f$2 = Vg(f$2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f$2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
		b = new b(c, f$2);
		a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
		b.updater = nh;
		a.stateNode = b;
		b._reactInternals = a;
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f$2);
		return b;
	}
	function qh(a, b, c, d) {
		a = b.state;
		"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
		"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
		b.state !== a && nh.enqueueReplaceState(b, b.state, null);
	}
	function rh(a, b, c, d) {
		var e = a.stateNode;
		e.props = c;
		e.state = a.memoizedState;
		e.refs = jh;
		ah(a);
		var f$2 = b.contextType;
		"object" === typeof f$2 && null !== f$2 ? e.context = Vg(f$2) : (f$2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f$2));
		e.state = a.memoizedState;
		f$2 = b.getDerivedStateFromProps;
		"function" === typeof f$2 && (kh(a, b, f$2, c), e.state = a.memoizedState);
		"function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
		"function" === typeof e.componentDidMount && (a.flags |= 4194308);
	}
	function sh(a, b, c) {
		a = c.ref;
		if (null !== a && "function" !== typeof a && "object" !== typeof a) {
			if (c._owner) {
				c = c._owner;
				if (c) {
					if (1 !== c.tag) throw Error(p$1(309));
					var d = c.stateNode;
				}
				if (!d) throw Error(p$1(147, a));
				var e = d, f$2 = "" + a;
				if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f$2) return b.ref;
				b = function(a$1) {
					var b$1 = e.refs;
					b$1 === jh && (b$1 = e.refs = {});
					null === a$1 ? delete b$1[f$2] : b$1[f$2] = a$1;
				};
				b._stringRef = f$2;
				return b;
			}
			if ("string" !== typeof a) throw Error(p$1(284));
			if (!c._owner) throw Error(p$1(290, a));
		}
		return a;
	}
	function th(a, b) {
		a = Object.prototype.toString.call(b);
		throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	}
	function uh(a) {
		var b = a._init;
		return b(a._payload);
	}
	function vh(a) {
		function b(b$1, c$1) {
			if (a) {
				var d$1 = b$1.deletions;
				null === d$1 ? (b$1.deletions = [c$1], b$1.flags |= 16) : d$1.push(c$1);
			}
		}
		function c(c$1, d$1) {
			if (!a) return null;
			for (; null !== d$1;) b(c$1, d$1), d$1 = d$1.sibling;
			return null;
		}
		function d(a$1, b$1) {
			for (a$1 = new Map(); null !== b$1;) null !== b$1.key ? a$1.set(b$1.key, b$1) : a$1.set(b$1.index, b$1), b$1 = b$1.sibling;
			return a$1;
		}
		function e(a$1, b$1) {
			a$1 = wh(a$1, b$1);
			a$1.index = 0;
			a$1.sibling = null;
			return a$1;
		}
		function f$2(b$1, c$1, d$1) {
			b$1.index = d$1;
			if (!a) return b$1.flags |= 1048576, c$1;
			d$1 = b$1.alternate;
			if (null !== d$1) return d$1 = d$1.index, d$1 < c$1 ? (b$1.flags |= 2, c$1) : d$1;
			b$1.flags |= 2;
			return c$1;
		}
		function g$1(b$1) {
			a && null === b$1.alternate && (b$1.flags |= 2);
			return b$1;
		}
		function h$1(a$1, b$1, c$1, d$1) {
			if (null === b$1 || 6 !== b$1.tag) return b$1 = xh(c$1, a$1.mode, d$1), b$1.return = a$1, b$1;
			b$1 = e(b$1, c$1);
			b$1.return = a$1;
			return b$1;
		}
		function k$2(a$1, b$1, c$1, d$1) {
			var f$3 = c$1.type;
			if (f$3 === ya) return m$2(a$1, b$1, c$1.props.children, d$1, c$1.key);
			if (null !== b$1 && (b$1.elementType === f$3 || "object" === typeof f$3 && null !== f$3 && f$3.$$typeof === Ha && uh(f$3) === b$1.type)) return d$1 = e(b$1, c$1.props), d$1.ref = sh(a$1, b$1, c$1), d$1.return = a$1, d$1;
			d$1 = yh(c$1.type, c$1.key, c$1.props, null, a$1.mode, d$1);
			d$1.ref = sh(a$1, b$1, c$1);
			d$1.return = a$1;
			return d$1;
		}
		function l$3(a$1, b$1, c$1, d$1) {
			if (null === b$1 || 4 !== b$1.tag || b$1.stateNode.containerInfo !== c$1.containerInfo || b$1.stateNode.implementation !== c$1.implementation) return b$1 = zh$1(c$1, a$1.mode, d$1), b$1.return = a$1, b$1;
			b$1 = e(b$1, c$1.children || []);
			b$1.return = a$1;
			return b$1;
		}
		function m$2(a$1, b$1, c$1, d$1, f$3) {
			if (null === b$1 || 7 !== b$1.tag) return b$1 = Ah(c$1, a$1.mode, d$1, f$3), b$1.return = a$1, b$1;
			b$1 = e(b$1, c$1);
			b$1.return = a$1;
			return b$1;
		}
		function q$3(a$1, b$1, c$1) {
			if ("string" === typeof b$1 && "" !== b$1 || "number" === typeof b$1) return b$1 = xh("" + b$1, a$1.mode, c$1), b$1.return = a$1, b$1;
			if ("object" === typeof b$1 && null !== b$1) {
				switch (b$1.$$typeof) {
					case va: return c$1 = yh(b$1.type, b$1.key, b$1.props, null, a$1.mode, c$1), c$1.ref = sh(a$1, null, b$1), c$1.return = a$1, c$1;
					case wa: return b$1 = zh$1(b$1, a$1.mode, c$1), b$1.return = a$1, b$1;
					case Ha:
						var d$1 = b$1._init;
						return q$3(a$1, d$1(b$1._payload), c$1);
				}
				if (eb(b$1) || Ka(b$1)) return b$1 = Ah(b$1, a$1.mode, c$1, null), b$1.return = a$1, b$1;
				th(a$1, b$1);
			}
			return null;
		}
		function r$2(a$1, b$1, c$1, d$1) {
			var e$1 = null !== b$1 ? b$1.key : null;
			if ("string" === typeof c$1 && "" !== c$1 || "number" === typeof c$1) return null !== e$1 ? null : h$1(a$1, b$1, "" + c$1, d$1);
			if ("object" === typeof c$1 && null !== c$1) {
				switch (c$1.$$typeof) {
					case va: return c$1.key === e$1 ? k$2(a$1, b$1, c$1, d$1) : null;
					case wa: return c$1.key === e$1 ? l$3(a$1, b$1, c$1, d$1) : null;
					case Ha: return e$1 = c$1._init, r$2(a$1, b$1, e$1(c$1._payload), d$1);
				}
				if (eb(c$1) || Ka(c$1)) return null !== e$1 ? null : m$2(a$1, b$1, c$1, d$1, null);
				th(a$1, c$1);
			}
			return null;
		}
		function y$2(a$1, b$1, c$1, d$1, e$1) {
			if ("string" === typeof d$1 && "" !== d$1 || "number" === typeof d$1) return a$1 = a$1.get(c$1) || null, h$1(b$1, a$1, "" + d$1, e$1);
			if ("object" === typeof d$1 && null !== d$1) {
				switch (d$1.$$typeof) {
					case va: return a$1 = a$1.get(null === d$1.key ? c$1 : d$1.key) || null, k$2(b$1, a$1, d$1, e$1);
					case wa: return a$1 = a$1.get(null === d$1.key ? c$1 : d$1.key) || null, l$3(b$1, a$1, d$1, e$1);
					case Ha:
						var f$3 = d$1._init;
						return y$2(a$1, b$1, c$1, f$3(d$1._payload), e$1);
				}
				if (eb(d$1) || Ka(d$1)) return a$1 = a$1.get(c$1) || null, m$2(b$1, a$1, d$1, e$1, null);
				th(b$1, d$1);
			}
			return null;
		}
		function n$2(e$1, g$2, h$2, k$3) {
			for (var l$4 = null, m$3 = null, u$2 = g$2, w$1 = g$2 = 0, x$1 = null; null !== u$2 && w$1 < h$2.length; w$1++) {
				u$2.index > w$1 ? (x$1 = u$2, u$2 = null) : x$1 = u$2.sibling;
				var n$3 = r$2(e$1, u$2, h$2[w$1], k$3);
				if (null === n$3) {
					null === u$2 && (u$2 = x$1);
					break;
				}
				a && u$2 && null === n$3.alternate && b(e$1, u$2);
				g$2 = f$2(n$3, g$2, w$1);
				null === m$3 ? l$4 = n$3 : m$3.sibling = n$3;
				m$3 = n$3;
				u$2 = x$1;
			}
			if (w$1 === h$2.length) return c(e$1, u$2), I && tg(e$1, w$1), l$4;
			if (null === u$2) {
				for (; w$1 < h$2.length; w$1++) u$2 = q$3(e$1, h$2[w$1], k$3), null !== u$2 && (g$2 = f$2(u$2, g$2, w$1), null === m$3 ? l$4 = u$2 : m$3.sibling = u$2, m$3 = u$2);
				I && tg(e$1, w$1);
				return l$4;
			}
			for (u$2 = d(e$1, u$2); w$1 < h$2.length; w$1++) x$1 = y$2(u$2, e$1, w$1, h$2[w$1], k$3), null !== x$1 && (a && null !== x$1.alternate && u$2.delete(null === x$1.key ? w$1 : x$1.key), g$2 = f$2(x$1, g$2, w$1), null === m$3 ? l$4 = x$1 : m$3.sibling = x$1, m$3 = x$1);
			a && u$2.forEach(function(a$1) {
				return b(e$1, a$1);
			});
			I && tg(e$1, w$1);
			return l$4;
		}
		function t$3(e$1, g$2, h$2, k$3) {
			var l$4 = Ka(h$2);
			if ("function" !== typeof l$4) throw Error(p$1(150));
			h$2 = l$4.call(h$2);
			if (null == h$2) throw Error(p$1(151));
			for (var u$2 = l$4 = null, m$3 = g$2, w$1 = g$2 = 0, x$1 = null, n$3 = h$2.next(); null !== m$3 && !n$3.done; w$1++, n$3 = h$2.next()) {
				m$3.index > w$1 ? (x$1 = m$3, m$3 = null) : x$1 = m$3.sibling;
				var t$4 = r$2(e$1, m$3, n$3.value, k$3);
				if (null === t$4) {
					null === m$3 && (m$3 = x$1);
					break;
				}
				a && m$3 && null === t$4.alternate && b(e$1, m$3);
				g$2 = f$2(t$4, g$2, w$1);
				null === u$2 ? l$4 = t$4 : u$2.sibling = t$4;
				u$2 = t$4;
				m$3 = x$1;
			}
			if (n$3.done) return c(e$1, m$3), I && tg(e$1, w$1), l$4;
			if (null === m$3) {
				for (; !n$3.done; w$1++, n$3 = h$2.next()) n$3 = q$3(e$1, n$3.value, k$3), null !== n$3 && (g$2 = f$2(n$3, g$2, w$1), null === u$2 ? l$4 = n$3 : u$2.sibling = n$3, u$2 = n$3);
				I && tg(e$1, w$1);
				return l$4;
			}
			for (m$3 = d(e$1, m$3); !n$3.done; w$1++, n$3 = h$2.next()) n$3 = y$2(m$3, e$1, w$1, n$3.value, k$3), null !== n$3 && (a && null !== n$3.alternate && m$3.delete(null === n$3.key ? w$1 : n$3.key), g$2 = f$2(n$3, g$2, w$1), null === u$2 ? l$4 = n$3 : u$2.sibling = n$3, u$2 = n$3);
			a && m$3.forEach(function(a$1) {
				return b(e$1, a$1);
			});
			I && tg(e$1, w$1);
			return l$4;
		}
		function J$2(a$1, d$1, f$3, h$2) {
			"object" === typeof f$3 && null !== f$3 && f$3.type === ya && null === f$3.key && (f$3 = f$3.props.children);
			if ("object" === typeof f$3 && null !== f$3) {
				switch (f$3.$$typeof) {
					case va:
						a: {
							for (var k$3 = f$3.key, l$4 = d$1; null !== l$4;) {
								if (l$4.key === k$3) {
									k$3 = f$3.type;
									if (k$3 === ya) {
										if (7 === l$4.tag) {
											c(a$1, l$4.sibling);
											d$1 = e(l$4, f$3.props.children);
											d$1.return = a$1;
											a$1 = d$1;
											break a;
										}
									} else if (l$4.elementType === k$3 || "object" === typeof k$3 && null !== k$3 && k$3.$$typeof === Ha && uh(k$3) === l$4.type) {
										c(a$1, l$4.sibling);
										d$1 = e(l$4, f$3.props);
										d$1.ref = sh(a$1, l$4, f$3);
										d$1.return = a$1;
										a$1 = d$1;
										break a;
									}
									c(a$1, l$4);
									break;
								} else b(a$1, l$4);
								l$4 = l$4.sibling;
							}
							f$3.type === ya ? (d$1 = Ah(f$3.props.children, a$1.mode, h$2, f$3.key), d$1.return = a$1, a$1 = d$1) : (h$2 = yh(f$3.type, f$3.key, f$3.props, null, a$1.mode, h$2), h$2.ref = sh(a$1, d$1, f$3), h$2.return = a$1, a$1 = h$2);
						}
						return g$1(a$1);
					case wa:
						a: {
							for (l$4 = f$3.key; null !== d$1;) {
								if (d$1.key === l$4) if (4 === d$1.tag && d$1.stateNode.containerInfo === f$3.containerInfo && d$1.stateNode.implementation === f$3.implementation) {
									c(a$1, d$1.sibling);
									d$1 = e(d$1, f$3.children || []);
									d$1.return = a$1;
									a$1 = d$1;
									break a;
								} else {
									c(a$1, d$1);
									break;
								}
								else b(a$1, d$1);
								d$1 = d$1.sibling;
							}
							d$1 = zh$1(f$3, a$1.mode, h$2);
							d$1.return = a$1;
							a$1 = d$1;
						}
						return g$1(a$1);
					case Ha: return l$4 = f$3._init, J$2(a$1, d$1, l$4(f$3._payload), h$2);
				}
				if (eb(f$3)) return n$2(a$1, d$1, f$3, h$2);
				if (Ka(f$3)) return t$3(a$1, d$1, f$3, h$2);
				th(a$1, f$3);
			}
			return "string" === typeof f$3 && "" !== f$3 || "number" === typeof f$3 ? (f$3 = "" + f$3, null !== d$1 && 6 === d$1.tag ? (c(a$1, d$1.sibling), d$1 = e(d$1, f$3), d$1.return = a$1, a$1 = d$1) : (c(a$1, d$1), d$1 = xh(f$3, a$1.mode, h$2), d$1.return = a$1, a$1 = d$1), g$1(a$1)) : c(a$1, d$1);
		}
		return J$2;
	}
	var Bh = vh(!0), Ch = vh(!1), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
	function Hh(a) {
		if (a === Dh) throw Error(p$1(174));
		return a;
	}
	function Ih(a, b) {
		G(Gh, b);
		G(Fh, a);
		G(Eh, Dh);
		a = b.nodeType;
		switch (a) {
			case 9:
			case 11:
				b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
				break;
			default: a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
		}
		E(Eh);
		G(Eh, b);
	}
	function Jh() {
		E(Eh);
		E(Fh);
		E(Gh);
	}
	function Kh(a) {
		Hh(Gh.current);
		var b = Hh(Eh.current);
		var c = lb(b, a.type);
		b !== c && (G(Fh, a), G(Eh, c));
	}
	function Lh(a) {
		Fh.current === a && (E(Eh), E(Fh));
	}
	var M = Uf(0);
	function Mh(a) {
		for (var b = a; null !== b;) {
			if (13 === b.tag) {
				var c = b.memoizedState;
				if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
			} else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
				if (0 !== (b.flags & 128)) return b;
			} else if (null !== b.child) {
				b.child.return = b;
				b = b.child;
				continue;
			}
			if (b === a) break;
			for (; null === b.sibling;) {
				if (null === b.return || b.return === a) return null;
				b = b.return;
			}
			b.sibling.return = b.return;
			b = b.sibling;
		}
		return null;
	}
	var Nh = [];
	function Oh() {
		for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
		Nh.length = 0;
	}
	var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = !1, Th = !1, Uh = 0, Vh = 0;
	function Q() {
		throw Error(p$1(321));
	}
	function Wh(a, b) {
		if (null === b) return !1;
		for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
		return !0;
	}
	function Xh(a, b, c, d, e, f$2) {
		Rh = f$2;
		N = b;
		b.memoizedState = null;
		b.updateQueue = null;
		b.lanes = 0;
		Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
		a = c(d, e);
		if (Th) {
			f$2 = 0;
			do {
				Th = !1;
				Uh = 0;
				if (25 <= f$2) throw Error(p$1(301));
				f$2 += 1;
				P = O = null;
				b.updateQueue = null;
				Ph.current = $h;
				a = c(d, e);
			} while (Th);
		}
		Ph.current = ai;
		b = null !== O && null !== O.next;
		Rh = 0;
		P = O = N = null;
		Sh = !1;
		if (b) throw Error(p$1(300));
		return a;
	}
	function bi() {
		var a = 0 !== Uh;
		Uh = 0;
		return a;
	}
	function ci() {
		var a = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === P ? N.memoizedState = P = a : P = P.next = a;
		return P;
	}
	function di() {
		if (null === O) {
			var a = N.alternate;
			a = null !== a ? a.memoizedState : null;
		} else a = O.next;
		var b = null === P ? N.memoizedState : P.next;
		if (null !== b) P = b, O = a;
		else {
			if (null === a) throw Error(p$1(310));
			O = a;
			a = {
				memoizedState: O.memoizedState,
				baseState: O.baseState,
				baseQueue: O.baseQueue,
				queue: O.queue,
				next: null
			};
			null === P ? N.memoizedState = P = a : P = P.next = a;
		}
		return P;
	}
	function ei(a, b) {
		return "function" === typeof b ? b(a) : b;
	}
	function fi(a) {
		var b = di(), c = b.queue;
		if (null === c) throw Error(p$1(311));
		c.lastRenderedReducer = a;
		var d = O, e = d.baseQueue, f$2 = c.pending;
		if (null !== f$2) {
			if (null !== e) {
				var g$1 = e.next;
				e.next = f$2.next;
				f$2.next = g$1;
			}
			d.baseQueue = e = f$2;
			c.pending = null;
		}
		if (null !== e) {
			f$2 = e.next;
			d = d.baseState;
			var h$1 = g$1 = null, k$2 = null, l$3 = f$2;
			do {
				var m$2 = l$3.lane;
				if ((Rh & m$2) === m$2) null !== k$2 && (k$2 = k$2.next = {
					lane: 0,
					action: l$3.action,
					hasEagerState: l$3.hasEagerState,
					eagerState: l$3.eagerState,
					next: null
				}), d = l$3.hasEagerState ? l$3.eagerState : a(d, l$3.action);
				else {
					var q$3 = {
						lane: m$2,
						action: l$3.action,
						hasEagerState: l$3.hasEagerState,
						eagerState: l$3.eagerState,
						next: null
					};
					null === k$2 ? (h$1 = k$2 = q$3, g$1 = d) : k$2 = k$2.next = q$3;
					N.lanes |= m$2;
					hh |= m$2;
				}
				l$3 = l$3.next;
			} while (null !== l$3 && l$3 !== f$2);
			null === k$2 ? g$1 = d : k$2.next = h$1;
			He(d, b.memoizedState) || (Ug = !0);
			b.memoizedState = d;
			b.baseState = g$1;
			b.baseQueue = k$2;
			c.lastRenderedState = d;
		}
		a = c.interleaved;
		if (null !== a) {
			e = a;
			do
				f$2 = e.lane, N.lanes |= f$2, hh |= f$2, e = e.next;
			while (e !== a);
		} else null === e && (c.lanes = 0);
		return [b.memoizedState, c.dispatch];
	}
	function gi(a) {
		var b = di(), c = b.queue;
		if (null === c) throw Error(p$1(311));
		c.lastRenderedReducer = a;
		var d = c.dispatch, e = c.pending, f$2 = b.memoizedState;
		if (null !== e) {
			c.pending = null;
			var g$1 = e = e.next;
			do
				f$2 = a(f$2, g$1.action), g$1 = g$1.next;
			while (g$1 !== e);
			He(f$2, b.memoizedState) || (Ug = !0);
			b.memoizedState = f$2;
			null === b.baseQueue && (b.baseState = f$2);
			c.lastRenderedState = f$2;
		}
		return [f$2, d];
	}
	function hi() {}
	function ii(a, b) {
		var c = N, d = di(), e = b(), f$2 = !He(d.memoizedState, e);
		f$2 && (d.memoizedState = e, Ug = !0);
		d = d.queue;
		ji(ki.bind(null, c, d, a), [a]);
		if (d.getSnapshot !== b || f$2 || null !== P && P.memoizedState.tag & 1) {
			c.flags |= 2048;
			li(9, mi.bind(null, c, d, e, b), void 0, null);
			if (null === R) throw Error(p$1(349));
			0 !== (Rh & 30) || ni(c, b, e);
		}
		return e;
	}
	function ni(a, b, c) {
		a.flags |= 16384;
		a = {
			getSnapshot: b,
			value: c
		};
		b = N.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	}
	function mi(a, b, c, d) {
		b.value = c;
		b.getSnapshot = d;
		oi(b) && pi(a);
	}
	function ki(a, b, c) {
		return c(function() {
			oi(b) && pi(a);
		});
	}
	function oi(a) {
		var b = a.getSnapshot;
		a = a.value;
		try {
			var c = b();
			return !He(a, c);
		} catch (d) {
			return !0;
		}
	}
	function pi(a) {
		var b = Zg(a, 1);
		null !== b && mh(b, a, 1, -1);
	}
	function qi(a) {
		var b = ci();
		"function" === typeof a && (a = a());
		b.memoizedState = b.baseState = a;
		a = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ei,
			lastRenderedState: a
		};
		b.queue = a;
		a = a.dispatch = ri.bind(null, N, a);
		return [b.memoizedState, a];
	}
	function li(a, b, c, d) {
		a = {
			tag: a,
			create: b,
			destroy: c,
			deps: d,
			next: null
		};
		b = N.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
		return a;
	}
	function si() {
		return di().memoizedState;
	}
	function ti(a, b, c, d) {
		var e = ci();
		N.flags |= a;
		e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function ui(a, b, c, d) {
		var e = di();
		d = void 0 === d ? null : d;
		var f$2 = void 0;
		if (null !== O) {
			var g$1 = O.memoizedState;
			f$2 = g$1.destroy;
			if (null !== d && Wh(d, g$1.deps)) {
				e.memoizedState = li(b, c, f$2, d);
				return;
			}
		}
		N.flags |= a;
		e.memoizedState = li(1 | b, c, f$2, d);
	}
	function vi(a, b) {
		return ti(8390656, 8, a, b);
	}
	function ji(a, b) {
		return ui(2048, 8, a, b);
	}
	function wi(a, b) {
		return ui(4, 2, a, b);
	}
	function xi(a, b) {
		return ui(4, 4, a, b);
	}
	function yi(a, b) {
		if ("function" === typeof b) return a = a(), b(a), function() {
			b(null);
		};
		if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
			b.current = null;
		};
	}
	function zi(a, b, c) {
		c = null !== c && void 0 !== c ? c.concat([a]) : null;
		return ui(4, 4, yi.bind(null, b, a), c);
	}
	function Ai() {}
	function Bi(a, b) {
		var c = di();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Wh(b, d[1])) return d[0];
		c.memoizedState = [a, b];
		return a;
	}
	function Ci(a, b) {
		var c = di();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Wh(b, d[1])) return d[0];
		a = a();
		c.memoizedState = [a, b];
		return a;
	}
	function Di(a, b, c) {
		if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
		He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = !0);
		return b;
	}
	function Ei(a, b) {
		var c = C;
		C = 0 !== c && 4 > c ? c : 4;
		a(!0);
		var d = Qh.transition;
		Qh.transition = {};
		try {
			a(!1), b();
		} finally {
			C = c, Qh.transition = d;
		}
	}
	function Fi() {
		return di().memoizedState;
	}
	function Gi(a, b, c) {
		var d = lh(a);
		c = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Hi(a)) Ii(b, c);
		else if (c = Yg(a, b, c, d), null !== c) {
			var e = L();
			mh(c, a, d, e);
			Ji(c, b, d);
		}
	}
	function ri(a, b, c) {
		var d = lh(a), e = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Hi(a)) Ii(b, e);
		else {
			var f$2 = a.alternate;
			if (0 === a.lanes && (null === f$2 || 0 === f$2.lanes) && (f$2 = b.lastRenderedReducer, null !== f$2)) try {
				var g$1 = b.lastRenderedState, h$1 = f$2(g$1, c);
				e.hasEagerState = !0;
				e.eagerState = h$1;
				if (He(h$1, g$1)) {
					var k$2 = b.interleaved;
					null === k$2 ? (e.next = e, Xg(b)) : (e.next = k$2.next, k$2.next = e);
					b.interleaved = e;
					return;
				}
			} catch (l$3) {}
			c = Yg(a, b, e, d);
			null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
		}
	}
	function Hi(a) {
		var b = a.alternate;
		return a === N || null !== b && b === N;
	}
	function Ii(a, b) {
		Th = Sh = !0;
		var c = a.pending;
		null === c ? b.next = b : (b.next = c.next, c.next = b);
		a.pending = b;
	}
	function Ji(a, b, c) {
		if (0 !== (c & 4194240)) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	var ai = {
		readContext: Vg,
		useCallback: Q,
		useContext: Q,
		useEffect: Q,
		useImperativeHandle: Q,
		useInsertionEffect: Q,
		useLayoutEffect: Q,
		useMemo: Q,
		useReducer: Q,
		useRef: Q,
		useState: Q,
		useDebugValue: Q,
		useDeferredValue: Q,
		useTransition: Q,
		useMutableSource: Q,
		useSyncExternalStore: Q,
		useId: Q,
		unstable_isNewReconciler: !1
	}, Yh = {
		readContext: Vg,
		useCallback: function(a, b) {
			ci().memoizedState = [a, void 0 === b ? null : b];
			return a;
		},
		useContext: Vg,
		useEffect: vi,
		useImperativeHandle: function(a, b, c) {
			c = null !== c && void 0 !== c ? c.concat([a]) : null;
			return ti(4194308, 4, yi.bind(null, b, a), c);
		},
		useLayoutEffect: function(a, b) {
			return ti(4194308, 4, a, b);
		},
		useInsertionEffect: function(a, b) {
			return ti(4, 2, a, b);
		},
		useMemo: function(a, b) {
			var c = ci();
			b = void 0 === b ? null : b;
			a = a();
			c.memoizedState = [a, b];
			return a;
		},
		useReducer: function(a, b, c) {
			var d = ci();
			b = void 0 !== c ? c(b) : b;
			d.memoizedState = d.baseState = b;
			a = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: a,
				lastRenderedState: b
			};
			d.queue = a;
			a = a.dispatch = Gi.bind(null, N, a);
			return [d.memoizedState, a];
		},
		useRef: function(a) {
			var b = ci();
			a = { current: a };
			return b.memoizedState = a;
		},
		useState: qi,
		useDebugValue: Ai,
		useDeferredValue: function(a) {
			return ci().memoizedState = a;
		},
		useTransition: function() {
			var a = qi(!1), b = a[0];
			a = Ei.bind(null, a[1]);
			ci().memoizedState = a;
			return [b, a];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(a, b, c) {
			var d = N, e = ci();
			if (I) {
				if (void 0 === c) throw Error(p$1(407));
				c = c();
			} else {
				c = b();
				if (null === R) throw Error(p$1(349));
				0 !== (Rh & 30) || ni(d, b, c);
			}
			e.memoizedState = c;
			var f$2 = {
				value: c,
				getSnapshot: b
			};
			e.queue = f$2;
			vi(ki.bind(null, d, f$2, a), [a]);
			d.flags |= 2048;
			li(9, mi.bind(null, d, f$2, c, b), void 0, null);
			return c;
		},
		useId: function() {
			var a = ci(), b = R.identifierPrefix;
			if (I) {
				var c = sg;
				var d = rg;
				c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
				b = ":" + b + "R" + c;
				c = Uh++;
				0 < c && (b += "H" + c.toString(32));
				b += ":";
			} else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
			return a.memoizedState = b;
		},
		unstable_isNewReconciler: !1
	}, Zh = {
		readContext: Vg,
		useCallback: Bi,
		useContext: Vg,
		useEffect: ji,
		useImperativeHandle: zi,
		useInsertionEffect: wi,
		useLayoutEffect: xi,
		useMemo: Ci,
		useReducer: fi,
		useRef: si,
		useState: function() {
			return fi(ei);
		},
		useDebugValue: Ai,
		useDeferredValue: function(a) {
			var b = di();
			return Di(b, O.memoizedState, a);
		},
		useTransition: function() {
			var a = fi(ei)[0], b = di().memoizedState;
			return [a, b];
		},
		useMutableSource: hi,
		useSyncExternalStore: ii,
		useId: Fi,
		unstable_isNewReconciler: !1
	}, $h = {
		readContext: Vg,
		useCallback: Bi,
		useContext: Vg,
		useEffect: ji,
		useImperativeHandle: zi,
		useInsertionEffect: wi,
		useLayoutEffect: xi,
		useMemo: Ci,
		useReducer: gi,
		useRef: si,
		useState: function() {
			return gi(ei);
		},
		useDebugValue: Ai,
		useDeferredValue: function(a) {
			var b = di();
			return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
		},
		useTransition: function() {
			var a = gi(ei)[0], b = di().memoizedState;
			return [a, b];
		},
		useMutableSource: hi,
		useSyncExternalStore: ii,
		useId: Fi,
		unstable_isNewReconciler: !1
	};
	function Ki(a, b) {
		try {
			var c = "", d = b;
			do
				c += Pa(d), d = d.return;
			while (d);
			var e = c;
		} catch (f$2) {
			e = "\nError generating stack: " + f$2.message + "\n" + f$2.stack;
		}
		return {
			value: a,
			source: b,
			stack: e,
			digest: null
		};
	}
	function Li(a, b, c) {
		return {
			value: a,
			source: null,
			stack: null != c ? c : null,
			digest: null != b ? b : null
		};
	}
	function Mi(a, b) {
		try {
			console.error(b.value);
		} catch (c) {
			setTimeout(function() {
				throw c;
			});
		}
	}
	var Ni = "function" === typeof WeakMap ? WeakMap : Map;
	function Oi(a, b, c) {
		c = ch(-1, c);
		c.tag = 3;
		c.payload = { element: null };
		var d = b.value;
		c.callback = function() {
			Pi || (Pi = !0, Qi = d);
			Mi(a, b);
		};
		return c;
	}
	function Ri(a, b, c) {
		c = ch(-1, c);
		c.tag = 3;
		var d = a.type.getDerivedStateFromError;
		if ("function" === typeof d) {
			var e = b.value;
			c.payload = function() {
				return d(e);
			};
			c.callback = function() {
				Mi(a, b);
			};
		}
		var f$2 = a.stateNode;
		null !== f$2 && "function" === typeof f$2.componentDidCatch && (c.callback = function() {
			Mi(a, b);
			"function" !== typeof d && (null === Si ? Si = new Set([this]) : Si.add(this));
			var c$1 = b.stack;
			this.componentDidCatch(b.value, { componentStack: null !== c$1 ? c$1 : "" });
		});
		return c;
	}
	function Ti(a, b, c) {
		var d = a.pingCache;
		if (null === d) {
			d = a.pingCache = new Ni();
			var e = new Set();
			d.set(b, e);
		} else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
		e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
	}
	function Vi(a) {
		do {
			var b;
			if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
			if (b) return a;
			a = a.return;
		} while (null !== a);
		return null;
	}
	function Wi(a, b, c, d, e) {
		if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
		a.flags |= 65536;
		a.lanes = e;
		return a;
	}
	var Xi = ua.ReactCurrentOwner, Ug = !1;
	function Yi(a, b, c, d) {
		b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
	}
	function Zi(a, b, c, d, e) {
		c = c.render;
		var f$2 = b.ref;
		Tg(b, e);
		d = Xh(a, b, c, d, f$2, e);
		c = bi();
		if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
		I && c && vg(b);
		b.flags |= 1;
		Yi(a, b, d, e);
		return b.child;
	}
	function aj(a, b, c, d, e) {
		if (null === a) {
			var f$2 = c.type;
			if ("function" === typeof f$2 && !bj(f$2) && void 0 === f$2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f$2, cj(a, b, f$2, d, e);
			a = yh(c.type, null, d, b, b.mode, e);
			a.ref = b.ref;
			a.return = b;
			return b.child = a;
		}
		f$2 = a.child;
		if (0 === (a.lanes & e)) {
			var g$1 = f$2.memoizedProps;
			c = c.compare;
			c = null !== c ? c : Ie;
			if (c(g$1, d) && a.ref === b.ref) return $i(a, b, e);
		}
		b.flags |= 1;
		a = wh(f$2, d);
		a.ref = b.ref;
		a.return = b;
		return b.child = a;
	}
	function cj(a, b, c, d, e) {
		if (null !== a) {
			var f$2 = a.memoizedProps;
			if (Ie(f$2, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f$2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);
			else return b.lanes = a.lanes, $i(a, b, e);
		}
		return dj(a, b, c, d, e);
	}
	function ej(a, b, c) {
		var d = b.pendingProps, e = d.children, f$2 = null !== a ? a.memoizedState : null;
		if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, G(fj, gj), gj |= c;
		else {
			if (0 === (c & 1073741824)) return a = null !== f$2 ? f$2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
				baseLanes: a,
				cachePool: null,
				transitions: null
			}, b.updateQueue = null, G(fj, gj), gj |= a, null;
			b.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			};
			d = null !== f$2 ? f$2.baseLanes : c;
			G(fj, gj);
			gj |= d;
		}
		else null !== f$2 ? (d = f$2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
		Yi(a, b, e, c);
		return b.child;
	}
	function hj(a, b) {
		var c = b.ref;
		if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	}
	function dj(a, b, c, d, e) {
		var f$2 = Zf(c) ? Xf : H.current;
		f$2 = Yf(b, f$2);
		Tg(b, e);
		c = Xh(a, b, c, d, f$2, e);
		d = bi();
		if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
		I && d && vg(b);
		b.flags |= 1;
		Yi(a, b, c, e);
		return b.child;
	}
	function ij(a, b, c, d, e) {
		if (Zf(c)) {
			var f$2 = !0;
			cg(b);
		} else f$2 = !1;
		Tg(b, e);
		if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;
		else if (null === a) {
			var g$1 = b.stateNode, h$1 = b.memoizedProps;
			g$1.props = h$1;
			var k$2 = g$1.context, l$3 = c.contextType;
			"object" === typeof l$3 && null !== l$3 ? l$3 = Vg(l$3) : (l$3 = Zf(c) ? Xf : H.current, l$3 = Yf(b, l$3));
			var m$2 = c.getDerivedStateFromProps, q$3 = "function" === typeof m$2 || "function" === typeof g$1.getSnapshotBeforeUpdate;
			q$3 || "function" !== typeof g$1.UNSAFE_componentWillReceiveProps && "function" !== typeof g$1.componentWillReceiveProps || (h$1 !== d || k$2 !== l$3) && qh(b, g$1, d, l$3);
			$g = !1;
			var r$2 = b.memoizedState;
			g$1.state = r$2;
			gh(b, d, g$1, e);
			k$2 = b.memoizedState;
			h$1 !== d || r$2 !== k$2 || Wf.current || $g ? ("function" === typeof m$2 && (kh(b, c, m$2, d), k$2 = b.memoizedState), (h$1 = $g || oh(b, c, h$1, d, r$2, k$2, l$3)) ? (q$3 || "function" !== typeof g$1.UNSAFE_componentWillMount && "function" !== typeof g$1.componentWillMount || ("function" === typeof g$1.componentWillMount && g$1.componentWillMount(), "function" === typeof g$1.UNSAFE_componentWillMount && g$1.UNSAFE_componentWillMount()), "function" === typeof g$1.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g$1.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k$2), g$1.props = d, g$1.state = k$2, g$1.context = l$3, d = h$1) : ("function" === typeof g$1.componentDidMount && (b.flags |= 4194308), d = !1);
		} else {
			g$1 = b.stateNode;
			bh(a, b);
			h$1 = b.memoizedProps;
			l$3 = b.type === b.elementType ? h$1 : Lg(b.type, h$1);
			g$1.props = l$3;
			q$3 = b.pendingProps;
			r$2 = g$1.context;
			k$2 = c.contextType;
			"object" === typeof k$2 && null !== k$2 ? k$2 = Vg(k$2) : (k$2 = Zf(c) ? Xf : H.current, k$2 = Yf(b, k$2));
			var y$2 = c.getDerivedStateFromProps;
			(m$2 = "function" === typeof y$2 || "function" === typeof g$1.getSnapshotBeforeUpdate) || "function" !== typeof g$1.UNSAFE_componentWillReceiveProps && "function" !== typeof g$1.componentWillReceiveProps || (h$1 !== q$3 || r$2 !== k$2) && qh(b, g$1, d, k$2);
			$g = !1;
			r$2 = b.memoizedState;
			g$1.state = r$2;
			gh(b, d, g$1, e);
			var n$2 = b.memoizedState;
			h$1 !== q$3 || r$2 !== n$2 || Wf.current || $g ? ("function" === typeof y$2 && (kh(b, c, y$2, d), n$2 = b.memoizedState), (l$3 = $g || oh(b, c, l$3, d, r$2, n$2, k$2) || !1) ? (m$2 || "function" !== typeof g$1.UNSAFE_componentWillUpdate && "function" !== typeof g$1.componentWillUpdate || ("function" === typeof g$1.componentWillUpdate && g$1.componentWillUpdate(d, n$2, k$2), "function" === typeof g$1.UNSAFE_componentWillUpdate && g$1.UNSAFE_componentWillUpdate(d, n$2, k$2)), "function" === typeof g$1.componentDidUpdate && (b.flags |= 4), "function" === typeof g$1.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g$1.componentDidUpdate || h$1 === a.memoizedProps && r$2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g$1.getSnapshotBeforeUpdate || h$1 === a.memoizedProps && r$2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n$2), g$1.props = d, g$1.state = n$2, g$1.context = k$2, d = l$3) : ("function" !== typeof g$1.componentDidUpdate || h$1 === a.memoizedProps && r$2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g$1.getSnapshotBeforeUpdate || h$1 === a.memoizedProps && r$2 === a.memoizedState || (b.flags |= 1024), d = !1);
		}
		return kj(a, b, c, d, f$2, e);
	}
	function kj(a, b, c, d, e, f$2) {
		hj(a, b);
		var g$1 = 0 !== (b.flags & 128);
		if (!d && !g$1) return e && dg(b, c, !1), $i(a, b, f$2);
		d = b.stateNode;
		Xi.current = b;
		var h$1 = g$1 && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
		b.flags |= 1;
		null !== a && g$1 ? (b.child = Bh(b, a.child, null, f$2), b.child = Bh(b, null, h$1, f$2)) : Yi(a, b, h$1, f$2);
		b.memoizedState = d.state;
		e && dg(b, c, !0);
		return b.child;
	}
	function lj(a) {
		var b = a.stateNode;
		b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
		Ih(a, b.containerInfo);
	}
	function mj(a, b, c, d, e) {
		Ig();
		Jg(e);
		b.flags |= 256;
		Yi(a, b, c, d);
		return b.child;
	}
	var nj = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function oj(a) {
		return {
			baseLanes: a,
			cachePool: null,
			transitions: null
		};
	}
	function pj(a, b, c) {
		var d = b.pendingProps, e = M.current, f$2 = !1, g$1 = 0 !== (b.flags & 128), h$1;
		(h$1 = g$1) || (h$1 = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
		if (h$1) f$2 = !0, b.flags &= -129;
		else if (null === a || null !== a.memoizedState) e |= 1;
		G(M, e & 1);
		if (null === a) {
			Eg(b);
			a = b.memoizedState;
			if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
			g$1 = d.children;
			a = d.fallback;
			return f$2 ? (d = b.mode, f$2 = b.child, g$1 = {
				mode: "hidden",
				children: g$1
			}, 0 === (d & 1) && null !== f$2 ? (f$2.childLanes = 0, f$2.pendingProps = g$1) : f$2 = qj(g$1, d, 0, null), a = Ah(a, d, c, null), f$2.return = b, a.return = b, f$2.sibling = a, b.child = f$2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g$1);
		}
		e = a.memoizedState;
		if (null !== e && (h$1 = e.dehydrated, null !== h$1)) return sj(a, b, g$1, d, h$1, e, c);
		if (f$2) {
			f$2 = d.fallback;
			g$1 = b.mode;
			e = a.child;
			h$1 = e.sibling;
			var k$2 = {
				mode: "hidden",
				children: d.children
			};
			0 === (g$1 & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k$2, b.deletions = null) : (d = wh(e, k$2), d.subtreeFlags = e.subtreeFlags & 14680064);
			null !== h$1 ? f$2 = wh(h$1, f$2) : (f$2 = Ah(f$2, g$1, c, null), f$2.flags |= 2);
			f$2.return = b;
			d.return = b;
			d.sibling = f$2;
			b.child = d;
			d = f$2;
			f$2 = b.child;
			g$1 = a.child.memoizedState;
			g$1 = null === g$1 ? oj(c) : {
				baseLanes: g$1.baseLanes | c,
				cachePool: null,
				transitions: g$1.transitions
			};
			f$2.memoizedState = g$1;
			f$2.childLanes = a.childLanes & ~c;
			b.memoizedState = nj;
			return d;
		}
		f$2 = a.child;
		a = f$2.sibling;
		d = wh(f$2, {
			mode: "visible",
			children: d.children
		});
		0 === (b.mode & 1) && (d.lanes = c);
		d.return = b;
		d.sibling = null;
		null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
		b.child = d;
		b.memoizedState = null;
		return d;
	}
	function rj(a, b) {
		b = qj({
			mode: "visible",
			children: b
		}, a.mode, 0, null);
		b.return = a;
		return a.child = b;
	}
	function tj(a, b, c, d) {
		null !== d && Jg(d);
		Bh(b, a.child, null, c);
		a = rj(b, b.pendingProps.children);
		a.flags |= 2;
		b.memoizedState = null;
		return a;
	}
	function sj(a, b, c, d, e, f$2, g$1) {
		if (c) {
			if (b.flags & 256) return b.flags &= -257, d = Li(Error(p$1(422))), tj(a, b, g$1, d);
			if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
			f$2 = d.fallback;
			e = b.mode;
			d = qj({
				mode: "visible",
				children: d.children
			}, e, 0, null);
			f$2 = Ah(f$2, e, g$1, null);
			f$2.flags |= 2;
			d.return = b;
			f$2.return = b;
			d.sibling = f$2;
			b.child = d;
			0 !== (b.mode & 1) && Bh(b, a.child, null, g$1);
			b.child.memoizedState = oj(g$1);
			b.memoizedState = nj;
			return f$2;
		}
		if (0 === (b.mode & 1)) return tj(a, b, g$1, null);
		if ("$!" === e.data) {
			d = e.nextSibling && e.nextSibling.dataset;
			if (d) var h$1 = d.dgst;
			d = h$1;
			f$2 = Error(p$1(419));
			d = Li(f$2, d, void 0);
			return tj(a, b, g$1, d);
		}
		h$1 = 0 !== (g$1 & a.childLanes);
		if (Ug || h$1) {
			d = R;
			if (null !== d) {
				switch (g$1 & -g$1) {
					case 4:
						e = 2;
						break;
					case 16:
						e = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						e = 32;
						break;
					case 536870912:
						e = 268435456;
						break;
					default: e = 0;
				}
				e = 0 !== (e & (d.suspendedLanes | g$1)) ? 0 : e;
				0 !== e && e !== f$2.retryLane && (f$2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
			}
			uj();
			d = Li(Error(p$1(421)));
			return tj(a, b, g$1, d);
		}
		if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
		a = f$2.treeContext;
		yg = Lf(e.nextSibling);
		xg = b;
		I = !0;
		zg = null;
		null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
		b = rj(b, d.children);
		b.flags |= 4096;
		return b;
	}
	function wj(a, b, c) {
		a.lanes |= b;
		var d = a.alternate;
		null !== d && (d.lanes |= b);
		Sg(a.return, b, c);
	}
	function xj(a, b, c, d, e) {
		var f$2 = a.memoizedState;
		null === f$2 ? a.memoizedState = {
			isBackwards: b,
			rendering: null,
			renderingStartTime: 0,
			last: d,
			tail: c,
			tailMode: e
		} : (f$2.isBackwards = b, f$2.rendering = null, f$2.renderingStartTime = 0, f$2.last = d, f$2.tail = c, f$2.tailMode = e);
	}
	function yj(a, b, c) {
		var d = b.pendingProps, e = d.revealOrder, f$2 = d.tail;
		Yi(a, b, d.children, c);
		d = M.current;
		if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
		else {
			if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
				if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);
				else if (19 === a.tag) wj(a, c, b);
				else if (null !== a.child) {
					a.child.return = a;
					a = a.child;
					continue;
				}
				if (a === b) break a;
				for (; null === a.sibling;) {
					if (null === a.return || a.return === b) break a;
					a = a.return;
				}
				a.sibling.return = a.return;
				a = a.sibling;
			}
			d &= 1;
		}
		G(M, d);
		if (0 === (b.mode & 1)) b.memoizedState = null;
		else switch (e) {
			case "forwards":
				c = b.child;
				for (e = null; null !== c;) a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
				c = e;
				null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
				xj(b, !1, e, c, f$2);
				break;
			case "backwards":
				c = null;
				e = b.child;
				for (b.child = null; null !== e;) {
					a = e.alternate;
					if (null !== a && null === Mh(a)) {
						b.child = e;
						break;
					}
					a = e.sibling;
					e.sibling = c;
					c = e;
					e = a;
				}
				xj(b, !0, c, null, f$2);
				break;
			case "together":
				xj(b, !1, null, null, void 0);
				break;
			default: b.memoizedState = null;
		}
		return b.child;
	}
	function jj(a, b) {
		0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	}
	function $i(a, b, c) {
		null !== a && (b.dependencies = a.dependencies);
		hh |= b.lanes;
		if (0 === (c & b.childLanes)) return null;
		if (null !== a && b.child !== a.child) throw Error(p$1(153));
		if (null !== b.child) {
			a = b.child;
			c = wh(a, a.pendingProps);
			b.child = c;
			for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
			c.sibling = null;
		}
		return b.child;
	}
	function zj(a, b, c) {
		switch (b.tag) {
			case 3:
				lj(b);
				Ig();
				break;
			case 5:
				Kh(b);
				break;
			case 1:
				Zf(b.type) && cg(b);
				break;
			case 4:
				Ih(b, b.stateNode.containerInfo);
				break;
			case 10:
				var d = b.type._context, e = b.memoizedProps.value;
				G(Mg, d._currentValue);
				d._currentValue = e;
				break;
			case 13:
				d = b.memoizedState;
				if (null !== d) {
					if (null !== d.dehydrated) return G(M, M.current & 1), b.flags |= 128, null;
					if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
					G(M, M.current & 1);
					a = $i(a, b, c);
					return null !== a ? a.sibling : null;
				}
				G(M, M.current & 1);
				break;
			case 19:
				d = 0 !== (c & b.childLanes);
				if (0 !== (a.flags & 128)) {
					if (d) return yj(a, b, c);
					b.flags |= 128;
				}
				e = b.memoizedState;
				null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
				G(M, M.current);
				if (d) break;
				else return null;
			case 22:
			case 23: return b.lanes = 0, ej(a, b, c);
		}
		return $i(a, b, c);
	}
	var Aj, Bj, Cj, Dj;
	Aj = function(a, b) {
		for (var c = b.child; null !== c;) {
			if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
			else if (4 !== c.tag && null !== c.child) {
				c.child.return = c;
				c = c.child;
				continue;
			}
			if (c === b) break;
			for (; null === c.sibling;) {
				if (null === c.return || c.return === b) return;
				c = c.return;
			}
			c.sibling.return = c.return;
			c = c.sibling;
		}
	};
	Bj = function() {};
	Cj = function(a, b, c, d) {
		var e = a.memoizedProps;
		if (e !== d) {
			a = b.stateNode;
			Hh(Eh.current);
			var f$2 = null;
			switch (c) {
				case "input":
					e = Ya(a, e);
					d = Ya(a, d);
					f$2 = [];
					break;
				case "select":
					e = A({}, e, { value: void 0 });
					d = A({}, d, { value: void 0 });
					f$2 = [];
					break;
				case "textarea":
					e = gb(a, e);
					d = gb(a, d);
					f$2 = [];
					break;
				default: "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
			}
			ub(c, d);
			var g$1;
			c = null;
			for (l$3 in e) if (!d.hasOwnProperty(l$3) && e.hasOwnProperty(l$3) && null != e[l$3]) if ("style" === l$3) {
				var h$1 = e[l$3];
				for (g$1 in h$1) h$1.hasOwnProperty(g$1) && (c || (c = {}), c[g$1] = "");
			} else "dangerouslySetInnerHTML" !== l$3 && "children" !== l$3 && "suppressContentEditableWarning" !== l$3 && "suppressHydrationWarning" !== l$3 && "autoFocus" !== l$3 && (ea.hasOwnProperty(l$3) ? f$2 || (f$2 = []) : (f$2 = f$2 || []).push(l$3, null));
			for (l$3 in d) {
				var k$2 = d[l$3];
				h$1 = null != e ? e[l$3] : void 0;
				if (d.hasOwnProperty(l$3) && k$2 !== h$1 && (null != k$2 || null != h$1)) if ("style" === l$3) if (h$1) {
					for (g$1 in h$1) !h$1.hasOwnProperty(g$1) || k$2 && k$2.hasOwnProperty(g$1) || (c || (c = {}), c[g$1] = "");
					for (g$1 in k$2) k$2.hasOwnProperty(g$1) && h$1[g$1] !== k$2[g$1] && (c || (c = {}), c[g$1] = k$2[g$1]);
				} else c || (f$2 || (f$2 = []), f$2.push(l$3, c)), c = k$2;
				else "dangerouslySetInnerHTML" === l$3 ? (k$2 = k$2 ? k$2.__html : void 0, h$1 = h$1 ? h$1.__html : void 0, null != k$2 && h$1 !== k$2 && (f$2 = f$2 || []).push(l$3, k$2)) : "children" === l$3 ? "string" !== typeof k$2 && "number" !== typeof k$2 || (f$2 = f$2 || []).push(l$3, "" + k$2) : "suppressContentEditableWarning" !== l$3 && "suppressHydrationWarning" !== l$3 && (ea.hasOwnProperty(l$3) ? (null != k$2 && "onScroll" === l$3 && D("scroll", a), f$2 || h$1 === k$2 || (f$2 = [])) : (f$2 = f$2 || []).push(l$3, k$2));
			}
			c && (f$2 = f$2 || []).push("style", c);
			var l$3 = f$2;
			if (b.updateQueue = l$3) b.flags |= 4;
		}
	};
	Dj = function(a, b, c, d) {
		c !== d && (b.flags |= 4);
	};
	function Ej(a, b) {
		if (!I) switch (a.tailMode) {
			case "hidden":
				b = a.tail;
				for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
				null === c ? a.tail = null : c.sibling = null;
				break;
			case "collapsed":
				c = a.tail;
				for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
				null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
		}
	}
	function S(a) {
		var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
		if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
		else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
		a.subtreeFlags |= d;
		a.childLanes = c;
		return b;
	}
	function Fj(a, b, c) {
		var d = b.pendingProps;
		wg(b);
		switch (b.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return S(b), null;
			case 1: return Zf(b.type) && $f(), S(b), null;
			case 3:
				d = b.stateNode;
				Jh();
				E(Wf);
				E(H);
				Oh();
				d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
				if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
				Bj(a, b);
				S(b);
				return null;
			case 5:
				Lh(b);
				var e = Hh(Gh.current);
				c = b.type;
				if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				else {
					if (!d) {
						if (null === b.stateNode) throw Error(p$1(166));
						S(b);
						return null;
					}
					a = Hh(Eh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.type;
						var f$2 = b.memoizedProps;
						d[Of] = b;
						d[Pf] = f$2;
						a = 0 !== (b.mode & 1);
						switch (c) {
							case "dialog":
								D("cancel", d);
								D("close", d);
								break;
							case "iframe":
							case "object":
							case "embed":
								D("load", d);
								break;
							case "video":
							case "audio":
								for (e = 0; e < lf.length; e++) D(lf[e], d);
								break;
							case "source":
								D("error", d);
								break;
							case "img":
							case "image":
							case "link":
								D("error", d);
								D("load", d);
								break;
							case "details":
								D("toggle", d);
								break;
							case "input":
								Za(d, f$2);
								D("invalid", d);
								break;
							case "select":
								d._wrapperState = { wasMultiple: !!f$2.multiple };
								D("invalid", d);
								break;
							case "textarea": hb(d, f$2), D("invalid", d);
						}
						ub(c, f$2);
						e = null;
						for (var g$1 in f$2) if (f$2.hasOwnProperty(g$1)) {
							var h$1 = f$2[g$1];
							"children" === g$1 ? "string" === typeof h$1 ? d.textContent !== h$1 && (!0 !== f$2.suppressHydrationWarning && Af(d.textContent, h$1, a), e = ["children", h$1]) : "number" === typeof h$1 && d.textContent !== "" + h$1 && (!0 !== f$2.suppressHydrationWarning && Af(d.textContent, h$1, a), e = ["children", "" + h$1]) : ea.hasOwnProperty(g$1) && null != h$1 && "onScroll" === g$1 && D("scroll", d);
						}
						switch (c) {
							case "input":
								Va(d);
								db(d, f$2, !0);
								break;
							case "textarea":
								Va(d);
								jb(d);
								break;
							case "select":
							case "option": break;
							default: "function" === typeof f$2.onClick && (d.onclick = Bf);
						}
						d = e;
						b.updateQueue = d;
						null !== d && (b.flags |= 4);
					} else {
						g$1 = 9 === e.nodeType ? e : e.ownerDocument;
						"http://www.w3.org/1999/xhtml" === a && (a = kb(c));
						"http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g$1.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g$1.createElement(c, { is: d.is }) : (a = g$1.createElement(c), "select" === c && (g$1 = a, d.multiple ? g$1.multiple = !0 : d.size && (g$1.size = d.size))) : a = g$1.createElementNS(a, c);
						a[Of] = b;
						a[Pf] = d;
						Aj(a, b, !1, !1);
						b.stateNode = a;
						a: {
							g$1 = vb(c, d);
							switch (c) {
								case "dialog":
									D("cancel", a);
									D("close", a);
									e = d;
									break;
								case "iframe":
								case "object":
								case "embed":
									D("load", a);
									e = d;
									break;
								case "video":
								case "audio":
									for (e = 0; e < lf.length; e++) D(lf[e], a);
									e = d;
									break;
								case "source":
									D("error", a);
									e = d;
									break;
								case "img":
								case "image":
								case "link":
									D("error", a);
									D("load", a);
									e = d;
									break;
								case "details":
									D("toggle", a);
									e = d;
									break;
								case "input":
									Za(a, d);
									e = Ya(a, d);
									D("invalid", a);
									break;
								case "option":
									e = d;
									break;
								case "select":
									a._wrapperState = { wasMultiple: !!d.multiple };
									e = A({}, d, { value: void 0 });
									D("invalid", a);
									break;
								case "textarea":
									hb(a, d);
									e = gb(a, d);
									D("invalid", a);
									break;
								default: e = d;
							}
							ub(c, e);
							h$1 = e;
							for (f$2 in h$1) if (h$1.hasOwnProperty(f$2)) {
								var k$2 = h$1[f$2];
								"style" === f$2 ? sb(a, k$2) : "dangerouslySetInnerHTML" === f$2 ? (k$2 = k$2 ? k$2.__html : void 0, null != k$2 && nb(a, k$2)) : "children" === f$2 ? "string" === typeof k$2 ? ("textarea" !== c || "" !== k$2) && ob(a, k$2) : "number" === typeof k$2 && ob(a, "" + k$2) : "suppressContentEditableWarning" !== f$2 && "suppressHydrationWarning" !== f$2 && "autoFocus" !== f$2 && (ea.hasOwnProperty(f$2) ? null != k$2 && "onScroll" === f$2 && D("scroll", a) : null != k$2 && ta(a, f$2, k$2, g$1));
							}
							switch (c) {
								case "input":
									Va(a);
									db(a, d, !1);
									break;
								case "textarea":
									Va(a);
									jb(a);
									break;
								case "option":
									null != d.value && a.setAttribute("value", "" + Sa(d.value));
									break;
								case "select":
									a.multiple = !!d.multiple;
									f$2 = d.value;
									null != f$2 ? fb(a, !!d.multiple, f$2, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
									break;
								default: "function" === typeof e.onClick && (a.onclick = Bf);
							}
							switch (c) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									d = !!d.autoFocus;
									break a;
								case "img":
									d = !0;
									break a;
								default: d = !1;
							}
						}
						d && (b.flags |= 4);
					}
					null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				}
				S(b);
				return null;
			case 6:
				if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);
				else {
					if ("string" !== typeof d && null === b.stateNode) throw Error(p$1(166));
					c = Hh(Gh.current);
					Hh(Eh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.memoizedProps;
						d[Of] = b;
						if (f$2 = d.nodeValue !== c) {
							if (a = xg, null !== a) switch (a.tag) {
								case 3:
									Af(d.nodeValue, c, 0 !== (a.mode & 1));
									break;
								case 5: !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
							}
						}
						f$2 && (b.flags |= 4);
					} else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
				}
				S(b);
				return null;
			case 13:
				E(M);
				d = b.memoizedState;
				if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
					if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f$2 = !1;
					else if (f$2 = Gg(b), null !== d && null !== d.dehydrated) {
						if (null === a) {
							if (!f$2) throw Error(p$1(318));
							f$2 = b.memoizedState;
							f$2 = null !== f$2 ? f$2.dehydrated : null;
							if (!f$2) throw Error(p$1(317));
							f$2[Of] = b;
						} else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
						S(b);
						f$2 = !1;
					} else null !== zg && (Gj(zg), zg = null), f$2 = !0;
					if (!f$2) return b.flags & 65536 ? b : null;
				}
				if (0 !== (b.flags & 128)) return b.lanes = c, b;
				d = null !== d;
				d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
				null !== b.updateQueue && (b.flags |= 4);
				S(b);
				return null;
			case 4: return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
			case 10: return Rg(b.type._context), S(b), null;
			case 17: return Zf(b.type) && $f(), S(b), null;
			case 19:
				E(M);
				f$2 = b.memoizedState;
				if (null === f$2) return S(b), null;
				d = 0 !== (b.flags & 128);
				g$1 = f$2.rendering;
				if (null === g$1) if (d) Ej(f$2, !1);
				else {
					if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
						g$1 = Mh(a);
						if (null !== g$1) {
							b.flags |= 128;
							Ej(f$2, !1);
							d = g$1.updateQueue;
							null !== d && (b.updateQueue = d, b.flags |= 4);
							b.subtreeFlags = 0;
							d = c;
							for (c = b.child; null !== c;) f$2 = c, a = d, f$2.flags &= 14680066, g$1 = f$2.alternate, null === g$1 ? (f$2.childLanes = 0, f$2.lanes = a, f$2.child = null, f$2.subtreeFlags = 0, f$2.memoizedProps = null, f$2.memoizedState = null, f$2.updateQueue = null, f$2.dependencies = null, f$2.stateNode = null) : (f$2.childLanes = g$1.childLanes, f$2.lanes = g$1.lanes, f$2.child = g$1.child, f$2.subtreeFlags = 0, f$2.deletions = null, f$2.memoizedProps = g$1.memoizedProps, f$2.memoizedState = g$1.memoizedState, f$2.updateQueue = g$1.updateQueue, f$2.type = g$1.type, a = g$1.dependencies, f$2.dependencies = null === a ? null : {
								lanes: a.lanes,
								firstContext: a.firstContext
							}), c = c.sibling;
							G(M, M.current & 1 | 2);
							return b.child;
						}
						a = a.sibling;
					}
					null !== f$2.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f$2, !1), b.lanes = 4194304);
				}
				else {
					if (!d) if (a = Mh(g$1), null !== a) {
						if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f$2, !0), null === f$2.tail && "hidden" === f$2.tailMode && !g$1.alternate && !I) return S(b), null;
					} else 2 * B() - f$2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f$2, !1), b.lanes = 4194304);
					f$2.isBackwards ? (g$1.sibling = b.child, b.child = g$1) : (c = f$2.last, null !== c ? c.sibling = g$1 : b.child = g$1, f$2.last = g$1);
				}
				if (null !== f$2.tail) return b = f$2.tail, f$2.rendering = b, f$2.tail = b.sibling, f$2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
				S(b);
				return null;
			case 22:
			case 23: return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(p$1(156, b.tag));
	}
	function Jj(a, b) {
		wg(b);
		switch (b.tag) {
			case 1: return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 3: return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
			case 5: return Lh(b), null;
			case 13:
				E(M);
				a = b.memoizedState;
				if (null !== a && null !== a.dehydrated) {
					if (null === b.alternate) throw Error(p$1(340));
					Ig();
				}
				a = b.flags;
				return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 19: return E(M), null;
			case 4: return Jh(), null;
			case 10: return Rg(b.type._context), null;
			case 22:
			case 23: return Ij(), null;
			case 24: return null;
			default: return null;
		}
	}
	var Kj = !1, U = !1, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
	function Mj(a, b) {
		var c = a.ref;
		if (null !== c) if ("function" === typeof c) try {
			c(null);
		} catch (d) {
			W(a, b, d);
		}
		else c.current = null;
	}
	function Nj(a, b, c) {
		try {
			c();
		} catch (d) {
			W(a, b, d);
		}
	}
	var Oj = !1;
	function Pj(a, b) {
		Cf = dd;
		a = Me();
		if (Ne(a)) {
			if ("selectionStart" in a) var c = {
				start: a.selectionStart,
				end: a.selectionEnd
			};
			else a: {
				c = (c = a.ownerDocument) && c.defaultView || window;
				var d = c.getSelection && c.getSelection();
				if (d && 0 !== d.rangeCount) {
					c = d.anchorNode;
					var e = d.anchorOffset, f$2 = d.focusNode;
					d = d.focusOffset;
					try {
						c.nodeType, f$2.nodeType;
					} catch (F$2) {
						c = null;
						break a;
					}
					var g$1 = 0, h$1 = -1, k$2 = -1, l$3 = 0, m$2 = 0, q$3 = a, r$2 = null;
					b: for (;;) {
						for (var y$2;;) {
							q$3 !== c || 0 !== e && 3 !== q$3.nodeType || (h$1 = g$1 + e);
							q$3 !== f$2 || 0 !== d && 3 !== q$3.nodeType || (k$2 = g$1 + d);
							3 === q$3.nodeType && (g$1 += q$3.nodeValue.length);
							if (null === (y$2 = q$3.firstChild)) break;
							r$2 = q$3;
							q$3 = y$2;
						}
						for (;;) {
							if (q$3 === a) break b;
							r$2 === c && ++l$3 === e && (h$1 = g$1);
							r$2 === f$2 && ++m$2 === d && (k$2 = g$1);
							if (null !== (y$2 = q$3.nextSibling)) break;
							q$3 = r$2;
							r$2 = q$3.parentNode;
						}
						q$3 = y$2;
					}
					c = -1 === h$1 || -1 === k$2 ? null : {
						start: h$1,
						end: k$2
					};
				} else c = null;
			}
			c = c || {
				start: 0,
				end: 0
			};
		} else c = null;
		Df = {
			focusedElem: a,
			selectionRange: c
		};
		dd = !1;
		for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
		else for (; null !== V;) {
			b = V;
			try {
				var n$2 = b.alternate;
				if (0 !== (b.flags & 1024)) switch (b.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (null !== n$2) {
							var t$3 = n$2.memoizedProps, J$2 = n$2.memoizedState, x$1 = b.stateNode, w$1 = x$1.getSnapshotBeforeUpdate(b.elementType === b.type ? t$3 : Lg(b.type, t$3), J$2);
							x$1.__reactInternalSnapshotBeforeUpdate = w$1;
						}
						break;
					case 3:
						var u$2 = b.stateNode.containerInfo;
						1 === u$2.nodeType ? u$2.textContent = "" : 9 === u$2.nodeType && u$2.documentElement && u$2.removeChild(u$2.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(p$1(163));
				}
			} catch (F$2) {
				W(b, b.return, F$2);
			}
			a = b.sibling;
			if (null !== a) {
				a.return = b.return;
				V = a;
				break;
			}
			V = b.return;
		}
		n$2 = Oj;
		Oj = !1;
		return n$2;
	}
	function Qj(a, b, c) {
		var d = b.updateQueue;
		d = null !== d ? d.lastEffect : null;
		if (null !== d) {
			var e = d = d.next;
			do {
				if ((e.tag & a) === a) {
					var f$2 = e.destroy;
					e.destroy = void 0;
					void 0 !== f$2 && Nj(b, c, f$2);
				}
				e = e.next;
			} while (e !== d);
		}
	}
	function Rj(a, b) {
		b = b.updateQueue;
		b = null !== b ? b.lastEffect : null;
		if (null !== b) {
			var c = b = b.next;
			do {
				if ((c.tag & a) === a) {
					var d = c.create;
					c.destroy = d();
				}
				c = c.next;
			} while (c !== b);
		}
	}
	function Sj(a) {
		var b = a.ref;
		if (null !== b) {
			var c = a.stateNode;
			switch (a.tag) {
				case 5:
					a = c;
					break;
				default: a = c;
			}
			"function" === typeof b ? b(a) : b.current = a;
		}
	}
	function Tj(a) {
		var b = a.alternate;
		null !== b && (a.alternate = null, Tj(b));
		a.child = null;
		a.deletions = null;
		a.sibling = null;
		5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
		a.stateNode = null;
		a.return = null;
		a.dependencies = null;
		a.memoizedProps = null;
		a.memoizedState = null;
		a.pendingProps = null;
		a.stateNode = null;
		a.updateQueue = null;
	}
	function Uj(a) {
		return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Vj(a) {
		a: for (;;) {
			for (; null === a.sibling;) {
				if (null === a.return || Uj(a.return)) return null;
				a = a.return;
			}
			a.sibling.return = a.return;
			for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
				if (a.flags & 2) continue a;
				if (null === a.child || 4 === a.tag) continue a;
				else a.child.return = a, a = a.child;
			}
			if (!(a.flags & 2)) return a.stateNode;
		}
	}
	function Wj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
		else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	}
	function Xj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
		else if (4 !== d && (a = a.child, null !== a)) for (Xj(a, b, c), a = a.sibling; null !== a;) Xj(a, b, c), a = a.sibling;
	}
	var X = null, Yj = !1;
	function Zj(a, b, c) {
		for (c = c.child; null !== c;) ak(a, b, c), c = c.sibling;
	}
	function ak(a, b, c) {
		if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
			lc.onCommitFiberUnmount(kc, c);
		} catch (h$1) {}
		switch (c.tag) {
			case 5: U || Mj(c, b);
			case 6:
				var d = X, e = Yj;
				X = null;
				Zj(a, b, c);
				X = d;
				Yj = e;
				null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
				break;
			case 18:
				null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
				break;
			case 4:
				d = X;
				e = Yj;
				X = c.stateNode.containerInfo;
				Yj = !0;
				Zj(a, b, c);
				X = d;
				Yj = e;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
					e = d = d.next;
					do {
						var f$2 = e, g$1 = f$2.destroy;
						f$2 = f$2.tag;
						void 0 !== g$1 && (0 !== (f$2 & 2) ? Nj(c, b, g$1) : 0 !== (f$2 & 4) && Nj(c, b, g$1));
						e = e.next;
					} while (e !== d);
				}
				Zj(a, b, c);
				break;
			case 1:
				if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
					d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
				} catch (h$1) {
					W(c, b, h$1);
				}
				Zj(a, b, c);
				break;
			case 21:
				Zj(a, b, c);
				break;
			case 22:
				c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
				break;
			default: Zj(a, b, c);
		}
	}
	function bk(a) {
		var b = a.updateQueue;
		if (null !== b) {
			a.updateQueue = null;
			var c = a.stateNode;
			null === c && (c = a.stateNode = new Lj());
			b.forEach(function(b$1) {
				var d = ck.bind(null, a, b$1);
				c.has(b$1) || (c.add(b$1), b$1.then(d, d));
			});
		}
	}
	function dk(a, b) {
		var c = b.deletions;
		if (null !== c) for (var d = 0; d < c.length; d++) {
			var e = c[d];
			try {
				var f$2 = a, g$1 = b, h$1 = g$1;
				a: for (; null !== h$1;) {
					switch (h$1.tag) {
						case 5:
							X = h$1.stateNode;
							Yj = !1;
							break a;
						case 3:
							X = h$1.stateNode.containerInfo;
							Yj = !0;
							break a;
						case 4:
							X = h$1.stateNode.containerInfo;
							Yj = !0;
							break a;
					}
					h$1 = h$1.return;
				}
				if (null === X) throw Error(p$1(160));
				ak(f$2, g$1, e);
				X = null;
				Yj = !1;
				var k$2 = e.alternate;
				null !== k$2 && (k$2.return = null);
				e.return = null;
			} catch (l$3) {
				W(e, b, l$3);
			}
		}
		if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) ek(b, a), b = b.sibling;
	}
	function ek(a, b) {
		var c = a.alternate, d = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				dk(b, a);
				fk(a);
				if (d & 4) {
					try {
						Qj(3, a, a.return), Rj(3, a);
					} catch (t$3) {
						W(a, a.return, t$3);
					}
					try {
						Qj(5, a, a.return);
					} catch (t$3) {
						W(a, a.return, t$3);
					}
				}
				break;
			case 1:
				dk(b, a);
				fk(a);
				d & 512 && null !== c && Mj(c, c.return);
				break;
			case 5:
				dk(b, a);
				fk(a);
				d & 512 && null !== c && Mj(c, c.return);
				if (a.flags & 32) {
					var e = a.stateNode;
					try {
						ob(e, "");
					} catch (t$3) {
						W(a, a.return, t$3);
					}
				}
				if (d & 4 && (e = a.stateNode, null != e)) {
					var f$2 = a.memoizedProps, g$1 = null !== c ? c.memoizedProps : f$2, h$1 = a.type, k$2 = a.updateQueue;
					a.updateQueue = null;
					if (null !== k$2) try {
						"input" === h$1 && "radio" === f$2.type && null != f$2.name && ab(e, f$2);
						vb(h$1, g$1);
						var l$3 = vb(h$1, f$2);
						for (g$1 = 0; g$1 < k$2.length; g$1 += 2) {
							var m$2 = k$2[g$1], q$3 = k$2[g$1 + 1];
							"style" === m$2 ? sb(e, q$3) : "dangerouslySetInnerHTML" === m$2 ? nb(e, q$3) : "children" === m$2 ? ob(e, q$3) : ta(e, m$2, q$3, l$3);
						}
						switch (h$1) {
							case "input":
								bb(e, f$2);
								break;
							case "textarea":
								ib(e, f$2);
								break;
							case "select":
								var r$2 = e._wrapperState.wasMultiple;
								e._wrapperState.wasMultiple = !!f$2.multiple;
								var y$2 = f$2.value;
								null != y$2 ? fb(e, !!f$2.multiple, y$2, !1) : r$2 !== !!f$2.multiple && (null != f$2.defaultValue ? fb(e, !!f$2.multiple, f$2.defaultValue, !0) : fb(e, !!f$2.multiple, f$2.multiple ? [] : "", !1));
						}
						e[Pf] = f$2;
					} catch (t$3) {
						W(a, a.return, t$3);
					}
				}
				break;
			case 6:
				dk(b, a);
				fk(a);
				if (d & 4) {
					if (null === a.stateNode) throw Error(p$1(162));
					e = a.stateNode;
					f$2 = a.memoizedProps;
					try {
						e.nodeValue = f$2;
					} catch (t$3) {
						W(a, a.return, t$3);
					}
				}
				break;
			case 3:
				dk(b, a);
				fk(a);
				if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
					bd(b.containerInfo);
				} catch (t$3) {
					W(a, a.return, t$3);
				}
				break;
			case 4:
				dk(b, a);
				fk(a);
				break;
			case 13:
				dk(b, a);
				fk(a);
				e = a.child;
				e.flags & 8192 && (f$2 = null !== e.memoizedState, e.stateNode.isHidden = f$2, !f$2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
				d & 4 && bk(a);
				break;
			case 22:
				m$2 = null !== c && null !== c.memoizedState;
				a.mode & 1 ? (U = (l$3 = U) || m$2, dk(b, a), U = l$3) : dk(b, a);
				fk(a);
				if (d & 8192) {
					l$3 = null !== a.memoizedState;
					if ((a.stateNode.isHidden = l$3) && !m$2 && 0 !== (a.mode & 1)) for (V = a, m$2 = a.child; null !== m$2;) {
						for (q$3 = V = m$2; null !== V;) {
							r$2 = V;
							y$2 = r$2.child;
							switch (r$2.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Qj(4, r$2, r$2.return);
									break;
								case 1:
									Mj(r$2, r$2.return);
									var n$2 = r$2.stateNode;
									if ("function" === typeof n$2.componentWillUnmount) {
										d = r$2;
										c = r$2.return;
										try {
											b = d, n$2.props = b.memoizedProps, n$2.state = b.memoizedState, n$2.componentWillUnmount();
										} catch (t$3) {
											W(d, c, t$3);
										}
									}
									break;
								case 5:
									Mj(r$2, r$2.return);
									break;
								case 22: if (null !== r$2.memoizedState) {
									hk(q$3);
									continue;
								}
							}
							null !== y$2 ? (y$2.return = r$2, V = y$2) : hk(q$3);
						}
						m$2 = m$2.sibling;
					}
					a: for (m$2 = null, q$3 = a;;) {
						if (5 === q$3.tag) {
							if (null === m$2) {
								m$2 = q$3;
								try {
									e = q$3.stateNode, l$3 ? (f$2 = e.style, "function" === typeof f$2.setProperty ? f$2.setProperty("display", "none", "important") : f$2.display = "none") : (h$1 = q$3.stateNode, k$2 = q$3.memoizedProps.style, g$1 = void 0 !== k$2 && null !== k$2 && k$2.hasOwnProperty("display") ? k$2.display : null, h$1.style.display = rb("display", g$1));
								} catch (t$3) {
									W(a, a.return, t$3);
								}
							}
						} else if (6 === q$3.tag) {
							if (null === m$2) try {
								q$3.stateNode.nodeValue = l$3 ? "" : q$3.memoizedProps;
							} catch (t$3) {
								W(a, a.return, t$3);
							}
						} else if ((22 !== q$3.tag && 23 !== q$3.tag || null === q$3.memoizedState || q$3 === a) && null !== q$3.child) {
							q$3.child.return = q$3;
							q$3 = q$3.child;
							continue;
						}
						if (q$3 === a) break a;
						for (; null === q$3.sibling;) {
							if (null === q$3.return || q$3.return === a) break a;
							m$2 === q$3 && (m$2 = null);
							q$3 = q$3.return;
						}
						m$2 === q$3 && (m$2 = null);
						q$3.sibling.return = q$3.return;
						q$3 = q$3.sibling;
					}
				}
				break;
			case 19:
				dk(b, a);
				fk(a);
				d & 4 && bk(a);
				break;
			case 21: break;
			default: dk(b, a), fk(a);
		}
	}
	function fk(a) {
		var b = a.flags;
		if (b & 2) {
			try {
				a: {
					for (var c = a.return; null !== c;) {
						if (Uj(c)) {
							var d = c;
							break a;
						}
						c = c.return;
					}
					throw Error(p$1(160));
				}
				switch (d.tag) {
					case 5:
						var e = d.stateNode;
						d.flags & 32 && (ob(e, ""), d.flags &= -33);
						var f$2 = Vj(a);
						Xj(a, f$2, e);
						break;
					case 3:
					case 4:
						var g$1 = d.stateNode.containerInfo, h$1 = Vj(a);
						Wj(a, h$1, g$1);
						break;
					default: throw Error(p$1(161));
				}
			} catch (k$2) {
				W(a, a.return, k$2);
			}
			a.flags &= -3;
		}
		b & 4096 && (a.flags &= -4097);
	}
	function ik(a, b, c) {
		V = a;
		jk(a, b, c);
	}
	function jk(a, b, c) {
		for (var d = 0 !== (a.mode & 1); null !== V;) {
			var e = V, f$2 = e.child;
			if (22 === e.tag && d) {
				var g$1 = null !== e.memoizedState || Kj;
				if (!g$1) {
					var h$1 = e.alternate, k$2 = null !== h$1 && null !== h$1.memoizedState || U;
					h$1 = Kj;
					var l$3 = U;
					Kj = g$1;
					if ((U = k$2) && !l$3) for (V = e; null !== V;) g$1 = V, k$2 = g$1.child, 22 === g$1.tag && null !== g$1.memoizedState ? kk(e) : null !== k$2 ? (k$2.return = g$1, V = k$2) : kk(e);
					for (; null !== f$2;) V = f$2, jk(f$2, b, c), f$2 = f$2.sibling;
					V = e;
					Kj = h$1;
					U = l$3;
				}
				lk(a, b, c);
			} else 0 !== (e.subtreeFlags & 8772) && null !== f$2 ? (f$2.return = e, V = f$2) : lk(a, b, c);
		}
	}
	function lk(a) {
		for (; null !== V;) {
			var b = V;
			if (0 !== (b.flags & 8772)) {
				var c = b.alternate;
				try {
					if (0 !== (b.flags & 8772)) switch (b.tag) {
						case 0:
						case 11:
						case 15:
							U || Rj(5, b);
							break;
						case 1:
							var d = b.stateNode;
							if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
							else {
								var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
								d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
							}
							var f$2 = b.updateQueue;
							null !== f$2 && ih(b, f$2, d);
							break;
						case 3:
							var g$1 = b.updateQueue;
							if (null !== g$1) {
								c = null;
								if (null !== b.child) switch (b.child.tag) {
									case 5:
										c = b.child.stateNode;
										break;
									case 1: c = b.child.stateNode;
								}
								ih(b, g$1, c);
							}
							break;
						case 5:
							var h$1 = b.stateNode;
							if (null === c && b.flags & 4) {
								c = h$1;
								var k$2 = b.memoizedProps;
								switch (b.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										k$2.autoFocus && c.focus();
										break;
									case "img": k$2.src && (c.src = k$2.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (null === b.memoizedState) {
								var l$3 = b.alternate;
								if (null !== l$3) {
									var m$2 = l$3.memoizedState;
									if (null !== m$2) {
										var q$3 = m$2.dehydrated;
										null !== q$3 && bd(q$3);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(p$1(163));
					}
					U || b.flags & 512 && Sj(b);
				} catch (r$2) {
					W(b, b.return, r$2);
				}
			}
			if (b === a) {
				V = null;
				break;
			}
			c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function hk(a) {
		for (; null !== V;) {
			var b = V;
			if (b === a) {
				V = null;
				break;
			}
			var c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function kk(a) {
		for (; null !== V;) {
			var b = V;
			try {
				switch (b.tag) {
					case 0:
					case 11:
					case 15:
						var c = b.return;
						try {
							Rj(4, b);
						} catch (k$2) {
							W(b, c, k$2);
						}
						break;
					case 1:
						var d = b.stateNode;
						if ("function" === typeof d.componentDidMount) {
							var e = b.return;
							try {
								d.componentDidMount();
							} catch (k$2) {
								W(b, e, k$2);
							}
						}
						var f$2 = b.return;
						try {
							Sj(b);
						} catch (k$2) {
							W(b, f$2, k$2);
						}
						break;
					case 5:
						var g$1 = b.return;
						try {
							Sj(b);
						} catch (k$2) {
							W(b, g$1, k$2);
						}
				}
			} catch (k$2) {
				W(b, b.return, k$2);
			}
			if (b === a) {
				V = null;
				break;
			}
			var h$1 = b.sibling;
			if (null !== h$1) {
				h$1.return = b.return;
				V = h$1;
				break;
			}
			V = b.return;
		}
	}
	var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = !1, Qi = null, Si = null, wk = !1, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
	function L() {
		return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
	}
	function lh(a) {
		if (0 === (a.mode & 1)) return 1;
		if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
		if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
		a = C;
		if (0 !== a) return a;
		a = window.event;
		a = void 0 === a ? 16 : jd(a.type);
		return a;
	}
	function mh(a, b, c, d) {
		if (50 < zk) throw zk = 0, Ak = null, Error(p$1(185));
		Ac(a, c, d);
		if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
	}
	function Ek(a, b) {
		var c = a.callbackNode;
		wc(a, b);
		var d = uc(a, a === R ? Z : 0);
		if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
		else if (b = d & -d, a.callbackPriority !== b) {
			null != c && bc(c);
			if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
				0 === (K & 6) && jg();
			}), c = null;
			else {
				switch (Dc(d)) {
					case 1:
						c = fc;
						break;
					case 4:
						c = gc;
						break;
					case 16:
						c = hc;
						break;
					case 536870912:
						c = jc;
						break;
					default: c = hc;
				}
				c = Gk(c, Hk.bind(null, a));
			}
			a.callbackPriority = b;
			a.callbackNode = c;
		}
	}
	function Hk(a, b) {
		Bk = -1;
		Ck = 0;
		if (0 !== (K & 6)) throw Error(p$1(327));
		var c = a.callbackNode;
		if (Ik() && a.callbackNode !== c) return null;
		var d = uc(a, a === R ? Z : 0);
		if (0 === d) return null;
		if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);
		else {
			b = d;
			var e = K;
			K |= 2;
			var f$2 = Kk();
			if (R !== a || Z !== b) vk = null, Hj = B() + 500, Lk(a, b);
			do
				try {
					Mk();
					break;
				} catch (h$1) {
					Nk(a, h$1);
				}
			while (1);
			Qg();
			nk.current = f$2;
			K = e;
			null !== Y ? b = 0 : (R = null, Z = 0, b = T);
		}
		if (0 !== b) {
			2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
			if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
			if (6 === b) Dk(a, d);
			else {
				e = a.current.alternate;
				if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f$2 = xc(a), 0 !== f$2 && (d = f$2, b = Ok(a, f$2))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
				a.finishedWork = e;
				a.finishedLanes = d;
				switch (b) {
					case 0:
					case 1: throw Error(p$1(345));
					case 2:
						Qk(a, uk, vk);
						break;
					case 3:
						Dk(a, d);
						if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
							if (0 !== uc(a, 0)) break;
							e = a.suspendedLanes;
							if ((e & d) !== d) {
								L();
								a.pingedLanes |= a.suspendedLanes & e;
								break;
							}
							a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
							break;
						}
						Qk(a, uk, vk);
						break;
					case 4:
						Dk(a, d);
						if ((d & 4194240) === d) break;
						b = a.eventTimes;
						for (e = -1; 0 < d;) {
							var g$1 = 31 - oc(d);
							f$2 = 1 << g$1;
							g$1 = b[g$1];
							g$1 > e && (e = g$1);
							d &= ~f$2;
						}
						d = e;
						d = B() - d;
						d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
						if (10 < d) {
							a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
							break;
						}
						Qk(a, uk, vk);
						break;
					case 5:
						Qk(a, uk, vk);
						break;
					default: throw Error(p$1(329));
				}
			}
		}
		Ek(a, B());
		return a.callbackNode === c ? Hk.bind(null, a) : null;
	}
	function Ok(a, b) {
		var c = tk;
		a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
		a = Jk(a, b);
		2 !== a && (b = uk, uk = c, null !== b && Gj(b));
		return a;
	}
	function Gj(a) {
		null === uk ? uk = a : uk.push.apply(uk, a);
	}
	function Pk(a) {
		for (var b = a;;) {
			if (b.flags & 16384) {
				var c = b.updateQueue;
				if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
					var e = c[d], f$2 = e.getSnapshot;
					e = e.value;
					try {
						if (!He(f$2(), e)) return !1;
					} catch (g$1) {
						return !1;
					}
				}
			}
			c = b.child;
			if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
			else {
				if (b === a) break;
				for (; null === b.sibling;) {
					if (null === b.return || b.return === a) return !0;
					b = b.return;
				}
				b.sibling.return = b.return;
				b = b.sibling;
			}
		}
		return !0;
	}
	function Dk(a, b) {
		b &= ~sk;
		b &= ~rk;
		a.suspendedLanes |= b;
		a.pingedLanes &= ~b;
		for (a = a.expirationTimes; 0 < b;) {
			var c = 31 - oc(b), d = 1 << c;
			a[c] = -1;
			b &= ~d;
		}
	}
	function Fk(a) {
		if (0 !== (K & 6)) throw Error(p$1(327));
		Ik();
		var b = uc(a, 0);
		if (0 === (b & 1)) return Ek(a, B()), null;
		var c = Jk(a, b);
		if (0 !== a.tag && 2 === c) {
			var d = xc(a);
			0 !== d && (b = d, c = Ok(a, d));
		}
		if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
		if (6 === c) throw Error(p$1(345));
		a.finishedWork = a.current.alternate;
		a.finishedLanes = b;
		Qk(a, uk, vk);
		Ek(a, B());
		return null;
	}
	function Rk(a, b) {
		var c = K;
		K |= 1;
		try {
			return a(b);
		} finally {
			K = c, 0 === K && (Hj = B() + 500, fg && jg());
		}
	}
	function Sk(a) {
		null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
		var b = K;
		K |= 1;
		var c = pk.transition, d = C;
		try {
			if (pk.transition = null, C = 1, a) return a();
		} finally {
			C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
		}
	}
	function Ij() {
		gj = fj.current;
		E(fj);
	}
	function Lk(a, b) {
		a.finishedWork = null;
		a.finishedLanes = 0;
		var c = a.timeoutHandle;
		-1 !== c && (a.timeoutHandle = -1, Gf(c));
		if (null !== Y) for (c = Y.return; null !== c;) {
			var d = c;
			wg(d);
			switch (d.tag) {
				case 1:
					d = d.type.childContextTypes;
					null !== d && void 0 !== d && $f();
					break;
				case 3:
					Jh();
					E(Wf);
					E(H);
					Oh();
					break;
				case 5:
					Lh(d);
					break;
				case 4:
					Jh();
					break;
				case 13:
					E(M);
					break;
				case 19:
					E(M);
					break;
				case 10:
					Rg(d.type._context);
					break;
				case 22:
				case 23: Ij();
			}
			c = c.return;
		}
		R = a;
		Y = a = wh(a.current, null);
		Z = gj = b;
		T = 0;
		qk = null;
		sk = rk = hh = 0;
		uk = tk = null;
		if (null !== Wg) {
			for (b = 0; b < Wg.length; b++) if (c = Wg[b], d = c.interleaved, null !== d) {
				c.interleaved = null;
				var e = d.next, f$2 = c.pending;
				if (null !== f$2) {
					var g$1 = f$2.next;
					f$2.next = e;
					d.next = g$1;
				}
				c.pending = d;
			}
			Wg = null;
		}
		return a;
	}
	function Nk(a, b) {
		do {
			var c = Y;
			try {
				Qg();
				Ph.current = ai;
				if (Sh) {
					for (var d = N.memoizedState; null !== d;) {
						var e = d.queue;
						null !== e && (e.pending = null);
						d = d.next;
					}
					Sh = !1;
				}
				Rh = 0;
				P = O = N = null;
				Th = !1;
				Uh = 0;
				ok.current = null;
				if (null === c || null === c.return) {
					T = 1;
					qk = b;
					Y = null;
					break;
				}
				a: {
					var f$2 = a, g$1 = c.return, h$1 = c, k$2 = b;
					b = Z;
					h$1.flags |= 32768;
					if (null !== k$2 && "object" === typeof k$2 && "function" === typeof k$2.then) {
						var l$3 = k$2, m$2 = h$1, q$3 = m$2.tag;
						if (0 === (m$2.mode & 1) && (0 === q$3 || 11 === q$3 || 15 === q$3)) {
							var r$2 = m$2.alternate;
							r$2 ? (m$2.updateQueue = r$2.updateQueue, m$2.memoizedState = r$2.memoizedState, m$2.lanes = r$2.lanes) : (m$2.updateQueue = null, m$2.memoizedState = null);
						}
						var y$2 = Vi(g$1);
						if (null !== y$2) {
							y$2.flags &= -257;
							Wi(y$2, g$1, h$1, f$2, b);
							y$2.mode & 1 && Ti(f$2, l$3, b);
							b = y$2;
							k$2 = l$3;
							var n$2 = b.updateQueue;
							if (null === n$2) {
								var t$3 = new Set();
								t$3.add(k$2);
								b.updateQueue = t$3;
							} else n$2.add(k$2);
							break a;
						} else {
							if (0 === (b & 1)) {
								Ti(f$2, l$3, b);
								uj();
								break a;
							}
							k$2 = Error(p$1(426));
						}
					} else if (I && h$1.mode & 1) {
						var J$2 = Vi(g$1);
						if (null !== J$2) {
							0 === (J$2.flags & 65536) && (J$2.flags |= 256);
							Wi(J$2, g$1, h$1, f$2, b);
							Jg(Ki(k$2, h$1));
							break a;
						}
					}
					f$2 = k$2 = Ki(k$2, h$1);
					4 !== T && (T = 2);
					null === tk ? tk = [f$2] : tk.push(f$2);
					f$2 = g$1;
					do {
						switch (f$2.tag) {
							case 3:
								f$2.flags |= 65536;
								b &= -b;
								f$2.lanes |= b;
								var x$1 = Oi(f$2, k$2, b);
								fh(f$2, x$1);
								break a;
							case 1:
								h$1 = k$2;
								var w$1 = f$2.type, u$2 = f$2.stateNode;
								if (0 === (f$2.flags & 128) && ("function" === typeof w$1.getDerivedStateFromError || null !== u$2 && "function" === typeof u$2.componentDidCatch && (null === Si || !Si.has(u$2)))) {
									f$2.flags |= 65536;
									b &= -b;
									f$2.lanes |= b;
									var F$2 = Ri(f$2, h$1, b);
									fh(f$2, F$2);
									break a;
								}
						}
						f$2 = f$2.return;
					} while (null !== f$2);
				}
				Tk(c);
			} catch (na) {
				b = na;
				Y === c && null !== c && (Y = c = c.return);
				continue;
			}
			break;
		} while (1);
	}
	function Kk() {
		var a = nk.current;
		nk.current = ai;
		return null === a ? ai : a;
	}
	function uj() {
		if (0 === T || 3 === T || 2 === T) T = 4;
		null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
	}
	function Jk(a, b) {
		var c = K;
		K |= 2;
		var d = Kk();
		if (R !== a || Z !== b) vk = null, Lk(a, b);
		do
			try {
				Uk();
				break;
			} catch (e) {
				Nk(a, e);
			}
		while (1);
		Qg();
		K = c;
		nk.current = d;
		if (null !== Y) throw Error(p$1(261));
		R = null;
		Z = 0;
		return T;
	}
	function Uk() {
		for (; null !== Y;) Vk(Y);
	}
	function Mk() {
		for (; null !== Y && !cc();) Vk(Y);
	}
	function Vk(a) {
		var b = Wk(a.alternate, a, gj);
		a.memoizedProps = a.pendingProps;
		null === b ? Tk(a) : Y = b;
		ok.current = null;
	}
	function Tk(a) {
		var b = a;
		do {
			var c = b.alternate;
			a = b.return;
			if (0 === (b.flags & 32768)) {
				if (c = Fj(c, b, gj), null !== c) {
					Y = c;
					return;
				}
			} else {
				c = Jj(c, b);
				if (null !== c) {
					c.flags &= 32767;
					Y = c;
					return;
				}
				if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
				else {
					T = 6;
					Y = null;
					return;
				}
			}
			b = b.sibling;
			if (null !== b) {
				Y = b;
				return;
			}
			Y = b = a;
		} while (null !== b);
		0 === T && (T = 5);
	}
	function Qk(a, b, c) {
		var d = C, e = pk.transition;
		try {
			pk.transition = null, C = 1, Xk(a, b, c, d);
		} finally {
			pk.transition = e, C = d;
		}
		return null;
	}
	function Xk(a, b, c, d) {
		do
			Ik();
		while (null !== xk);
		if (0 !== (K & 6)) throw Error(p$1(327));
		c = a.finishedWork;
		var e = a.finishedLanes;
		if (null === c) return null;
		a.finishedWork = null;
		a.finishedLanes = 0;
		if (c === a.current) throw Error(p$1(177));
		a.callbackNode = null;
		a.callbackPriority = 0;
		var f$2 = c.lanes | c.childLanes;
		Bc(a, f$2);
		a === R && (Y = R = null, Z = 0);
		0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function() {
			Ik();
			return null;
		}));
		f$2 = 0 !== (c.flags & 15990);
		if (0 !== (c.subtreeFlags & 15990) || f$2) {
			f$2 = pk.transition;
			pk.transition = null;
			var g$1 = C;
			C = 1;
			var h$1 = K;
			K |= 4;
			ok.current = null;
			Pj(a, c);
			ek(c, a);
			Oe(Df);
			dd = !!Cf;
			Df = Cf = null;
			a.current = c;
			ik(c, a, e);
			dc();
			K = h$1;
			C = g$1;
			pk.transition = f$2;
		} else a.current = c;
		wk && (wk = !1, xk = a, yk = e);
		f$2 = a.pendingLanes;
		0 === f$2 && (Si = null);
		mc(c.stateNode, d);
		Ek(a, B());
		if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
			componentStack: e.stack,
			digest: e.digest
		});
		if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
		0 !== (yk & 1) && 0 !== a.tag && Ik();
		f$2 = a.pendingLanes;
		0 !== (f$2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
		jg();
		return null;
	}
	function Ik() {
		if (null !== xk) {
			var a = Dc(yk), b = pk.transition, c = C;
			try {
				pk.transition = null;
				C = 16 > a ? 16 : a;
				if (null === xk) var d = !1;
				else {
					a = xk;
					xk = null;
					yk = 0;
					if (0 !== (K & 6)) throw Error(p$1(331));
					var e = K;
					K |= 4;
					for (V = a.current; null !== V;) {
						var f$2 = V, g$1 = f$2.child;
						if (0 !== (V.flags & 16)) {
							var h$1 = f$2.deletions;
							if (null !== h$1) {
								for (var k$2 = 0; k$2 < h$1.length; k$2++) {
									var l$3 = h$1[k$2];
									for (V = l$3; null !== V;) {
										var m$2 = V;
										switch (m$2.tag) {
											case 0:
											case 11:
											case 15: Qj(8, m$2, f$2);
										}
										var q$3 = m$2.child;
										if (null !== q$3) q$3.return = m$2, V = q$3;
										else for (; null !== V;) {
											m$2 = V;
											var r$2 = m$2.sibling, y$2 = m$2.return;
											Tj(m$2);
											if (m$2 === l$3) {
												V = null;
												break;
											}
											if (null !== r$2) {
												r$2.return = y$2;
												V = r$2;
												break;
											}
											V = y$2;
										}
									}
								}
								var n$2 = f$2.alternate;
								if (null !== n$2) {
									var t$3 = n$2.child;
									if (null !== t$3) {
										n$2.child = null;
										do {
											var J$2 = t$3.sibling;
											t$3.sibling = null;
											t$3 = J$2;
										} while (null !== t$3);
									}
								}
								V = f$2;
							}
						}
						if (0 !== (f$2.subtreeFlags & 2064) && null !== g$1) g$1.return = f$2, V = g$1;
						else b: for (; null !== V;) {
							f$2 = V;
							if (0 !== (f$2.flags & 2048)) switch (f$2.tag) {
								case 0:
								case 11:
								case 15: Qj(9, f$2, f$2.return);
							}
							var x$1 = f$2.sibling;
							if (null !== x$1) {
								x$1.return = f$2.return;
								V = x$1;
								break b;
							}
							V = f$2.return;
						}
					}
					var w$1 = a.current;
					for (V = w$1; null !== V;) {
						g$1 = V;
						var u$2 = g$1.child;
						if (0 !== (g$1.subtreeFlags & 2064) && null !== u$2) u$2.return = g$1, V = u$2;
						else b: for (g$1 = w$1; null !== V;) {
							h$1 = V;
							if (0 !== (h$1.flags & 2048)) try {
								switch (h$1.tag) {
									case 0:
									case 11:
									case 15: Rj(9, h$1);
								}
							} catch (na) {
								W(h$1, h$1.return, na);
							}
							if (h$1 === g$1) {
								V = null;
								break b;
							}
							var F$2 = h$1.sibling;
							if (null !== F$2) {
								F$2.return = h$1.return;
								V = F$2;
								break b;
							}
							V = h$1.return;
						}
					}
					K = e;
					jg();
					if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
						lc.onPostCommitFiberRoot(kc, a);
					} catch (na) {}
					d = !0;
				}
				return d;
			} finally {
				C = c, pk.transition = b;
			}
		}
		return !1;
	}
	function Yk(a, b, c) {
		b = Ki(c, b);
		b = Oi(a, b, 1);
		a = dh(a, b, 1);
		b = L();
		null !== a && (Ac(a, 1, b), Ek(a, b));
	}
	function W(a, b, c) {
		if (3 === a.tag) Yk(a, a, c);
		else for (; null !== b;) {
			if (3 === b.tag) {
				Yk(b, a, c);
				break;
			} else if (1 === b.tag) {
				var d = b.stateNode;
				if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
					a = Ki(c, a);
					a = Ri(b, a, 1);
					b = dh(b, a, 1);
					a = L();
					null !== b && (Ac(b, 1, a), Ek(b, a));
					break;
				}
			}
			b = b.return;
		}
	}
	function Ui(a, b, c) {
		var d = a.pingCache;
		null !== d && d.delete(b);
		b = L();
		a.pingedLanes |= a.suspendedLanes & c;
		R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
		Ek(a, b);
	}
	function Zk(a, b) {
		0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		var c = L();
		a = Zg(a, b);
		null !== a && (Ac(a, b, c), Ek(a, c));
	}
	function vj(a) {
		var b = a.memoizedState, c = 0;
		null !== b && (c = b.retryLane);
		Zk(a, c);
	}
	function ck(a, b) {
		var c = 0;
		switch (a.tag) {
			case 13:
				var d = a.stateNode;
				var e = a.memoizedState;
				null !== e && (c = e.retryLane);
				break;
			case 19:
				d = a.stateNode;
				break;
			default: throw Error(p$1(314));
		}
		null !== d && d.delete(b);
		Zk(a, c);
	}
	var Wk;
	Wk = function(a, b, c) {
		if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;
		else {
			if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
			Ug = 0 !== (a.flags & 131072) ? !0 : !1;
		}
		else Ug = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
		b.lanes = 0;
		switch (b.tag) {
			case 2:
				var d = b.type;
				jj(a, b);
				a = b.pendingProps;
				var e = Yf(b, H.current);
				Tg(b, c);
				e = Xh(null, b, d, a, e, c);
				var f$2 = bi();
				b.flags |= 1;
				"object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f$2 = !0, cg(b)) : f$2 = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f$2, c)) : (b.tag = 0, I && f$2 && vg(b), Yi(null, b, e, c), b = b.child);
				return b;
			case 16:
				d = b.elementType;
				a: {
					jj(a, b);
					a = b.pendingProps;
					e = d._init;
					d = e(d._payload);
					b.type = d;
					e = b.tag = $k(d);
					a = Lg(d, a);
					switch (e) {
						case 0:
							b = dj(null, b, d, a, c);
							break a;
						case 1:
							b = ij(null, b, d, a, c);
							break a;
						case 11:
							b = Zi(null, b, d, a, c);
							break a;
						case 14:
							b = aj(null, b, d, Lg(d.type, a), c);
							break a;
					}
					throw Error(p$1(306, d, ""));
				}
				return b;
			case 0: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
			case 1: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
			case 3:
				a: {
					lj(b);
					if (null === a) throw Error(p$1(387));
					d = b.pendingProps;
					f$2 = b.memoizedState;
					e = f$2.element;
					bh(a, b);
					gh(b, d, null, c);
					var g$1 = b.memoizedState;
					d = g$1.element;
					if (f$2.isDehydrated) if (f$2 = {
						element: d,
						isDehydrated: !1,
						cache: g$1.cache,
						pendingSuspenseBoundaries: g$1.pendingSuspenseBoundaries,
						transitions: g$1.transitions
					}, b.updateQueue.baseState = f$2, b.memoizedState = f$2, b.flags & 256) {
						e = Ki(Error(p$1(423)), b);
						b = mj(a, b, d, c, e);
						break a;
					} else if (d !== e) {
						e = Ki(Error(p$1(424)), b);
						b = mj(a, b, d, c, e);
						break a;
					} else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
					else {
						Ig();
						if (d === e) {
							b = $i(a, b, c);
							break a;
						}
						Yi(a, b, d, c);
					}
					b = b.child;
				}
				return b;
			case 5: return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f$2 = null !== a ? a.memoizedProps : null, g$1 = e.children, Ef(d, e) ? g$1 = null : null !== f$2 && Ef(d, f$2) && (b.flags |= 32), hj(a, b), Yi(a, b, g$1, c), b.child;
			case 6: return null === a && Eg(b), null;
			case 13: return pj(a, b, c);
			case 4: return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
			case 11: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
			case 7: return Yi(a, b, b.pendingProps, c), b.child;
			case 8: return Yi(a, b, b.pendingProps.children, c), b.child;
			case 12: return Yi(a, b, b.pendingProps.children, c), b.child;
			case 10:
				a: {
					d = b.type._context;
					e = b.pendingProps;
					f$2 = b.memoizedProps;
					g$1 = e.value;
					G(Mg, d._currentValue);
					d._currentValue = g$1;
					if (null !== f$2) if (He(f$2.value, g$1)) {
						if (f$2.children === e.children && !Wf.current) {
							b = $i(a, b, c);
							break a;
						}
					} else for (f$2 = b.child, null !== f$2 && (f$2.return = b); null !== f$2;) {
						var h$1 = f$2.dependencies;
						if (null !== h$1) {
							g$1 = f$2.child;
							for (var k$2 = h$1.firstContext; null !== k$2;) {
								if (k$2.context === d) {
									if (1 === f$2.tag) {
										k$2 = ch(-1, c & -c);
										k$2.tag = 2;
										var l$3 = f$2.updateQueue;
										if (null !== l$3) {
											l$3 = l$3.shared;
											var m$2 = l$3.pending;
											null === m$2 ? k$2.next = k$2 : (k$2.next = m$2.next, m$2.next = k$2);
											l$3.pending = k$2;
										}
									}
									f$2.lanes |= c;
									k$2 = f$2.alternate;
									null !== k$2 && (k$2.lanes |= c);
									Sg(f$2.return, c, b);
									h$1.lanes |= c;
									break;
								}
								k$2 = k$2.next;
							}
						} else if (10 === f$2.tag) g$1 = f$2.type === b.type ? null : f$2.child;
						else if (18 === f$2.tag) {
							g$1 = f$2.return;
							if (null === g$1) throw Error(p$1(341));
							g$1.lanes |= c;
							h$1 = g$1.alternate;
							null !== h$1 && (h$1.lanes |= c);
							Sg(g$1, c, b);
							g$1 = f$2.sibling;
						} else g$1 = f$2.child;
						if (null !== g$1) g$1.return = f$2;
						else for (g$1 = f$2; null !== g$1;) {
							if (g$1 === b) {
								g$1 = null;
								break;
							}
							f$2 = g$1.sibling;
							if (null !== f$2) {
								f$2.return = g$1.return;
								g$1 = f$2;
								break;
							}
							g$1 = g$1.return;
						}
						f$2 = g$1;
					}
					Yi(a, b, e.children, c);
					b = b.child;
				}
				return b;
			case 9: return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
			case 14: return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
			case 15: return cj(a, b, b.type, b.pendingProps, c);
			case 17: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
			case 19: return yj(a, b, c);
			case 22: return ej(a, b, c);
		}
		throw Error(p$1(156, b.tag));
	};
	function Gk(a, b) {
		return ac(a, b);
	}
	function al(a, b, c, d) {
		this.tag = a;
		this.key = c;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.ref = null;
		this.pendingProps = b;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = d;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function Bg(a, b, c, d) {
		return new al(a, b, c, d);
	}
	function bj(a) {
		a = a.prototype;
		return !(!a || !a.isReactComponent);
	}
	function $k(a) {
		if ("function" === typeof a) return bj(a) ? 1 : 0;
		if (void 0 !== a && null !== a) {
			a = a.$$typeof;
			if (a === Da) return 11;
			if (a === Ga) return 14;
		}
		return 2;
	}
	function wh(a, b) {
		var c = a.alternate;
		null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
		c.flags = a.flags & 14680064;
		c.childLanes = a.childLanes;
		c.lanes = a.lanes;
		c.child = a.child;
		c.memoizedProps = a.memoizedProps;
		c.memoizedState = a.memoizedState;
		c.updateQueue = a.updateQueue;
		b = a.dependencies;
		c.dependencies = null === b ? null : {
			lanes: b.lanes,
			firstContext: b.firstContext
		};
		c.sibling = a.sibling;
		c.index = a.index;
		c.ref = a.ref;
		return c;
	}
	function yh(a, b, c, d, e, f$2) {
		var g$1 = 2;
		d = a;
		if ("function" === typeof a) bj(a) && (g$1 = 1);
		else if ("string" === typeof a) g$1 = 5;
		else a: switch (a) {
			case ya: return Ah(c.children, e, f$2, b);
			case za:
				g$1 = 8;
				e |= 8;
				break;
			case Aa: return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f$2, a;
			case Ea: return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f$2, a;
			case Fa: return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f$2, a;
			case Ia: return qj(c, e, f$2, b);
			default:
				if ("object" === typeof a && null !== a) switch (a.$$typeof) {
					case Ba:
						g$1 = 10;
						break a;
					case Ca:
						g$1 = 9;
						break a;
					case Da:
						g$1 = 11;
						break a;
					case Ga:
						g$1 = 14;
						break a;
					case Ha:
						g$1 = 16;
						d = null;
						break a;
				}
				throw Error(p$1(130, null == a ? a : typeof a, ""));
		}
		b = Bg(g$1, c, b, e);
		b.elementType = a;
		b.type = d;
		b.lanes = f$2;
		return b;
	}
	function Ah(a, b, c, d) {
		a = Bg(7, a, d, b);
		a.lanes = c;
		return a;
	}
	function qj(a, b, c, d) {
		a = Bg(22, a, d, b);
		a.elementType = Ia;
		a.lanes = c;
		a.stateNode = { isHidden: !1 };
		return a;
	}
	function xh(a, b, c) {
		a = Bg(6, a, null, b);
		a.lanes = c;
		return a;
	}
	function zh$1(a, b, c) {
		b = Bg(4, null !== a.children ? a.children : [], a.key, b);
		b.lanes = c;
		b.stateNode = {
			containerInfo: a.containerInfo,
			pendingChildren: null,
			implementation: a.implementation
		};
		return b;
	}
	function bl(a, b, c, d, e) {
		this.tag = b;
		this.containerInfo = a;
		this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.pendingContext = this.context = null;
		this.callbackPriority = 0;
		this.eventTimes = zc(0);
		this.expirationTimes = zc(-1);
		this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = zc(0);
		this.identifierPrefix = d;
		this.onRecoverableError = e;
		this.mutableSourceEagerHydrationData = null;
	}
	function cl(a, b, c, d, e, f$2, g$1, h$1, k$2) {
		a = new bl(a, b, c, h$1, k$2);
		1 === b ? (b = 1, !0 === f$2 && (b |= 8)) : b = 0;
		f$2 = Bg(3, null, null, b);
		a.current = f$2;
		f$2.stateNode = a;
		f$2.memoizedState = {
			element: d,
			isDehydrated: c,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		};
		ah(f$2);
		return a;
	}
	function dl(a, b, c) {
		var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: wa,
			key: null == d ? null : "" + d,
			children: a,
			containerInfo: b,
			implementation: c
		};
	}
	function el(a) {
		if (!a) return Vf;
		a = a._reactInternals;
		a: {
			if (Vb(a) !== a || 1 !== a.tag) throw Error(p$1(170));
			var b = a;
			do {
				switch (b.tag) {
					case 3:
						b = b.stateNode.context;
						break a;
					case 1: if (Zf(b.type)) {
						b = b.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				b = b.return;
			} while (null !== b);
			throw Error(p$1(171));
		}
		if (1 === a.tag) {
			var c = a.type;
			if (Zf(c)) return bg(a, c, b);
		}
		return b;
	}
	function fl(a, b, c, d, e, f$2, g$1, h$1, k$2) {
		a = cl(c, d, !0, a, e, f$2, g$1, h$1, k$2);
		a.context = el(null);
		c = a.current;
		d = L();
		e = lh(c);
		f$2 = ch(d, e);
		f$2.callback = void 0 !== b && null !== b ? b : null;
		dh(c, f$2, e);
		a.current.lanes = e;
		Ac(a, e, d);
		Ek(a, d);
		return a;
	}
	function gl(a, b, c, d) {
		var e = b.current, f$2 = L(), g$1 = lh(e);
		c = el(c);
		null === b.context ? b.context = c : b.pendingContext = c;
		b = ch(f$2, g$1);
		b.payload = { element: a };
		d = void 0 === d ? null : d;
		null !== d && (b.callback = d);
		a = dh(e, b, g$1);
		null !== a && (mh(a, e, g$1, f$2), eh(a, e, g$1));
		return g$1;
	}
	function hl(a) {
		a = a.current;
		if (!a.child) return null;
		switch (a.child.tag) {
			case 5: return a.child.stateNode;
			default: return a.child.stateNode;
		}
	}
	function il(a, b) {
		a = a.memoizedState;
		if (null !== a && null !== a.dehydrated) {
			var c = a.retryLane;
			a.retryLane = 0 !== c && c < b ? c : b;
		}
	}
	function jl(a, b) {
		il(a, b);
		(a = a.alternate) && il(a, b);
	}
	function kl() {
		return null;
	}
	var ll = "function" === typeof reportError ? reportError : function(a) {
		console.error(a);
	};
	function ml(a) {
		this._internalRoot = a;
	}
	nl.prototype.render = ml.prototype.render = function(a) {
		var b = this._internalRoot;
		if (null === b) throw Error(p$1(409));
		gl(a, b, null, null);
	};
	nl.prototype.unmount = ml.prototype.unmount = function() {
		var a = this._internalRoot;
		if (null !== a) {
			this._internalRoot = null;
			var b = a.containerInfo;
			Sk(function() {
				gl(null, a, null, null);
			});
			b[uf] = null;
		}
	};
	function nl(a) {
		this._internalRoot = a;
	}
	nl.prototype.unstable_scheduleHydration = function(a) {
		if (a) {
			var b = Hc();
			a = {
				blockedOn: null,
				target: a,
				priority: b
			};
			for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
			Qc.splice(c, 0, a);
			0 === c && Vc(a);
		}
	};
	function ol(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function pl(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function ql() {}
	function rl(a, b, c, d, e) {
		if (e) {
			if ("function" === typeof d) {
				var f$2 = d;
				d = function() {
					var a$1 = hl(g$1);
					f$2.call(a$1);
				};
			}
			var g$1 = fl(b, d, a, 0, null, !1, !1, "", ql);
			a._reactRootContainer = g$1;
			a[uf] = g$1.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			Sk();
			return g$1;
		}
		for (; e = a.lastChild;) a.removeChild(e);
		if ("function" === typeof d) {
			var h$1 = d;
			d = function() {
				var a$1 = hl(k$2);
				h$1.call(a$1);
			};
		}
		var k$2 = cl(a, 0, !1, null, null, !1, !1, "", ql);
		a._reactRootContainer = k$2;
		a[uf] = k$2.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		Sk(function() {
			gl(b, k$2, c, d);
		});
		return k$2;
	}
	function sl(a, b, c, d, e) {
		var f$2 = c._reactRootContainer;
		if (f$2) {
			var g$1 = f$2;
			if ("function" === typeof e) {
				var h$1 = e;
				e = function() {
					var a$1 = hl(g$1);
					h$1.call(a$1);
				};
			}
			gl(b, g$1, a, e);
		} else g$1 = rl(c, b, a, e, d);
		return hl(g$1);
	}
	Ec = function(a) {
		switch (a.tag) {
			case 3:
				var b = a.stateNode;
				if (b.current.memoizedState.isDehydrated) {
					var c = tc(b.pendingLanes);
					0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
				}
				break;
			case 13: Sk(function() {
				var b$1 = Zg(a, 1);
				if (null !== b$1) {
					var c$1 = L();
					mh(b$1, a, 1, c$1);
				}
			}), jl(a, 1);
		}
	};
	Fc = function(a) {
		if (13 === a.tag) {
			var b = Zg(a, 134217728);
			if (null !== b) {
				var c = L();
				mh(b, a, 134217728, c);
			}
			jl(a, 134217728);
		}
	};
	Gc = function(a) {
		if (13 === a.tag) {
			var b = lh(a), c = Zg(a, b);
			if (null !== c) {
				var d = L();
				mh(c, a, b, d);
			}
			jl(a, b);
		}
	};
	Hc = function() {
		return C;
	};
	Ic = function(a, b) {
		var c = C;
		try {
			return C = a, b();
		} finally {
			C = c;
		}
	};
	yb = function(a, b, c) {
		switch (b) {
			case "input":
				bb(a, c);
				b = c.name;
				if ("radio" === c.type && null != b) {
					for (c = a; c.parentNode;) c = c.parentNode;
					c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + "][type=\"radio\"]");
					for (b = 0; b < c.length; b++) {
						var d = c[b];
						if (d !== a && d.form === a.form) {
							var e = Db(d);
							if (!e) throw Error(p$1(90));
							Wa(d);
							bb(d, e);
						}
					}
				}
				break;
			case "textarea":
				ib(a, c);
				break;
			case "select": b = c.value, null != b && fb(a, !!c.multiple, b, !1);
		}
	};
	Gb = Rk;
	Hb = Sk;
	var tl = {
		usingClientEntryPoint: !1,
		Events: [
			Cb,
			ue,
			Db,
			Eb,
			Fb,
			Rk
		]
	}, ul = {
		findFiberByHostInstance: Wc,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom"
	};
	var vl = {
		bundleType: ul.bundleType,
		version: ul.version,
		rendererPackageName: ul.rendererPackageName,
		rendererConfig: ul.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ua.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(a) {
			a = Zb(a);
			return null === a ? null : a.stateNode;
		},
		findFiberByHostInstance: ul.findFiberByHostInstance || kl,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!wl.isDisabled && wl.supportsFiber) try {
			kc = wl.inject(vl), lc = wl;
		} catch (a) {}
	}
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
	exports.createPortal = function(a, b) {
		var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!ol(b)) throw Error(p$1(200));
		return dl(a, b, null, c);
	};
	exports.createRoot = function(a, b) {
		if (!ol(a)) throw Error(p$1(299));
		var c = !1, d = "", e = ll;
		null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
		b = cl(a, 1, !1, null, null, c, !1, d, e);
		a[uf] = b.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		return new ml(b);
	};
	exports.findDOMNode = function(a) {
		if (null == a) return null;
		if (1 === a.nodeType) return a;
		var b = a._reactInternals;
		if (void 0 === b) {
			if ("function" === typeof a.render) throw Error(p$1(188));
			a = Object.keys(a).join(",");
			throw Error(p$1(268, a));
		}
		a = Zb(b);
		a = null === a ? null : a.stateNode;
		return a;
	};
	exports.flushSync = function(a) {
		return Sk(a);
	};
	exports.hydrate = function(a, b, c) {
		if (!pl(b)) throw Error(p$1(200));
		return sl(null, a, b, !0, c);
	};
	exports.hydrateRoot = function(a, b, c) {
		if (!ol(a)) throw Error(p$1(405));
		var d = null != c && c.hydratedSources || null, e = !1, f$2 = "", g$1 = ll;
		null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f$2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g$1 = c.onRecoverableError));
		b = fl(b, null, a, 1, null != c ? c : null, e, !1, f$2, g$1);
		a[uf] = b.current;
		sf(a);
		if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
		return new nl(b);
	};
	exports.render = function(a, b, c) {
		if (!pl(b)) throw Error(p$1(200));
		return sl(null, a, b, !1, c);
	};
	exports.unmountComponentAtNode = function(a) {
		if (!pl(a)) throw Error(p$1(40));
		return a._reactRootContainer ? (Sk(function() {
			sl(null, null, a, !1, function() {
				a._reactRootContainer = null;
				a[uf] = null;
			});
		}), !0) : !1;
	};
	exports.unstable_batchedUpdates = Rk;
	exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
		if (!pl(c)) throw Error(p$1(200));
		if (null == a || void 0 === a._reactInternals) throw Error(p$1(38));
		return sl(a, b, c, !1, d);
	};
	exports.version = "18.2.0-next-9e3b772b8-20220608";
} });

//#endregion
//#region node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js
var require_react_dom = __commonJS({ "node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"(exports, module) {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	{
		checkDCE();
		module.exports = require_react_dom_production_min();
	}
} });

//#endregion
//#region node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var require_client = __commonJS({ "node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js"(exports) {
	var m$1 = require_react_dom();
	if (1) {
		exports.createRoot = m$1.createRoot;
		exports.hydrateRoot = m$1.hydrateRoot;
	} else var i;
} });
var import_client = __toESM(require_client(), 1);

//#endregion
//#region node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({ "node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
	var f = require_react(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function q(c, a, g$1) {
		var b, d = {}, e = null, h$1 = null;
		void 0 !== g$1 && (e = "" + g$1);
		void 0 !== a.key && (e = "" + a.key);
		void 0 !== a.ref && (h$1 = a.ref);
		for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
		if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
		return {
			$$typeof: k,
			type: c,
			key: e,
			ref: h$1,
			props: d,
			_owner: n.current
		};
	}
	exports.Fragment = l;
	exports.jsx = q;
	exports.jsxs = q;
} });

//#endregion
//#region node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({ "node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"(exports, module) {
	module.exports = require_react_jsx_runtime_production_min();
} });
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);

//#endregion
//#region src/shared/config.ts
const PET_DISPLAYS = [
	"web",
	"desktop",
	"both",
	"none"
];
function flattenConfigPets(merged) {
	const out = [];
	for (const [entry, conf] of Object.entries(merged)) {
		const list = Array.isArray(conf?.pets) ? conf.pets : [];
		for (const p$4 of list) out.push({
			...p$4,
			animations: conf.animations,
			animationWeights: conf.animationWeights,
			eventsRefreshSec: conf.eventsRefreshSec,
			physics: conf.physics,
			font: conf.font,
			confineToScreen: conf.confineToScreen,
			workStatusTexts: conf.workStatusTexts,
			whisperModel: conf.whisperModel,
			chatModel: conf.chatModel,
			entrySoul: conf.soul,
			soulEnabled: conf.chatSoulEnabled !== false,
			assetRoot: entry,
			extra: entry !== "main"
		});
	}
	return out;
}

//#endregion
//#region src/shared/fonts.ts
const FONT_PRESETS = [
	{
		id: "candy",
		stack: "\"ShangshouSoftCandy\",\"Yuanti SC\",\"YouYuan\",\"幼圆\",\"Comic Sans MS\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif"
	},
	{
		id: "yahei",
		stack: "\"Microsoft YaHei\",\"PingFang SC\",sans-serif"
	},
	{
		id: "youyuan",
		stack: "\"YouYuan\",\"Yuanti SC\",sans-serif"
	},
	{
		id: "kaiti",
		stack: "\"KaiTi\",\"STKaiti\",serif"
	},
	{
		id: "simsun",
		stack: "\"SimSun\",\"Songti SC\",serif"
	},
	{
		id: "comic",
		stack: "\"Comic Sans MS\",\"Comic Sans\",cursive"
	},
	{
		id: "system",
		stack: "system-ui,sans-serif"
	}
];
const FONT_SIZE_MIN = 4;
const FONT_SIZE_MAX = 200;
const DEFAULT_FONT = {
	family: "candy",
	size: 21,
	followPet: true
};
const FONT_REF_SIZE = 462;
const BUBBLE_FONT_BASE_PX = .0455 * FONT_REF_SIZE;
const TIP_FONT_BASE_PX = .026 * FONT_REF_SIZE;

//#endregion
//#region src/shared/physics.ts
const GRAVITY = 1400;
const RESTITUTION = .78;
const GROUND_FRICTION = 2.5;
const DEFAULT_PHYSICS = {
	gravity: GRAVITY,
	restitution: RESTITUTION,
	groundFriction: GROUND_FRICTION,
	ceilingBounce: true,
	throwPower: 1,
	petCollision: false
};

//#endregion
//#region src/shared/soul.ts
function soulAccentColor(card, fallback = "#7aa7ff") {
	const raw = card;
	const color = raw?.soulColor ?? raw?.soul_color;
	const candidates = [
		color?.primary,
		color?.glow,
		color?.secondary
	];
	for (const value of candidates) if (typeof value === "string" && /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value.trim())) return value.trim();
	return fallback;
}

//#endregion
//#region src/shared/notify.ts
const NOTIFY_ICONS$1 = {
	done: "notify-done",
	error: "notify-error",
	truncated: "notify-truncated",
	approval: "notify-approval",
	question: "notify-question",
	test: "notify-test"
};

//#endregion
//#region src/client/notify.ts
let pageVisible = typeof document !== "undefined" && !document.hidden;
let pageFocused = typeof document !== "undefined" && document.hasFocus();
/** 图标 URL；pic 路由由宿主提供（`assets/pic` → `/dsh-pet-7340/pic/<file>`）。 */
const PIC = (name) => "/dsh-pet-7340/pic/" + name + ".png";
const NOTIFY_ICONS = {
	done: PIC(NOTIFY_ICONS$1.done),
	error: PIC(NOTIFY_ICONS$1.error),
	truncated: PIC(NOTIFY_ICONS$1.truncated),
	approval: PIC(NOTIFY_ICONS$1.approval),
	question: PIC(NOTIFY_ICONS$1.question),
	test: PIC(NOTIFY_ICONS$1.test)
};
/** 当前生效的总开关；运行中可被 reloadNotifications 更新，设置页保存后即时生效。 */
let notifyEnabled = true;
/** 当前生效的会话跳转器（app.ts 注入；旧版 DSH 没有 uiWorkspace 时为 undefined）。 */
let sessionNavigator;
function wireNotificationClick(n$2, sessionId) {
	n$2.onclick = () => {
		n$2.close();
		if (sessionId !== void 0) try {
			sessionNavigator?.openSession(sessionId);
		} catch {}
		window.focus();
		if (!/electron/i.test(navigator.userAgent)) return;
		const frame = document.createElement("iframe");
		frame.style.display = "none";
		frame.src = "dsh://open";
		document.body.append(frame);
		setTimeout(() => frame.remove(), 1e3);
	};
}
async function requestNotificationPermission() {
	if (typeof Notification === "undefined") return {
		ok: false,
		reason: "unsupported"
	};
	if (Notification.permission === "granted") return { ok: true };
	if (Notification.permission === "denied") return {
		ok: false,
		reason: "denied"
	};
	try {
		const p$4 = await Notification.requestPermission();
		if (p$4 === "granted") return { ok: true };
		if (p$4 === "denied") return {
			ok: false,
			reason: "rejected"
		};
		return {
			ok: false,
			reason: "error",
			message: "权限未授予（" + p$4 + "）"
		};
	} catch (e) {
		return {
			ok: false,
			reason: "error",
			message: e instanceof Error ? e.message : String(e)
		};
	}
}
/** 读系统通知总开关（成品配置 main 条目）；拉取或解析失败时按开启处理，不阻塞。 */
async function readNotificationsEnabled() {
	try {
		const r$2 = await fetch("/dsh-pet-7340/config");
		if (!r$2.ok) return true;
		const d = await r$2.json().catch(() => null);
		return typeof d?.main?.notificationsEnabled === "boolean" ? d.main.notificationsEnabled : true;
	} catch {
		return true;
	}
}
async function reloadNotifications() {
	notifyEnabled = await readNotificationsEnabled();
}

//#endregion
//#region src/client/settings.ts
const petBridge = {
	current: [],
	reload: () => {},
	template: void 0
};
/** 一处「服务商 + 模型」是否合法：要么都留空（跟随当前对话），要么都非空。
* 与宿主 `modelSelectionValid` 同一套规则（非法时宿主回 400，这里先就地给红字提示）。 */
const modelPairValid = (m$2) => m$2.provider.trim() === "" === (m$2.model.trim() === "");
/**
* 设置页内联 CSS：只放伪类、悬浮、过渡与栅格这类行内样式表达不了的东西，其余排版走组件内联 style。
* 类名统一 `dsh-pet-` 前缀，注入方式与宠物页面一致（`data-plugin-css` 去重）。
*/
const SETTINGS_CSS = [
	".dsh-pet-mp{position:relative;min-width:0;display:flex;flex-direction:column;gap:4px}",
	".dsh-pet-mp__trigger{display:flex;align-items:center;gap:6px;width:100%;max-width:340px;height:28px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:13px;line-height:20px;text-align:left;cursor:pointer;outline:none}",
	".dsh-pet-mp__trigger:hover:not(:disabled){border-color:var(--dsw-alias-state-business-primary)}",
	".dsh-pet-mp__trigger:focus-visible{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary))}",
	".dsh-pet-mp__trigger:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}",
	".dsh-pet-mp__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}",
	".dsh-pet-mp__sub{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;flex-shrink:1000;color:var(--dsw-alias-label-caption,var(--dsw-alias-label-tertiary))}",
	".dsh-pet-mp__chevron{flex:none;margin-left:auto;color:var(--dsw-alias-label-caption,var(--dsw-alias-label-tertiary));transition:transform .12s}",
	".dsh-pet-mp__chevron.is-open{transform:rotate(180deg)}",
	".dsh-pet-mp__panel{position:fixed;z-index:2147483000;display:flex;flex-direction:column;gap:4px;padding:4px;overflow:hidden;border:1px solid var(--dsw-alias-border-l1);border-radius:var(--dsw-radius-md,10px);background:var(--dsw-alias-bg-layer-1);box-shadow:var(--dsw-elevation-prominent,0 8px 30px rgba(0,0,0,.35));color:var(--dsw-alias-label-primary)}",
	".dsh-pet-mp__search{box-sizing:border-box;width:100%;height:28px;padding:0 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:13px;outline:none}",
	".dsh-pet-mp__search:focus{border-color:var(--dsw-alias-state-business-primary)}",
	".dsh-pet-mp__list{display:flex;flex-direction:column;min-height:0;overflow-y:auto;scrollbar-width:thin}",
	".dsh-pet-mp__group{padding:6px 8px 2px;font-size:11px;line-height:16px;color:var(--dsw-alias-label-tertiary)}",
	".dsh-pet-mp__item{display:flex;align-items:center;gap:8px;width:100%;padding:6px 8px;border:none;border-radius:var(--dsw-radius-sm,6px);background:transparent;color:inherit;font-size:13px;line-height:20px;text-align:left;cursor:pointer}",
	".dsh-pet-mp__item:hover:not(:disabled),.dsh-pet-mp__item.is-active{background:var(--dsw-alias-interactive-bg-hover)}",
	".dsh-pet-mp__item[aria-checked=\"true\"]{color:var(--dsw-alias-state-business-primary)}",
	".dsh-pet-mp__item:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}",
	".dsh-pet-mp__name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}",
	".dsh-pet-mp__check{flex:none;margin-left:auto}",
	".dsh-pet-mp__status{padding:8px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}",
	".dsh-pet-cfg{container-type:inline-size;display:flex;flex-direction:column;gap:12px;color:var(--dsw-alias-label-primary);font-size:13px;line-height:20px}",
	".dsh-pet-cfg__title{display:flex;align-items:center;gap:6px;margin:0;font-size:16px;font-weight:500;line-height:24px}",
	".dsh-pet-cfg__card{display:flex;flex-direction:column;gap:10px;padding:12px 14px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px}",
	".dsh-pet-cfg__cardHead{display:flex;align-items:center;gap:6px;min-height:20px}",
	".dsh-pet-cfg__cardTitle{font-size:13px;font-weight:500;color:var(--dsw-alias-label-primary)}",
	".dsh-pet-cfg__acc{display:flex;flex-direction:column;gap:8px}",
	".dsh-pet-cfg__accItem{border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-1);overflow:hidden}",
	".dsh-pet-cfg__accItem.is-open{border-color:var(--dsw-alias-state-business-primary)}",
	".dsh-pet-cfg__accHead{display:flex;align-items:center;gap:6px;min-height:44px;padding:0 12px 0 10px}",
	".dsh-pet-cfg__accToggle{display:flex;align-items:center;gap:8px;flex:1;min-width:0;min-height:44px;padding:0 2px;border:0;border-radius:8px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;outline:none}",
	".dsh-pet-cfg__accToggle:focus-visible{box-shadow:inset 0 0 0 2px var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary))}",
	".dsh-pet-cfg__accChevron{display:inline-flex;align-items:center;justify-content:center;flex:none;width:16px;height:16px;color:var(--dsw-alias-label-tertiary);font-size:16px;line-height:16px;transition:transform .15s}",
	".dsh-pet-cfg__accItem.is-open .dsh-pet-cfg__accChevron{transform:rotate(90deg)}",
	".dsh-pet-cfg__accTitle{flex:none;font-size:13px;font-weight:500;color:var(--dsw-alias-label-primary)}",
	".dsh-pet-cfg__accMeta{min-width:0;margin-left:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:var(--dsw-alias-label-tertiary);text-align:right}",
	".dsh-pet-cfg__accBody{display:flex;flex-direction:column;gap:10px;padding:12px 14px 14px;border-top:1px solid var(--dsw-alias-border-l2)}",
	".dsh-pet-cfg__grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px 16px;align-items:end}",
	".dsh-pet-cfg__grid4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px 16px;align-items:end}",
	".dsh-pet-cfg__grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 16px;align-items:end}",
	"@container (max-width:600px){.dsh-pet-cfg__grid4{grid-template-columns:repeat(2,minmax(0,1fr))}}",
	"@container (max-width:400px){.dsh-pet-cfg__grid2,.dsh-pet-cfg__grid3,.dsh-pet-cfg__grid4{grid-template-columns:minmax(0,1fr)}}",
	".dsh-pet-cfg__field{display:flex;flex-direction:column;gap:4px;min-width:0}",
	".dsh-pet-cfg__flabel{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--dsw-alias-label-secondary)}",
	".dsh-pet-cfg__inp{box-sizing:border-box;width:100%;min-height:28px;padding:4px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;outline:none}",
	".dsh-pet-cfg__inp:focus{border-color:var(--dsw-alias-state-business-primary)}",
	".dsh-pet-cfg__inp:disabled{color:var(--dsw-alias-label-tertiary);cursor:default}",
	".dsh-pet-cfg__persona{display:flex;flex-direction:column;gap:2px;min-width:0}",
	".dsh-pet-cfg__area{min-height:66px;resize:vertical;line-height:18px}",
	".dsh-pet-cfg__count{font-size:11px;color:var(--dsw-alias-label-tertiary);text-align:right}",
	".dsh-pet-cfg__json{min-height:180px;resize:vertical;line-height:18px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,\"Courier New\",monospace;font-size:12px;white-space:pre-wrap;overflow:auto}",
	".dsh-pet-cfg__soulRow{display:flex;align-items:center;gap:8px;flex-wrap:wrap;min-width:0}",
	".dsh-pet-cfg__swatch{display:inline-block;flex:none;width:12px;height:12px;border:1px solid var(--dsw-alias-border-l2);border-radius:50%;vertical-align:-2px}",
	".dsh-pet-cfg__soulPreview{margin:0;max-height:260px;overflow:auto;padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-interactive-bg-active);color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px;white-space:pre-wrap;word-break:break-word;user-select:text}",
	".dsh-pet-cfg__overlay{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.45)}",
	".dsh-pet-cfg__modal{display:flex;flex-direction:column;gap:12px;width:min(680px,calc(100vw - 32px));max-height:calc(100vh - 32px);padding:16px 18px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-1);box-shadow:0 8px 30px rgba(0,0,0,.35)}",
	".dsh-pet-cfg__modalTitle{font-size:14px;font-weight:500;color:var(--dsw-alias-label-primary)}",
	".dsh-pet-cfg__modalBody{display:flex;flex-direction:column;gap:8px;min-height:0;overflow:auto}",
	".dsh-pet-cfg__jsonEditor{box-sizing:border-box;width:100%;min-height:320px;max-height:52vh;resize:vertical;padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,\"Courier New\",monospace;font-size:12px;line-height:18px;white-space:pre;overflow:auto;outline:none}",
	".dsh-pet-cfg__jsonEditor:focus{border-color:var(--dsw-alias-state-business-primary)}",
	".dsh-pet-cfg__jsonEditor.is-invalid{border-color:var(--dsw-alias-state-error-primary)}",
	".dsh-pet-cfg__modalError{margin:0;font-size:12px;line-height:18px;color:var(--dsw-alias-state-error-primary)}",
	".dsh-pet-cfg__modalActions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end}",
	".dsh-pet-cfg__toggle{display:flex;align-items:center;gap:6px;min-width:0;font-size:13px;color:var(--dsw-alias-label-primary)}",
	".dsh-pet-cfg__toggle>label{display:inline-flex;align-items:center;gap:6px;cursor:pointer;min-width:0}",
	".dsh-pet-cfg__toggle>label>span{overflow-wrap:anywhere}",
	".dsh-pet-cfg__toggle input[type=checkbox]{flex:none;width:16px;height:16px;margin:0;accent-color:var(--dsw-alias-state-business-primary);cursor:pointer}",
	".dsh-pet-cfg [data-tip]{position:relative}",
	".dsh-pet-cfg [data-tip]::after{display:none;content:attr(data-tip);position:absolute;left:-4px;bottom:calc(100% + 8px);width:max-content;max-width:260px;padding:6px 10px;border-radius:8px;background:var(--dsw-alias-tooltip-bg);color:#fff;font-size:12px;font-style:normal;font-weight:400;line-height:18px;text-align:left;white-space:normal;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .12s ease;box-shadow:0 6px 20px rgba(0,0,0,.22);z-index:2147483000}",
	".dsh-pet-cfg [data-tip]:hover::after{display:block;opacity:1;visibility:visible}",
	".dsh-pet-cfg [data-tip][data-tip-end]::after{left:auto;right:-4px}",
	".dsh-pet-cfg__q{display:inline-flex;align-items:center;justify-content:center;flex:none;width:14px;height:14px;border:1px solid var(--dsw-alias-label-tertiary);border-radius:50%;color:var(--dsw-alias-label-tertiary);font-size:10px;font-style:normal;line-height:1;cursor:help;user-select:none}",
	".dsh-pet-cfg__btn{border:1px solid var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-primary);border-radius:8px;padding:4px 14px;font:inherit;font-size:12px;line-height:20px;cursor:pointer;white-space:nowrap}",
	".dsh-pet-cfg__btn:hover:not(:disabled):not(.is-primary){background:var(--dsw-alias-interactive-bg-hover)}",
	".dsh-pet-cfg__btn:disabled{opacity:.5;cursor:default}",
	".dsh-pet-cfg__btn.is-primary{border-color:var(--dsw-alias-button-info-fill);background:var(--dsw-alias-button-info-fill);color:#fff}",
	".dsh-pet-cfg__btn.is-primary:hover:not(:disabled){border-color:var(--dsw-alias-button-info-hover);background:var(--dsw-alias-button-info-hover)}",
	".dsh-pet-cfg__btn.is-danger{border-color:var(--dsw-alias-state-error-secondary);color:var(--dsw-alias-state-error-primary)}",
	".dsh-pet-cfg__btn.is-sm{padding:2px 10px}",
	".dsh-pet-cfg__btn.is-ghost{border-style:dashed;color:var(--dsw-alias-label-secondary)}",
	".dsh-pet-cfg__tabs{display:flex;gap:8px;flex-wrap:wrap;align-items:center}",
	".dsh-pet-cfg__tabsLabel{font-size:12px;color:var(--dsw-alias-label-secondary)}",
	".dsh-pet-cfg__tab{border:1px solid var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-primary);border-radius:8px;padding:4px 12px;font:inherit;font-size:13px;cursor:pointer}",
	".dsh-pet-cfg__tab:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}",
	".dsh-pet-cfg__tab:disabled{opacity:.5;cursor:default}",
	".dsh-pet-cfg__tab.is-active{border-color:var(--dsw-alias-state-business-primary);background:var(--dsw-alias-interactive-bg-active)}",
	".dsh-pet-cfg__tab.is-ghost{border-style:dashed;color:var(--dsw-alias-label-secondary)}",
	".dsh-pet-cfg__actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:4px}",
	".dsh-pet-cfg__msg{margin-left:4px;font-size:12px;color:var(--dsw-alias-state-success-primary)}",
	".dsh-pet-cfg__msg.is-err{color:var(--dsw-alias-state-error-primary)}",
	".dsh-pet-cfg__note{margin:0;font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}",
	".dsh-pet-cfg__path{font-size:12px;line-height:18px;word-break:break-all;user-select:text;color:var(--dsw-alias-label-secondary)}",
	".dsh-pet-cfg__path b{color:var(--dsw-alias-label-primary);font-weight:400}",
	".dsh-pet-cfg__cmd{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,\"Courier New\",monospace;font-size:12px;line-height:18px;word-break:break-all;user-select:text;padding:6px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-interactive-bg-active);color:var(--dsw-alias-label-primary)}"
].join("\n");
const settingsCssTag = "dsh-pet/settings.css";
/** 注入设置页样式，只注入一次。 */
function injectSettingsCss() {
	if (typeof document === "undefined") return;
	if (document.querySelector("style[data-plugin-css=\"" + settingsCssTag + "\"]") !== null) return;
	const tag = document.createElement("style");
	tag.dataset.plugin = "dsh-pet";
	tag.dataset.pluginCss = settingsCssTag;
	tag.textContent = SETTINGS_CSS;
	document.head.appendChild(tag);
}
const zh = {
	nav: "桌宠配置",
	intro: "管理多个桌宠：每个宠物可独立设置大小与位置（保存后即时生效）。",
	petCardTitle: "宠物配置",
	petCardHint: "每只宠物独立配置：名字 / 大小 / 显示位置 / 位置 / 偏移 / 四个功能开关。改完点最下面的「保存」即时生效。",
	globalTitle: "全局开关",
	globalHint: "所有宠物共用（pet pack 可在自己种类文件里单独覆盖）。这几个开关只改本地状态，随「保存」整包写入用户配置（不做即时写入）；系统通知在保存后即时重读，无需刷新页面。",
	cornerHint: "宠物贴着屏幕的哪个角（桌面端按各自显示器的工作区算）。",
	marginXHint: "距所选角落的水平距离（px），可为任意数字。",
	marginYHint: "距所选角落的垂直距离（px），可为任意数字。",
	"cmd.chat": "对话",
	"cmd.pet": "桌宠",
	"cmd.balance": "余额",
	petsLabel: "宠物列表",
	add: "添加宠物",
	remove: "删除",
	confirmRemove: "确定删除宠物「{id}」吗？",
	confirmTitle: "确认操作",
	cancel: "取消",
	ok: "知道了",
	atLeastOne: "至少保留一个宠物。",
	emptyPets: "暂无宠物，点击「添加宠物」创建。",
	sizeLabel: "大小（宽度 px）",
	sizeHint: "高度自动 = 宽度 × 9/16。",
	nameLabel: "名字",
	nameHint: "显示名：鼠标悬浮宠物时弹出，也会加进 AI 人设（你的名字是 X）。可重复，留空按宠物 id 处理。",
	personaLabel: "人设（可选）",
	personaHint: "只影响这只宠物。留空 = 跟随所属条目的人设——输入框里的灰色文字就是那份内容。实际发给模型的 system = 这段 + 自动追加的「你的名字是“<名字>”」+ 当前时间背景，所以别在这里再写名字和日期。",
	personaCount: "{n} 字",
	balanceEnabled: "余额功能",
	balanceEnabledHint: "启用后该宠物触发余额动画并显示余额气泡。",
	whisperEnabled: "碎碎念",
	whisperEnabledHint: "启用后该宠物按周期用 AI 生成一句话并播碎碎念动画（人设见下方「人设」框，留空跟随条目）。",
	workStatusEnabled: "工作状态联动",
	workStatusEnabledHint: "启用后该宠物跟随 DSH 工作状态：思考/工作中/等待确认/完成/出错时自动切对应动画并弹气泡（动画池在配置顶层，仅监听不调用模型）。",
	fixedEnabled: "宠物固定",
	fixedEnabledHint: "启用后随机动画不再让宠物自己转向或走开，只播原地待机与随机小动作；右键菜单点播、接口触发、余额/碎碎念/工作状态动画不受影响。",
	displayLabel: "显示位置",
	displayHint: "web=仅浏览器 / desktop=仅桌面 / both=两者都显示 / none=都不显示",
	"display.web": "仅浏览器",
	"display.desktop": "仅桌面",
	"display.both": "两者都显示",
	"display.none": "都不显示",
	cornerLabel: "位置",
	"corner.top-left": "左上角",
	"corner.top-right": "右上角",
	"corner.bottom-left": "左下角",
	"corner.bottom-right": "右下角",
	marginX: "水平偏移",
	marginY: "垂直偏移",
	save: "保存",
	saveHotkey: "Ctrl+S / Cmd+S",
	sync: "同步",
	confirmSync: "确定同步吗？将用项目内置的默认配置（完整字段 + 注释）覆盖用户配置，当前的自定义内容会丢失。",
	corruptTitle: "用户配置已损坏，未保存",
	corruptConfirm: "强行保存",
	corruptBody: "用户配置文件解析不了（内容已损坏，不是合法 JSON/JSONC）：{path}。继续保存会按白名单重建这个文件——它里面现有的内容（animations / physics / memes 等自定义字段）会全部丢失。取消 = 不动文件（先去把配置改回合法再保存）；确认 = 强行保存（丢弃文件里现有的内容）。",
	syncHint: "「同步」会把项目内置的默认配置（含注释与全部高级字段）写入用户配置文件，覆盖当前自定义内容；之后可直接编辑该文件。注意两点：① 文件一旦生成即为显式覆盖层——插件升级后内置默认的变化不会自动生效（除非再次同步或删除该文件）；② 在本页点「保存」会按白名单重写该文件（字段值保留，但注释会被去掉）。",
	configMeta: "高级配置（文件）",
	configMetaHint: "用户配置可覆盖宠物列表 / 动画池 / 播放权重，修改后刷新或重启生效：浏览器端刷新页面，桌面端右键宠物 →「重载配置」（重载全部桌面宠物窗口）；默认配置为完整参考。",
	defaultConfig: "默认配置（只读，完整参考）",
	userConfig: "用户配置（自定义覆盖）",
	animationDir: "动画素材目录（可自定义/扩充动画）",
	memesDir: "表情包目录（可自定义/扩充配图）",
	logFile: "日志文件（排障用，可清空）",
	logFileNote: "桌面版没有控制台，插件的运行日志（启动、桌面宠物崩溃/重启、错误与告警）全部写进这一个文件；反馈问题请附上它。单文件上限 1 MB，写满只留最新的 512 KB。",
	saved: "已保存，桌宠即时生效。",
	loadError: "加载配置失败",
	saveError: "保存配置失败，请检查服务连接、配置目录的写入权限或服务日志。",
	saveInvalid: "保存配置失败：配置内容无效，请检查后重试。",
	syncError: "同步配置失败，请检查服务连接和配置目录的写入权限。",
	loading: "正在加载配置…",
	retry: "重试",
	invalid: "请检查输入：大小需为正数，边距可为任意数字。",
	busy: "保存中…",
	extraPetsHint: "另 {n} 只额外宠物由 pet/ 目录文件定义（<名>-config.json + <名>-animation/ + <名>-memes/），它们不在此列表——改文件后浏览器刷新页面、桌面端右键「重载配置」即可生效。",
	notifyToggle: "系统通知",
	notifyToggleHint: "对话完成 / 生成失败 / 权限申请 / 用户选择，在窗口失焦时弹出系统级通知（桌面右下角）。",
	clickSoundToggle: "点击音效",
	clickSoundToggleHint: "点一下宠物播一声内置音效（assets/sound/click-duck.wav，音量 0.5；100ms 内的连续点击只响一次，多开也不会叠音）。关掉即完全静音。随「保存」写入用户配置。",
	whisperImageToggle: "碎碎念配图",
	whisperImageToggleHint: "碎碎念时从表情包池随机抽一张，连同那句话一起显示（图片映射在配置文件顶层 memes）。token：碎碎念本来就每次生成都要调一次模型，配图只是把抽中那张的名称+描述（约 100 字符 / ≈60 token）加进同一次请求，增量可忽略。",
	chatImageToggle: "对话配图",
	chatImageToggleHint: "对话时由 AI 按当前语境从表情包池挑一张配图（可不挑；图片映射在配置文件顶层 memes）。token：每条消息都要把整张清单附进请求，当前约 1.1k 字符（≈650 token，约碎碎念配图的 11 倍），并随图片数量线性增长；关掉则一个字符都不附。",
	confineToggle: "锁定在当前屏幕",
	confineToggleHint: "多屏用户：开了之后宠物只在当前所在那块屏幕内活动——甩出去的宠物只在松手时所在那块屏内弹（屏缝当墙，不飞到隔壁屏），自主漫游也只在当前所在那块屏内走（越出屏缝的那一步直接取消）。关掉则照常跨屏飞行 / 跨屏行走。只影响桌面模式——浏览器 overlay 本来就只在视口内活动。",
	trayToggle: "系统托盘",
	trayToggleHint: "桌面模式启动后在通知区域（macOS 为菜单栏）常驻一个图标，列出配置里的全部宠物，勾选就能切换显示位置——包括当前不在桌面、没有窗口可右键的那些。关掉之后要把宠物叫回桌面，只能开浏览器用设置页，或在网页端那只宠物身上右键。Windows 本来就会把它折叠进「隐藏的图标」面板。仅影响桌面模式。",
	physicsTitle: "物理（拖拽抛掷手感）",
	physicsHint: "全局默认，所有宠物共用（pet pack 可在自己种类文件里单独覆盖）；随「保存」写入用户配置（不做即时写入）。浏览器保存后即时生效，桌面端由保存重载宠物窗口后生效。",
	"physics.gravity": "重力 gravity",
	"physics.gravityHint": "px/s²，越大落得越快；0 = 无重力（抛出去匀速直线飞）",
	"physics.restitution": "弹性 restitution",
	"physics.restitutionHint": "0~1，碰壁 / 落地反弹保留的速度比例（1 = 完全弹性，0 = 撞上即停）",
	"physics.groundFriction": "地面摩擦 groundFriction",
	"physics.groundFrictionHint": "/s，落地后水平速度的衰减率；0 = 冰面不减速",
	"physics.throwPower": "总力度 throwPower",
	"physics.throwPowerHint": "> 0，弹簧跟手与甩出初速的整体倍率（1 = 默认；越大越跟手、甩得越猛）",
	physicsCeilingBounce: "顶部反弹 ceilingBounce",
	physicsCeilingBounceHint: "关掉后抛掷可飞出屏幕顶部（重力仍会把它拉回来）",
	physicsPetCollision: "宠物互撞 petCollision",
	physicsPetCollisionHint: "飞行中的宠物撞到别的宠物按动量守恒弹开（质量 ∝ 尺寸²）",
	invalidPhysics: "请检查物理参数：重力 / 地面摩擦 ≥ 0，弹性 0~1，总力度 > 0。",
	fontTitle: "外观与字体",
	fontHint: "字体种类作用于现在用软糖体的全部文字：宠物气泡、悬浮提示、对话窗、得分弹窗；字号只作用于宠物气泡与悬浮提示（对话窗与得分弹窗的字号不变）。全局默认，所有宠物共用（pet pack 可在自己种类文件里单独覆盖）；随「保存」写入用户配置，浏览器保存后即时生效，桌面端由保存重载宠物窗口后生效。",
	fontFamilyLabel: "字体",
	fontFamilyHint: "「软糖体（内置）」随插件提供；其余为系统字体，机器上没装时自动回退到字体栈里的下一个（不会空白或报错）。",
	fontSizeLabel: "字号（px）",
	fontSizeHint: "气泡正文字号；悬浮提示与气泡内的小字按既有比例派生。范围 4~200。",
	fontFollowToggle: "字号随宠物大小缩放",
	fontFollowToggleHint: "开启（默认）：宠物调大时字号等比放大，462 宽时正好是上面设定的字号；关闭：字号恒定，不随宠物大小变化。",
	invalidFont: "请检查字体设置：字体需在下拉列表内，字号需为 4~200 的数字。",
	"font.candy": "软糖体（内置）",
	"font.yahei": "微软雅黑 / 苹方",
	"font.youyuan": "幼圆",
	"font.kaiti": "楷体",
	"font.simsun": "宋体",
	"font.comic": "漫画体",
	"font.system": "系统默认",
	modelTitle: "AI 模型与对话上下文",
	modelHint: "碎碎念与对话各自用哪个模型，以及对话每次带多少历史进上下文。选「跟随当前对话」= 用你当前对话正在用的那个模型（默认）。全局默认：对所有宠物生效，pet pack 可在自己种类文件里单独覆盖。选项与 DSH 的模型选择器同源，由宿主实时提供。",
	modelFollow: "跟随当前对话",
	modelSearch: "搜索模型…",
	modelEmpty: "没有匹配的模型。",
	modelNoModels: "没有可用的模型。",
	modelLoading: "正在刷新模型列表…",
	modelTriggerAria: "选择模型，当前 {model}",
	modelUnknown: "（当前配置，不在列表中）",
	modelNone: "该服务商没有可用模型",
	whisperModelLabel: "碎碎念模型",
	chatModelLabel: "对话模型",
	modelFieldHint: "选「跟随当前对话」= 用当前对话的模型；指定了但调用失败会自动回落到当前对话的模型重试一次。",
	invalidModel: "请检查模型设置：服务商与模型要么都选，要么都留空（跟随当前对话）。",
	modelCatalogFailed: "模型列表加载失败（刷新页面可重试）；当前配置值仍会原样保留。",
	chatMemory: "对话历史条数",
	chatMemoryHint: "每次对话请求携带的最近历史轮数（1 轮 = 1 问 1 答；0 = 不带历史，每句都是全新对话）。对话记忆本身全存不删，此值只决定截多少进上下文——越大越记得住，也越费 token。全局默认，所有宠物共用（pet pack 可在自己种类文件里单独覆盖）。",
	invalidChatMemory: "请检查对话历史条数：需为 ≥ 0 的数字。",
	chatImageLimit: "对话配图张数上限",
	chatImageLimitHint: "对话时发给模型的表情包清单最多几张（「前 N 张」= 配置里写在前面的那 N 条，想让哪几张优先被发出去就把顺序往前挪）。整张清单是每条消息都要附的，token 随张数线性增长——张数一多就是纯烧钱，限制成前 N 张，模型只从这几张里挑。0 = 不限制（全部发）。内置默认 10。全局默认，所有宠物共用（pet pack 可在自己种类文件里覆盖）。只影响对话选图：碎碎念只带抽中的那一张。",
	invalidChatImageLimit: "请检查对话配图张数上限：需为 ≥ 0 的数字（0 = 不限制）。",
	soulTitle: "人格灵魂色彩",
	soulHint: "灵魂卡是比人设更稳定的「内在设定」：身份、在意的东西、说话方式、渴望、害怕、边界、关系起点与灵魂色彩。配置后，宿主会在碎碎念与对话的 system 里追加「稳定灵魂卡 + 此刻的灵魂状态」；状态（情绪 / 关系 / 上次聊天 / 长期记忆 / 关系事件）由 soul-state.json 跨会话延续；成功对话后还会定期反思，整理偏好、约定、事件与自我叙事。没有卡 / 空卡 = 完全走旧人设。",
	soulToggle: "灵魂注入",
	soulToggleHint: "全局默认，所有宠物共用。开启（默认）= 有灵魂卡的宠物在提示词里追加灵魂段，并在成功对话后推进 soul-state.json；关闭 = 不读卡、不写状态、不追加任何段落，行为回到旧版。只影响 AI 提示词，设置页仍可查看灵魂卡。",
	soulCardLabel: "灵魂卡（JSON，可选）",
	soulCardHint: "只影响这只宠物。留空 = 跟随所属条目的灵魂卡（输入框里的灰色文字就是那份内容）；填了非空 JSON = 整张取代条目卡。字段见仓库 CONFIG.md（或包内 assets/config.jsonc 的默认卡）；支持 camelCase 与 snake_case。保存前会校验 JSON，格式不对不会写盘。",
	soulCardPlaceholder: "留空 = 跟随条目灵魂卡；也可以粘贴一张完整 JSON 覆盖这只宠物。",
	soulPreview: "预览当前注入",
	soulPreviewNote: "预览读取的是已保存配置（含长期记忆）；改完灵魂卡请先点「保存」。",
	soulPreviewBusy: "读取中…",
	soulPreviewEmpty: "没有可注入的灵魂卡。",
	soulPreviewDisabled: "灵魂注入已关闭；下面是卡内容，但不会进入提示词。",
	soulPreviewError: "预览失败，请检查服务连接后重试。",
	soulReflectNow: "立即整理记忆",
	soulReflectBusy: "整理中…",
	soulReflectOk: "已整理，新增/合并 {n} 条记忆",
	soulReflectNoMemory: "还没有可整理的对话记忆",
	soulReflectError: "整理失败，请稍后重试",
	soulClearMemories: "清空长期记忆",
	soulResetState: "重置关系与情绪",
	soulClearConfirm: "确定清空这只宠物的长期记忆与关系事件？聊天记录不会删除。",
	soulResetConfirm: "确定重置这只宠物的情绪、关系和长期记忆？聊天记录不会删除。",
	soulResetOk: "已重置",
	soulResetError: "重置失败，请稍后重试",
	soulEventsTitle: "关系事件",
	soulEventKind: "事件类型",
	soulEventText: "事件内容",
	soulEventDate: "日期（可选）",
	soulEventDateHint: "日期事件按每年同月同日自动提醒；仅在开启自动碎碎念时生效。",
	soulAddEvent: "添加关系事件",
	soulEventDelete: "删除",
	soulEventDeleteConfirm: "确定删除这条关系事件？",
	soulEventAddOk: "已添加关系事件",
	soulEventDeleteOk: "已删除关系事件",
	soulEventError: "操作失败，请稍后重试",
	"soulEventKind.first": "第一次",
	"soulEventKind.milestone": "里程碑",
	"soulEventKind.promise": "约定",
	"soulEventKind.conflict": "别扭",
	"soulEventKind.repair": "和好",
	"soulEventKind.date": "日期",
	"soulEventKind.gift": "礼物",
	"soulEventKind.other": "其他",
	soulMemoriesTitle: "长期记忆",
	soulGoalsTitle: "当前挂心",
	soulNarrativeTitle: "自我叙事",
	soulFollowEntry: "当前跟随条目灵魂卡",
	soulOverride: "当前使用这只宠物的覆盖",
	soulColorLabel: "灵魂色彩",
	soulInvalid: "灵魂卡 JSON 解析失败：{msg}",
	soulMustBeObject: "必须是一个 JSON 对象（不能是数组/字符串/数字）。",
	soulTooLarge: "灵魂卡 JSON 过大（上限 20000 字符）。",
	soulMetaOn: "注入开",
	soulMetaOff: "注入关",
	soulMetaFollow: "跟随条目",
	soulMetaOverride: "实例覆盖",
	soulEdit: "编辑 JSON",
	soulEditHint: "弹窗里修改这张卡；点「保存并写入」会立即保存到配置。",
	soulEditorTitle: "编辑灵魂卡 JSON",
	soulEditorHint: "留空或 {} = 跟随所属条目的灵魂卡；非空 JSON 对象 = 整张覆盖这只宠物。保存前会校验格式，格式不对不会写盘。",
	soulEditorSave: "保存并写入",
	soulEditorCancel: "取消",
	soulEditorClear: "清空覆盖（跟随条目）",
	soulEditorObject: "必须是一个 JSON 对象（不能是数组/字符串/数字）。",
	soulEditorTooLarge: "JSON 过大（上限 20000 字符）。",
	soulEditorInvalid: "JSON 格式有误：{msg}",
	notifyTest: "测试弹窗",
	notifyTestOk: "测试通知已发送，请查看桌面右下角。",
	notifyDenyUnsupported: "当前环境不支持系统通知（浏览器无 Notification API）。",
	notifyDenyBlocked: "通知权限已被浏览器标记为「阻止」。",
	notifyDenyRejected: "你在权限询问弹窗中选择了「阻止」。",
	notifyDenyError: "申请权限时出错",
	notifyGuide: "引导：点击地址栏左侧 🔒/ⓘ →「网站设置」→「通知」→ 改为「允许」，刷新页面后重试。",
	storageTitle: "卸载与存储",
	storageHint: "插件在本机落下的全部位置。删缓存不影响使用（会自动重下/重建）；删「插件用户数据」会丢配置、对话记忆与灵魂状态。",
	"storage.userData": "插件用户数据：自定义配置 main-config.jsonc、对话记忆 memory.json、灵魂状态 soul-state.json、自定义动画素材 main-animation/、文件宠物 pet/",
	"storage.electron": "桌面宠物用的 Electron 运行时（体积较大；删除后下次启用桌面模式会自动重新下载）",
	"storage.desktopCache": "桌面宠物窗口的缓存与主屏缩放缓存（可删，会自动重建）",
	"storage.electronCache": "Electron 安装包下载缓存（可删，需要时会重新下载）",
	"storage.package": "插件本体（由 DSH 管理，用下面的卸载命令移除，不要手删）",
	storageMissing: "（尚未创建）",
	uninstallTitle: "卸载方法",
	uninstallStep1: "1. 先退出 DSH（桌面宠物随之退出）；不要在桌宠运行时删除上面的文件。",
	uninstallStep2: "2. 卸载插件本体（终端执行，会同时从 profile 的 bundle 层移除）：",
	uninstallStep3: "3. 按需删除上面的位置：缓存类删了无影响；「插件用户数据」删了会丢配置、对话记忆与灵魂状态（想保留就先备份其中的 main-config.jsonc）。",
	uninstallCmd: "dsh plugin --profile {profile} remove dsh-pet-to-family",
	moveTitle: "搬家",
	moveHint: "把桌宠的用户配置、聊天记忆、灵魂状态、长期记忆、关系事件和 pet pack 配置打成一个 .dshpet 包，换电脑后导入即可恢复。",
	moveExport: "打包搬家啦",
	moveImport: "我住进来喽",
	moveExporting: "正在打包…",
	moveImporting: "正在入住…",
	moveExportOk: "搬家包已开始下载",
	moveImportOk: "搬家包已导入，正在重新加载配置",
	moveError: "搬家操作失败，请检查文件或服务日志",
	moveTooLarge: "搬家包过大（上限 16 MB）",
	moveNoFile: "没有选择文件",
	moveInclude: "包含：main-config.jsonc、memory.json、soul-state.json、pet/* 配置文件。",
	moveExclude: "不包含：standalone-ai.json（API key）、main-animation/ 与 pet 素材、日志、缓存；这些请随素材目录手动复制。",
	moveImportConfirm: "导入会覆盖当前配置、聊天记忆、灵魂状态和关系事件；旧文件会先备份到 move-backup-*。继续吗？"
};
const en = {
	nav: "Pet Config",
	intro: "Manage multiple pets: each pet has its own size and position (applies instantly after saving).",
	petCardTitle: "Pet",
	petCardHint: "Per-pet settings: name / size / display / corner / offsets / the four feature switches. Click \"Save\" at the bottom to apply instantly.",
	globalTitle: "Global switches",
	globalHint: "Shared by every pet (a pet pack may override them in its own kind file). These switches only change local state and are written to the user config on \"Save\" (never written immediately); system notifications re-read right after saving, no page refresh needed.",
	cornerHint: "Which screen corner the pet sticks to (per-monitor work area in desktop mode).",
	marginXHint: "Horizontal distance from the chosen corner (px); any number.",
	marginYHint: "Vertical distance from the chosen corner (px); any number.",
	"cmd.chat": "Chat",
	"cmd.pet": "Pet",
	"cmd.balance": "Balance",
	petsLabel: "Pets",
	add: "Add pet",
	remove: "Remove",
	confirmRemove: "Delete pet \"{id}\"?",
	confirmTitle: "Confirm action",
	cancel: "Cancel",
	ok: "Got it",
	atLeastOne: "Keep at least one pet.",
	emptyPets: "No pets yet — click \"Add pet\" to create one.",
	sizeLabel: "Size (width px)",
	sizeHint: "Height is automatic = width × 9/16.",
	nameLabel: "Name",
	nameHint: "Shown on hover and added to AI personas (\"your name is X\"). Duplicates allowed; empty falls back to the pet id.",
	personaLabel: "Persona (optional)",
	personaHint: "Applies to this pet only. Leave empty to follow the entry persona — the grey text inside the box is exactly that. The system prompt actually sent = this text + an appended 「your name is \"<name>\"」 line + the current time context, so do not repeat the name or the date here.",
	personaCount: "{n} chars",
	balanceEnabled: "Balance",
	balanceEnabledHint: "When enabled, this pet plays balance animations and shows the balance bubble.",
	whisperEnabled: "Whisper",
	whisperEnabledHint: "When enabled, this pet periodically generates a line via AI and plays the whisper animation (persona = the field below; empty follows the entry).",
	workStatusEnabled: "Work status",
	workStatusEnabledHint: "When enabled, this pet follows DSH work state: thinking / working / waiting / done / error switch animations and show bubbles (pool in top-level config; listening only, no model calls).",
	fixedEnabled: "Pin in place",
	fixedEnabledHint: "When enabled, the random chain no longer turns this pet or walks it away — only idle and in-place actions play. Right-click picks, API triggers and balance / whisper / work-status animations are unaffected.",
	displayLabel: "Display",
	displayHint: "web = browser only / desktop = desktop only / both = both / none = neither",
	"display.web": "Browser only",
	"display.desktop": "Desktop only",
	"display.both": "Both",
	"display.none": "Neither",
	cornerLabel: "Position",
	"corner.top-left": "Top-left",
	"corner.top-right": "Top-right",
	"corner.bottom-left": "Bottom-left",
	"corner.bottom-right": "Bottom-right",
	marginX: "Horizontal offset",
	marginY: "Vertical offset",
	save: "Save",
	saveHotkey: "Ctrl+S / Cmd+S",
	sync: "Sync",
	confirmSync: "Sync? This overwrites the user config with the bundled default config (all fields + comments); current customizations are lost.",
	corruptTitle: "User config is corrupted — not saved",
	corruptConfirm: "Save anyway",
	corruptBody: "The user config file cannot be parsed (corrupted, not valid JSON/JSONC): {path}. Saving now rebuilds it from the whitelist — everything currently in that file (animations / physics / memes …) will be lost. Cancel = leave the file untouched (fix it and save again); Confirm = save anyway (discard what is in the file).",
	syncHint: "\"Sync\" writes the bundled default config (comments + every advanced field included) to the user config file, overwriting your current customizations; the file is then directly editable. Two caveats: (1) once created, that file is an explicit override layer — later changes to the bundled defaults will not take effect automatically (until you sync again or delete the file); (2) clicking \"Save\" on this page rewrites the file from a whitelist — field values are kept, comments are dropped.",
	configMeta: "Advanced (files)",
	configMetaHint: "User config may override pets / animation pools / weights — refresh or restart to apply: refresh the page in the browser, or right-click a desktop pet → \"Reload config\" (rebuilds every desktop pet window). The default config is the complete reference.",
	defaultConfig: "Default config (read-only, complete reference)",
	userConfig: "User config (custom overrides)",
	animationDir: "Animation assets dir (add/customize animations here)",
	memesDir: "Meme images dir (add/customize images here)",
	logFile: "Log file (for troubleshooting; safe to clear)",
	logFileNote: "The DSH desktop app has no console, so every runtime log of the plugin (startup, desktop pet crashes/restarts, errors and warnings) goes into this single file — attach it when reporting a problem. It is capped at 1 MB; once full, only the latest 512 KB is kept.",
	saved: "Saved — the pets updated instantly.",
	loadError: "Failed to load config",
	saveError: "Failed to save config. Check the server connection, configuration directory write permissions and server log.",
	saveInvalid: "Failed to save config: invalid configuration. Check the values and try again.",
	syncError: "Failed to sync config. Check the server connection and configuration directory write permissions.",
	loading: "Loading config…",
	retry: "Retry",
	invalid: "Check your input: size must be positive; margins can be any number.",
	busy: "Saving…",
	extraPetsHint: "{n} extra pet(s) are file-defined in the pet/ directory (<name>-config.json + <name>-animation/ + <name>-memes/). They are not in this list — after editing the files, refresh the page (browser) or right-click a desktop pet → \"Reload config\".",
	notifyToggle: "System notifications",
	notifyToggleHint: "OS-level toasts (bottom-right of the desktop) for conversation completion, failures, permission requests, and questions — only while this window is unfocused.",
	clickSoundToggle: "Click sound",
	clickSoundToggleHint: "Plays the built-in click sound (assets/sound/click-duck.wav, volume 0.5) when a pet is clicked; repeated clicks within 100ms play only once, so multiple pets never stack up. Turn it off for silence. Written to the user config together with Save.",
	whisperImageToggle: "Whisper images",
	whisperImageToggleHint: "Attach one random meme from the pool to each whisper line (image mapping lives in the top-level `memes` config field). Tokens: a whisper already calls the model every cycle, so the image only appends the name + description of that one meme (~100 chars / ~60 tokens) to the same request — negligible.",
	chatImageToggle: "Chat images",
	chatImageToggleHint: "Let the AI pick one meme from the pool that fits the current context (optional; mapping lives in the top-level `memes` config field). Tokens: every message carries the whole catalog — currently ~1.1k chars (~650 tokens, about 11x the whisper case) and growing with the number of images; turning this off appends nothing at all.",
	confineToggle: "Lock to the current screen",
	confineToggleHint: "Multi-monitor: when on, the pet stays inside the screen it is currently on — a thrown pet bounces only inside the screen it was released on (screen seams act as walls, so it never flies to the neighbouring monitor), and autonomous wandering only walks within the screen it is currently on (a step that would cross the seam is simply cancelled). Turn this off to let it cross screens as usual. Desktop only — the browser overlay always stays inside the viewport anyway.",
	trayToggle: "System tray",
	trayToggleHint: "Shows a tray icon (notification area on Windows, menu bar on macOS) once desktop mode is running. It lists every pet in the config and toggles each one between desktop and web/none — including pets that are currently off the desktop and therefore have no window to right-click. With it off, bringing a pet back to the desktop requires opening the browser (the settings page, or right-clicking a web pet there). Windows already folds third-party icons into the \"hidden icons\" overflow. Desktop mode only.",
	physicsTitle: "Physics (drag & throw feel)",
	physicsHint: "Global default, shared by every pet (a pet pack may override it in its own kind file); written to the user config on \"Save\" (never written immediately). Applies instantly in the browser; on the desktop it applies once Save reloads the pet windows.",
	"physics.gravity": "Gravity",
	"physics.gravityHint": "px/s² — the higher, the faster it falls; 0 = weightless (flies straight forever)",
	"physics.restitution": "Bounciness",
	"physics.restitutionHint": "0–1, speed kept when bouncing off a wall or the floor (1 = perfectly elastic, 0 = stops dead)",
	"physics.groundFriction": "Ground friction",
	"physics.groundFrictionHint": "per second, horizontal damping while on the ground; 0 = frictionless ice",
	"physics.throwPower": "Throw power",
	"physics.throwPowerHint": "> 0, overall multiplier for spring tracking and release speed (1 = default; higher = tighter tracking, harder throws)",
	physicsCeilingBounce: "Ceiling bounce",
	physicsCeilingBounceHint: "Turn this off to let a throw fly out through the top of the screen (gravity still pulls it back)",
	physicsPetCollision: "Pet collisions",
	physicsPetCollisionHint: "A flying pet bounces off the others with momentum conservation (mass ∝ size²)",
	invalidPhysics: "Check the physics values: gravity / ground friction ≥ 0, bounciness 0–1, throw power > 0.",
	fontTitle: "Appearance & font",
	fontHint: "The family applies to every place that currently uses the candy font: pet bubble, hover tooltip, chat popup, score popup. The size applies only to the pet bubble and the hover tooltip (chat and score popups keep their own size). Global default, shared by every pet (a pet pack may override it in its own kind file); written to the user config on \"Save\" — instant in the browser, and on the desktop it applies once Save reloads the pet windows.",
	fontFamilyLabel: "Font",
	fontFamilyHint: "\"Candy (bundled)\" ships with the plugin; the others are system fonts. If a font is missing on this machine, it falls back to the next one in the stack (never blank, never an error).",
	fontSizeLabel: "Font size (px)",
	fontSizeHint: "Bubble body text size; the tooltip and the smaller lines inside the bubble scale proportionally. Range 4–200.",
	fontFollowToggle: "Scale font with pet size",
	fontFollowToggleHint: "On (default): the font grows with the pet — at 462 px width it is exactly the size above. Off: the size stays fixed regardless of pet size.",
	invalidFont: "Check the font settings: the family must be in the list and the size must be a number between 4 and 200.",
	"font.candy": "Candy (bundled)",
	"font.yahei": "Microsoft YaHei / PingFang",
	"font.youyuan": "YouYuan",
	"font.kaiti": "KaiTi",
	"font.simsun": "SimSun",
	"font.comic": "Comic Sans MS",
	"font.system": "System default",
	modelTitle: "AI models & chat context",
	modelHint: "Which model each of whisper and chat uses, and how much history every chat request carries. \"Follow current conversation\" uses the model your current conversation is on (default). Global default: applies to every pet, and a pet pack may override it in its own kind file. The options come from the same source as the DSH model picker, served live by the host.",
	modelFollow: "Follow current conversation",
	modelSearch: "Search models…",
	modelEmpty: "No matching models.",
	modelNoModels: "No models available.",
	modelLoading: "Refreshing model list…",
	modelTriggerAria: "Select model, current {model}",
	modelUnknown: " (current config, not in the list)",
	modelNone: "No models available for this provider",
	whisperModelLabel: "Whisper model",
	chatModelLabel: "Chat model",
	modelFieldHint: "\"Follow current conversation\" uses the conversation model; if a chosen model fails, the plugin falls back to the conversation model and retries once.",
	invalidModel: "Check the model settings: pick both a provider and a model, or leave both empty (follow the current conversation).",
	modelCatalogFailed: "Failed to load the model list (refresh the page to retry); your current values are kept as they are.",
	chatMemory: "Chat history rounds",
	chatMemoryHint: "How many recent rounds each chat request carries (1 round = 1 question + 1 answer; 0 = no history, every message starts fresh). The memory itself keeps everything — this only decides how much goes into the context: higher remembers more and costs more tokens. Global default, shared by every pet (a pet pack may override it in its own kind file).",
	invalidChatMemory: "Check the chat history rounds: it must be a number ≥ 0.",
	chatImageLimit: "Chat image limit",
	chatImageLimitHint: "How many memes at most are listed to the model during chat (\"first N\" = the first N you wrote in the config, so move the ones you want sent to the front). That whole list is attached to every message and tokens grow linearly with the count, so a long list is pure burn; capping it to the first N makes the model pick only among those. 0 = no limit (send everything). Built-in default 10. Global default, shared by every pet (a pet pack may override it in its own kind file). Chat only — a whisper carries just the one meme it drew.",
	invalidChatImageLimit: "Check the chat image limit: it must be a number ≥ 0 (0 = no limit).",
	soulTitle: "Soul & personality color",
	soulHint: "A soul card is a more stable inner layer than the persona: identity, what it cares about, voice, desires, fears, boundaries, relationship seed and soul color. When configured, the host appends a stable soul card plus the current soul state to every whisper / chat system prompt; the state (mood / relationship / last exchange / long-term memories / relationship events) persists across sessions in soul-state.json; after successful chats it also reflects periodically to distill preferences, promises, events and a self-narrative. No card / empty card = the legacy persona only.",
	soulToggle: "Soul injection",
	soulToggleHint: "Global default shared by every pet. On (default) = pets with a soul card get the soul sections and advance soul-state.json after successful chats; off = no card read, no state write, no extra prompt sections (legacy behavior). It only affects AI prompts; the card stays visible here.",
	soulCardLabel: "Soul card (JSON, optional)",
	soulCardHint: "Applies to this pet only. Leave empty to follow the entry soul card (the grey text in the box is exactly that); a non-empty JSON object replaces it entirely. See the repository CONFIG.md (or the default card in assets/config.jsonc) for fields; camelCase and snake_case are both accepted. JSON is validated before saving — malformed input is never written.",
	soulCardPlaceholder: "Leave empty to follow the entry soul card, or paste a full JSON object to override this pet.",
	soulPreview: "Preview current injection",
	soulPreviewNote: "The preview reads the saved config (including long-term memories); save your edits first.",
	soulPreviewBusy: "Loading…",
	soulPreviewEmpty: "No soul card to inject.",
	soulPreviewDisabled: "Soul injection is off; the card below is not sent to the model.",
	soulPreviewError: "Preview failed. Check the server connection and try again.",
	soulReflectNow: "Reflect now",
	soulReflectBusy: "Reflecting…",
	soulReflectOk: "Reflected; {n} memories merged",
	soulReflectNoMemory: "No chat memory to reflect on yet",
	soulReflectError: "Reflection failed. Try again later.",
	soulClearMemories: "Clear long-term memories",
	soulResetState: "Reset mood & relationship",
	soulClearConfirm: "Clear this pet's long-term memories? Chat history is not deleted.",
	soulResetConfirm: "Reset this pet's mood, relationship and long-term memories? Chat history is not deleted.",
	soulResetOk: "Reset complete",
	soulResetError: "Reset failed. Try again later.",
	soulEventsTitle: "Relationship events",
	soulEventKind: "Event type",
	soulEventText: "Event text",
	soulEventDate: "Date (optional)",
	soulEventDateHint: "Date events remind you on the same month/day every year; only when automatic whispers are on.",
	soulAddEvent: "Add relationship event",
	soulEventDelete: "Delete",
	soulEventDeleteConfirm: "Delete this relationship event?",
	soulEventAddOk: "Relationship event added",
	soulEventDeleteOk: "Relationship event deleted",
	soulEventError: "Action failed. Try again later.",
	"soulEventKind.first": "First",
	"soulEventKind.milestone": "Milestone",
	"soulEventKind.promise": "Promise",
	"soulEventKind.conflict": "Conflict",
	"soulEventKind.repair": "Repair",
	"soulEventKind.date": "Date",
	"soulEventKind.gift": "Gift",
	"soulEventKind.other": "Other",
	soulMemoriesTitle: "Long-term memories",
	soulGoalsTitle: "Current concerns",
	soulNarrativeTitle: "Self narrative",
	soulFollowEntry: "Following the entry soul card",
	soulOverride: "Using this pet’s override",
	soulColorLabel: "Soul color",
	soulInvalid: "Soul card JSON is invalid: {msg}",
	soulMustBeObject: "must be a JSON object (not an array, string or number).",
	soulTooLarge: "Soul card JSON is too large (limit: 20000 chars).",
	soulMetaOn: "Injection on",
	soulMetaOff: "Injection off",
	soulMetaFollow: "Entry card",
	soulMetaOverride: "Pet override",
	soulEdit: "Edit JSON",
	soulEditHint: "Edit the card in a dialog; \"Save & write\" persists it to the config immediately.",
	soulEditorTitle: "Edit soul card JSON",
	soulEditorHint: "Leave empty or use {} to follow the entry soul card; a non-empty JSON object replaces it for this pet. The JSON is validated before saving, so malformed input is never written.",
	soulEditorSave: "Save & write",
	soulEditorCancel: "Cancel",
	soulEditorClear: "Clear override (follow entry)",
	soulEditorObject: "must be a JSON object (not an array, string or number).",
	soulEditorTooLarge: "JSON is too large (limit: 20000 chars).",
	soulEditorInvalid: "Invalid JSON: {msg}",
	notifyTest: "Test notification",
	notifyTestOk: "Test notification sent — check the bottom-right of your desktop.",
	notifyDenyUnsupported: "System notifications are not supported in this environment (no Notification API).",
	notifyDenyBlocked: "Notification permission is blocked by the browser.",
	notifyDenyRejected: "You chose \"Block\" in the permission prompt.",
	notifyDenyError: "Failed to request permission",
	notifyGuide: "Guide: click the 🔒/ⓘ icon next to the address bar → Site settings → Notifications → set to \"Allow\", then refresh and retry.",
	storageTitle: "Uninstall & storage",
	storageHint: "Every location this plugin writes to. Deleting cache folders is harmless (they re-download / rebuild); deleting \"plugin user data\" loses your config, chat memory and soul state.",
	"storage.userData": "Plugin user data: custom config main-config.jsonc, chat memory memory.json, soul state soul-state.json, custom animation assets main-animation/, file pets pet/",
	"storage.electron": "Electron runtime used by the desktop pet (large; re-downloaded automatically the next time desktop mode starts)",
	"storage.desktopCache": "Desktop pet window cache and primary-monitor scale cache (safe to delete, rebuilt automatically)",
	"storage.electronCache": "Electron installer download cache (safe to delete, re-downloaded when needed)",
	"storage.package": "The plugin itself (managed by DSH — remove it with the command below instead of deleting it)",
	storageMissing: " (not created yet)",
	uninstallTitle: "How to uninstall",
	uninstallStep1: "1. Quit DSH first (the desktop pet exits with it); do not delete these files while the pet is running.",
	uninstallStep2: "2. Remove the plugin itself (run in a terminal; this also drops it from the profile bundle layer):",
	uninstallStep3: "3. Delete the locations above as needed: cache folders are harmless; deleting \"plugin user data\" loses your config, chat memory and soul state (back up main-config.jsonc first if you want to keep it).",
	uninstallCmd: "dsh plugin --profile {profile} remove dsh-pet-to-family",
	moveTitle: "Move house",
	moveHint: "Bundle the user config, chat memory, soul state, long-term memories, relationship events and pet-pack configs into one .dshpet file; import it on another computer to restore.",
	moveExport: "Pack up and move",
	moveImport: "I am moving in",
	moveExporting: "Packing…",
	moveImporting: "Moving in…",
	moveExportOk: "The move package is downloading",
	moveImportOk: "Move package imported; reloading config",
	moveError: "Move failed. Check the file or server log.",
	moveTooLarge: "Move package is too large (max 16 MB)",
	moveNoFile: "No file selected",
	moveInclude: "Includes: main-config.jsonc, memory.json, soul-state.json, pet/* config files.",
	moveExclude: "Excludes: standalone-ai.json (API keys), main-animation/ and pet assets, logs and caches; copy those directories manually.",
	moveImportConfirm: "Importing overwrites the current config, chat memory, soul state and relationship events. Existing files are backed up to move-backup-*. Continue?"
};
function makePetConfigSection(rt) {
	const { h: h$1, useState, useEffect, useRef, useCallback, t: t$3 } = rt;
	const initialCard = rt.initialSection ?? "pets";
	injectSettingsCss();
	const CORNERS = [
		"top-left",
		"top-right",
		"bottom-left",
		"bottom-right"
	];
	const cornerLabel = (c) => t$3("corner." + c);
	const inputClass = "dsh-pet-cfg__inp";
	/** 等宽字体栈（路径与命令展示用），走系统栈以免多拉一份资源。 */
	const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, \"Courier New\", monospace";
	/** 生成一个未占用的宠物 id（pet-2、pet-3…）。 */
	const nextId = (list) => {
		let n$2 = 2;
		for (;; n$2++) {
			const id$1 = "pet-" + n$2;
			if (!list.some((p$4) => p$4.id === id$1)) return id$1;
		}
	};
	/**
	* 悬浮说明的展开属性：带 `data-tip` 即悬浮出气泡（CSS 的 `[data-tip]::after`）。
	* 返回属性而不包一层 DOM，避免打乱外层 flex 的 gap / 对齐 / 拉伸；hover 与过渡只能由 CSS 表达。
	* @param text - 说明正文（已翻译）。
	* @param end - 气泡右对齐，给栅格最右列或贴右缘的元素用。
	*/
	const tip = (text, end = false) => end ? {
		"data-tip": text,
		"data-tip-end": ""
	} : { "data-tip": text };
	/**
	* 问号说明入口：气泡的一个圆形触发元素，文字仍走 `tip()`。
	* 用 `<i>` 而不是 `<button>`：它只展示说明，点了不该有行为，也不该进 Tab 顺序。
	*/
	const q$3 = (text, end = false) => h$1("i", {
		className: "dsh-pet-cfg__q",
		...tip(text, end),
		"aria-label": text,
		role: "img",
		children: "?"
	});
	/** 一个字段：标签（可带问号）在上、控件在下。 */
	const field = (label, control, tip$1, end = false) => h$1("div", {
		className: "dsh-pet-cfg__field",
		children: [h$1("span", {
			key: "l",
			className: "dsh-pet-cfg__flabel",
			children: tip$1 ? [label, q$3(tip$1, end)] : label
		}), control]
	});
	/**
	* 开关的一格：勾选框、标题与问号；说明挂在问号上，点标题只切开关。
	*/
	const toggleCell = (label, value, disabled, onToggle, end = false) => h$1("div", {
		className: "dsh-pet-cfg__toggle",
		children: [h$1("label", {
			key: "l",
			children: [h$1("input", {
				key: "i",
				type: "checkbox",
				checked: value,
				disabled,
				onChange: (e) => onToggle(e.target.checked)
			}), h$1("span", {
				key: "t",
				children: t$3(label)
			})]
		}), q$3(t$3(label + "Hint"), end)]
	});
	/**
	* 「模型」单下拉选择器（碎碎念 / 对话各一个实例）：触发器 + 浮层（搜索 + 按服务商分组的清单）。
	* 无障碍语义、浮层定位与搜索规则都对齐 DSH 自己的模型选择器；数据同源于 `GET /models`。
	* 不用两个 `<select>`：既占地方，又容易留下只选了服务商没选模型的非法组合；也不提供手填模型 id 的退路。
	* 定义在工厂作用域：组件类型必须跨渲染稳定，否则浮层状态（打开 / 搜索词 / 高亮）每次渲染都会丢。
	*/
	const ModelPicker = (props) => {
		const [open, setOpen] = useState(false);
		const [query$1, setQuery] = useState("");
		const [active, setActive] = useState(0);
		const [pos, setPos] = useState(null);
		const rootRef = useRef(null);
		const panelRef = useRef(null);
		const groups = props.catalog ?? [];
		const group = groups.find((g$1) => g$1.id === props.value.provider);
		const picked = group?.models.find((m$2) => m$2.id === props.value.model);
		const isFollow = props.value.provider === "";
		const triggerLabel = isFollow ? t$3("modelFollow") : picked?.name ?? props.value.model;
		const triggerSub = isFollow ? "" : group?.name ?? props.value.provider + t$3("modelUnknown");
		const q$4 = query$1.trim().toLowerCase();
		const hit = (text) => {
			if (q$4 === "") return true;
			let i$1 = 0;
			for (const ch$1 of text.toLowerCase()) {
				if (ch$1 === q$4[i$1]) i$1 += 1;
				if (i$1 >= q$4.length) return true;
			}
			return false;
		};
		const rows = [];
		if (q$4 === "") rows.push({
			kind: "follow",
			key: "__follow"
		});
		for (const g$1 of groups) {
			const models = g$1.models.filter((m$2) => hit(m$2.name + " " + m$2.id));
			if (models.length === 0 && !(q$4 === "" && g$1.models.length === 0)) continue;
			rows.push({
				kind: "group",
				key: g$1.id,
				name: g$1.name
			});
			if (models.length === 0) {
				rows.push({
					kind: "none",
					key: g$1.id + "/__none"
				});
				continue;
			}
			for (const m$2 of models) rows.push({
				kind: "model",
				key: g$1.id + "/" + m$2.id,
				provider: g$1.id,
				model: m$2
			});
		}
		const selectable = rows.map((r$2, i$1) => r$2.kind === "group" || r$2.kind === "none" ? -1 : i$1).filter((i$1) => i$1 >= 0);
		const commit = (v$3) => {
			props.onChange(v$3);
			setOpen(false);
			setQuery("");
		};
		const pick = (row) => {
			if (!row) return;
			if (row.kind === "follow") commit({
				provider: "",
				model: ""
			});
			else if (row.kind === "model") commit({
				provider: row.provider,
				model: row.model.id
			});
		};
		const step = (dir) => {
			if (selectable.length === 0) return;
			const at = selectable.indexOf(active);
			const next = selectable[at < 0 ? 0 : (at + dir + selectable.length) % selectable.length];
			setActive(next);
			panelRef.current?.querySelector("[data-row=\"" + next + "\"]")?.scrollIntoView({ block: "nearest" });
		};
		useEffect(() => {
			if (!open) return;
			const el$1 = rootRef.current;
			const place = () => {
				if (!el$1) return;
				const r$2 = el$1.getBoundingClientRect();
				const below = window.innerHeight - r$2.bottom - 12;
				const above = r$2.top - 12;
				const width = Math.min(Math.max(r$2.width, 240), Math.max(200, Math.min(420, window.innerWidth - 16)));
				const left = Math.max(8, Math.min(r$2.left, window.innerWidth - width - 8));
				const up = below < 240 && above > below;
				setPos(up ? {
					left,
					bottom: window.innerHeight - r$2.top + 4,
					width,
					maxHeight: Math.min(360, above)
				} : {
					left,
					top: r$2.bottom + 4,
					width,
					maxHeight: Math.min(360, below)
				});
			};
			place();
			panelRef.current?.querySelector("input")?.focus();
			const onDown = (e) => {
				const target = e.target;
				if (target && (rootRef.current?.contains(target) === true || panelRef.current?.contains(target) === true)) return;
				setOpen(false);
			};
			const onKey = (e) => {
				if (e.key === "Escape") setOpen(false);
			};
			document.addEventListener("mousedown", onDown, true);
			document.addEventListener("keydown", onKey, true);
			window.addEventListener("scroll", place, true);
			window.addEventListener("resize", place);
			return () => {
				document.removeEventListener("mousedown", onDown, true);
				document.removeEventListener("keydown", onKey, true);
				window.removeEventListener("scroll", place, true);
				window.removeEventListener("resize", place);
			};
		}, [open]);
		const toggle = () => {
			if (props.disabled) return;
			if (!open) {
				setQuery("");
				const at = rows.findIndex((r$2) => r$2.kind === "model" && r$2.provider === props.value.provider && r$2.model.id === props.value.model);
				setActive(at >= 0 ? at : 0);
			}
			setOpen(!open);
		};
		const searchRow = h$1("input", {
			key: "search",
			type: "text",
			className: "dsh-pet-mp__search",
			role: "searchbox",
			placeholder: t$3("modelSearch"),
			"aria-label": t$3("modelSearch"),
			value: query$1,
			disabled: props.disabled,
			onChange: (e) => {
				setQuery(e.target.value);
				setActive(selectable.length > 0 ? selectable[0] : 0);
			},
			onKeyDown: (e) => {
				if (e.key === "ArrowDown") {
					e.preventDefault();
					step(1);
				} else if (e.key === "ArrowUp") {
					e.preventDefault();
					step(-1);
				} else if (e.key === "Enter") {
					e.preventDefault();
					pick(rows[active]);
				}
			}
		});
		const rowNode = (row, index) => {
			if (row.kind === "group") return h$1("div", {
				key: row.key,
				className: "dsh-pet-mp__group",
				children: row.name
			});
			if (row.kind === "none") return h$1("div", {
				key: row.key,
				className: "dsh-pet-mp__status",
				children: t$3("modelNone")
			});
			const checked = row.kind === "follow" ? isFollow : props.value.provider === row.provider && props.value.model === row.model.id;
			return h$1("button", {
				key: row.key,
				type: "button",
				role: "menuitemradio",
				"aria-checked": checked,
				"data-row": index,
				className: "dsh-pet-mp__item" + (index === active ? " is-active" : ""),
				disabled: props.disabled,
				onClick: () => pick(row),
				onMouseMove: () => setActive(index),
				children: [h$1("span", {
					key: "n",
					className: "dsh-pet-mp__name",
					children: row.kind === "follow" ? t$3("modelFollow") : row.model.name
				}), h$1("span", {
					key: "c",
					className: "dsh-pet-mp__check",
					children: checked ? "✓" : ""
				})]
			});
		};
		return h$1("div", {
			ref: rootRef,
			className: "dsh-pet-mp",
			children: [h$1("button", {
				key: "trigger",
				type: "button",
				className: "dsh-pet-mp__trigger",
				disabled: props.disabled,
				"aria-haspopup": "menu",
				"aria-expanded": open,
				"aria-label": t$3("modelTriggerAria").replace("{model}", triggerLabel),
				onClick: toggle,
				children: [
					h$1("span", {
						key: "l",
						className: "dsh-pet-mp__label",
						children: triggerLabel
					}),
					triggerSub ? h$1("span", {
						key: "s",
						className: "dsh-pet-mp__sub",
						children: triggerSub
					}) : null,
					h$1("span", {
						key: "c",
						className: "dsh-pet-mp__chevron" + (open ? " is-open" : ""),
						children: "▾"
					})
				]
			}), open && pos ? h$1("div", {
				key: "panel",
				ref: panelRef,
				className: "dsh-pet-mp__panel",
				role: "menu",
				"aria-label": props.label,
				style: {
					left: pos.left + "px",
					top: pos.top === void 0 ? void 0 : pos.top + "px",
					bottom: pos.bottom === void 0 ? void 0 : pos.bottom + "px",
					width: pos.width + "px",
					maxHeight: pos.maxHeight + "px"
				},
				children: [searchRow, props.catalog === null ? h$1("div", {
					key: "loading",
					className: "dsh-pet-mp__status",
					children: props.failed ? t$3("modelCatalogFailed") : t$3("modelLoading")
				}) : rows.length === 0 ? h$1("div", {
					key: "empty",
					className: "dsh-pet-mp__status",
					role: "status",
					children: groups.length === 0 ? t$3("modelNoModels") : t$3("modelEmpty")
				}) : h$1("div", {
					key: "list",
					className: "dsh-pet-mp__list",
					role: "group",
					children: rows.map(rowNode)
				})]
			}) : null]
		});
	};
	return function PetConfigSection$1() {
		const initPets = petBridge.current.filter((p$4) => !p$4.extra);
		const extraCount = petBridge.current.filter((p$4) => p$4.extra).length;
		const [pets, setPets] = useState(initPets.map((p$4) => ({
			...p$4,
			position: { ...p$4.position }
		})));
		const [selId, setSelId] = useState(initPets[0]?.id ?? "");
		const [saving, setBusy] = useState(false);
		const [loadState, setLoadState] = useState("loading");
		const [loadAttempt, setLoadAttempt] = useState(0);
		const busy = saving || loadState !== "ready";
		const [msg, setMsg] = useState({
			kind: "",
			text: ""
		});
		const rootRef = useRef(null);
		const [dialog, setDialog] = useState(null);
		const [paths, setPaths] = useState(null);
		useEffect(() => {
			fetch("/dsh-pet-7340/config/meta").then((r$2) => r$2.ok ? r$2.json() : null).then((p$4) => setPaths(p$4)).catch(() => console.warn("[dsh-pet] 读取配置文件路径失败"));
		}, []);
		const [notifyEnabled$1, setNotifyEnabled] = useState(true);
		const [clickSound, setClickSound] = useState(false);
		const [whisperImage, setWhisperImage] = useState(false);
		const [chatImage, setChatImage] = useState(false);
		const [confineScreen, setConfineScreen] = useState(false);
		const [trayEnabled, setTrayEnabled] = useState(true);
		const [physics, setPhysics] = useState({ ...DEFAULT_PHYSICS });
		const [font, setFont] = useState({ ...DEFAULT_FONT });
		const [whisperModel, setWhisperModel] = useState({
			provider: "",
			model: ""
		});
		const [chatModel, setChatModel] = useState({
			provider: "",
			model: ""
		});
		const [chatMemory, setChatMemory] = useState(5);
		const [chatImageLimit, setChatImageLimit] = useState(10);
		const [entryPrompt, setEntryPrompt] = useState("");
		const [entrySoul, setEntrySoul] = useState(void 0);
		const [soulEnabled, setSoulEnabled] = useState(true);
		const [soulDrafts, setSoulDrafts] = useState({});
		const [openCard, setOpenCard] = useState(initialCard);
		const [soulEditor, setSoulEditor] = useState(null);
		const [soulPreview, setSoulPreview] = useState(null);
		const [soulPreviewBusy, setSoulPreviewBusy] = useState(false);
		const [soulPreviewErr, setSoulPreviewErr] = useState(false);
		const [soulActionBusy, setSoulActionBusy] = useState(false);
		const [soulEventDraft, setSoulEventDraft] = useState({
			kind: "milestone",
			text: "",
			at: ""
		});
		const [moveBusy, setMoveBusy] = useState("");
		const [moveMsg, setMoveMsg] = useState({
			kind: "",
			text: ""
		});
		const moveInputRef = useRef(null);
		const [soulActionMsg, setSoulActionMsg] = useState({
			kind: "",
			text: ""
		});
		const [catalog, setCatalog] = useState(null);
		const [catalogErr, setCatalogErr] = useState(false);
		const [permMsg, setPermMsg] = useState({
			kind: "",
			text: ""
		});
		const applyConfig = useCallback((merged) => {
			const m$2 = merged.main;
			if (!m$2 || !Array.isArray(m$2.pets)) throw new Error("Invalid config response");
			const loadedPets = m$2.pets;
			setPets(loadedPets.map((p$4) => ({
				...p$4,
				position: { ...p$4.position }
			})));
			setEntryPrompt(typeof m$2.whisperPrompt === "string" ? m$2.whisperPrompt : "");
			setEntrySoul(m$2.soul && typeof m$2.soul === "object" && !Array.isArray(m$2.soul) ? m$2.soul : void 0);
			setSoulDrafts({});
			setSoulPreview(null);
			setSoulPreviewErr(false);
			setSelId((id$1) => loadedPets.some((p$4) => p$4.id === id$1) ? id$1 : loadedPets[0]?.id ?? "");
			if (typeof m$2.notificationsEnabled === "boolean") setNotifyEnabled(m$2.notificationsEnabled);
			if (typeof m$2.clickSoundEnabled === "boolean") setClickSound(m$2.clickSoundEnabled);
			if (typeof m$2.whisperImageEnabled === "boolean") setWhisperImage(m$2.whisperImageEnabled);
			if (typeof m$2.chatImageEnabled === "boolean") setChatImage(m$2.chatImageEnabled);
			if (typeof m$2.chatSoulEnabled === "boolean") setSoulEnabled(m$2.chatSoulEnabled);
			if (typeof m$2.confineToScreen === "boolean") setConfineScreen(m$2.confineToScreen);
			if (typeof m$2.trayEnabled === "boolean") setTrayEnabled(m$2.trayEnabled);
			if (m$2.physics && typeof m$2.physics === "object") setPhysics({
				...DEFAULT_PHYSICS,
				...m$2.physics
			});
			if (m$2.font && typeof m$2.font === "object") setFont({
				...DEFAULT_FONT,
				...m$2.font
			});
			const wm = m$2.whisperModel;
			if (wm && typeof wm.provider === "string" && typeof wm.model === "string") setWhisperModel({
				provider: wm.provider,
				model: wm.model
			});
			const cm = m$2.chatModel;
			if (cm && typeof cm.provider === "string" && typeof cm.model === "string") setChatModel({
				provider: cm.provider,
				model: cm.model
			});
			const cmr = Number(m$2.chatMemoryRounds);
			if (Number.isFinite(cmr) && cmr >= 0) setChatMemory(cmr);
			const cil = Number(m$2.chatImageLimit);
			if (Number.isFinite(cil) && cil >= 0) setChatImageLimit(cil);
		}, []);
		useEffect(() => {
			let alive = true;
			const controller = new AbortController();
			fetch("/dsh-pet-7340/config", { signal: controller.signal }).then((r$2) => {
				if (!r$2.ok) throw new Error("HTTP " + r$2.status);
				return r$2.json();
			}).then((merged) => {
				if (!alive) return;
				applyConfig(merged);
				setLoadState("ready");
			}).catch(() => {
				if (alive) setLoadState("error");
			});
			return () => {
				alive = false;
				controller.abort();
			};
		}, [applyConfig, loadAttempt]);
		useEffect(() => {
			let alive = true;
			fetch("/dsh-pet-7340/models").then((r$2) => r$2.ok ? r$2.json() : Promise.reject(new Error("HTTP " + r$2.status))).then((d) => {
				if (!alive) return;
				if (d && Array.isArray(d.providers)) setCatalog(d.providers);
				else setCatalogErr(true);
			}).catch(() => {
				if (alive) setCatalogErr(true);
			});
			return () => {
				alive = false;
			};
		}, []);
		const toggleNotify = async (v$3) => {
			setNotifyEnabled(v$3);
			if (v$3) await requestNotificationPermission();
		};
		/**
		* 「测试弹窗」按钮：发一条测试系统通知，验证整条链路。
		* 没授权时先借这次用户手势申请权限，成功后再发通知；一个按钮兼做「拿权限」与「验链路」。
		*/
		const testNotification = async () => {
			setPermMsg({
				kind: "",
				text: ""
			});
			const r$2 = await requestNotificationPermission();
			if (!r$2.ok) {
				const reason = r$2.reason === "unsupported" ? t$3("notifyDenyUnsupported") : r$2.reason === "denied" ? t$3("notifyDenyBlocked") : r$2.reason === "rejected" ? t$3("notifyDenyRejected") : t$3("notifyDenyError") + (r$2.message ? "：" + r$2.message : "");
				setPermMsg({
					kind: "err",
					text: reason + (r$2.reason === "unsupported" ? "" : " " + t$3("notifyGuide"))
				});
				return;
			}
			try {
				wireNotificationClick(new Notification("测试通知", {
					body: "【dsh-pet】系统通知已就绪。",
					icon: NOTIFY_ICONS.test
				}));
			} catch {}
			setPermMsg({
				kind: "ok",
				text: t$3("notifyTestOk")
			});
		};
		const cur = pets.find((p$4) => p$4.id === selId) ?? null;
		const updateSel = (patch) => setPets((list) => list.map((p$4) => {
			if (p$4.id !== selId) return p$4;
			const { position: posPatch,...rest } = patch;
			return {
				...p$4,
				...rest,
				position: posPatch ? {
					...p$4.position,
					...posPatch
				} : p$4.position
			};
		}));
		/** 某只宠物编辑中的灵魂卡 JSON：没改过 → 显示实例覆盖（没有就留空，占位显示条目卡）。 */
		const soulDraftOf = (p$4) => soulDrafts[p$4.id] ?? (p$4.soul ? JSON.stringify(p$4.soul, null, 2) : "");
		/** 当前编辑中的有效灵魂卡（用于色块预览）：草稿非法时回落到实例卡 / 条目卡，不让 UI 闪空白。 */
		const editedSoulCard = (p$4) => {
			const raw = soulDraftOf(p$4).trim();
			if (raw) try {
				const parsed = JSON.parse(raw);
				if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) return Object.keys(parsed).length ? parsed : entrySoul;
			} catch {}
			return soulDrafts[p$4.id] !== void 0 ? entrySoul : p$4.soul ?? entrySoul;
		};
		/** 只读预览：读宿主「此刻真实会注入的文本」。读的是已保存配置，未保存的草稿不会出现在这里。 */
		const previewSoul = async () => {
			if (!cur) return;
			setSoulPreviewBusy(true);
			setSoulPreviewErr(false);
			try {
				const res = await fetch("/dsh-pet-7340/soul?pet=" + encodeURIComponent(cur.id));
				if (!res.ok) throw new Error("HTTP " + res.status);
				const data = await res.json();
				if (!data || data.ok !== true) throw new Error("bad response");
				const state = data.state && typeof data.state === "object" ? data.state : void 0;
				const memories = Array.isArray(state?.memories) ? state.memories.filter((m$2) => Boolean(m$2) && typeof m$2 === "object").map((m$2) => ({
					text: typeof m$2.text === "string" ? m$2.text : "",
					kind: typeof m$2.kind === "string" ? m$2.kind : "other"
				})).filter((m$2) => m$2.text) : [];
				const relationshipEvents = Array.isArray(state?.relationshipEvents) ? state.relationshipEvents.filter((e) => Boolean(e) && typeof e === "object").map((e) => ({
					text: typeof e.text === "string" ? e.text : "",
					kind: typeof e.kind === "string" ? e.kind : "other",
					at: typeof e.at === "string" ? e.at : ""
				})).filter((e) => e.text) : [];
				const activeGoals = Array.isArray(state?.activeGoals) ? state.activeGoals.filter((g$1) => typeof g$1 === "string") : [];
				setSoulPreview({
					petId: cur.id,
					text: typeof data.render === "string" ? data.render : "",
					enabled: data.enabled !== false,
					color: typeof data.color === "string" ? data.color : null,
					memories,
					relationshipEvents,
					activeGoals,
					selfNarrative: typeof state?.selfNarrative === "string" ? state.selfNarrative : ""
				});
			} catch {
				setSoulPreview(null);
				setSoulPreviewErr(true);
			} finally {
				setSoulPreviewBusy(false);
			}
		};
		/** 手动触发一次长期记忆整理；成功后重新拉预览，让记忆/挂心/叙事立即显示。 */
		const reflectSoulNow = async () => {
			if (!cur || soulActionBusy) return;
			setSoulActionBusy(true);
			setSoulActionMsg({
				kind: "",
				text: ""
			});
			try {
				const res = await fetch("/dsh-pet-7340/soul/reflect?pet=" + encodeURIComponent(cur.id), { method: "POST" });
				const data = await res.json().catch(() => null);
				if (!res.ok || !data || data.ok !== true) {
					setSoulActionMsg({
						kind: "err",
						text: data?.reason === "no-memory" ? t$3("soulReflectNoMemory") : t$3("soulReflectError")
					});
					return;
				}
				setSoulActionMsg({
					kind: "ok",
					text: t$3("soulReflectOk").replace("{n}", String(data.memories ?? 0))
				});
				await previewSoul();
			} catch {
				setSoulActionMsg({
					kind: "err",
					text: t$3("soulReflectError")
				});
			} finally {
				setSoulActionBusy(false);
			}
		};
		/** 清空长期记忆或重置整只宠物的灵魂状态；只写 soul-state.json，不删聊天记忆。 */
		const resetSoul = async (scope) => {
			if (!cur || soulActionBusy) return;
			if (!window.confirm(t$3(scope === "state" ? "soulResetConfirm" : "soulClearConfirm"))) return;
			setSoulActionBusy(true);
			setSoulActionMsg({
				kind: "",
				text: ""
			});
			try {
				const res = await fetch("/dsh-pet-7340/soul/reset?pet=" + encodeURIComponent(cur.id), {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({ scope })
				});
				const data = await res.json().catch(() => null);
				if (!res.ok || !data || data.ok !== true) {
					setSoulActionMsg({
						kind: "err",
						text: t$3("soulResetError")
					});
					return;
				}
				setSoulActionMsg({
					kind: "ok",
					text: t$3("soulResetOk")
				});
				setSoulPreview(null);
				await previewSoul();
			} catch {
				setSoulActionMsg({
					kind: "err",
					text: t$3("soulResetError")
				});
			} finally {
				setSoulActionBusy(false);
			}
		};
		/** 手动添加一条关系事件；日期留空 = 今天。 */
		const addSoulEvent = async () => {
			if (!cur || soulActionBusy) return;
			const text = soulEventDraft.text.trim();
			if (!text) {
				setSoulActionMsg({
					kind: "err",
					text: t$3("soulEventError")
				});
				return;
			}
			setSoulActionBusy(true);
			setSoulActionMsg({
				kind: "",
				text: ""
			});
			try {
				const res = await fetch("/dsh-pet-7340/soul/event?pet=" + encodeURIComponent(cur.id), {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						text,
						kind: soulEventDraft.kind,
						...soulEventDraft.at ? { at: soulEventDraft.at } : {}
					})
				});
				const data = await res.json().catch(() => null);
				if (!res.ok || !data || data.ok !== true) {
					setSoulActionMsg({
						kind: "err",
						text: t$3("soulEventError")
					});
					return;
				}
				setSoulEventDraft((draft) => ({
					...draft,
					text: "",
					at: ""
				}));
				setSoulActionMsg({
					kind: "ok",
					text: t$3("soulEventAddOk")
				});
				await previewSoul();
			} catch {
				setSoulActionMsg({
					kind: "err",
					text: t$3("soulEventError")
				});
			} finally {
				setSoulActionBusy(false);
			}
		};
		/** 删除一条关系事件；按正文删除（事件正文是去重键）。 */
		const removeSoulEvent = async (text) => {
			if (!cur || soulActionBusy) return;
			if (!window.confirm(t$3("soulEventDeleteConfirm"))) return;
			setSoulActionBusy(true);
			setSoulActionMsg({
				kind: "",
				text: ""
			});
			try {
				const res = await fetch("/dsh-pet-7340/soul/event/remove?pet=" + encodeURIComponent(cur.id), {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({ text })
				});
				const data = await res.json().catch(() => null);
				if (!res.ok || !data || data.ok !== true) {
					setSoulActionMsg({
						kind: "err",
						text: t$3("soulEventError")
					});
					return;
				}
				setSoulActionMsg({
					kind: "ok",
					text: t$3("soulEventDeleteOk")
				});
				await previewSoul();
			} catch {
				setSoulActionMsg({
					kind: "err",
					text: t$3("soulEventError")
				});
			} finally {
				setSoulActionBusy(false);
			}
		};
		/** 打包：下载 .dshpet；文件内容由宿主生成，客户端只负责触发浏览器下载。 */
		const exportMove = async () => {
			if (moveBusy) return;
			setMoveBusy("export");
			setMoveMsg({
				kind: "",
				text: ""
			});
			try {
				const res = await fetch("/dsh-pet-7340/move/export", { cache: "no-store" });
				if (!res.ok) throw new Error("HTTP " + res.status);
				const blob = await res.blob();
				const cd$1 = res.headers.get("content-disposition") || "";
				const name = /filename="([^"]+)"/.exec(cd$1)?.[1] || "dsh-pet-move.dshpet";
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = name;
				document.body.appendChild(a);
				a.click();
				a.remove();
				URL.revokeObjectURL(url);
				setMoveMsg({
					kind: "ok",
					text: t$3("moveExportOk")
				});
			} catch {
				setMoveMsg({
					kind: "err",
					text: t$3("moveError")
				});
			} finally {
				setMoveBusy("");
			}
		};
		/** 导入：上传 .dshpet，宿主备份旧文件后覆盖；成功后重新拉一次成品配置。 */
		const onMoveFile = async (e) => {
			const file = e.target.files?.[0];
			e.target.value = "";
			if (!file || moveBusy) return;
			if (file.size > 16 * 1024 * 1024) {
				setMoveMsg({
					kind: "err",
					text: t$3("moveTooLarge")
				});
				return;
			}
			if (!window.confirm(t$3("moveImportConfirm"))) return;
			setMoveBusy("import");
			setMoveMsg({
				kind: "",
				text: ""
			});
			try {
				const text = await file.text();
				const res = await fetch("/dsh-pet-7340/move/import", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: text
				});
				const data = await res.json().catch(() => null);
				if (!res.ok || !data || data.ok !== true) throw new Error("import failed");
				const cfgRes = await fetch("/dsh-pet-7340/config", { cache: "no-store" });
				if (cfgRes.ok) {
					const merged = await cfgRes.json();
					applyConfig(merged);
					petBridge.reload(merged);
				}
				setMoveMsg({
					kind: "ok",
					text: t$3("moveImportOk")
				});
			} catch {
				setMoveMsg({
					kind: "err",
					text: t$3("moveError")
				});
			} finally {
				setMoveBusy("");
			}
		};
		useEffect(() => {
			setSoulPreview(null);
			setSoulPreviewErr(false);
			setSoulActionMsg({
				kind: "",
				text: ""
			});
		}, [selId]);
		/** 解析一只宠物的灵魂卡草稿：留空/空对象 = 删除覆盖（跟随条目）；非对象或坏 JSON = 明确错误。
		*  drafts 可显式传入：弹窗保存时先写入新草稿再调用 save，不能依赖尚未刷新的 state。 */
		const parseSoulDraft = (p$4, drafts = soulDrafts) => {
			const draft = drafts[p$4.id];
			if (draft === void 0) return {
				ok: true,
				card: p$4.soul ?? null
			};
			const raw = draft.trim();
			if (!raw) return {
				ok: true,
				card: null
			};
			if (raw.length > 2e4) return {
				ok: false,
				message: t$3("soulTooLarge")
			};
			try {
				const parsed = JSON.parse(raw);
				if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {
					ok: false,
					message: t$3("soulInvalid").replace("{msg}", t$3("soulMustBeObject"))
				};
				return {
					ok: true,
					card: Object.keys(parsed).length ? parsed : null
				};
			} catch (e) {
				return {
					ok: false,
					message: t$3("soulInvalid").replace("{msg}", e instanceof Error ? e.message : String(e))
				};
			}
		};
		const validated = (drafts = soulDrafts) => {
			for (const p$4 of pets) if (!Number.isFinite(p$4.size) || p$4.size <= 0 || !Number.isFinite(p$4.position.marginX) || !Number.isFinite(p$4.position.marginY)) {
				setMsg({
					kind: "err",
					text: t$3("invalid")
				});
				return false;
			}
			if (!Number.isFinite(physics.gravity) || physics.gravity < 0 || !Number.isFinite(physics.restitution) || physics.restitution < 0 || physics.restitution > 1 || !Number.isFinite(physics.groundFriction) || physics.groundFriction < 0 || !Number.isFinite(physics.throwPower) || physics.throwPower <= 0) {
				setMsg({
					kind: "err",
					text: t$3("invalidPhysics")
				});
				return false;
			}
			if (!modelPairValid(whisperModel) || !modelPairValid(chatModel)) {
				setMsg({
					kind: "err",
					text: t$3("invalidModel")
				});
				return false;
			}
			if (!Number.isFinite(chatMemory) || chatMemory < 0) {
				setMsg({
					kind: "err",
					text: t$3("invalidChatMemory")
				});
				return false;
			}
			if (!Number.isFinite(chatImageLimit) || chatImageLimit < 0) {
				setMsg({
					kind: "err",
					text: t$3("invalidChatImageLimit")
				});
				return false;
			}
			for (const p$4 of pets) {
				const parsed = parseSoulDraft(p$4, drafts);
				if (!parsed.ok) {
					setMsg({
						kind: "err",
						text: t$3("soulCardLabel") + " · " + p$4.id + "：" + parsed.message
					});
					return false;
				}
			}
			if (!FONT_PRESETS.some((p$4) => p$4.id === font.family) || !Number.isFinite(font.size) || font.size < FONT_SIZE_MIN || font.size > FONT_SIZE_MAX) {
				setMsg({
					kind: "err",
					text: t$3("invalidFont")
				});
				return false;
			}
			return true;
		};
		const save = async (force = false, drafts = soulDrafts) => {
			if (busy) return false;
			const isOk = validated(drafts);
			if (!isOk) return false;
			setBusy(true);
			setMsg({
				kind: "",
				text: ""
			});
			try {
				const petsPayload = pets.map((p$4) => {
					const parsed = parseSoulDraft(p$4, drafts);
					const next = { ...p$4 };
					delete next.soul;
					delete next.entrySoul;
					delete next.soulEnabled;
					if (parsed.ok && parsed.card) next.soul = parsed.card;
					return next;
				});
				const body = {
					pets: petsPayload,
					notificationsEnabled: notifyEnabled$1,
					clickSoundEnabled: clickSound,
					whisperImageEnabled: whisperImage,
					chatImageEnabled: chatImage,
					chatSoulEnabled: soulEnabled,
					confineToScreen: confineScreen,
					trayEnabled,
					physics,
					whisperModel,
					chatModel,
					chatMemoryRounds: chatMemory,
					chatImageLimit,
					font
				};
				const res = await fetch("/dsh-pet-7340/config" + (force === true ? "?force=1" : ""), {
					method: "PUT",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(body)
				});
				if (res.status === 409) {
					const info = await res.json().catch(() => null);
					setDialog({
						kind: "corrupt",
						path: typeof info?.userFile === "string" ? info.userFile : paths?.user ?? ""
					});
					return false;
				}
				if (!res.ok) {
					setMsg({
						kind: "err",
						text: t$3(res.status === 400 ? "saveInvalid" : "saveError")
					});
					return false;
				}
				petBridge.reload(await res.json());
				reloadNotifications();
				setSoulPreview(null);
				setMsg({
					kind: "ok",
					text: t$3("saved")
				});
				return true;
			} catch {
				setMsg({
					kind: "err",
					text: t$3("saveError")
				});
				return false;
			} finally {
				setBusy(false);
			}
		};
		/** 打开灵魂卡 JSON 弹窗：用当前草稿（没改过就是实例卡）作为初值。 */
		const openSoulEditor = (p$4) => {
			setSoulEditor({
				petId: p$4.id,
				value: soulDraftOf(p$4),
				error: ""
			});
		};
		/** 弹窗保存：先校验这张卡，再把新草稿并入整包保存；只写一次盘，避免先落空再落卡。 */
		const saveSoulEditor = async () => {
			const editor = soulEditor;
			if (!editor || busy) return;
			const raw = editor.value.trim();
			if (raw.length > 2e4) {
				setSoulEditor({
					...editor,
					error: t$3("soulEditorTooLarge")
				});
				return;
			}
			if (raw) try {
				const parsed = JSON.parse(raw);
				if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
					setSoulEditor({
						...editor,
						error: t$3("soulEditorObject")
					});
					return;
				}
			} catch (e) {
				setSoulEditor({
					...editor,
					error: t$3("soulEditorInvalid").replace("{msg}", e instanceof Error ? e.message : String(e))
				});
				return;
			}
			const nextDrafts = {
				...soulDrafts,
				[editor.petId]: raw
			};
			setSoulDrafts(nextDrafts);
			setSoulEditor(null);
			setSoulPreview(null);
			setSoulPreviewErr(false);
			await save(false, nextDrafts);
		};
		const soulEditorOpenRef = useRef(false);
		useEffect(() => {
			soulEditorOpenRef.current = soulEditor !== null;
		});
		useEffect(() => {
			if (!soulEditor) return;
			const onKey = (e) => {
				if (e.key === "Escape") {
					e.preventDefault();
					setSoulEditor(null);
				} else if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "s") {
					e.preventDefault();
					saveSoulEditor();
				}
			};
			document.addEventListener("keydown", onKey);
			return () => document.removeEventListener("keydown", onKey);
		}, [soulEditor]);
		const saveRef = useRef(() => {});
		useEffect(() => {
			saveRef.current = () => void save();
		});
		useEffect(() => {
			const onKey = (e) => {
				if (!(e.ctrlKey || e.metaKey) || e.shiftKey || e.altKey) return;
				if (e.key.toLowerCase() !== "s") return;
				if (soulEditorOpenRef.current) return;
				const root = rootRef.current;
				if (!root || !root.isConnected || root.getClientRects().length === 0) return;
				e.preventDefault();
				saveRef.current();
			};
			document.addEventListener("keydown", onKey);
			return () => document.removeEventListener("keydown", onKey);
		}, []);
		const sync = () => setDialog({ kind: "sync" });
		const doSync = async () => {
			setBusy(true);
			setMsg({
				kind: "",
				text: ""
			});
			try {
				const res = await fetch("/dsh-pet-7340/config", { method: "POST" });
				if (!res.ok) throw new Error("HTTP " + res.status);
				const merged = await res.json();
				applyConfig(merged);
				petBridge.reload(merged);
				reloadNotifications();
				setMsg({
					kind: "ok",
					text: t$3("saved")
				});
			} catch {
				setMsg({
					kind: "err",
					text: t$3("syncError")
				});
			} finally {
				setBusy(false);
			}
		};
		const addPet = () => {
			const tpl = petBridge.template;
			if (!tpl) return;
			const id$1 = nextId(pets);
			setPets((list) => [...list, {
				id: id$1,
				name: id$1,
				size: tpl.size,
				balanceEnabled: tpl.balanceEnabled,
				whisperEnabled: tpl.whisperEnabled,
				workStatusEnabled: tpl.workStatusEnabled,
				fixedEnabled: tpl.fixedEnabled,
				display: tpl.display,
				position: { ...tpl.position }
			}]);
			setSelId(id$1);
		};
		const removeSel = () => {
			setDialog({ kind: pets.length <= 1 ? "lastOne" : "remove" });
		};
		const doRemove = () => {
			const list = pets.filter((p$4) => p$4.id !== selId);
			setPets(list);
			setSelId(list[0].id);
		};
		/** 宠物数值输入（大小 / 水平偏移 / 垂直偏移）；宽度交给栅格。 */
		const numInput = (key, value, setter) => h$1("input", {
			type: "number",
			className: inputClass,
			step: key === "size" ? "10" : "1",
			min: key === "size" ? "120" : "",
			value: String(value),
			disabled: busy,
			onChange: (e) => setter(Number(e.target.value))
		});
		/** 物理参数的一格：标签与问号在上、数字输入在下。 */
		const physField = (key, step, min, end = false) => field(t$3("physics." + key), h$1("input", {
			type: "number",
			className: inputClass,
			step,
			min,
			value: String(physics[key]),
			disabled: busy,
			onChange: (e) => setPhysics((p$4) => ({
				...p$4,
				[key]: Number(e.target.value)
			}))
		}), t$3("physics." + key + "Hint"), end);
		/** 「全局默认」的数字格：标签与问号在上、数字输入在下。 */
		const globalNumField = (label, value, setter) => field(t$3(label), h$1("input", {
			type: "number",
			className: inputClass,
			step: "1",
			min: "0",
			value: String(value),
			disabled: busy,
			onChange: (e) => setter(Number(e.target.value))
		}), t$3(label + "Hint"));
		/** 「AI 模型」的一格：标签与问号在上、单下拉选择器在下。 */
		const modelCell = (key, value, setter, end = false) => {
			const label = t$3(key === "whisperModel" ? "whisperModelLabel" : "chatModelLabel");
			return field(label, h$1(ModelPicker, {
				label,
				value,
				disabled: busy,
				catalog,
				failed: catalogErr,
				onChange: setter
			}), t$3("modelFieldHint"), end);
		};
		const curSoul = cur ? editedSoulCard(cur) : void 0;
		const curSoulColor = curSoul ? soulAccentColor(curSoul) : "";
		const curSoulParsed = cur ? parseSoulDraft(cur) : null;
		const curHasOverride = curSoulParsed?.ok === true && curSoulParsed.card !== null;
		/** 一个设置项：标题行点击展开 / 收起，右侧 meta 是摘要；同一时间只展开一项。 */
		const accItem = (id$1, title, hint, body, meta) => {
			const open = openCard === id$1;
			return h$1("div", {
				className: "dsh-pet-cfg__accItem" + (open ? " is-open" : ""),
				"data-section": id$1,
				children: [h$1("div", {
					key: "head",
					className: "dsh-pet-cfg__accHead",
					children: [h$1("button", {
						key: "toggle",
						type: "button",
						className: "dsh-pet-cfg__accToggle",
						"aria-expanded": open,
						onClick: () => setOpenCard((current) => current === id$1 ? "" : id$1),
						children: [
							h$1("span", {
								key: "c",
								className: "dsh-pet-cfg__accChevron",
								children: "›"
							}),
							h$1("span", {
								key: "t",
								className: "dsh-pet-cfg__accTitle",
								children: title
							}),
							meta ? h$1("span", {
								key: "m",
								className: "dsh-pet-cfg__accMeta",
								children: meta
							}) : null
						]
					}), q$3(hint, true)]
				}), open ? h$1("div", {
					key: "body",
					className: "dsh-pet-cfg__accBody",
					children: body
				}) : null]
			});
		};
		useEffect(() => {
			if (loadState !== "ready" || initialCard === "pets") return;
			const raf = requestAnimationFrame(() => {
				const el$1 = rootRef.current?.querySelector("[data-section=\"" + initialCard + "\"]");
				el$1?.scrollIntoView({ block: "start" });
			});
			return () => cancelAnimationFrame(raf);
		}, [loadState, paths]);
		return h$1("section", {
			ref: rootRef,
			className: "dsh-pet-cfg",
			style: { maxWidth: "720px" },
			children: [
				h$1("h2", {
					className: "dsh-pet-cfg__title",
					children: [t$3("nav"), q$3(extraCount > 0 ? t$3("intro") + "\n" + t$3("extraPetsHint").replace("{n}", String(extraCount)) : t$3("intro"))]
				}),
				loadState !== "ready" ? h$1("div", {
					role: loadState === "error" ? "alert" : "status",
					className: "dsh-pet-cfg__actions",
					children: [h$1("span", { children: t$3(loadState === "error" ? "loadError" : "loading") }), loadState === "error" ? h$1("button", {
						type: "button",
						className: "dsh-pet-cfg__btn",
						onClick: () => {
							setLoadState("loading");
							setLoadAttempt((attempt) => attempt + 1);
						},
						children: t$3("retry")
					}) : null]
				}) : null,
				h$1("div", {
					className: "dsh-pet-cfg__acc",
					children: [
						accItem("pets", t$3("petCardTitle"), t$3("petCardHint"), [h$1("div", {
							className: "dsh-pet-cfg__tabs",
							children: [
								h$1("span", {
									key: "label",
									className: "dsh-pet-cfg__tabsLabel",
									children: t$3("petsLabel")
								}),
								...pets.map((p$4) => h$1("button", {
									key: p$4.id,
									type: "button",
									onClick: () => setSelId(p$4.id),
									className: "dsh-pet-cfg__tab" + (p$4.id === selId ? " is-active" : ""),
									children: (p$4.name || p$4.id) + " (" + p$4.size + "px)"
								})),
								h$1("button", {
									key: "add",
									type: "button",
									onClick: addPet,
									disabled: busy,
									className: "dsh-pet-cfg__tab is-ghost",
									children: "+ " + t$3("add")
								})
							]
						}), cur ? h$1("div", {
							className: "dsh-pet-cfg__petBody",
							children: [
								h$1("div", {
									key: "acts",
									className: "dsh-pet-cfg__actions",
									style: { justifyContent: "flex-end" },
									children: [
										msg.text ? h$1("span", {
											key: "msg",
											className: "dsh-pet-cfg__msg" + (msg.kind === "err" ? " is-err" : ""),
											children: msg.text
										}) : null,
										h$1("button", {
											key: "sv",
											type: "button",
											onClick: () => void save(),
											disabled: busy,
											className: "dsh-pet-cfg__btn is-primary is-sm",
											...tip(t$3("saveHotkey")),
											children: t$3("save")
										}),
										h$1("button", {
											key: "rm",
											type: "button",
											onClick: removeSel,
											disabled: busy,
											className: "dsh-pet-cfg__btn is-danger is-sm",
											children: t$3("remove")
										})
									]
								}),
								h$1("div", {
									className: "dsh-pet-cfg__grid3",
									children: [
										field(t$3("nameLabel"), h$1("input", {
											type: "text",
											className: inputClass,
											value: String(cur.name ?? ""),
											disabled: busy,
											maxLength: 50,
											onChange: (e) => updateSel({ name: e.target.value })
										}), t$3("nameHint")),
										field(t$3("sizeLabel"), numInput("size", cur.size, (v$3) => updateSel({ size: v$3 })), t$3("sizeHint")),
										field(t$3("displayLabel"), h$1("select", {
											className: inputClass,
											value: cur.display,
											disabled: busy,
											onChange: (e) => updateSel({ display: e.target.value }),
											children: PET_DISPLAYS.map((d) => h$1("option", {
												key: d,
												value: d,
												children: t$3("display." + d)
											}))
										}), t$3("displayHint"), true)
									]
								}),
								h$1("div", {
									className: "dsh-pet-cfg__grid3",
									children: [
										field(t$3("cornerLabel"), h$1("select", {
											className: inputClass,
											value: cur.position.corner,
											disabled: busy,
											onChange: (e) => updateSel({ position: { corner: e.target.value } }),
											children: CORNERS.map((c) => h$1("option", {
												key: c,
												value: c,
												children: cornerLabel(c)
											}))
										}), t$3("cornerHint")),
										field(t$3("marginX"), numInput("marginX", cur.position.marginX, (v$3) => updateSel({ position: { marginX: v$3 } })), t$3("marginXHint")),
										field(t$3("marginY"), numInput("marginY", cur.position.marginY, (v$3) => updateSel({ position: { marginY: v$3 } })), t$3("marginYHint"), true)
									]
								}),
								h$1("div", {
									className: "dsh-pet-cfg__grid4",
									children: [
										toggleCell("balanceEnabled", !!cur.balanceEnabled, busy, (v$3) => updateSel({ balanceEnabled: v$3 })),
										toggleCell("whisperEnabled", !!cur.whisperEnabled, busy, (v$3) => updateSel({ whisperEnabled: v$3 })),
										toggleCell("workStatusEnabled", !!cur.workStatusEnabled, busy, (v$3) => updateSel({ workStatusEnabled: v$3 })),
										toggleCell("fixedEnabled", !!cur.fixedEnabled, busy, (v$3) => updateSel({ fixedEnabled: v$3 }), true)
									]
								}),
								field(t$3("personaLabel"), h$1("div", {
									className: "dsh-pet-cfg__persona",
									children: [h$1("textarea", {
										className: inputClass + " dsh-pet-cfg__area",
										rows: 3,
										value: String(cur.whisperPrompt ?? ""),
										disabled: busy,
										placeholder: entryPrompt,
										onChange: (e) => updateSel({ whisperPrompt: e.target.value })
									}), h$1("span", {
										className: "dsh-pet-cfg__count",
										children: t$3("personaCount").replace("{n}", String(String(cur.whisperPrompt ?? "").length))
									})]
								}), t$3("personaHint"))
							]
						}) : h$1("p", {
							className: "dsh-pet-cfg__note",
							children: t$3("emptyPets")
						})], `${pets.length} · ${cur?.name || cur?.id || "—"}`),
						accItem("soul", t$3("soulTitle"), t$3("soulHint"), [
							h$1("div", {
								className: "dsh-pet-cfg__grid2",
								children: [toggleCell("soulToggle", soulEnabled, busy, setSoulEnabled, true)]
							}),
							cur ? field(t$3("soulCardLabel"), h$1("div", {
								className: "dsh-pet-cfg__soulRow",
								children: [
									curSoulColor ? h$1("span", {
										key: "sw",
										className: "dsh-pet-cfg__swatch",
										style: { background: curSoulColor },
										...tip(t$3("soulColorLabel") + "：" + curSoulColor)
									}) : null,
									h$1("span", {
										key: "status",
										className: "dsh-pet-cfg__note",
										children: curHasOverride ? t$3("soulOverride") : t$3("soulFollowEntry")
									}),
									h$1("button", {
										key: "edit",
										type: "button",
										className: "dsh-pet-cfg__btn is-sm",
										disabled: busy,
										onClick: () => openSoulEditor(cur),
										children: t$3("soulEdit")
									})
								]
							}), t$3("soulCardHint")) : h$1("p", {
								className: "dsh-pet-cfg__note",
								children: t$3("emptyPets")
							}),
							cur ? h$1("p", {
								className: "dsh-pet-cfg__note",
								children: t$3("soulEditHint")
							}) : null,
							cur ? h$1("div", {
								className: "dsh-pet-cfg__soulRow",
								children: [h$1("button", {
									type: "button",
									className: "dsh-pet-cfg__btn is-sm",
									disabled: busy || soulPreviewBusy,
									onClick: () => void previewSoul(),
									children: soulPreviewBusy ? t$3("soulPreviewBusy") : t$3("soulPreview")
								}), h$1("span", {
									className: "dsh-pet-cfg__note",
									children: t$3("soulPreviewNote")
								})]
							}) : null,
							cur && soulPreviewErr ? h$1("p", {
								className: "dsh-pet-cfg__note",
								style: { color: "var(--dsw-alias-state-error-primary)" },
								children: t$3("soulPreviewError")
							}) : null,
							cur && soulPreview && soulPreview.petId === cur.id ? h$1("div", {
								className: "dsh-pet-cfg__field",
								children: [!soulPreview.enabled ? h$1("p", {
									className: "dsh-pet-cfg__note",
									children: t$3("soulPreviewDisabled")
								}) : null, soulPreview.text ? h$1("pre", {
									className: "dsh-pet-cfg__soulPreview",
									children: soulPreview.text
								}) : h$1("p", {
									className: "dsh-pet-cfg__note",
									children: t$3("soulPreviewEmpty")
								})]
							}) : null,
							cur ? h$1("div", {
								className: "dsh-pet-cfg__soulRow",
								children: [
									h$1("button", {
										type: "button",
										className: "dsh-pet-cfg__btn is-sm",
										disabled: busy || soulActionBusy,
										onClick: () => void reflectSoulNow(),
										children: soulActionBusy ? t$3("soulReflectBusy") : t$3("soulReflectNow")
									}),
									h$1("button", {
										type: "button",
										className: "dsh-pet-cfg__btn is-sm",
										disabled: busy || soulActionBusy,
										onClick: () => void resetSoul("memories"),
										children: t$3("soulClearMemories")
									}),
									h$1("button", {
										type: "button",
										className: "dsh-pet-cfg__btn is-sm",
										disabled: busy || soulActionBusy,
										onClick: () => void resetSoul("state"),
										children: t$3("soulResetState")
									})
								]
							}) : null,
							cur && soulActionMsg.text ? h$1("p", {
								className: "dsh-pet-cfg__note",
								style: soulActionMsg.kind === "err" ? { color: "var(--dsw-alias-state-error-primary)" } : { color: "var(--dsw-alias-state-success-primary)" },
								children: soulActionMsg.text
							}) : null,
							cur && soulPreview?.petId === cur.id && (soulPreview.memories.length > 0 || soulPreview.relationshipEvents.length > 0 || soulPreview.activeGoals.length > 0 || soulPreview.selfNarrative) ? h$1("div", {
								className: "dsh-pet-cfg__field",
								children: [
									soulPreview.relationshipEvents.length ? h$1("div", {
										className: "dsh-pet-cfg__cardTitle",
										children: t$3("soulEventsTitle")
									}) : null,
									...soulPreview.relationshipEvents.slice(-8).map((e, i$1) => h$1("div", {
										key: "se" + i$1,
										className: "dsh-pet-cfg__soulRow",
										children: [h$1("span", {
											className: "dsh-pet-cfg__note",
											children: "· " + (e.at ? e.at.slice(0, 10) + " " : "") + e.text
										}), h$1("button", {
											type: "button",
											className: "dsh-pet-cfg__btn is-sm",
											disabled: busy || soulActionBusy,
											onClick: () => void removeSoulEvent(e.text),
											children: t$3("soulEventDelete")
										})]
									})),
									soulPreview.memories.length ? h$1("div", {
										className: "dsh-pet-cfg__cardTitle",
										children: t$3("soulMemoriesTitle")
									}) : null,
									...soulPreview.memories.slice(-10).map((m$2, i$1) => h$1("div", {
										key: "sm" + i$1,
										className: "dsh-pet-cfg__note",
										children: "· " + m$2.text
									})),
									soulPreview.activeGoals.length ? h$1("div", {
										className: "dsh-pet-cfg__note",
										children: t$3("soulGoalsTitle") + "：" + soulPreview.activeGoals.join("；")
									}) : null,
									soulPreview.selfNarrative ? h$1("div", {
										className: "dsh-pet-cfg__note",
										children: t$3("soulNarrativeTitle") + "：" + soulPreview.selfNarrative
									}) : null
								]
							}) : null,
							cur ? h$1("div", {
								className: "dsh-pet-cfg__field",
								children: [
									h$1("div", {
										className: "dsh-pet-cfg__cardTitle",
										children: t$3("soulAddEvent")
									}),
									h$1("div", {
										className: "dsh-pet-cfg__grid2",
										children: [field(t$3("soulEventKind"), h$1("select", {
											className: inputClass,
											value: soulEventDraft.kind,
											disabled: busy || soulActionBusy,
											onChange: (e) => setSoulEventDraft((draft) => ({
												...draft,
												kind: e.target.value
											})),
											children: [
												"first",
												"milestone",
												"promise",
												"conflict",
												"repair",
												"date",
												"gift",
												"other"
											].map((k$2) => h$1("option", {
												key: k$2,
												value: k$2,
												children: t$3("soulEventKind." + k$2)
											}))
										})), field(t$3("soulEventText"), h$1("input", {
											className: inputClass,
											value: soulEventDraft.text,
											disabled: busy || soulActionBusy,
											placeholder: t$3("soulEventText"),
											onChange: (e) => setSoulEventDraft((draft) => ({
												...draft,
												text: e.target.value
											}))
										}))]
									}),
									h$1("div", {
										className: "dsh-pet-cfg__grid2",
										children: [field(t$3("soulEventDate"), h$1("input", {
											className: inputClass,
											type: "date",
											value: soulEventDraft.at,
											disabled: busy || soulActionBusy,
											onChange: (e) => setSoulEventDraft((draft) => ({
												...draft,
												at: e.target.value
											}))
										}), t$3("soulEventDateHint"), true), h$1("div", {
											className: "dsh-pet-cfg__field",
											children: [h$1("span", {
												className: "dsh-pet-cfg__flabel",
												children: " "
											}), h$1("button", {
												type: "button",
												className: "dsh-pet-cfg__btn",
												disabled: busy || soulActionBusy || !soulEventDraft.text.trim(),
												onClick: () => void addSoulEvent(),
												children: t$3("soulAddEvent")
											})]
										})]
									})
								]
							}) : null
						], (soulEnabled ? t$3("soulMetaOn") : t$3("soulMetaOff")) + " · " + (curHasOverride ? t$3("soulMetaOverride") : t$3("soulMetaFollow"))),
						accItem("global", t$3("globalTitle"), t$3("globalHint"), [h$1("div", {
							className: "dsh-pet-cfg__grid4",
							children: [
								toggleCell("notifyToggle", notifyEnabled$1, busy, (v$3) => void toggleNotify(v$3)),
								toggleCell("clickSoundToggle", clickSound, busy, setClickSound),
								toggleCell("whisperImageToggle", whisperImage, busy, setWhisperImage),
								toggleCell("chatImageToggle", chatImage, busy, setChatImage),
								toggleCell("confineToggle", confineScreen, busy, setConfineScreen, true),
								toggleCell("trayToggle", trayEnabled, busy, setTrayEnabled)
							]
						})], String([
							notifyEnabled$1,
							clickSound,
							whisperImage,
							chatImage,
							confineScreen,
							trayEnabled
						].filter(Boolean).length) + "/6"),
						accItem("font", t$3("fontTitle"), t$3("fontHint"), [h$1("div", {
							className: "dsh-pet-cfg__grid2",
							children: [field(t$3("fontFamilyLabel"), h$1("select", {
								className: inputClass,
								value: font.family,
								disabled: busy,
								onChange: (e) => setFont((f$2) => ({
									...f$2,
									family: e.target.value
								})),
								children: FONT_PRESETS.map((p$4) => h$1("option", {
									key: p$4.id,
									value: p$4.id,
									children: t$3("font." + p$4.id)
								}))
							}), t$3("fontFamilyHint")), field(t$3("fontSizeLabel"), h$1("input", {
								type: "number",
								className: inputClass,
								step: "1",
								min: String(FONT_SIZE_MIN),
								max: String(FONT_SIZE_MAX),
								value: String(font.size),
								disabled: busy,
								onChange: (e) => setFont((f$2) => ({
									...f$2,
									size: Number(e.target.value)
								}))
							}), t$3("fontSizeHint"), true)]
						}), h$1("div", {
							className: "dsh-pet-cfg__grid2",
							children: [toggleCell("fontFollowToggle", font.followPet, busy, (v$3) => setFont((f$2) => ({
								...f$2,
								followPet: v$3
							})))]
						})], t$3("font." + font.family) + " · " + font.size + "px"),
						accItem("model", t$3("modelTitle"), t$3("modelHint"), [
							catalogErr ? h$1("p", {
								className: "dsh-pet-cfg__note",
								style: { color: "var(--dsw-alias-state-error-primary)" },
								children: t$3("modelCatalogFailed")
							}) : null,
							h$1("div", {
								className: "dsh-pet-cfg__grid2",
								children: [modelCell("whisperModel", whisperModel, setWhisperModel), modelCell("chatModel", chatModel, setChatModel, true)]
							}),
							h$1("div", {
								className: "dsh-pet-cfg__grid4",
								children: [globalNumField("chatMemory", chatMemory, setChatMemory), globalNumField("chatImageLimit", chatImageLimit, setChatImageLimit)]
							})
						], whisperModel.model === "" && chatModel.model === "" ? t$3("modelFollow") : chatModel.model || whisperModel.model),
						accItem("physics", t$3("physicsTitle"), t$3("physicsHint"), [h$1("div", {
							className: "dsh-pet-cfg__grid4",
							children: [
								physField("gravity", "50", "0"),
								physField("restitution", "0.01", "0"),
								physField("groundFriction", "0.1", "0"),
								physField("throwPower", "0.05", "0.05", true)
							]
						}), h$1("div", {
							className: "dsh-pet-cfg__grid2",
							children: [toggleCell("physicsCeilingBounce", physics.ceilingBounce, busy, (v$3) => setPhysics((p$4) => ({
								...p$4,
								ceilingBounce: v$3
							}))), toggleCell("physicsPetCollision", physics.petCollision, busy, (v$3) => setPhysics((p$4) => ({
								...p$4,
								petCollision: v$3
							})), true)]
						})], "g " + physics.gravity),
						paths ? accItem("config", t$3("configMeta"), t$3("configMetaHint"), [
							h$1("div", {
								className: "dsh-pet-cfg__path",
								children: t$3("defaultConfig") + "：" + paths.default
							}),
							h$1("div", {
								className: "dsh-pet-cfg__path",
								children: t$3("userConfig") + "：" + paths.user
							}),
							h$1("div", {
								className: "dsh-pet-cfg__path",
								children: t$3("animationDir") + "：" + paths.animations
							}),
							paths.memes ? h$1("div", {
								className: "dsh-pet-cfg__path",
								children: t$3("memesDir") + "：" + paths.memes
							}) : null,
							paths.logs ? h$1("div", {
								className: "dsh-pet-cfg__path",
								children: t$3("logFile") + "：" + paths.logs
							}) : null,
							paths.logs ? h$1("div", {
								className: "dsh-pet-cfg__note",
								children: t$3("logFileNote")
							}) : null
						]) : null,
						paths && paths.storage && paths.storage.length > 0 ? accItem("storage", t$3("storageTitle"), t$3("storageHint"), [
							...paths.storage.map((s) => h$1("div", {
								key: s.key,
								className: "dsh-pet-cfg__path",
								children: [h$1("b", {
									key: "p",
									style: { fontFamily: MONO },
									children: s.path
								}), h$1("span", {
									key: "d",
									children: " — " + t$3("storage." + s.key) + (s.exists === false ? t$3("storageMissing") : "")
								})]
							})),
							h$1("div", {
								key: "ut",
								className: "dsh-pet-cfg__cardTitle",
								style: { marginTop: "4px" },
								children: t$3("uninstallTitle")
							}),
							h$1("div", {
								key: "u1",
								className: "dsh-pet-cfg__note",
								children: t$3("uninstallStep1")
							}),
							h$1("div", {
								key: "u2",
								className: "dsh-pet-cfg__note",
								children: t$3("uninstallStep2")
							}),
							h$1("div", {
								key: "cmd",
								className: "dsh-pet-cfg__cmd",
								children: t$3("uninstallCmd").replace("{profile}", paths.profile || "<profile>")
							}),
							h$1("div", {
								key: "u3",
								className: "dsh-pet-cfg__note",
								children: t$3("uninstallStep3")
							})
						], String(paths.storage.length)) : null,
						accItem("move", t$3("moveTitle"), t$3("moveHint"), [
							h$1("div", {
								className: "dsh-pet-cfg__note",
								children: t$3("moveInclude")
							}),
							h$1("div", {
								className: "dsh-pet-cfg__note",
								children: t$3("moveExclude")
							}),
							h$1("div", {
								className: "dsh-pet-cfg__soulRow",
								children: [
									h$1("button", {
										type: "button",
										className: "dsh-pet-cfg__btn is-primary",
										disabled: busy || moveBusy !== "",
										onClick: () => void exportMove(),
										children: moveBusy === "export" ? t$3("moveExporting") : t$3("moveExport")
									}),
									h$1("button", {
										type: "button",
										className: "dsh-pet-cfg__btn",
										disabled: busy || moveBusy !== "",
										onClick: () => moveInputRef.current?.click(),
										children: moveBusy === "import" ? t$3("moveImporting") : t$3("moveImport")
									}),
									h$1("input", {
										ref: moveInputRef,
										type: "file",
										accept: ".dshpet,application/json",
										style: { display: "none" },
										onChange: (e) => void onMoveFile(e)
									})
								]
							}),
							moveMsg.text ? h$1("p", {
								className: "dsh-pet-cfg__note",
								style: moveMsg.kind === "err" ? { color: "var(--dsw-alias-state-error-primary)" } : { color: "var(--dsw-alias-state-success-primary)" },
								children: moveMsg.text
							}) : null
						])
					]
				}),
				h$1("div", {
					className: "dsh-pet-cfg__actions",
					children: [
						h$1("button", {
							type: "button",
							disabled: busy,
							onClick: () => void save(),
							className: "dsh-pet-cfg__btn is-primary",
							...tip(t$3("saveHotkey")),
							children: t$3("save")
						}),
						h$1("button", {
							type: "button",
							disabled: busy,
							onClick: sync,
							className: "dsh-pet-cfg__btn",
							children: t$3("sync")
						}),
						h$1("button", {
							type: "button",
							onClick: () => void testNotification(),
							className: "dsh-pet-cfg__btn",
							children: t$3("notifyTest")
						}),
						q$3(t$3("syncHint")),
						msg.text ? h$1("span", {
							className: "dsh-pet-cfg__msg" + (msg.kind === "err" ? " is-err" : ""),
							children: msg.text
						}) : null,
						permMsg.text ? h$1("span", {
							className: "dsh-pet-cfg__msg" + (permMsg.kind === "err" ? " is-err" : ""),
							children: permMsg.text
						}) : null
					]
				}),
				soulEditor ? h$1("div", {
					className: "dsh-pet-cfg__overlay",
					onClick: () => setSoulEditor(null),
					children: h$1("div", {
						className: "dsh-pet-cfg__modal",
						role: "dialog",
						"aria-modal": true,
						"aria-label": t$3("soulEditorTitle"),
						onClick: (e) => e.stopPropagation(),
						children: [
							h$1("div", {
								key: "title",
								className: "dsh-pet-cfg__modalTitle",
								children: t$3("soulEditorTitle")
							}),
							h$1("div", {
								key: "body",
								className: "dsh-pet-cfg__modalBody",
								children: [
									h$1("p", {
										key: "hint",
										className: "dsh-pet-cfg__note",
										children: t$3("soulEditorHint")
									}),
									h$1("textarea", {
										key: "editor",
										className: "dsh-pet-cfg__jsonEditor" + (soulEditor.error ? " is-invalid" : ""),
										rows: 16,
										value: soulEditor.value,
										autoFocus: true,
										placeholder: entrySoul ? JSON.stringify(entrySoul, null, 2) : t$3("soulCardPlaceholder"),
										onChange: (e) => setSoulEditor((current) => current ? {
											...current,
											value: e.target.value,
											error: ""
										} : current)
									}),
									soulEditor.error ? h$1("p", {
										key: "error",
										className: "dsh-pet-cfg__modalError",
										role: "alert",
										children: soulEditor.error
									}) : null
								]
							}),
							h$1("div", {
								key: "actions",
								className: "dsh-pet-cfg__modalActions",
								children: [
									h$1("button", {
										key: "clear",
										type: "button",
										className: "dsh-pet-cfg__btn is-ghost",
										disabled: busy,
										onClick: () => setSoulEditor((current) => current ? {
											...current,
											value: "",
											error: ""
										} : current),
										children: t$3("soulEditorClear")
									}),
									h$1("button", {
										key: "cancel",
										type: "button",
										className: "dsh-pet-cfg__btn",
										onClick: () => setSoulEditor(null),
										children: t$3("soulEditorCancel")
									}),
									h$1("button", {
										key: "save",
										type: "button",
										className: "dsh-pet-cfg__btn is-primary",
										disabled: busy,
										onClick: () => void saveSoulEditor(),
										children: t$3("soulEditorSave")
									})
								]
							})
						]
					})
				}) : null,
				dialog ? h$1("div", {
					style: {
						position: "fixed",
						inset: 0,
						zIndex: 2147483647,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "rgba(0, 0, 0, 0.45)"
					},
					onClick: () => setDialog(null),
					children: h$1("div", {
						style: {
							width: "340px",
							maxWidth: "calc(100vw - 40px)",
							background: "var(--dsw-alias-bg-layer-1)",
							border: "1px solid var(--dsw-alias-border-l2)",
							borderRadius: "12px",
							padding: "16px 18px",
							boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)",
							display: "flex",
							flexDirection: "column",
							gap: "12px"
						},
						onClick: (e) => e.stopPropagation(),
						children: [
							h$1("div", {
								style: {
									fontSize: "14px",
									fontWeight: 500,
									color: "var(--dsw-alias-label-primary)"
								},
								children: dialog.kind === "corrupt" ? t$3("corruptTitle") : t$3("confirmTitle")
							}),
							h$1("div", {
								style: {
									fontSize: "13px",
									lineHeight: "20px",
									color: "var(--dsw-alias-label-secondary)"
								},
								children: dialog.kind === "remove" ? t$3("confirmRemove").replace("{id}", selId) : dialog.kind === "lastOne" ? t$3("atLeastOne") : dialog.kind === "corrupt" ? t$3("corruptBody").replace("{path}", dialog.path) : t$3("confirmSync")
							}),
							h$1("div", {
								style: {
									display: "flex",
									gap: "8px",
									justifyContent: "flex-end"
								},
								children: dialog.kind === "lastOne" ? [h$1("button", {
									key: "ok",
									type: "button",
									onClick: () => setDialog(null),
									className: "dsh-pet-cfg__btn is-primary",
									children: t$3("ok")
								})] : [h$1("button", {
									key: "cancel",
									type: "button",
									onClick: () => setDialog(null),
									className: "dsh-pet-cfg__btn",
									children: t$3("cancel")
								}), h$1("button", {
									key: "confirm",
									type: "button",
									onClick: () => {
										const d = dialog;
										setDialog(null);
										if (d.kind === "remove") doRemove();
										else if (d.kind === "corrupt") save(true);
										else doSync();
									},
									className: "dsh-pet-cfg__btn " + (dialog.kind === "sync" ? "is-primary" : "is-danger"),
									children: dialog.kind === "remove" ? t$3("remove") : dialog.kind === "corrupt" ? t$3("corruptConfirm") : t$3("sync")
								})]
							})
						]
					})
				}) : null
			]
		});
	};
}

//#endregion
//#region src/shared/menu.ts
const SETTINGS_SECTIONS = [
	"pets",
	"soul",
	"global",
	"font",
	"model",
	"physics",
	"config",
	"storage",
	"move"
];
const MENU_CSS = [
	".dsh-pet-menu{position:fixed;left:0;top:0;z-index:2147483000;color:#2b2b2b;font-size:13px;line-height:1.5;",
	"font-family:'Microsoft YaHei UI','Segoe UI','PingFang SC',sans-serif;user-select:none;pointer-events:auto}",
	".dsh-pet-menu,.dsh-pet-menu *{box-sizing:border-box}",
	".dsh-pet-menu-column{position:absolute;min-width:150px;max-width:300px;padding:4px;",
	"background:rgba(255,255,255,.98);border:1px solid rgba(0,0,0,.12);border-radius:8px;",
	"box-shadow:0 8px 28px rgba(0,0,0,.2);max-height:min(62vh,460px);overflow-y:auto;",
	"scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.22) transparent}",
	".dsh-pet-menu-column::-webkit-scrollbar{width:8px;height:8px}",
	".dsh-pet-menu-column::-webkit-scrollbar-track{background:transparent}",
	".dsh-pet-menu-column::-webkit-scrollbar-thumb{background:rgba(0,0,0,.16);border-radius:4px;",
	"border:2px solid transparent;background-clip:content-box}",
	".dsh-pet-menu-column::-webkit-scrollbar-thumb:hover{background:rgba(43,99,255,.4);",
	"border:2px solid transparent;background-clip:content-box}",
	".dsh-pet-menu-column::-webkit-scrollbar-corner{background:transparent}",
	".dsh-pet-menu-item{position:relative;display:flex;align-items:center;justify-content:space-between;",
	"gap:14px;padding:5px 12px;border-radius:6px;white-space:nowrap;cursor:default}",
	".dsh-pet-menu-item:hover{background:rgba(43,99,255,.14)}",
	".dsh-pet-menu-item>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis}",
	".dsh-pet-menu-hint{color:#9aa0a6;font-size:12px;flex:none;white-space:nowrap}",
	".dsh-pet-menu-arrow{color:#9aa0a6;font-size:12px;flex:none}"
].join("");

//#endregion
//#region src/settings-window/index.ts
const query = new URLSearchParams(location.search);
const lang = query.get("lang") === "en" ? en : zh;
const t = (key) => lang[key] ?? key;
const rawSection = query.get("section") ?? "";
const initialSection = SETTINGS_SECTIONS.includes(rawSection) ? rawSection : "pets";
const PetConfigSection = makePetConfigSection({
	h: import_jsx_runtime.jsx,
	useState: import_react.useState,
	useEffect: import_react.useEffect,
	useRef: import_react.useRef,
	useCallback: import_react.useCallback,
	t,
	initialSection
});
/** 把宿主返回的成品聚合同步到桥：设置组件保存/同步后也会经 reload 调到这里。 */
function rememberConfig(merged) {
	petBridge.current = flattenConfigPets(merged);
	const main = merged.main;
	petBridge.template = Array.isArray(main?.pets) ? main.pets[0] ?? void 0 : void 0;
}
petBridge.reload = (merged) => {
	if (merged) rememberConfig(merged);
};
/** 先拿一次成品配置填 petBridge 初值，避免组件首帧空列表；组件挂载后还会自己再拉一次。 */
async function boot() {
	try {
		const res = await fetch("/dsh-pet-7340/config", { cache: "no-store" });
		if (res.ok) rememberConfig(await res.json());
	} catch {}
	const root = document.getElementById("root");
	if (root) {
		(0, import_client.createRoot)(root).render((0, import_jsx_runtime.jsx)(PetConfigSection, {}));
		window.scrollTo(0, 0);
	}
}
boot();

//#endregion
})();