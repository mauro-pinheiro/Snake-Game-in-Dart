define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const main = Object.create(dart.library);
  const $onKeyDown = dartx.onKeyDown;
  const $putIfAbsent = dartx.putIfAbsent;
  const $onKeyUp = dartx.onKeyUp;
  const $remove = dartx.remove;
  const $containsKey = dartx.containsKey;
  const $first = dartx.first;
  const $insert = dartx.insert;
  const $removeLast = dartx.removeLast;
  const $skip = dartx.skip;
  const $truncate = dartx.truncate;
  const $animationFrame = dartx.animationFrame;
  const $getContext = dartx.getContext;
  let IdentityMapOfint$num = () => (IdentityMapOfint$num = dart.constFn(_js_helper.IdentityMap$(core.int, core.num)))();
  let VoidTonum = () => (VoidTonum = dart.constFn(dart.fnType(core.num, [])))();
  let KeyboardEventToNull = () => (KeyboardEventToNull = dart.constFn(dart.fnType(core.Null, [html.KeyboardEvent])))();
  let PointOfnum = () => (PointOfnum = dart.constFn(math.Point$(core.num)))();
  let ListOfPointOfnum = () => (ListOfPointOfnum = dart.constFn(core.List$(PointOfnum())))();
  let intToPointOfnum = () => (intToPointOfnum = dart.constFn(dart.fnType(PointOfnum(), [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: PointOfnum().prototype,
        y: 0,
        x: -1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: PointOfnum().prototype,
        y: 0,
        x: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: PointOfnum().prototype,
        y: -1,
        x: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: PointOfnum().prototype,
        y: 1,
        x: 0
      });
    }
  });
  const _keys = dart.privateName(main, "_keys");
  main.Keyboard = class Keyboard extends core.Object {
    isPressed(keyCode) {
      return this[_keys][$containsKey](keyCode);
    }
  };
  (main.Keyboard.new = function() {
    this[_keys] = new (IdentityMapOfint$num()).new();
    html.window[$onKeyDown].listen(dart.fn(event => {
      this[_keys][$putIfAbsent](event.keyCode, dart.fn(() => event.timeStamp, VoidTonum()));
    }, KeyboardEventToNull()));
    html.window[$onKeyUp].listen(dart.fn(event => {
      this[_keys][$remove](event.keyCode);
    }, KeyboardEventToNull()));
  }).prototype = main.Keyboard.prototype;
  dart.addTypeTests(main.Keyboard);
  dart.setMethodSignature(main.Keyboard, () => ({
    __proto__: dart.getMethods(main.Keyboard.__proto__),
    isPressed: dart.fnType(core.bool, [core.int])
  }));
  dart.setLibraryUri(main.Keyboard, "org-dartlang-app:///web/main.dart");
  dart.setFieldSignature(main.Keyboard, () => ({
    __proto__: dart.getFields(main.Keyboard.__proto__),
    [_keys]: dart.fieldType(collection.HashMap$(core.int, core.num))
  }));
  const _body = dart.privateName(main, "_body");
  const _dir = dart.privateName(main, "_dir");
  const _checkInput = dart.privateName(main, "_checkInput");
  const _move = dart.privateName(main, "_move");
  const _draw = dart.privateName(main, "_draw");
  let C0;
  let C1;
  let C2;
  let C3;
  main.Snake = class Snake extends core.Object {
    get head() {
      return this[_body][$first];
    }
    [_checkInput]() {
      if (dart.test(main.keyboard.isPressed(37)) && !dart.equals(this[_dir], main.Snake.RIGHT)) {
        this[_dir] = main.Snake.LEFT;
      } else if (dart.test(main.keyboard.isPressed(39)) && !dart.equals(this[_dir], main.Snake.LEFT)) {
        this[_dir] = main.Snake.RIGHT;
      } else if (dart.test(main.keyboard.isPressed(38)) && !dart.equals(this[_dir], main.Snake.DOWN)) {
        this[_dir] = main.Snake.UP;
      } else if (dart.test(main.keyboard.isPressed(40)) && !dart.equals(this[_dir], main.Snake.UP)) {
        this[_dir] = main.Snake.DOWN;
      }
    }
    grow() {
      this[_body][$insert](0, this.head['+'](this[_dir]));
    }
    [_move]() {
      this.grow();
      this[_body][$removeLast]();
    }
    [_draw]() {
      for (let p of this[_body]) {
        main.drawCell(p, "green");
      }
    }
    checkForBodyCollision() {
      for (let p of this[_body][$skip](1)) {
        if (dart.equals(p, this.head)) {
          return true;
        }
      }
      return false;
    }
    update() {
      this[_checkInput]();
      this[_move]();
      this[_draw]();
    }
  };
  (main.Snake.new = function() {
    this[_body] = null;
    this[_dir] = main.Snake.RIGHT;
    let i = 6 - 1;
    this[_body] = ListOfPointOfnum().generate(6, dart.fn(index => {
      let t0;
      return new (PointOfnum()).new((t0 = i, i = t0 - 1, t0), 0);
    }, intToPointOfnum()));
  }).prototype = main.Snake.prototype;
  dart.addTypeTests(main.Snake);
  dart.setMethodSignature(main.Snake, () => ({
    __proto__: dart.getMethods(main.Snake.__proto__),
    [_checkInput]: dart.fnType(dart.void, []),
    grow: dart.fnType(dart.void, []),
    [_move]: dart.fnType(dart.void, []),
    [_draw]: dart.fnType(dart.void, []),
    checkForBodyCollision: dart.fnType(core.bool, []),
    update: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(main.Snake, () => ({
    __proto__: dart.getGetters(main.Snake.__proto__),
    head: math.Point$(core.num)
  }));
  dart.setLibraryUri(main.Snake, "org-dartlang-app:///web/main.dart");
  dart.setFieldSignature(main.Snake, () => ({
    __proto__: dart.getFields(main.Snake.__proto__),
    [_body]: dart.fieldType(core.List$(math.Point$(core.num))),
    [_dir]: dart.fieldType(math.Point$(core.num))
  }));
  dart.defineLazy(main.Snake, {
    /*main.Snake.LEFT*/get LEFT() {
      return C0 || CT.C0;
    },
    /*main.Snake.RIGHT*/get RIGHT() {
      return C1 || CT.C1;
    },
    /*main.Snake.UP*/get UP() {
      return C2 || CT.C2;
    },
    /*main.Snake.DOWN*/get DOWN() {
      return C3 || CT.C3;
    },
    /*main.Snake.START_LENGTH*/get START_LENGTH() {
      return 6;
    }
  });
  const _lastTimeStamp = dart.privateName(main, "_lastTimeStamp");
  const _rightEdgeX = dart.privateName(main, "_rightEdgeX");
  const _bottomEdgeY = dart.privateName(main, "_bottomEdgeY");
  const _snake = dart.privateName(main, "_snake");
  const _food = dart.privateName(main, "_food");
  const _randomPoint = dart.privateName(main, "_randomPoint");
  const _checkForCollisions = dart.privateName(main, "_checkForCollisions");
  main.Game = class Game extends core.Object {
    init() {
      this[_snake] = new main.Snake.new();
      this[_food] = this[_randomPoint]();
    }
    [_randomPoint]() {
      let random = math.Random.new();
      return new (PointOfnum()).new(random.nextInt(this[_rightEdgeX]), random.nextInt(this[_bottomEdgeY]));
    }
    [_checkForCollisions]() {
      if (dart.equals(this[_snake].head, this[_food])) {
        this[_snake].grow();
        this[_food] = this[_randomPoint]();
      }
      if (dart.notNull(this[_snake].head.x) <= -1 || dart.notNull(this[_snake].head.x) >= dart.notNull(this[_rightEdgeX]) || dart.notNull(this[_snake].head.y) <= -1 || dart.notNull(this[_snake].head.y) >= dart.notNull(this[_bottomEdgeY]) || dart.test(this[_snake].checkForBodyCollision())) {
        this.init();
      }
    }
    run() {
      return async.async(dart.dynamic, (function* run() {
        this.update(yield html.window[$animationFrame]);
      }).bind(this));
    }
    update(delta) {
      let diff = dart.notNull(delta) - dart.notNull(this[_lastTimeStamp]);
      if (diff > 50) {
        this[_lastTimeStamp] = delta;
        main.clear();
        main.drawCell(this[_food], "blue");
        this[_snake].update();
        this[_checkForCollisions]();
      }
      this.run();
    }
  };
  (main.Game.new = function() {
    this[_lastTimeStamp] = 0;
    this[_rightEdgeX] = null;
    this[_bottomEdgeY] = null;
    this[_snake] = null;
    this[_food] = null;
    this[_rightEdgeX] = (dart.notNull(main.canvas.width) / 10)[$truncate]();
    this[_bottomEdgeY] = (dart.notNull(main.canvas.height) / 10)[$truncate]();
    this.init();
  }).prototype = main.Game.prototype;
  dart.addTypeTests(main.Game);
  dart.setMethodSignature(main.Game, () => ({
    __proto__: dart.getMethods(main.Game.__proto__),
    init: dart.fnType(dart.void, []),
    [_randomPoint]: dart.fnType(math.Point$(core.num), []),
    [_checkForCollisions]: dart.fnType(dart.void, []),
    run: dart.fnType(async.Future, []),
    update: dart.fnType(dart.void, [core.num])
  }));
  dart.setLibraryUri(main.Game, "org-dartlang-app:///web/main.dart");
  dart.setFieldSignature(main.Game, () => ({
    __proto__: dart.getFields(main.Game.__proto__),
    [_lastTimeStamp]: dart.fieldType(core.num),
    [_rightEdgeX]: dart.fieldType(core.int),
    [_bottomEdgeY]: dart.fieldType(core.int),
    [_snake]: dart.fieldType(main.Snake),
    [_food]: dart.fieldType(math.Point$(core.num))
  }));
  dart.defineLazy(main.Game, {
    /*main.Game.GAME_SPEED*/get GAME_SPEED() {
      return 50;
    }
  });
  main.main = function main$() {
    let t0;
    main.canvas = html.CanvasElement._check(html.querySelector("#canvas"));
    main.ctx = html.CanvasRenderingContext2D._check(main.canvas[$getContext]("2d"));
    t0 = new main.Game.new();
    t0.run();
    t0;
  };
  main.drawCell = function drawCell(coords, color) {
    let t0, t0$;
    t0 = main.ctx;
    t0.fillStyle = color;
    t0.strokeStyle = "white";
    t0;
    let x = dart.asInt(dart.notNull(coords.x) * 10);
    let y = dart.asInt(dart.notNull(coords.y) * 10);
    t0$ = main.ctx;
    t0$.fillRect(x, y, 10, 10);
    t0$.strokeRect(x, y, 10, 10);
    t0$;
  };
  main.clear = function clear() {
    let t0;
    t0 = main.ctx;
    t0.fillStyle = "white";
    t0.fillRect(0, 0, main.canvas.width, main.canvas.height);
    t0;
  };
  dart.defineLazy(main, {
    /*main.keyboard*/get keyboard() {
      return new main.Keyboard.new();
    },
    set keyboard(_) {},
    /*main.CELL_SIZE*/get CELL_SIZE() {
      return 10;
    },
    /*main.canvas*/get canvas() {
      return null;
    },
    set canvas(_) {},
    /*main.ctx*/get ctx() {
      return null;
    },
    set ctx(_) {}
  });
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cA+CqB;AAAY,YAAA,AAAM,2BAAY,OAAO;IAAC;;;IAZvC,cAAQ;IAGxB,AAAO,AAAU,+BAAO,QAAe;MACrC,AAAM,0BAAY,AAAM,KAAD,UAAU,cAAM,AAAM,KAAD;;IAG9C,AAAO,AAAQ,6BAAO,QAAe;MACnC,AAAM,qBAAO,AAAM,KAAD;;EAEtB;;;;;;;;;;;;;;;;;;;;;;AAyBkB,YAAA,AAAM;IAAK;;AAG3B,oBAAG,AAAS,6CAA2B,YAAQ;QAC7C,aAAO;YAEJ,eAAG,AAAS,6CAA4B,YAAQ;QACnD,aAAO;YAEJ,eAAG,AAAS,6CAAyB,YAAQ;QAChD,aAAO;YAEJ,eAAG,AAAS,6CAA2B,YAAQ;QAClD,aAAO;;IAEX;;MAIE,AAAM,qBAAO,GAAG,AAAK,eAAE;IACzB;;MAIE;MAGA,AAAM;IACR;;AAIE,eAAU,IAAK;QACb,cAAS,CAAC,EAAE;;IAEhB;;AAGE,eAAU,IAAK,AAAM,oBAAK;AACxB,YAAK,YAAF,CAAC,EAAI;AACN,gBAAO;;;AAGX,YAAO;IACT;;MAGE;MACA;MACA;IACF;;;IA7DY;IAGN,aAAO;AAGP,YAAiB,IAAE;IACvB,cAAM,+BACL,QAAK;;AAAU,0CAAM,CAAC,EAAD,SAAC,QAAG;;EAC5B;;;;;;;;;;;;;;;;;;;;;;MAhBmB,eAAI;;;MACJ,gBAAK;;;MACL,aAAE;;;MACF,eAAI;;;MAEN,uBAAY;;;;;;;;;;;;;MAsF3B,eAAa;MACb,cAAQ;IACV;;AAGS,mBAAS;AAChB,YAAO,wBAAM,AAAO,MAAD,SAAS,oBAC5B,AAAO,MAAD,SAAS;IACjB;;AAIE,UAAe,YAAZ,AAAO,mBAAQ;QAChB,AAAO;QACP,cAAQ;;AAIV,UAAiB,aAAd,AAAO,AAAK,wBAAK,CAAC,KACP,aAAd,AAAO,AAAK,qCAAK,sBACH,aAAd,AAAO,AAAK,wBAAK,CAAC,KACJ,aAAd,AAAO,AAAK,qCAAK,iCACjB,AAAO;QACL;;IAEJ;;AAEU;QACR,YAAO,MAAM,AAAO;MACtB;;WAEgB;AACJ,iBAAa,aAAN,KAAK,iBAAG;AAEzB,UAAG,AAAK,IAAD;QACL,uBAAiB,KAAK;QACtB;QACA,cAAS,aAAM;QACf,AAAO;QACP;;MAIF;IACF;;;IA7DI,uBAAiB;IAGjB;IACA;IAEE;IACA;IAGJ,oBAA2B,cAAb,AAAO;IACrB,qBAA6B,cAAd,AAAO;IAEtB;EACF;;;;;;;;;;;;;;;;;;;;MAfiB,oBAAU;;;;;;kBAhH3B,0BAAS,mBAAc;eACvB,qCAAM,AAAO,yBAAW;SAExB;IAAQ;;EACV;oCAEoB,QAAe;;SACjC;IAAK,eAAY,KAAK;IAAE,iBAAc;;AAE5B,uBAAa,aAAT,AAAO,MAAD;AACV,uBAAa,aAAT,AAAO,MAAD;UAEpB;IAAK,aAAS,CAAC,EAAC,CAAC;IACf,eAAW,CAAC,EAAC,CAAC;;EAClB;;;SAGE;IAAK,eAAY;IACf,YAAS,GAAG,GAAG,AAAO,mBAAO,AAAO;;EACxC;;MA3BS,aAAQ;YAAG;;;MAEV,cAAS;;;MAEL,WAAM;;;;MACK,QAAG","file":"main.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
