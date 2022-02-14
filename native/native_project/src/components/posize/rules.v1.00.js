/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

export const Type = {
  Fr: 'fr',
  Px: 'px',
  MinmaxPxFr: 'minmax(px, fr)',
  MinmaxPxPx: 'minmax(px, px)',
  MinmaxPxMax: 'minmax(px, max-content)'
};

const FrValue = /^\s*(\d+(\.\d+)?)fr\s*$/;
const PxValue = /^\s*\-?(\d+(\.\d+)?)px\s*$/;
const MinmaxPxPx = /^\s*minmax\(\s*(\d+(\.\d+)?)px\s*,\s*(\d+(\.\d+)?)px\s*\)\s*$/;
const MinmaxPxFr = /^\s*minmax\(\s*(\d+(\.\d+)?)px\s*,\s*(\d+(\.\d+)?)fr\s*\)\s*$/;
const MinmaxPxMax = /^\s*minmax\(\s*(\d+(\.\d+)?)px\s*,\s*max-content\s*\)\s*$/;

export const MainKey = {
  [true]: ['width', 'minWidth', 'maxWidth'], // horizontal
  [false]: ['height', 'minHeight', 'maxHeight'] // vertical
};

export const type2str = (...ts) => ts.join(',');

/**
 * # fr set `minkey`
 *   because in some cases, the vertical axis cannot have the correct height.
 *   so it may be different from the webview.
 *
 * # minmax(px, px) set `key`
 *   it's fixed at the maximum value (webview)
 */
