function cov_236lsgcvi1() {
  var path = "/Users/emilyjmiles/turing/mod_4/capstone/IOTNBO-FE/src/utilities.js";
  var hash = "da5d2e9ea2bd7cb5cfd02a7db1ff4a99a5b2188a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/emilyjmiles/turing/mod_4/capstone/IOTNBO-FE/src/utilities.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 29
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "2": {
        start: {
          line: 23,
          column: 37
        },
        end: {
          line: 23,
          column: 65
        }
      },
      "3": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 29
          },
          end: {
            line: 22,
            column: 30
          }
        },
        loc: {
          start: {
            line: 22,
            column: 35
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "da5d2e9ea2bd7cb5cfd02a7db1ff4a99a5b2188a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_236lsgcvi1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_236lsgcvi1();
import { gql, useQuery } from '@apollo/client';
const GET_ALL_THERAPISTS = (cov_236lsgcvi1().s[0]++, gql`
    query {
        therapists {
            id
            address
            phoneNumber
            name
            labels
            imageUrl
            bio
            practice {
                id
                name
                websiteUrl
            }
        }
    }
`);
cov_236lsgcvi1().s[1]++;
export const useTherapists = () => {
  cov_236lsgcvi1().f[0]++;
  const {
    data,
    error,
    loading
  } = (cov_236lsgcvi1().s[2]++, useQuery(GET_ALL_THERAPISTS));
  cov_236lsgcvi1().s[3]++;
  return {
    data,
    error,
    loading
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsIkdFVF9BTExfVEhFUkFQSVNUUyIsInVzZVRoZXJhcGlzdHMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIl0sInNvdXJjZXMiOlsidXRpbGl0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmNvbnN0IEdFVF9BTExfVEhFUkFQSVNUUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICAgIHRoZXJhcGlzdHMge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGFkZHJlc3NcbiAgICAgICAgICAgIHBob25lTnVtYmVyXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBsYWJlbHNcbiAgICAgICAgICAgIGltYWdlVXJsXG4gICAgICAgICAgICBiaW9cbiAgICAgICAgICAgIHByYWN0aWNlIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICB3ZWJzaXRlVXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY29uc3QgdXNlVGhlcmFwaXN0cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShHRVRfQUxMX1RIRVJBUElTVFMpO1xuXG4gICAgcmV0dXJuIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxHQUFHLEVBQUVDLFFBQVEsUUFBUSxnQkFBZ0I7QUFFOUMsTUFBTUMsa0JBQWtCLDZCQUFHRixHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFDO0FBRUYsT0FBTyxNQUFNRyxhQUFhLEdBQUcsTUFBTTtFQUFBO0VBQy9CLE1BQU07SUFBRUMsSUFBSTtJQUFFQyxLQUFLO0lBQUVDO0VBQVEsQ0FBQyw2QkFBR0wsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQztFQUFDO0VBRTlELE9BQU87SUFBRUUsSUFBSTtJQUFFQyxLQUFLO0lBQUVDO0VBQVEsQ0FBQztBQUNuQyxDQUFDIn0=