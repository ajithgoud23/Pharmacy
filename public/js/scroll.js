/*!
 * jScrollPane - v2.0.22 - 2015-04-25
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2014 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
    ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        a.fn.jScrollPane = function(b) {
            function c(b, c) {
                function d(c) {
                    var f, h, j, k, l, o, p = !1,
                        q = !1;
                    if (N = c, void 0 === O) l = b.scrollTop(), o = b.scrollLeft(), b.css({
                        overflow: "hidden",
                        padding: 0
                    }), P = b.innerWidth() + ra, Q = b.innerHeight(), b.width(P), O = a('<div class="jspPane" />').css("padding", qa).append(b.children()), R = a('<div class="jspContainer" />').css({
                        width: P + "px",
                        height: Q + "px"
                    }).append(O).appendTo(b);
                    else {
                        if (b.css("width", ""), p = N.stickToBottom && A(), q = N.stickToRight && B(), k = b.innerWidth() + ra != P || b.outerHeight() != Q, k && (P = b.innerWidth() + ra, Q = b.innerHeight(), R.css({
                                width: P + "px",
                                height: Q + "px"
                            })), !k && sa == S && O.outerHeight() == T) return void b.width(P);
                        sa = S, O.css("width", ""), b.width(P), R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                    }
                    O.css("overflow", "auto"), S = c.contentWidth ? c.contentWidth : O[0].scrollWidth, T = O[0].scrollHeight, O.css("overflow", ""), U = S / P, V = T / Q, W = V > 1, X = U > 1, X || W ? (b.addClass("jspScrollable"), f = N.maintainPosition && ($ || ba), f && (h = y(), j = z()), e(), g(), i(), f && (w(q ? S - P : h, !1), v(p ? T - Q : j, !1)), F(), C(), L(), N.enableKeyboardNavigation && H(), N.clickOnTrack && m(), J(), N.hijackInternalLinks && K()) : (b.removeClass("jspScrollable"), O.css({
                        top: 0,
                        left: 0,
                        width: R.width() - ra
                    }), D(), G(), I(), n()), N.autoReinitialise && !pa ? pa = setInterval(function() {
                        d(N)
                    }, N.autoReinitialiseDelay) : !N.autoReinitialise && pa && clearInterval(pa), l && b.scrollTop(0) && v(l, !1), o && b.scrollLeft(0) && w(o, !1), b.trigger("jsp-initialised", [X || W])
                }

                function e() {
                    W && (R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), ca = R.find(">.jspVerticalBar"), da = ca.find(">.jspTrack"), Y = da.find(">.jspDrag"), N.showArrows && (ha = a('<a class="jspArrow jspArrowUp" />').bind("https://www.8theme.com/index.php", k(0, -1)).bind("https://www.8theme.com/index.php", E), ia = a('<a class="jspArrow jspArrowDown" />').bind("https://www.8theme.com/index.php", k(0, 1)).bind("https://www.8theme.com/index.php", E), N.arrowScrollOnHover && (ha.bind("https://www.8theme.com/index.php", k(0, -1, ha)), ia.bind("https://www.8theme.com/index.php", k(0, 1, ia))), j(da, N.verticalArrowPositions, ha, ia)), fa = Q, R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        fa -= a(this).outerHeight()
                    }), Y.hover(function() {
                        Y.addClass("jspHover")
                    }, function() {
                        Y.removeClass("jspHover")
                    }).bind("https://www.8theme.com/index.php", function(b) {
                        a("html").bind("https://www.8theme.com/index.php", E), Y.addClass("jspActive");
                        var c = b.pageY - Y.position().top;
                        return a("html").bind("https://www.8theme.com/index.php", function(a) {
                            p(a.pageY - c, !1)
                        }).bind("https://www.8theme.com/index.php", o), !1
                    }), f())
                }

                function f() {
                    da.height(fa + "px"), $ = 0, ea = N.verticalGutter + da.outerWidth(), O.width(P - ea - ra);
                    try {
                        0 === ca.position().left && O.css("margin-left", ea + "px")
                    } catch (a) {}
                }

                function g() {
                    X && (R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), ja = R.find(">.jspHorizontalBar"), ka = ja.find(">.jspTrack"), _ = ka.find(">.jspDrag"), N.showArrows && (na = a('<a class="jspArrow jspArrowLeft" />').bind("https://www.8theme.com/index.php", k(-1, 0)).bind("https://www.8theme.com/index.php", E), oa = a('<a class="jspArrow jspArrowRight" />').bind("https://www.8theme.com/index.php", k(1, 0)).bind("https://www.8theme.com/index.php", E), N.arrowScrollOnHover && (na.bind("https://www.8theme.com/index.php", k(-1, 0, na)), oa.bind("https://www.8theme.com/index.php", k(1, 0, oa))), j(ka, N.horizontalArrowPositions, na, oa)), _.hover(function() {
                        _.addClass("jspHover")
                    }, function() {
                        _.removeClass("jspHover")
                    }).bind("https://www.8theme.com/index.php", function(b) {
                        a("html").bind("https://www.8theme.com/index.php", E), _.addClass("jspActive");
                        var c = b.pageX - _.position().left;
                        return a("html").bind("https://www.8theme.com/index.php", function(a) {
                            r(a.pageX - c, !1)
                        }).bind("https://www.8theme.com/index.php", o), !1
                    }), la = R.innerWidth(), h())
                }

                function h() {
                    R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                        la -= a(this).outerWidth()
                    }), ka.width(la + "px"), ba = 0
                }

                function i() {
                    if (X && W) {
                        var b = ka.outerHeight(),
                            c = da.outerWidth();
                        fa -= b, a(ja).find(">.jspCap:visible,>.jspArrow").each(function() {
                            la += a(this).outerWidth()
                        }), la -= c, Q -= c, P -= b, ka.parent().append(a('<div class="jspCorner" />').css("width", b + "px")), f(), h()
                    }
                    X && O.width(R.outerWidth() - ra + "px"), T = O.outerHeight(), V = T / Q, X && (ma = Math.ceil(1 / U * la), ma > N.horizontalDragMaxWidth ? ma = N.horizontalDragMaxWidth : ma < N.horizontalDragMinWidth && (ma = N.horizontalDragMinWidth), _.width(ma + "px"), aa = la - ma, s(ba)), W && (ga = Math.ceil(1 / V * fa), ga > N.verticalDragMaxHeight ? ga = N.verticalDragMaxHeight : ga < N.verticalDragMinHeight && (ga = N.verticalDragMinHeight), Y.height(ga + "px"), Z = fa - ga, q($))
                }

                function j(a, b, c, d) {
                    var e, f = "before",
                        g = "after";
                    "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split"), b == f ? g = b : b == g && (f = b, e = c, c = d, d = e), a[f](c)[g](d)
                }

                function k(a, b, c) {
                    return function() {
                        return l(a, b, this, c), this.blur(), !1
                    }
                }

                function l(b, c, d, e) {
                    d = a(d).addClass("jspActive");
                    var f, g, h = !0,
                        i = function() {
                            0 !== b && ta.scrollByX(b * N.arrowButtonSpeed), 0 !== c && ta.scrollByY(c * N.arrowButtonSpeed), g = setTimeout(i, h ? N.initialDelay : N.arrowRepeatFreq), h = !1
                        };
                    i(), f = e ? "mouseout.jsp" : "mouseup.jsp", e = e || a("html"), e.bind(f, function() {
                        d.removeClass("jspActive"), g && clearTimeout(g), g = null, e.unbind(f)
                    })
                }

                function m() {
                    n(), W && da.bind("https://www.8theme.com/index.php", function(b) {
                        if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                            var c, d = a(this),
                                e = d.offset(),
                                f = b.pageY - e.top - $,
                                g = !0,
                                h = function() {
                                    var a = d.offset(),
                                        e = b.pageY - a.top - ga / 2,
                                        j = Q * N.scrollPagePercent,
                                        k = Z * j / (T - Q);
                                    if (0 > f) $ - k > e ? ta.scrollByY(-j) : p(e);
                                    else {
                                        if (!(f > 0)) return void i();
                                        e > $ + k ? ta.scrollByY(j) : p(e)
                                    }
                                    c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                                },
                                i = function() {
                                    c && clearTimeout(c), c = null, a(document).unbind("https://www.8theme.com/index.php", i)
                                };
                            return h(), a(document).bind("https://www.8theme.com/index.php", i), !1
                        }
                    }), X && ka.bind("https://www.8theme.com/index.php", function(b) {
                        if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                            var c, d = a(this),
                                e = d.offset(),
                                f = b.pageX - e.left - ba,
                                g = !0,
                                h = function() {
                                    var a = d.offset(),
                                        e = b.pageX - a.left - ma / 2,
                                        j = P * N.scrollPagePercent,
                                        k = aa * j / (S - P);
                                    if (0 > f) ba - k > e ? ta.scrollByX(-j) : r(e);
                                    else {
                                        if (!(f > 0)) return void i();
                                        e > ba + k ? ta.scrollByX(j) : r(e)
                                    }
                                    c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                                },
                                i = function() {
                                    c && clearTimeout(c), c = null, a(document).unbind("https://www.8theme.com/index.php", i)
                                };
                            return h(), a(document).bind("https://www.8theme.com/index.php", i), !1
                        }
                    })
                }

                function n() {
                    ka && ka.unbind("https://www.8theme.com/index.php"), da && da.unbind("https://www.8theme.com/index.php")
                }

                function o() {
                    a("html").unbind("https://www.8theme.com/index.php"), Y && Y.removeClass("jspActive"), _ && _.removeClass("jspActive")
                }

                function p(a, b) {
                    W && (0 > a ? a = 0 : a > Z && (a = Z), void 0 === b && (b = N.animateScroll), b ? ta.animate(Y, "top", a, q) : (Y.css("top", a), q(a)))
                }

                function q(a) {
                    void 0 === a && (a = Y.position().top), R.scrollTop(0), $ = a || 0;
                    var c = 0 === $,
                        d = $ == Z,
                        e = a / Z,
                        f = -e * (T - Q);
                    (ua != c || wa != d) && (ua = c, wa = d, b.trigger("jsp-arrow-change", [ua, wa, va, xa])), t(c, d), O.css("top", f), b.trigger("jsp-scroll-y", [-f, c, d]).trigger("scroll")
                }

                function r(a, b) {
                    X && (0 > a ? a = 0 : a > aa && (a = aa), void 0 === b && (b = N.animateScroll), b ? ta.animate(_, "left", a, s) : (_.css("left", a), s(a)))
                }

                function s(a) {
                    void 0 === a && (a = _.position().left), R.scrollTop(0), ba = a || 0;
                    var c = 0 === ba,
                        d = ba == aa,
                        e = a / aa,
                        f = -e * (S - P);
                    (va != c || xa != d) && (va = c, xa = d, b.trigger("jsp-arrow-change", [ua, wa, va, xa])), u(c, d), O.css("left", f), b.trigger("jsp-scroll-x", [-f, c, d]).trigger("scroll")
                }

                function t(a, b) {
                    N.showArrows && (ha[a ? "addClass" : "removeClass"]("jspDisabled"), ia[b ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function u(a, b) {
                    N.showArrows && (na[a ? "addClass" : "removeClass"]("jspDisabled"), oa[b ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function v(a, b) {
                    var c = a / (T - Q);
                    p(c * Z, b)
                }

                function w(a, b) {
                    var c = a / (S - P);
                    r(c * aa, b)
                }

                function x(b, c, d) {
                    var e, f, g, h, i, j, k, l, m, n = 0,
                        o = 0;
                    try {
                        e = a(b)
                    } catch (p) {
                        return
                    }
                    for (f = e.outerHeight(), g = e.outerWidth(), R.scrollTop(0), R.scrollLeft(0); !e.is(".jspPane");)
                        if (n += e.position().top, o += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName)) return;
                    h = z(), j = h + Q, h > n || c ? l = n - N.horizontalGutter : n + f > j && (l = n - Q + f + N.horizontalGutter), isNaN(l) || v(l, d), i = y(), k = i + P, i > o || c ? m = o - N.horizontalGutter : o + g > k && (m = o - P + g + N.horizontalGutter), isNaN(m) || w(m, d)
                }

                function y() {
                    return -O.position().left
                }

                function z() {
                    return -O.position().top
                }

                function A() {
                    var a = T - Q;
                    return a > 20 && a - z() < 10
                }

                function B() {
                    var a = S - P;
                    return a > 20 && a - y() < 10
                }

                function C() {
                    R.unbind(za).bind(za, function(a, b, c, d) {
                        ba || (ba = 0), $ || ($ = 0);
                        var e = ba,
                            f = $,
                            g = a.deltaFactor || N.mouseWheelSpeed;
                        return ta.scrollBy(c * g, -d * g, !1), e == ba && f == $
                    })
                }

                function D() {
                    R.unbind(za)
                }

                function E() {
                    return !1
                }

                function F() {
                    O.find(":input,a").unbind("https://www.8theme.com/index.php").bind("https://www.8theme.com/index.php", function(a) {
                        x(a.target, !1)
                    })
                }

                function G() {
                    O.find(":input,a").unbind("https://www.8theme.com/index.php")
                }

                function H() {
                    function c() {
                        var a = ba,
                            b = $;
                        switch (d) {
                            case 40:
                                ta.scrollByY(N.keyboardSpeed, !1);
                                break;
                            case 38:
                                ta.scrollByY(-N.keyboardSpeed, !1);
                                break;
                            case 34:
                            case 32:
                                ta.scrollByY(Q * N.scrollPagePercent, !1);
                                break;
                            case 33:
                                ta.scrollByY(-Q * N.scrollPagePercent, !1);
                                break;
                            case 39:
                                ta.scrollByX(N.keyboardSpeed, !1);
                                break;
                            case 37:
                                ta.scrollByX(-N.keyboardSpeed, !1)
                        }
                        return e = a != ba || b != $
                    }
                    var d, e, f = [];
                    X && f.push(ja[0]), W && f.push(ca[0]), O.bind("https://www.8theme.com/index.php", function() {
                        b.focus()
                    }), b.attr("tabindex", 0).unbind("https://www.8theme.com/index.php").bind("https://www.8theme.com/index.php", function(b) {
                        if (b.target === this || f.length && a(b.target).closest(f).length) {
                            var g = ba,
                                h = $;
                            switch (b.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    d = b.keyCode, c();
                                    break;
                                case 35:
                                    v(T - Q), d = null;
                                    break;
                                case 36:
                                    v(0), d = null
                            }
                            return e = b.keyCode == d && g != ba || h != $, !e
                        }
                    }).bind("https://www.8theme.com/index.php", function(a) {
                        return a.keyCode == d && c(), !e
                    }), N.hideFocus ? (b.css("outline", "none"), "hideFocus" in R[0] && b.attr("hideFocus", !0)) : (b.css("outline", ""), "hideFocus" in R[0] && b.attr("hideFocus", !1))
                }

                function I() {
                    b.attr("tabindex", "-1").removeAttr("tabindex").unbind("https://www.8theme.com/index.php"), O.unbind(".jsp")
                }

                function J() {
                    if (location.hash && location.hash.length > 1) {
                        var b, c, d = escape(location.hash.substr(1));
                        try {
                            b = a("#" + d + ', a[name="' + d + '"]')
                        } catch (e) {
                            return
                        }
                        b.length && O.find(d) && (0 === R.scrollTop() ? c = setInterval(function() {
                            R.scrollTop() > 0 && (x(b, !0), a(document).scrollTop(R.position().top), clearInterval(c))
                        }, 50) : (x(b, !0), a(document).scrollTop(R.position().top)))
                    }
                }

                function K() {
                    a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function(b) {
                        var c, d, e, f, g, h, i = this.href.substr(0, this.href.indexOf("#")),
                            j = location.href;
                        if (-1 !== location.href.indexOf("#") && (j = location.href.substr(0, location.href.indexOf("#"))), i === j) {
                            c = escape(this.href.substr(this.href.indexOf("#") + 1));
                            try {
                                d = a("#" + c + ', a[name="' + c + '"]')
                            } catch (k) {
                                return
                            }
                            d.length && (e = d.closest(".jspScrollable"), f = e.data("jsp"), f.scrollToElement(d, !0), e[0].scrollIntoView && (g = a(window).scrollTop(), h = d.offset().top, (g > h || h > g + a(window).height()) && e[0].scrollIntoView()), b.preventDefault())
                        }
                    }))
                }

                function L() {
                    var a, b, c, d, e, f = !1;
                    R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("https://www.8theme.com/index.php", function(g) {
                        var h = g.originalEvent.touches[0];
                        a = y(), b = z(), c = h.pageX, d = h.pageY, e = !1, f = !0
                    }).bind("https://www.8theme.com/index.php", function(g) {
                        if (f) {
                            var h = g.originalEvent.touches[0],
                                i = ba,
                                j = $;
                            return ta.scrollTo(a + c - h.pageX, b + d - h.pageY), e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5, i == ba && j == $
                        }
                    }).bind("https://www.8theme.com/index.php", function(a) {
                        f = !1
                    }).bind("click.jsp-touchclick", function(a) {
                        return e ? (e = !1, !1) : void 0
                    })
                }

                function M() {
                    var a = z(),
                        c = y();
                    b.removeClass("jspScrollable").unbind(".jsp"), O.unbind(".jsp"), b.replaceWith(ya.append(O.children())), ya.scrollTop(a), ya.scrollLeft(c), pa && clearInterval(pa)
                }
                var N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta = this,
                    ua = !0,
                    va = !0,
                    wa = !1,
                    xa = !1,
                    ya = b.clone(!1, !1).empty(),
                    za = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
                "border-box" === b.css("box-sizing") ? (qa = 0, ra = 0) : (qa = b.css("paddingTop") + " " + b.css("paddingRight") + " " + b.css("paddingBottom") + " " + b.css("paddingLeft"), ra = (parseInt(b.css("paddingLeft"), 10) || 0) + (parseInt(b.css("paddingRight"), 10) || 0)), a.extend(ta, {
                    reinitialise: function(b) {
                        b = a.extend({}, N, b), d(b)
                    },
                    scrollToElement: function(a, b, c) {
                        x(a, b, c)
                    },
                    scrollTo: function(a, b, c) {
                        w(a, c), v(b, c)
                    },
                    scrollToX: function(a, b) {
                        w(a, b)
                    },
                    scrollToY: function(a, b) {
                        v(a, b)
                    },
                    scrollToPercentX: function(a, b) {
                        w(a * (S - P), b)
                    },
                    scrollToPercentY: function(a, b) {
                        v(a * (T - Q), b)
                    },
                    scrollBy: function(a, b, c) {
                        ta.scrollByX(a, c), ta.scrollByY(b, c)
                    },
                    scrollByX: function(a, b) {
                        var c = y() + Math[0 > a ? "floor" : "ceil"](a),
                            d = c / (S - P);
                        r(d * aa, b)
                    },
                    scrollByY: function(a, b) {
                        var c = z() + Math[0 > a ? "floor" : "ceil"](a),
                            d = c / (T - Q);
                        p(d * Z, b)
                    },
                    positionDragX: function(a, b) {
                        r(a, b)
                    },
                    positionDragY: function(a, b) {
                        p(a, b)
                    },
                    animate: function(a, b, c, d) {
                        var e = {};
                        e[b] = c, a.animate(e, {
                            duration: N.animateDuration,
                            easing: N.animateEase,
                            queue: !1,
                            step: d
                        })
                    },
                    getContentPositionX: function() {
                        return y()
                    },
                    getContentPositionY: function() {
                        return z()
                    },
                    getContentWidth: function() {
                        return S
                    },
                    getContentHeight: function() {
                        return T
                    },
                    getPercentScrolledX: function() {
                        return y() / (S - P)
                    },
                    getPercentScrolledY: function() {
                        return z() / (T - Q)
                    },
                    getIsScrollableH: function() {
                        return X
                    },
                    getIsScrollableV: function() {
                        return W
                    },
                    getContentPane: function() {
                        return O
                    },
                    scrollToBottom: function(a) {
                        p(Z, a)
                    },
                    hijackInternalLinks: a.noop,
                    destroy: function() {
                        M()
                    }
                }), d(c)
            }
            return b = a.extend({}, a.fn.jScrollPane.defaults, b), a.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
                b[this] = b[this] || b.speed
            }), this.each(function() {
                var d = a(this),
                    e = d.data("jsp");
                e ? e.reinitialise(b) : (a("script", d).filter('[type="text/javascript"],:not([type])').remove(), e = new c(d, b), d.data("jsp", e))
            })
        }, a.fn.jScrollPane.defaults = {
            showArrows: !1,
            maintainPosition: !0,
            stickToBottom: !1,
            stickToRight: !1,
            clickOnTrack: !0,
            autoReinitialise: !1,
            autoReinitialiseDelay: 500,
            verticalDragMinHeight: 0,
            verticalDragMaxHeight: 99999,
            horizontalDragMinWidth: 0,
            horizontalDragMaxWidth: 99999,
            contentWidth: void 0,
            animateScroll: !1,
            animateDuration: 300,
            animateEase: "linear",
            hijackInternalLinks: !1,
            verticalGutter: 4,
            horizontalGutter: 4,
            mouseWheelSpeed: 3,
            arrowButtonSpeed: 0,
            arrowRepeatFreq: 50,
            arrowScrollOnHover: !1,
            trackClickSpeed: 0,
            trackClickRepeatFreq: 70,
            verticalArrowPositions: "split",
            horizontalArrowPositions: "split",
            enableKeyboardNavigation: !0,
            hideFocus: !1,
            keyboardSpeed: 0,
            initialDelay: 300,
            speed: 30,
            scrollPagePercent: .8
        }
    });