export const Rules = {
  // ########## fr, px ##########
  [type2str(Type.Fr, Type.Fr, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      {
        flexGrow: a[1],
        flexShrink: 1,
        flexBasis: a[1]
      },
      {
        flexGrow: center[1],
        flexShrink: 1,
        flexBasis: center[1]
      },
      {
        flexGrow: b[1],
        flexShrink: 1,
        flexBasis: b[1]
      }
    ] : [
      {
        flexGrow: a[1],
        flexShrink: 1,
        flexBasis: a[1],
        [minKey]: a[1]
      },
      {
        flexGrow: center[1],
        flexShrink: 1,
        [minKey]: center[1]
      },
      {
        flexGrow: b[1],
        flexShrink: 1,
        flexBasis: b[1],
        [minKey]: b[1]
      }
    ];
  },
  [type2str(Type.Fr, Type.Fr, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      {
        flexGrow: a[1],
        flexBasis: a[1],
        flexShrink: 1
      },
      {
        flexGrow: center[1],
        flexBasis: center[1],
        flexShrink: 1
      },
      {
        [key]: b[1],
        flexShrink: 0
      }
    ] : [
      {
        flexGrow: a[1],
        flexShrink: 1,
        flexBasis: a[1],
        [minKey]: a[1]
      },
      {
        flexGrow: center[1],
        flexShrink: 1,
        [minKey]: center[1]
      },
      {
        [key]: b[1],
        flexBasis: b[1],
        flexShrink: 0
      }
    ];
  },
  [type2str(Type.Fr, Type.Px, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      {
        flexGrow: a[1],
        flexShrink: 1
      },
      {
        [minKey]: center[1],
        flexShrink: 0
      },
      {
        flexGrow: b[1],
        flexShrink: 1
      }
    ] : [
      {
        [minKey]: a[1],
        flexGrow: a[1],
        flexShrink: 1
      },
      {
        [minKey]: center[1],
        flexBasis: center[1],
        flexShrink: 0
      },
      {
        [minKey]: b[1],
        flexGrow: b[1],
        flexShrink: 1
      }
    ];
  },
  [type2str(Type.Fr, Type.Px, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      {
        flexGrow: a[1],
        flexShrink: 1
      },
      {
        [minKey]: center[1],
        flexBasis: center[1],
        flexShrink: 0
      },
      {
        [key]: b[1],
        flexBasis: b[1],
        flexShrink: 0
      }
    ] : [
      {
        [minKey]: a[1],
        flexGrow: a[1],
        flexShrink: 1
      },
      {
        [minKey]: center[1],
        flexShrink: 0
      },
      {
        [key]: b[1],
        flexBasis: b[1],
        flexShrink: 0
      }
    ];
  },
  [type2str(Type.Px, Type.Fr, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      {
        flexBasis: a[1],
        flexShrink: 0,
        [key]: a[1]
      },
      {
        flexGrow: center[1],
        [minKey]: center[1],
        flexShrink: 1,
      },
      {
        flexGrow: b[1],
        flexShrink: 0,
        [key]: b[1]
      }
    ] : [
      {
        flexBasis: a[1],
        flexShrink: 0,
        [key]: a[1]
      },
      {
        flexGrow: center[1],
        flexShrink: 1,
        [minKey]: center[1],
      },
      {
        flexGrow: b[1],
        flexShrink: 0,
        [minKey]: b[1]
      }
    ];
  },
  [type2str(Type.Px, Type.Fr, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];
    return isHorizontal ? [
      {
        flexBasis: a[1],
        flexShrink: 0,
        [key]: a[1]
      },
      {
        flexGrow: center[1],
        flexShrink: 1,
        flexBasis: center[1]
      },
      {
        flexBasis: b[1],
        flexShrink: 0,
        [key]: b[1]
      }
    ] : [
      {
        flexBasis: a[1],
        flexShrink: 0,
        [key]: a[1]
      },
      {
        flexGrow: center[1],
        flexShrink: 1,
        [minKey]: center[1]
      },
      {
        flexBasis: b[1],
        flexShrink: 0,
        [key]: b[1]
      }
    ];
  },
  [type2str(Type.Px, Type.Px, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];
    return isHorizontal ? [
      {
        flexBasis: a[1],
        flexShrink: 0,
        [key]: a[1]
      },
      {
        flexBasis: center[1],
        flexShrink: 0,
        [minKey]: center[1]
      },
      {
        flexGrow: b[1],
        flexShrink: 1,
        flexBasis: b[1]
      }
    ] : [
      {
        flexBasis: a[1],
        flexShrink: 0,
        [key]: a[1]
      },
      {
        flexBasis: center[1],
        flexShrink: 0,
        [minKey]: center[1]
      },
      {
        flexGrow: b[1],
        flexShrink: 1,
        flexBasis: b[1],
        [minKey]: b[1]
      }
    ];
  },
  [type2str(Type.Px, Type.Px, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];
    return [
      {
        flexBasis: a[1],
        flexShrink: 0,
        [key]: a[1]
      },
      {
        flexBasis: center[1],
        flexShrink: 0,
        [minKey]: center[1]
      },
      {
        flexBasis: b[1],
        flexShrink: 0,
        [key]: b[1]
      }
    ];
  },

  // ########## minmax(px, fr) ##########
  [type2str(Type.Fr, Type.MinmaxPxFr, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];
    return isHorizontal ? [
      {
        flexGrow: a[1],
        flexShrink: 1,
        flexBasis: a[1]
      },
      {
        flexGrow: center[2],
        flexShrink: 1,
        [minKey]: center[1],
        flexBasis: center[2]
      },
      {
        flexGrow: b[1],
        flexShrink: 1,
        flexBasis: b[1]
      }
    ] : [
      generate(a, isHorizontal),
      {
        [minKey]: center[1],
        flexBasis: center[1],
        flexGrow: center[2],
        flexShrink: 1
      },
      generate(b, isHorizontal),
    ];
  },
  [type2str(Type.Fr, Type.MinmaxPxFr, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];
    return isHorizontal ? [
      {
        flexGrow: a[1],
        flexShrink: 1
      },
      {
        flexGrow: center[2],
        flexShrink: 1,
        flexBasis: center[2]
      },
      generate(b, isHorizontal),
    ] : [
      {
        [minKey]: a[1],
        flexBasis: a[1],
        flexGrow: a[1],
        flexShrink: 1
      },
      {
        [minKey]: center[1],
        flexBasis: center[1],
        flexGrow: center[2],
        flexShrink: 1
      },
      generate(b, isHorizontal),
    ];
  },
  [type2str(Type.Px, Type.MinmaxPxFr, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      {
        [key]: a[1],
        flexBasis: a[1],
        flexShrink: 0
      },
      {
        flexGrow: center[2],
        [minKey]: center[1],
        flexBasis: center[2],
        flexShrink: 1
      },
      {
        flexGrow: b[1],
        flexShrink: 1
      }
    ] : [
      {
        [key]: a[1],
        flexBasis: a[1],
        flexShrink: 0
      },
      {
        [minKey]: center[1],
        flexBasis: center[1],
        flexGrow: center[2],
        flexShrink: 1
      },
      {
        [minKey]: b[1],
        flexBasis: b[1],
        flexGrow: b[1],
        flexShrink: 1
      }
    ];
  },
  [type2str(Type.Px, Type.MinmaxPxFr, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      generate(a, isHorizontal),
      {
        [minKey]: center[1],
        flexGrow: center[2],
        flexBasis: center[1],
        flexShrink: 1
      },
      generate(b, isHorizontal),
    ] : [
      {
        [key]: a[1],
        flexBasis: a[1],
        flexShrink: 0
      },
      {
        [minKey]: center[1],
        flexBasis: center[1],
        flexGrow: center[2],
        flexShrink: 1
      },
      {
        [key]: b[1],
        flexBasis: b[1],
        flexShrink: 0
      }
    ];
  },

  // ########## minmax(px, max-content) ##########
  [type2str(Type.Fr, Type.MinmaxPxMax, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      generate(a, isHorizontal),
      {
        [minKey]: center[1],
        flexShrink: 1
      },
      generate(b, isHorizontal),
    ] : [
      {
        flexShrink: 1,
        flexGrow: a[1],
        flexBasis: a[1],
        [minKey]: a[1]
      },
      {
        [minKey]: center[1],
        flexShrink: 1
      },
      {
        flexShrink: 1,
        flexGrow: b[1],
        flexBasis: b[1],
        [minKey]: b[1]
      }
    ];
  },
  [type2str(Type.Fr, Type.MinmaxPxMax, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      {
        flexGrow: a[1]
      },
      {
        [minKey]: center[1],
        flexShrink: 1
      },
      {
        [key]: b[1],
        flexBasis: b[1],
        flexShrink: 0
      }
    ] : [
      {
        flexShrink: 1,
        flexGrow: a[1],
        flexBasis: a[1],
        [minKey]: a[1]
      },
      {
        [minKey]: center[1],
        flexShrink: 1
      },
      {
        [key]: b[1],
        flexBasis: b[1],
        flexShrink: 0
      }
    ];
  },
  [type2str(Type.Px, Type.MinmaxPxMax, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return isHorizontal ? [
      {
        [key]: a[1],
        flexBasis: a[1],
        flexShrink: 0
      },
      {
        [minKey]: center[1],
        flexShrink: 1
      },
      {
        flexGrow: b[1]
      }
    ] : [
      {
        [key]: a[1],
        flexBasis: a[1],
        flexShrink: 0
      },
      {
        [minKey]: center[1],
        flexShrink: 1
      },
      {
        flexShrink: 1,
        flexGrow: b[1],
        flexBasis: b[1],
        [minKey]: b[1]
      }
    ];
  },
  [type2str(Type.Px, Type.MinmaxPxMax, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];

    return [
      {
        [key]: a[1],
        flexBasis: a[1],
        flexShrink: 0
      },
      {
        [minKey]: center[1],
        flexShrink: 1
      },
      {
        [key]: b[1],
        flexBasis: b[1],
        flexShrink: 0
      }
    ];
  },

  // ########## minmax(px, px) ##########
  [type2str(Type.Fr, Type.MinmaxPxPx, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];
    return isHorizontal ? [
      {
        flexGrow: a[1],
        flexShrink: 1,
      },
      {
        [minKey]: center[1],
        [maxKey]: center[2],
        flexBasis: center[2],
        flexShrink: 1
      },
      {
        flexGrow: b[1],
        flexShrink: 1,
      }
    ] : [
      {
        flexShrink: 1,
        flexGrow: a[1],
        flexBasis: a[1],
        [minKey]: a[1]
      },
      {
        [minKey]: center[1],
        [maxKey]: center[2],
        [key]: center[2],
        flexBasis: center[2],
        flexShrink: 1
      },
      {
        flexShrink: 1,
        flexGrow: b[1],
        flexBasis: b[1],
        [minKey]: b[1]
      }
    ];
  },
  [type2str(Type.Fr, Type.MinmaxPxPx, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];
    return isHorizontal ? [
      generate(a, isHorizontal),
      {
        [minKey]: center[1],
        [maxKey]: center[2],
        flexBasis: center[2],
        flexShrink: 1
      },
      generate(b, isHorizontal),
    ] : [
      {
        flexShrink: 1,
        flexGrow: a[1],
        flexBasis: a[1],
        [minKey]: a[1]
      },
      {
        [minKey]: center[1],
        [maxKey]: center[2],
        [key]: center[2],
        flexBasis: center[2],
        flexShrink: 1
      },
      {
        flexShrink: 0,
        flexBasis: b[1],
        [key]: b[1]
      }
    ];
  },
  [type2str(Type.Px, Type.MinmaxPxPx, Type.Fr)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];
    return isHorizontal ? [
      generate(a, isHorizontal),
      {
        [minKey]: center[1],
        [maxKey]: center[2],
        flexBasis: center[2],
        flexShrink: 1
      },
      generate(b, isHorizontal)
    ] : [
      {
        flexShrink: 0,
        flexBasis: a[1],
        [key]: a[1]
      },
      {
        [minKey]: center[1],
        [maxKey]: center[2],
        [key]: center[2],
        flexBasis: center[2],
        flexShrink: 1
      },
      {
        flexShrink: 1,
        flexGrow: b[1],
        flexBasis: b[1],
        [minKey]: b[1]
      }
    ];
  },
  [type2str(Type.Px, Type.MinmaxPxPx, Type.Px)]: ([a, center, b], isHorizontal) => {
    const [key, minKey, maxKey] = MainKey[isHorizontal];
    return [
      generate(a, isHorizontal),
      {
        [minKey]: center[1],
        [maxKey]: center[2],
        [key]: center[2],
        flexBasis: center[2],
        flexShrink: 1
      },
      generate(b, isHorizontal),
    ];
  }
};

