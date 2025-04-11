// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
// all();

// const one = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(text);
//         }, delay);
//     })
// }

// const promiseA = one('Promise one', 1000);
// const promiseB = one('Promise two', 2000);

// Promise.all([promiseA, promiseB])
//     .then(value => {console.log(value)})
//     .catch(error => {console.error(error)});

// race();

// const one = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(text);
//         }, delay);
//     })
// }

// const promiseA = one("First promise", 3000);
// const promiseB = one("Second promise", 1500);

// Promise.race([promiseA, promiseB])
//     .then(value => {console.log(value)})
//     .catch(error => console.error(error)); //Second promise

// any();

// Promise.any([
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Помилка!"));
//         }, 1000);
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(1);
//         }, 2000);
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(3);
//         }, 2000);
//     })
// ])
//     .then(alert);

// Promise.any([
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Помилка!"));
//         }, 1000);
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Проблем!"));
//         }, 2000);
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Не туди!"));
//         }, 4000);
//     }),
// ])
//     .catch(error => {
//         console.log(error.constructor.name), 
//         console.log(error.errors[0]), 
//         console.log(error.errors[2])
//     });

// resolve(); reject();

// new Promise(resolve => resolve('success')).then(value => console.log(value));
// Promise.resolve("seccess").then(value => console.log(value));

// new Promise((resolve, reject) => {
//     reject('error');
// }).catch(error => {console.error(error)});
// Promise.reject('error').catch(error => {console.error(error)});

// const makeGreeting = guestName => {
//     if (guestName === '' || guestName === undefined) {
//         return {
//             success: false,
//             message: "Guest name is not found"
//         }
//     }
//     return { 
//         success: true,
//         message: `Welcome ${guestName}`
//     }
// }

// const result = makeGreeting('Bob');

// if (result.success) {
//     console.log(result.message);
// } else {
//     console.log(result.message);
// }

// const makeGreeting = guestName => {
//     if (guestName === '' || guestName === undefined) {
//         return Promise.reject("Guest name is not found");
//     }
//     return Promise.resolve(`Welcome ${guestName}`);
// }

// makeGreeting('Bob')
//     .then(greeting => console.log(greeting))
//     .catch(error => console.error(error));

// EX

var hourses = ["Milka", "Zorita", "Lastunka", "Rariti", "PinkiPay"];
var raceCounter = 0;
var refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody")
};
refs.startBtn.addEventListener('click', onStart);
function onStart() {
  raceCounter += 1;
  var promises = hourses.map(run);
  updateWinnerField('');
  updateProgressField('Заїзд розпочався ставки не приймаються!');
  deterWinner(promises);
  waitAll(promises);
}
function deterWinner(hoursesP) {
  Promise.race(hoursesP).then(function (_ref) {
    var hourse = _ref.hourse,
      time = _ref.time;
    updateWinnerField("\u041F\u0435\u0440\u0435\u043C\u043E\u0436\u0435\u0446\u044C ".concat(hourse, ", \u0444\u0456\u043D\u0456\u0448\u0443\u0432\u0430\u0432 \u0437\u0430 ").concat(time, "!"));
    updateResultsTable({
      hourse: hourse,
      time: time,
      raceCounter: raceCounter
    });
  });
}
function waitAll(hoursesP) {
  Promise.all(hoursesP).then(function () {
    updateProgressField("\u0417\u0430\u0457\u0437\u0434 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u043D\u043E \u0441\u0442\u0430\u0432\u043A\u0438 \u043D\u0435 \u043F\u0440\u0438\u0439\u043C\u0430\u044E\u0442\u0441\u044F!");
  });
}

////////////////////////////////////////////////

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
function updateProgressField(message) {
  refs.progressField.textContent = message;
}
function updateResultsTable(_ref2) {
  var hourse = _ref2.hourse,
    time = _ref2.time,
    raceCounter = _ref2.raceCounter;
  var tr = "\n    <tr>\n        <td>".concat(raceCounter, "</td>\n        <td>").concat(hourse, "</td>\n        <td>").concat(time, "</td>\n    </tr>\n    ");
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

////////////////////////////////////////////////

function run(hourse) {
  return new Promise(function (resolve) {
    var time = getRondomTime(2000, 3500);
    setTimeout(function () {
      resolve({
        hourse: hourse,
        time: time
      });
    }, time);
  });
}
function getRondomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53869" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map