/**
 * @param {Array[String]} values ex. ['1px', 'minmax(0px, max-content)', '1fr']
 * @returns {Array[Array[]]} ex. [['px', 1], ['minmax(px, max-content)', 0, 'max-content'], ['fr', 1]]
 */
export const parse = (values) => {
  return values.map((v) => {
    const str = `${v}`;
    let result = null;

    result = str.match(FrValue);
    if (result) {
      return [Type.Fr, parseFloat(result[1])];
    }

    result = str.match(PxValue);
    if (result) {
      return [Type.Px, parseFloat(result[1])];
    }

    result = str.match(MinmaxPxFr);
    if (result) {
      return [Type.MinmaxPxFr, parseFloat(result[1]), parseFloat(result[3])];
    }

    result = str.match(MinmaxPxMax);
    if (result) {
      return [Type.MinmaxPxMax, parseFloat(result[1]), 'max-content'];
    }

    result = str.match(MinmaxPxPx);
    if (result) {
      return [Type.MinmaxPxPx, parseFloat(result[1]), parseFloat(result[3])];
    }

    throw Error(`parse ${v} not support`);
  });
};

/**
 * for common case
 *
 * @param {Array} value [Type, number, number]
 * @param {Boolean} isHorizontal
 */
export const generate = (value, isHorizontal) => {
  const [type, param1, param2] = value;
  const [key, minKey, maxKey] = MainKey[isHorizontal];

  switch (type) {
    case Type.Px:
      return {
        flexBasis: param1,
        [minKey]: param1,
        flexShrink: 0
      };

    case Type.Fr:
      return isHorizontal ? {
        flexShrink: 1,
        flexGrow: param1
      } : {
        flexShrink: 1,
        flexGrow: param1,
        [minKey]: param1
      };

    case Type.MinmaxPxFr:
      return {
        [minKey]: param1,
        flexGrow: param2,
        flexShrink: 1
      };

    case Type.MinmaxPxMax:
      return {
        [minKey]: param1,
        flexShrink: 1
      };

    case Type.MinmaxPxPx:
      return {
        [minKey]: param1,
        [maxKey]: param2,
        flexBasis: param2,
        flexShrink: 1
      };

    default:
      throw Error('generate not support');
  }
};
