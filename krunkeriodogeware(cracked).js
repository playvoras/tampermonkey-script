// ==UserScript==
// @name        Krunker Central Aimbot & ESP
// @namespace   Krunker Central Scripts
// @match       *://krunker.io/*
// @grant       none
// @version     1.0
// @author      Krunker Central
// @description A Krunker hack by Krunker Central - https://krunkercentral.com/
// @run-at      document-start
// @noframes
// ==/UserScript==

const v19 = console.log;
const v20 = "https://sub2krunkercentral.com";
const v21 = "1.4";
const v22 = new Uint8Array([48, 130, 1, 34, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 130, 1, 15, 0, 48, 130, 1, 10, 2, 130, 1, 1, 0, 229, 111, 226, 207, 86, 246, 233, 241, 116, 242, 253, 123, 32, 118, 31, 184, 74, 86, 236, 84, 216, 171, 62, 143, 22, 141, 124, 163, 18, 182, 250, 248, 207, 30, 46, 243, 178, 216, 202, 237, 161, 56, 151, 161, 24, 13, 74, 110, 134, 208, 64, 71, 168, 198, 247, 92, 29, 190, 12, 158, 166, 240, 72, 216, 57, 245, 117, 201, 213, 249, 95, 179, 97, 236, 151, 105, 250, 218, 181, 193, 104, 154, 171, 42, 46, 58, 109, 29, 12, 56, 203, 132, 226, 20, 88, 236, 228, 201, 204, 47, 80, 55, 48, 182, 143, 120, 51, 150, 157, 121, 20, 7, 99, 120, 88, 127, 17, 127, 181, 89, 219, 85, 136, 167, 21, 100, 253, 43, 15, 218, 32, 80, 146, 237, 110, 236, 137, 58, 115, 63, 208, 11, 201, 39, 168, 166, 79, 159, 12, 226, 147, 98, 213, 213, 216, 67, 205, 252, 81, 8, 56, 103, 200, 20, 221, 227, 178, 38, 185, 198, 66, 28, 81, 32, 252, 245, 147, 44, 197, 79, 121, 153, 36, 55, 228, 16, 128, 200, 177, 68, 192, 81, 129, 139, 232, 223, 146, 214, 224, 60, 81, 48, 126, 147, 68, 205, 56, 103, 81, 124, 86, 34, 52, 116, 169, 185, 233, 192, 91, 154, 29, 61, 8, 201, 56, 56, 107, 255, 238, 174, 185, 125, 42, 178, 26, 50, 83, 84, 74, 110, 165, 66, 105, 72, 229, 241, 154, 127, 249, 117, 129, 71, 31, 1, 234, 39, 2, 3, 1, 0, 1]).buffer;
crypto.subtle.importKey("spki", v22, {
  name: "RSASSA-PKCS1-v1_5",
  hash: {
    name: "SHA-256"
  }
}, true, ["verify"]).then(async p7 => {
  async function f(p8) {
    let v23;
    try {
      v23 = JSON.parse(atob(p8));
    } catch {
      console.log("Couldn't verify key: invalid encoding");
      return false;
    }
    if (!(parseInt(v23.message) > Date.now())) {
      console.log("Couldn't verify key: bad time");
      return false;
    }
    const v24 = await crypto.subtle.verify({
      name: "RSASSA-PKCS1-v1_5"
    }, p7, new Uint8Array(v23.signature), new TextEncoder().encode(v23.message));
    if (!v24) {
      console.log("Couldn't verify key: bad signature");
      return false;
    }
    return parseInt(v23.message);
  }
  let v25 = localStorage.dogewareLicenseKey;
  if (location.href.includes("?dogewaere_license_key=")) {
    v25 = location.href.slice(location.href.indexOf("?dogewaere_license_key=") + "?dogewaere_license_key=".length);
  }
  if (v25 && (await f(v25))) {
    localStorage.dogewareLicenseKey = v25;
  }
});
fetch(v20 + "/current-version").then(p9 => p9.text()).then(p10 => {
  if (p10 !== v21) {
    const vConfirm = confirm("This version of the cheat is no longer working, we have released a new version of the cheat (" + v21 + " -> " + p10 + "),\n\nPress OK to be directed to Krunkercentral.com, once you're there download the hack from the latest post");
    if (vConfirm) {
      location.href = "https://krunkercentral.com/";
    }
  }
});
const v26 = "_" + Math.random().toString(36).slice(2);
window[v26] = f2;
function f2() {
  delete window[v26];
  class C {
    constructor() {
      this.hash = this.genHash(8);
      window[this.hash] = this;
      this.settings = Object.assign({}, {
        aimbot: 0,
        superSilent: false,
        AImbot: false,
        frustumCheck: false,
        weaponZoom: 1,
        wallbangs: false,
        alwaysAim: false,
        pitchHack: 0,
        thirdPerson: false,
        autoReload: false,
        speedHack: false,
        rangeCheck: false,
        alwaysTrail: false,
        spinAimFrames: 10,
        animatedBillboards: false,
        esp: 0,
        espFontSize: 10,
        tracers: false,
        showGuiButton: true,
        awtv: false,
        uwtv: false,
        forceUnsilent: false,
        bhop: 0,
        spinBot: false,
        markTarget: true,
        skinHack: false,
        aimOffset: 0,
        aimNoise: 0,
        keybinds: true,
        antikick: true,
        fovbox: false,
        drawFovbox: false,
        fovBoxSize: 1,
        guiOnMMB: false,
        hideAdverts: false,
        hideStreams: false,
        hideMerch: false,
        hideNewsConsole: false,
        hideCookieButton: false,
        chams: false,
        chamsCol: 1,
        wireframe: false,
        customCSS: "",
        teamChams: false,
        autoNuke: false,
        chamsInterval: 500,
        preventMeleeThrowing: false,
        forceNametagsOn: false,
        aimbotRange: 0,
        autoServer: true,
        botNametags: true
      });
      this.state = Object.assign({}, {
        bindAimbotOn: true,
        quickscopeCanShoot: true,
        spinFrame: 0,
        pressedKeys: new Set(),
        spinCounter: 0,
        activeTab: 0,
        nameTags: false,
        frame: 0
      });
      this.gaybow = 0;
      this.colors = {
        White: "#FFFFFF",
        Black: "#000000",
        Purple: "#9400D3",
        Pink: "#FF1493",
        Blue: "#1E90FF",
        DarkBlue: "#0000FF",
        Aqua: "#00FFFF",
        Green: "#008000",
        Lime: "#7FFF00",
        Orange: "#FF8C00",
        Yellow: "#FFFF00",
        Red: "#FF0000"
      };
      this.isProxy = Symbol("isProxy");
      this.GUI = {};
      try {
        this.onLoad();
      } catch (_0x172688) {
        console.error("ERROR " + _0x172688.name);
        console.error(_0x172688.message);
        console.log(_0x172688.stack);
      }
    }
    onLoad() {
      this.defines();
      this.createListeners();
    }
    defines() {
      const vSymbol = Symbol("origSkins");
      const vSymbol2 = Symbol("localSkins");
      Object.defineProperties(Object.prototype, {
        canvas: {
          set(p11) {
            this._canvas = p11;
            if (p11.id == "game-overlay") {
              v115.overlay = this;
              v115.ctx = p11.getContext("2d");
              Object.defineProperties(this, {
                render: {
                  set(p12) {
                    this._render = new Proxy(p12, {
                      apply(p13, p14, p15) {
                        ["scale", "game", "controls", "renderer", "me"].forEach((p16, p17) => {
                          v115[p16] = p15[p17];
                        });
                        Reflect.apply(...arguments);
                        if (v115.isDefined(v115.renderer) && v115.isDefined(v115.renderer.adsFovMlt)) {
                          try {
                            v115.renderer.adsFovMlt.fill(v115.settings.weaponZoom);
                          } catch (_0x14d3d7) {
                            console.error(_0x14d3d7);
                          }
                        }
                        if (v115.me && v115.ctx) {
                          v115.ctx.save();
                          v115.ctx.scale(v115.scale, v115.scale);
                          v115.render();
                          v115.ctx.restore();
                          if (!v115.me.procInputs[v115.isProxy]) {
                            v115.me.procInputs = new Proxy(v115.me.procInputs, {
                              apply(p18, p19, [v27, v28, v29, v30]) {
                                if (p19) {
                                  v115.inputs(v27);
                                }
                                return Reflect.apply(...arguments);
                              },
                              get(p20, p21) {
                                if (p21 === v115.isProxy) {
                                  return true;
                                } else {
                                  return Reflect.get(p20, p21);
                                }
                              }
                            });
                          }
                          v115.game.map.manager.objects.filter(p22 => {
                            return p22.penetrable;
                          }).map((p23, p24, p25) => {
                            p23.transparent = v115.settings.wallbangs;
                          });
                        }
                      }
                    });
                  },
                  get() {
                    return this._render;
                  }
                }
              });
            }
          },
          get() {
            return this._canvas;
          }
        },
        OBJLoader: {
          set(p26) {
            v115.three = this;
            this._value = p26;
          },
          get() {
            return this._value;
          }
        },
        skins: {
          set(p27) {
            this[vSymbol] = p27;
            if (this.localSkins == undefined || !this.localSkins.length) {
              this[vSymbol2] = Array.apply(null, Array(25000)).map((p28, p29) => {
                return {
                  ind: p29,
                  cnt: 1
                };
              });
            }
            return p27;
          },
          get() {
            if (v115.settings.skinHack && this.stats) {
              return this[vSymbol2];
            } else {
              return this[vSymbol];
            }
          }
        },
        useLooseClient: {
          enumerable: false,
          get() {
            return this._ulc;
          },
          set(p30) {
            v115.config = this;
            Object.defineProperty(this, "nameVisRate", {
              value: 0,
              writable: false,
              configurable: true
            });
            this._ulc = p30;
          }
        },
        trail: {
          enumerable: false,
          get() {
            return v115.settings.alwaysTrail || this._trail;
          },
          set(p31) {
            this._trail = p31;
          }
        },
        showTracers: {
          enumerable: false,
          get() {
            return v115.settings.alwaysTrail || this._showTracers;
          },
          set(p32) {
            this._showTracers = p32;
          }
        },
        shaderId: {
          enumerable: false,
          get() {
            if (this.src && this.src.startsWith("pubs/")) {
              if (v115.settings.animatedBillboards) {
                return 1;
              } else {
                return this.rshaderId;
              }
            } else {
              return this.rshaderId;
            }
          },
          set(p33) {
            this.rshaderId = p33;
          }
        },
        idleTimer: {
          enumerable: false,
          get() {
            if (v115.settings.antikick) {
              return 0;
            } else {
              return this._idleTimer;
            }
          },
          set(p34) {
            this._idleTimer = p34;
          }
        },
        kickTimer: {
          enumerable: false,
          get() {
            if (v115.settings.antikick) {
              return Infinity;
            } else {
              return this._kickTimer;
            }
          },
          set(p35) {
            this._kickTimer = p35;
          }
        },
        cnBSeen: {
          set(p36) {
            this.inView = p36;
          },
          get() {
            let v31 = !v115.isDefined(v115.me) || !v115.me.team || v115.me.team != this.team;
            return this.inView || v31 && v115.state.nameTags;
          }
        },
        canBSeen: {
          set(p37) {
            this.inView2 = p37;
          },
          get() {
            return this.inView2 || v115.settings.botNametags;
          }
        },
        events: {
          set(p38) {
            this._events = p38;
            if (this.ahNum !== 0) {
              return;
            }
            v115.wsSend = this.send.bind(this);
            v115.wsEvent = this._dispatchEvent.bind(this);
            v115.socket = this;
            this.send = new Proxy(this.send, {
              apply(p39, p40, [v32, v33]) {
                if (v32 === "en") {
                  v115.skins = {
                    main: v33[2][0],
                    secondary: v33[2][1],
                    hat: v33[3],
                    body: v33[4],
                    knife: v33[9],
                    dye: v33[14],
                    waist: v33[17]
                  };
                }
                return Reflect.apply(...arguments);
              }
            });
            this._dispatchEvent = new Proxy(this._dispatchEvent, {
              apply(p41, p42, [v34, v35]) {
                if (v115.settings.skinHack && v34 === "0") {
                  let v36 = v35[0];
                  let v37 = 38;
                  while (v36.length % v37 !== 0) {
                    v37++;
                  }
                  for (let v38 = 0; v38 < v36.length; v38 += v37) {
                    v36[v38 + 12] = [v115.skins.main, v115.skins.secondary];
                    v36[v38 + 13] = v115.skins.hat;
                    v36[v38 + 14] = v115.skins.body;
                    v36[v38 + 19] = v115.skins.knife;
                    v36[v38 + 24] = v115.skins.dye;
                    v36[v38 + 33] = v115.skins.waist;
                  }
                }
                return Reflect.apply(...arguments);
              }
            });
          },
          get() {
            return this._events;
          }
        },
        thirdPerson: {
          set(p43) {
            this._thirdPerson = p43;
          },
          get() {
            return this._thirdPerson || v115.settings.thirdPerson;
          }
        }
      });
    }
    createListeners() {
      this.loadSettings();
      this.waitFor(() => window.instructionsUpdate).then(p44 => {
        this.createObserver(p44, "style", p45 => {
          if (location.host == "krunker.io" && p45.textContent.includes("Connection Banned")) {
            localStorage.removeItem("krunker_token");
            alert("You Have Been Banned And Sign Out, You Will Now Be Redirected to Krunkers Proxy 'browserfps'");
            location.assign("https://browserfps.com/");
          } else if (this.settings.autoServer && this.arrayTest(p45, ["Kicked", "Banned", "Disconnected", "Error", "Game is full"], p46 => p45.innerHTML.includes(p46))) {
            location = document.location.origin;
          }
        });
      });
      this.waitFor(() => window.windows).then(p47 => {
        this.initGUI();
      });
      document.addEventListener("DOMContentLoaded", () => {
        this.customCSS();
        const v39 = ["#aContainer, #aHolder, #endAContainer, #aMerger, #onetrust-consent-sdk { display: none !important; }", "#chatList * { user-select: text; }"];
        new Array(...document.styleSheets).map(p48 => {
          if (p48.href) {
            let v40 = /http.*?krunker.io\/css\/(\w+.css).+/.exec(p48.href);
            if (v40 && v40[1]) {
              let v41 = v40[1];
              if (v41 && v41.includes("main_custom")) {
                v39.forEach((p49, p50, p51) => {
                  p48.insertRule(p49);
                });
              }
            }
          }
        });
      });
      window.addEventListener("mouseup", p52 => {
        if (p52.which === 2 && v115.settings.guiOnMMB) {
          p52.preventDefault();
          v115.showGUI();
        }
      });
      window.addEventListener("keyup", p53 => {
        if (this.state.pressedKeys.has(p53.code)) {
          this.state.pressedKeys.delete(p53.code);
        }
        if (document.activeElement.tagName !== "INPUT" && (!!window.endUI || !window.endUI.style.display) && v115.settings.keybinds) {
          switch (p53.code) {
            case "KeyY":
              this.state.bindAimbotOn = !this.state.bindAimbotOn;
              this.wsEvent("ch", [null, "Aimbot " + (this.state.bindAimbotOn ? "on" : "off"), 1]);
              break;
            case "KeyH":
              this.settings.esp = (this.settings.esp + 1) % 4;
              this.wsEvent("ch", [null, "ESP: " + ["disabled", "nametags", "box", "full"][this.settings.esp], 1]);
              break;
          }
        }
      });
      window.addEventListener("keydown", p54 => {
        if (p54.code == "F1") {
          p54.preventDefault();
          v115.showGUI();
        }
        if (document.activeElement.tagName == "INPUT" || !window.endUI && window.endUI.style.display) {
          return;
        }
        switch (p54.code) {
          case "NumpadSubtract":
            document.exitPointerLock();
            console.dirxml(this);
            break;
          default:
            if (!this.state.pressedKeys.has(p54.code)) {
              this.state.pressedKeys.add(p54.code);
            }
            break;
        }
      });
    }
    loadSettings() {
      let v42 = {};
      try {
        v42 = JSON.parse(window.localStorage.getItem("dogeware"));
      } catch (_0x5c721a) {
        let v43 = document.cookie.split(";");
        for (let v44 of v43) {
          v44 = v44.trim();
          if (v44.indexOf("dogeware=") == 0) {
            v42 = JSON.parse(decodeURIComponent(v44.substring("dogeware=".length, v44.length)));
            break;
          }
        }
      }
      for (let v45 in v42) {
        if (this.settings[v45] != undefined) {
          this.settings[v45] = v42[v45];
        }
      }
      this.saveSettings(true);
    }
    deleteSettings() {
      try {
        window.localStorage.removeItemonload("dogeware");
        location.reload();
      } catch (_0x21e7a4) {}
    }
    saveSettings(p55) {
      try {
        window.localStorage.setItem("dogeware", JSON.stringify(this.settings));
      } catch (_0xe28d70) {
        let v46 = new Date();
        v46.setTime(v46.getTime() + 31104000000);
        let v47 = "expires=" + v46.toGMTString();
        document.cookie = "dogeware=" + encodeURIComponent(JSON.stringify(this.settings)) + "; " + v47;
      }
      if (p55) {
        console.log("[Dogeware] Settings loaded：", this.settings);
      }
    }
    inputs(p56) {
      const v48 = {
        frame: 0,
        delta: 1,
        xdir: 2,
        ydir: 3,
        moveDir: 4,
        shoot: 5,
        scope: 6,
        jump: 7,
        reload: 8,
        crouch: 9,
        weaponScroll: 10,
        weaponSwap: 11,
        moveLock: 12
      };
      this.state.frame = p56[v48.frame];
      this.state.nameTags = [1, 2].some(p57 => p57 == this.settings.esp) || this.settings.forceNametagsOn;
      if (this.me) {
        if (this.settings.autoNuke && Object.keys(this.me.streaks).length) {
          this.wsSend("k", 0);
        }
        if (this.settings.bhop) {
          if (this.state.pressedKeys.has("Space") || this.settings.bhop % 2) {
            this.controls.keys[this.controls.binds.jump.val] ^= 1;
            if (this.controls.keys[this.controls.binds.jump.val]) {
              this.controls.didPressed[this.controls.binds.jump.val] = 1;
            }
            if (this.state.pressedKeys.has("Space") || this.settings.bhop == 3) {
              if (this.me.velocity.y < -0.03 && this.me.canSlide) {
                setTimeout(() => {
                  this.controls.keys[this.controls.binds.crouch.val] = 0;
                }, this.me.slideTimer || 325);
                this.controls.keys[this.controls.binds.crouch.val] = 1;
                this.controls.didPressed[this.controls.binds.crouch.val] = 1;
              }
            }
          }
        }
        if (this.settings.forceNametagsOn) {
          try {
            Object.defineProperty(this.game.config, "nameTags", {
              get() {
                if (v115.settings.forceNametagsOn) {
                  return false;
                } else {
                  return this.game._nametags;
                }
              },
              set(p58) {
                this.game._nametags = p58;
              }
            });
          } catch (_0x16e3f9) {}
        }
        if (this.settings.spinBot) {
          const v49 = 1;
          if (p56[v48.moveDir] !== -1) {
            p56[v48.moveDir] = (p56[v48.moveDir] + this.state.spinCounter - Math.round(p56[v48.ydir] / (Math.PI * 2000) * 7)) % 7;
          }
          p56[v48.ydir] = this.state.spinCounter / 7 * (Math.PI * 2000);
          if (p56[v48.frame] % v49 === 0) {
            this.state.spinCounter = (this.state.spinCounter + 1) % 7;
          }
        }
        if (this.settings.autoReload && this.me.ammos[this.me.weaponIndex] === 0) {
          p56[v48.reload] = 1;
        }
        if (this.settings.pitchHack) {
          switch (this.settings.pitchHack) {
            case 1:
              p56[v48.xdir] = -Math.PI * 500;
              break;
            case 2:
              p56[v48.xdir] = Math.PI * 500;
              break;
            case 3:
              p56[v48.xdir] = Math.sin(Date.now() / 50) * Math.PI * 500;
              break;
            case 4:
              p56[v48.xdir] = Math.sin(Date.now() / 250) * Math.PI * 500;
              break;
            case 5:
              p56[v48.xdir] = p56[v48.frame] % 2 ? Math.PI * 500 : -Math.PI * 500;
              break;
            case 6:
              p56[v48.xdir] = (Math.random() * Math.PI - Math.PI / 2) * 1000;
              break;
          }
        }
        const vF4 = () => (Math.random() * 2 - 1) * this.settings.aimNoise;
        this.game.players.list.forEach(p59 => {
          p59.pos = {
            x: p59.x,
            y: p59.y,
            z: p59.z
          };
          p59.npos = {
            x: p59.x + vF4(),
            y: p59.y + vF4(),
            z: p59.z + vF4()
          };
          p59.isTarget = false;
        });
        function f3(p60, p61) {
          if (p60?.name === p61) {
            return p60;
          }
          for (const v50 of p60.children) {
            const vF32 = f3(v50, p61);
            if (vF32) {
              return vF32;
            }
          }
          return null;
        }
        if (this.game.AI.ais) {
          this.game.AI.ais.forEach(p62 => {
            if (p62.mesh) {
              const vF33 = f3(p62.mesh, "Head");
              if (vF33) {
                const v51 = {
                  ...vF33.getWorldPosition()
                };
                v51.y -= 8;
                return p62.npos = p62.pos = v51;
              }
            }
            p62.npos = p62.pos = {
              x: p62.x,
              y: p62.y,
              z: p62.z
            };
          });
        }
        if (this.renderer && this.renderer.frustum && this.me.active) {
          this.controls.target = null;
          let v52 = this.game.players.list.filter(p63 => !p63.isYTMP && p63.hasOwnProperty("npos") && (!this.settings.frustumCheck || this.containsPoint(p63.npos)) && (this.me.team === null || p63.team !== this.me.team) && p63.health > 0 && p63.inView).sort((p64, p65) => this.getDistance(this.me.x, this.me.z, p64.npos.x, p64.npos.z) - this.getDistance(this.me.x, this.me.z, p65.npos.x, p65.npos.z));
          let v53 = false;
          if (this.game.AI.ais && this.settings.AImbot) {
            let v54 = this.game.AI.ais.filter(p66 => p66.mesh && p66.mesh.visible && p66.health && p66.pos && p66.inView2 && p66.team !== this.me.team).sort((p67, p68) => this.getDistance(this.me.x, this.me.z, p67.pos.x, p67.pos.z) - this.getDistance(this.me.x, this.me.z, p68.pos.x, p68.pos.z));
            v52.push(...v54);
          }
          let v55 = v52[0];
          if (this.settings.fovbox) {
            const v56 = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]);
            const v57 = innerWidth / v56;
            const v58 = innerHeight / v56;
            let v59 = false;
            for (let v60 = 0; v60 < v52.length; v60++) {
              const v61 = v52[v60];
              const v62 = this.world2Screen(new this.three.Vector3(v61.x, v61.y, v61.z), v57, v58, v61.height / 2);
              let v63 = [v57 / 3, v58 / 4, v57 * (1 / 3), v58 / 2];
              switch (this.settings.fovBoxSize) {
                case 2:
                  v63 = [v57 * 0.4, v58 / 3, v57 * 0.2, v58 / 3];
                  break;
                case 3:
                  v63 = [v57 * 0.45, v58 * 0.4, v57 * 0.1, v58 * 0.2];
                  break;
              }
              if (v62.x >= v63[0] && v62.x <= v63[0] + v63[2] && v62.y >= v63[1] && v62.y < v63[1] + v63[3]) {
                v55 = v52[v60];
                v59 = true;
                break;
              }
            }
            if (!v59) {
              v55 = void "kpal";
            }
          }
          const v64 = p56[v48.shoot];
          if (v55 && this.settings.aimbot && this.state.bindAimbotOn && (!this.settings.aimbotRange || this.getDistance3D(this.me.x, this.me.y, this.me.z, v55.x, v55.y, v55.z) < this.settings.aimbotRange) && (!this.settings.rangeCheck || this.getDistance3D(this.me.x, this.me.y, this.me.z, v55.x, v55.y, v55.z) <= this.me.weapon.range) && !this.me.reloadTimer) {
            if (this.settings.awtv) {
              p56[v48.scope] = 1;
            }
            v55.isTarget = this.settings.markTarget;
            const v65 = (this.getDir(this.me.z, this.me.x, v55.npos.z, v55.npos.x) || 0) * 1000;
            const v66 = v55.isAI ? ((this.getXDir(this.me.x, this.me.y, this.me.z, v55.npos.x, v55.npos.y, v55.npos.z) || 0) - this.me.recoilAnimY * 0.3) * 1000 : ((this.getXDir(this.me.x, this.me.y, this.me.z, v55.npos.x, v55.npos.y - v55.crouchVal * 3 + this.me.crouchVal * 3 + this.settings.aimOffset, v55.npos.z) || 0) - this.me.recoilAnimY * 0.3) * 1000;
            if (this.settings.forceUnsilent) {
              this.controls.target = {
                xD: v66 / 1000,
                yD: v65 / 1000
              };
              this.controls.update(400);
            }
            switch (this.settings.aimbot) {
              case 1:
              case 2:
              case 5:
              case 6:
              case 9:
              case 10:
                {
                  let v67 = [5, 6, 9].some(p69 => p69 == this.settings.aimbot);
                  if (this.settings.aimbot === 5 && p56[v48.scope] || this.settings.aimbot === 10) {
                    this.controls.target = {
                      xD: v66 / 1000,
                      yD: v65 / 1000
                    };
                    this.controls.update(400);
                  }
                  if ([2, 10].some(p70 => p70 == this.settings.aimbot) || this.settings.aimbot === 1 && this.me.weapon.id) {
                    if (!this.me.weapon.melee) {
                      p56[v48.scope] = 1;
                    }
                  }
                  if (this.me.didShoot) {
                    p56[v48.shoot] = 0;
                    this.state.quickscopeCanShoot = false;
                    setTimeout(() => {
                      this.state.quickscopeCanShoot = true;
                    }, this.me.weapon.rate * 0.85);
                  } else if (this.state.quickscopeCanShoot && (!v67 || p56[v48.scope])) {
                    if (!this.me.weapon.melee) {
                      p56[v48.scope] = 1;
                    }
                    if (!this.settings.superSilent && this.settings.aimbot !== 9) {
                      p56[v48.ydir] = v65;
                      p56[v48.xdir] = v66;
                    }
                    if (this.settings.aimbot !== 9 && (!this.me.aimVal || this.me.weapon.noAim || this.me.weapon.melee) || this.settings.aimbot === 9 && v64) {
                      p56[v48.ydir] = v65;
                      p56[v48.xdir] = v66;
                      p56[v48.shoot] = 1;
                    }
                  }
                }
                break;
              case 4:
              case 7:
              case 8:
              case 11:
                if (p56[v48.scope] || this.settings.aimbot === 11) {
                  this.controls.target = {
                    xD: v66 / 1000,
                    yD: v65 / 1000
                  };
                  this.controls.update({
                    4: 400,
                    7: 110,
                    8: 70,
                    11: 400
                  }[this.settings.aimbot]);
                  if ([4, 11].some(p71 => p71 == this.settings.aimbot)) {
                    p56[v48.xdir] = v66;
                    p56[v48.ydir] = v65;
                  }
                  if (this.me.didShoot) {
                    p56[v48.shoot] = 0;
                    this.state.quickscopeCanShoot = false;
                    setTimeout(() => {
                      this.state.quickscopeCanShoot = true;
                    }, this.me.weapon.rate * 0.85);
                  } else if (this.state.quickscopeCanShoot) {
                    p56[this.me.weapon.melee ? v48.shoot : v48.scope] = 1;
                  }
                } else {
                  this.controls.target = null;
                }
                break;
              case 12:
                {
                  if (!this.three || !this.renderer || !this.renderer.camera || !this.game || !this.game.players || !this.game.players.list.length || !p56[v48.scope] || this.me.aimVal) {
                    break;
                  }
                  if (!this.state.raycaster) {
                    this.state.raycaster = new this.three.Raycaster();
                    this.state.mid = new this.three.Vector2(0, 0);
                  }
                  const v68 = [];
                  for (let v69 = 0; v69 < this.game.players.list.length; v69++) {
                    let v70 = this.game.players.list[v69];
                    if (!v70 || !v70.objInstances || v70.isYTMP || this.me.team !== null && v70.team === this.me.team || !v70.inView) {
                      continue;
                    }
                    v68.push(v70.objInstances);
                  }
                  const v71 = this.state.raycaster;
                  v71.setFromCamera(this.state.mid, this.renderer.camera);
                  if (v71.intersectObjects(v68, true).length) {
                    p56[v48.shoot] = this.me.didShoot ? 0 : 1;
                  }
                }
                break;
            }
          } else {
            if (this.settings.uwtv) {
              p56[v48.scope] = 0;
            }
            this.state.spinFrame = 0;
          }
        }
        if (this.settings.alwaysAim) {
          p56[v48.scope] = 1;
        }
        if (this.settings.preventMeleeThrowing && this.me.weapon.melee) {
          p56[v48.scope] = 0;
        }
      }
      return p56;
    }
    render() {
      var v72 = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]);
      let v73 = innerWidth / v72;
      let v74 = innerHeight / v72;
      let vF5 = (p72, p73 = 0) => {
        p72.y += p73;
        p72.project(this.renderer.camera);
        p72.x = (p72.x + 1) / 2;
        p72.y = (-p72.y + 1) / 2;
        p72.x *= v73;
        p72.y *= v74;
        return p72;
      };
      let vF6 = (p74, p75, p76, p77, p78, p79) => {
        this.ctx.save();
        this.ctx.lineWidth = p78 + 2;
        this.ctx.beginPath();
        this.ctx.moveTo(p74, p75);
        this.ctx.lineTo(p76, p77);
        this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
        this.ctx.stroke();
        this.ctx.lineWidth = p78;
        this.ctx.strokeStyle = p79;
        this.ctx.stroke();
        this.ctx.restore();
      };
      let vF7 = (p80, p81, p82, p83, p84, p85, p86, p87) => {
        this.ctx.save();
        this.ctx.translate(~~p80, ~~p81);
        this.ctx.beginPath();
        if (p87) {
          this.ctx.fillStyle = p86;
        } else {
          this.ctx.strokeStyle = p86;
        }
        this.ctx.rect(p82, p83, p84, p85);
        if (p87) {
          this.ctx.fill();
        } else {
          this.ctx.stroke();
        }
        this.ctx.closePath();
        this.ctx.restore();
      };
      let vF8 = p88 => {
        for (let v75 = 0; v75 < p88.length; v75++) {
          p88[v75] = ~~this.ctx.measureText(p88[v75]).width;
        }
        return p88;
      };
      let vF9 = (p89, p90, p91, p92, p93) => {
        const v76 = this.ctx.createLinearGradient(p89, p90, p91, p92);
        for (let v77 = 0; v77 < p93.length; v77++) {
          v76.addColorStop(v77, p93[v77]);
        }
        return v76;
      };
      let vF10 = (p94, p95, p96, p97, p98) => {
        this.ctx.save();
        this.ctx.translate(~~p97, ~~p98);
        this.ctx.fillStyle = p96;
        this.ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
        this.ctx.font = p95;
        this.ctx.lineWidth = 1;
        this.ctx.strokeText(p94, 0, 0);
        this.ctx.fillText(p94, 0, 0);
        this.ctx.restore();
      };
      const v78 = 2;
      for (const v79 of this.game.players.list.filter(p99 => !p99.isYTMP && p99.active && (p99.pos = {
        x: p99.x,
        y: p99.y,
        z: p99.z
      }))) {
        const v80 = new this.three.Vector3(v79.pos.x, v79.pos.y, v79.pos.z);
        const vVF5 = vF5(v80.clone());
        const vVF52 = vF5(v80.clone(), v79.height);
        const v81 = ~~(vVF5.y - vVF52.y);
        const v82 = ~~(v81 * 0.6);
        const v83 = this.settings.espFontSize + "px GameFont";
        const v84 = this.me.team === null || v79.team !== this.me.team;
        if (!this.containsPoint(v79.pos)) {
          continue;
        }
        if (this.settings.tracers) {
          vF6(v73 / 2, v115.settings.tracers === 2 ? v74 / 2 : v74 - 1, vVF5.x, vVF5.y, 2, v79.team === null ? "#FF4444" : v79.team === this.me.team ? "#44AAFF" : "#FF4444");
        }
        const v85 = v79.objInstances;
        if (this.isDefined(v85)) {
          if (!v85.visible) {
            Object.defineProperty(v79.objInstances, "visible", {
              value: true,
              writable: false
            });
          } else {
            let v86 = this.settings.chams;
            if (v115.gaybow >= 360) {
              v115.gaybow = 0;
            } else {
              v115.gaybow++;
            }
            v85.traverse(p100 => {
              if (p100 && p100.type == "Mesh" && this.isDefined(p100.material)) {
                if (!p100.hasOwnProperty(this.hash)) {
                  p100[this.hash] = p100.material;
                } else if (p100.hasOwnProperty(this.hash)) {
                  Object.defineProperty(p100, "material", {
                    get() {
                      if (!v86 || !v84 && !v115.settings.teamChams) {
                        return this[v115.hash];
                      } else {
                        return new v115.three.MeshBasicMaterial({
                          color: new v115.three.Color(v115.settings.chamsCol == 12 ? "hsl(" + v115.gaybow + ",100%, 50%)" : Object.values(v115.colors)[v115.settings.chamsCol]),
                          depthTest: false,
                          transparent: true,
                          fog: false,
                          wireframe: v115.settings.wireframe
                        });
                      }
                    }
                  });
                }
              }
            });
          }
        }
        if (this.settings.esp > 1) {
          if (v79.isTarget) {
            this.ctx.save();
            const vVF8 = vF8(["TARGET"]);
            vF10("TARGET", v83, "#FFFFFF", vVF52.x - vVF8[0] / 2, vVF52.y - this.settings.espFontSize * 1.5);
            this.ctx.beginPath();
            this.ctx.translate(vVF52.x, vVF52.y + Math.abs(v81 / 2));
            this.ctx.arc(0, 0, Math.abs(v81 / 2) + 10, 0, Math.PI * 2);
            this.ctx.strokeStyle = "#FFFFFF";
            this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.restore();
          }
          if (this.settings.esp === 2) {
            this.ctx.save();
            this.ctx.strokeStyle = this.me.team === null || v79.team !== this.me.team ? "#FF4444" : "#44AAFF";
            this.ctx.strokeRect(vVF52.x - v82 / 2, vVF52.y, v82, v81);
            this.ctx.restore();
            continue;
          }
          vF7(vVF52.x - v82 / 2 - 7, ~~vVF52.y - 1, 0, 0, 4, v81 + 2, "#000000", false);
          vF7(vVF52.x - v82 / 2 - 7, ~~vVF52.y - 1, 0, 0, 4, v81 + 2, "#44FF44", true);
          vF7(vVF52.x - v82 / 2 - 7, ~~vVF52.y - 1, 0, 0, 4, ~~((v79.maxHealth - v79.health) / v79.maxHealth * (v81 + 2)), "#000000", true);
          this.ctx.save();
          this.ctx.lineWidth = 4;
          this.ctx.translate(~~(vVF52.x - v82 / 2), ~~vVF52.y);
          this.ctx.beginPath();
          this.ctx.rect(0, 0, v82, v81);
          this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
          this.ctx.stroke();
          this.ctx.lineWidth = 2;
          this.ctx.strokeStyle = v79.team === null ? "#FF4444" : this.me.team === v79.team ? "#44AAFF" : "#FF4444";
          this.ctx.stroke();
          this.ctx.closePath();
          this.ctx.restore();
          const v87 = ~~(this.getDistance3D(this.me.x, this.me.y, this.me.z, v79.pos.x, v79.pos.y, v79.pos.z) / 10);
          this.ctx.save();
          this.ctx.font = v83;
          const vVF82 = vF8(["[", v87, "m]", v79.level, "©", v79.name]);
          this.ctx.restore();
          const vVF9 = vF9(0, 0, vVF82[4] * 5, 0, ["rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0)"]);
          if (v79.level) {
            const vVF92 = vF9(0, 0, vVF82[4] * 2 + vVF82[3] + v78 * 3, 0, ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.25)"]);
            vF7(~~(vVF52.x - v82 / 2) - 12 - vVF82[4] * 2 - vVF82[3] - v78 * 3, ~~vVF52.y - v78, 0, 0, vVF82[4] * 2 + vVF82[3] + v78 * 3, vVF82[4] + v78 * 2, vVF92, true);
            vF10("" + v79.level, v83, "#FFFFFF", ~~(vVF52.x - v82 / 2) - 16 - vVF82[3], ~~vVF52.y + vVF82[4] * 1);
          }
          vF7(~~(vVF52.x + v82 / 2) + v78, ~~vVF52.y - v78, 0, 0, vVF82[4] * 5, vVF82[4] * 4 + v78 * 2, vVF9, true);
          vF10(v79.name, v83, v79.team === null ? "#FFCDB4" : this.me.team === v79.team ? "#B4E6FF" : "#FFCDB4", vVF52.x + v82 / 2 + 4, vVF52.y + vVF82[4] * 1);
          if (v79.clan) {
            vF10("[" + v79.clan + "]", v83, "#AAAAAA", vVF52.x + v82 / 2 + 8 + vVF82[5], vVF52.y + vVF82[4] * 1);
          }
          vF10(v79.health + " HP", v83, "#33FF33", vVF52.x + v82 / 2 + 4, vVF52.y + vVF82[4] * 2);
          vF10(v79.weapon.name, v83, "#DDDDDD", vVF52.x + v82 / 2 + 4, vVF52.y + vVF82[4] * 3);
          vF10("[", v83, "#AAAAAA", vVF52.x + v82 / 2 + 4, vVF52.y + vVF82[4] * 4);
          vF10("" + v87, v83, "#DDDDDD", vVF52.x + v82 / 2 + 4 + vVF82[0], vVF52.y + vVF82[4] * 4);
          vF10("m]", v83, "#AAAAAA", vVF52.x + v82 / 2 + 4 + vVF82[0] + vVF82[1], vVF52.y + vVF82[4] * 4);
        }
      }
      if (this.settings.fovbox && this.settings.drawFovbox) {
        let v88 = [v73 / 3, v74 / 4, v73 * (1 / 3), v74 / 2];
        switch (this.settings.fovBoxSize) {
          case 2:
            v88 = [v73 * 0.4, v74 / 3, v73 * 0.2, v74 / 3];
            break;
          case 3:
            v88 = [v73 * 0.45, v74 * 0.4, v73 * 0.1, v74 * 0.2];
            break;
        }
        this.ctx.save();
        this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(...v88);
        this.ctx.restore();
      }
    }
    customCSS() {
      if (!this.isDefined(this.CSSres) && this.settings.kpalCSS) {
        this.CSSres.rel = "stylesheet";
        this.CSSres.disabled = false;
        (document.head || document.getElementsByTagName("head")[0]).appendChild(this.CSSres);
      }
      if (this.settings.customCSS.startsWith("http") && this.settings.customCSS.endsWith(".css")) {
        this.CSSres.href = this.settings.customCSS;
      } else {
        this.CSSres = undefined;
      }
    }
    initGUI() {
      function f4(p101, p102, p103) {
        const v89 = document.querySelector("#menuItemContainer");
        const v90 = document.createElement("div");
        const v91 = document.createElement("div");
        const v92 = document.createElement("div");
        v90.className = "menuItem";
        v91.className = "menuItemIcon";
        v92.className = "menuItemTitle";
        v92.innerHTML = p101;
        v91.style.backgroundImage = "url(\"https://krunkercentral.com/wp-content/uploads/2022/10/kc-logo-icon.png\")";
        v91.style.width = "50px";
        v91.style.height = "50px";
        v91.style.backgroundSize = "contain";
        v90.append(v91, v92);
        v89.append(v90);
        v90.addEventListener("click", p103);
      }
      v115.GUI.setSetting = function (p104, p105) {
        switch (p104) {
          case "customCSS":
            v115.settings.customCSS = p105;
            v115.customCSS();
            break;
          default:
            console.log("SET ", p104, " ", p105);
            v115.settings[p104] = p105;
        }
        v115.saveSettings();
      };
      v115.GUI.settings = {
        aimbot: {
          val: this.settings.aimbot
        }
      };
      v115.GUI.windowObj = {
        header: "CH33T",
        html: "",
        gen() {
          return v115.getGuiHtml();
        }
      };
      window.windows = {
        ...window.windows,
        length: window.windows.length
      };
      Object.setPrototypeOf(window.windows, Array.prototype);
      v115.GUI.windowIndex = window.windows.length + 1;
      Object.defineProperty(window.windows, window.windows.length, {
        value: v115.GUI.windowObj
      });
      if (this.settings.showGuiButton) {
        f4("CH33TS", null, () => {
          if (!this.shownAds) {
            this.shownAds = true;
            window.open("https://krunkercentral.com/kc-ads");
          }
          window.showWindow(v115.GUI.windowIndex);
        });
      }
    }
    showGUI() {
      if (document.pointerLockElement || document.mozPointerLockElement) {
        document.exitPointerLock();
      }
      window.showWindow(this.GUI.windowIndex);
    }
    getGuiHtml() {
      const v93 = {
        checkbox: (p106, p107, p108 = "", p109 = false) => "<div class=\"settName\" title=\"" + p108 + "\">" + p106 + " " + (p109 ? "<span style=\"color: #eb5656\">*</span>" : "") + "<label class=\"switch\" style=\"margin-left:10px\"><input type=\"checkbox\" onclick='" + this.hash + ".GUI.setSetting(\"" + p107 + "\", this.checked)' " + (v115.settings[p107] ? "checked" : "") + "><span class=\"slider\"></span></label></div>",
        client_setting: (p110, p111, p112 = "", p113 = true) => "<div class=\"settName\" title=\"" + p112 + "\">" + p110 + " " + (p113 ? "<span style=\"color: #eb5656\">*</span>" : "") + "<label class=\"switch\" style=\"margin-left:10px\"><input type=\"checkbox\" onclick='doge_setsetting(\"" + p111 + "\", this.checked?\"1\":\"0\")' " + (v115.settings[p111] ? "checked" : "") + "><span class=\"slider\"></span></label></div>",
        select: (p114, p115, p116, p117 = "", p118 = false) => {
          let v94 = "<div class=\"settName\" title=\"" + p117 + "\">" + p114 + " " + (p118 ? "<span style=\"color: #eb5656\">*</span>" : "") + "<select onchange='" + this.hash + ".GUI.setSetting(\"" + p115 + "\", parseInt(this.value))' class=\"inputGrey2\">";
          for (const v95 in p116) {
            if (p116.hasOwnProperty(v95)) {
              v94 += "<option value=\"" + p116[v95] + "\" " + (v115.settings[p115] == p116[v95] ? "selected" : "") + ">" + v95 + "</option>,";
            }
          }
          return v94 + "</select></div>";
        },
        slider: (p119, p120, p121, p122, p123, p124 = "") => "<div class=\"settName\" title=\"" + p124 + "\">" + p119 + " <input type=\"number\" class=\"sliderVal\" id=\"slid_input_" + p120 + "\" min=\"" + p121 + "\" max=\"" + p122 + "\" value=\"" + v115.settings[p120] + "\" onkeypress=\"" + this.hash + ".GUI.setSetting('" + p120 + "', parseFloat(this.value.replace(',', '.')));document.querySelector('#slid_input_" + p120 + "').value=this.value\" style=\"margin-right:0;border-width:0\"><div class=\"slidecontainer\" style=\"\"><input type=\"range\" id=\"slid_" + p120 + "\" min=\"" + p121 + "\" max=\"" + p122 + "\" step=\"" + p123 + "\" value=\"" + v115.settings[p120] + "\" class=\"sliderM\" oninput=\"" + this.hash + ".GUI.setSetting('" + p120 + "', parseFloat(this.value));document.querySelector('#slid_input_" + p120 + "').value=this.value\"></div></div>",
        input: (p125, p126, p127, p128, p129) => "<div class=\"settName\" title=\"" + p128 + "\">" + p125 + " <input type=\"" + p127 + "\" name=\"" + p127 + "\" id=\"slid_utilities_" + p126 + "\"\n" + (p127 == "color" ? "style=\"float:right;margin-top:5px\"" : "class=\"inputGrey2\" placeholder=\"" + p129 + "\"") + "\nvalue=\"" + v115.settings[p126] + "\" oninput=\"" + this.hash + ".GUI.setSetting('" + p126 + "', this.value)\"/></div>",
        label: (p130, p131) => "<br><span style='color: black; font-size: 20px; margin: 20px 0'>" + p130 + "</span> <span style='color: dimgrey; font-size: 15px'>" + (p131 || "") + "</span><br>",
        nobrlabel: (p132, p133) => "<span style='color: black; font-size: 20px; margin: 20px 0'>" + p132 + "</span> <span style='color: dimgrey; font-size: 15px'>" + (p133 || "") + "</span><br>",
        br: () => "<br>",
        style: p134 => "<style>" + p134 + "</style>"
      };
      let v96 = "<div id=\"settHolder\">\n<img src=\"https://krunkercentral.com/wp-content/uploads/2022/10/kc-banner-new.png\" width=\"100%\">\n";
      Object.keys(v93).forEach(p135 => {
        const v97 = v93[p135];
        v93[p135] = function () {
          v96 += v97.apply(this, arguments);
          return "";
        };
      });
      const v98 = ["Weapon", "Wallhack", "Visual", "Tweaks", "Movement", "Other"];
      if (v115.isClient) {
        v98.push("Client");
      }
      v93.style(".cheatTabButton { color: black; background: #ddd; padding: 2px 7px; font-size: 15px; cursor: pointer; text-align: center; } .cheatTabActive { background: #bbb;}");
      this.GUI.changeTab = function (p136) {
        const v99 = p136.innerText;
        document.getElementById("cheat-tabbtn-" + v98[v115.state.activeTab]).classList.remove("cheatTabActive");
        document.getElementById("cheat-tab-" + v98[v115.state.activeTab]).style.display = "none";
        p136.classList.add("cheatTabActive");
        document.getElementById("cheat-tab-" + v99).style.display = "block";
        v115.state.activeTab = v98.indexOf(v99);
      };
      v96 += "<table style=\"width: 100%; margin-bottom: 30px\"><tr>";
      for (let v100 = 0; v100 < v98.length; v100++) {
        const v101 = v98[v100];
        v96 += "<td id=\"cheat-tabbtn-" + v101 + "\" onclick=\"" + this.hash + ".GUI.changeTab(this)\" class=\"cheatTabButton " + (v98[v115.state.activeTab] === v101 ? "cheatTabActive" : "") + "\">";
        v96 += v101;
        v96 += "</td>";
      }
      v96 += "</table></tr>";
      function f5(p137, p138) {
        v96 += "<div style=\"display: " + (v115.state.activeTab === p137 ? "block" : "none") + "\" class=\"cheat-tab\" id=\"cheat-tab-" + v98[p137] + "\">";
        p138();
        v96 += "</div>";
      }
      f5(0, () => {
        v93.select("Aimbot [Y]", "aimbot", {
          None: 0,
          "Quickscope / Auto pick": 1,
          "Silent aimbot": 2,
          "Aim assist": 4,
          "Easy aim assist": 11,
          "SP Trigger bot": 12,
          "Silent on aim": 6,
          Smooth: 7,
          Unsilent: 10,
          "Unsilent on aim": 5,
          "Aim correction": 9
        });
        v93.select("Spin aimbot speed", "spinAimFrames", {
          "1": 30,
          "2": 20,
          "3": 15,
          "4": 10,
          "5": 5
        });
        v93.slider("Aim range", "aimbotRange", 0, 1000, 10, "Set above 0 to make the aimbot pick enemies only at the selected range");
        v93.slider("Aim offset", "aimOffset", -4, 1, 0.1, "The lower it is, the lower the aimbot will shoot (0 - head, -4 - body)");
        v93.slider("Aim noise", "aimNoise", 0, 2, 0.005, "The higher it is, the lower is the aimbot accuracy");
        v93.checkbox("Supersilent aim", "superSilent", "Only works with quickscope and silent aim, makes it almost invisible that you're looking at somebody when you're shooting at him");
        v93.checkbox("Aim at bots", "AImbot", "Makes the aimbot shoot at NPCs");
        v93.checkbox("FOV check", "frustumCheck", "Makes you only shoot at enemies that are in your field of view. Prevents 180 flicks");
        v93.checkbox("FOV box", "fovbox", "Creates a box in which enemies can be targetted, enable with FOV check");
        v93.select("FOV box size", "fovBoxSize", {
          Big: 1,
          Medium: 2,
          Small: 3
        });
        v93.checkbox("Wallbangs", "wallbangs", "Makes the aimbot shoot enemies behind walls");
        v93.checkbox("Aimbot range check", "rangeCheck", "Checks if the enemy is in range of your weapon before shooting it, disable for rocket launcher");
        v93.checkbox("Auto reload", "autoReload", "Automatically reloads your weapon when it's out of ammo");
        v93.checkbox("Prevent melee throwing", "preventMeleeThrowing", "Prevents you from throwing your knife");
      });
      f5(1, () => {
        v93.select("ESP [H]", "esp", {
          None: 0,
          Nametags: 1,
          "Box ESP": 2,
          "Full ESP": 3
        });
        v93.select("ESP Font Size", "espFontSize", {
          "30px": 30,
          "25px": 25,
          "20px": 20,
          "15px": 15,
          "10px": 10,
          "5px": 5
        });
        v93.select("Tracers", "tracers", {
          None: 0,
          Bottom: 1,
          Middle: 2
        }, "Draws lines to players");
        v93.checkbox("Bot nametags", "botNametags", "Always show nametags for bots such as zombies.");
        v93.checkbox("Mark aimbot target", "markTarget", "Shows who is the aimbot targetting at the time, useful for aim assist/aim correction");
        v93.checkbox("Draw FOV box", "drawFovbox", "Draws the FOV box from aimbot settings");
        v93.checkbox("Chams", "chams");
        v93.select("Chams colour", "chamsCol", {
          White: 0,
          Black: 1,
          Purple: 2,
          Pink: 3,
          Blue: 4,
          DarkBlue: 5,
          Aqua: 6,
          Green: 7,
          Lime: 8,
          Orange: 9,
          Yellow: 10,
          Red: 11,
          Gaybow: 12
        });
        v93.checkbox("Friendly chams", "teamChams", "Show Chams for friendly players");
        v93.checkbox("Wireframe", "wireframe");
        v93.slider("RGB interval", "chamsInterval", 50, 1000, 50, "How fast will the RGB chams change colour");
      });
      f5(2, () => {
        v93.checkbox("Third person mode", "thirdPerson");
        v93.checkbox("Skin hack", "skinHack", "Makes you able to use any skin in game, only shows on your side");
        v93.checkbox("Billboard shaders", "animatedBillboards", "Disable if you get fps drops");
        v93.checkbox("Any weapon trail", "alwaysTrail");
        v93.slider("Weapon Zoom", "weaponZoom", 0, 20, 0.1, "Weapon Zoom Multiplier Adjust");
      });
      f5(3, () => {
        v93.checkbox("Always aim", "alwaysAim", "Makes you slower and jump lower, but the aimbot can start shooting at enemies  faster. Only use if ur good at bhopping");
        v93.checkbox("Aim when target visible", "awtv");
        v93.checkbox("Unaim when no target visible", "uwtv");
        v93.checkbox("Force unsilent", "forceUnsilent");
      });
      f5(4, () => {
        v93.select("Auto bhop", "bhop", {
          None: 0,
          "Auto Jump": 1,
          "Key Jump": 2,
          "Auto Slide": 3,
          "Key Slide": 4
        });
        v93.label("Only use with silent aim");
        v93.select("Pitch hax", "pitchHack", {
          Disabled: 0,
          Downward: 1,
          Upward: 2,
          "sin(time)": 3,
          "sin(time/5)": 4,
          double: 5,
          random: 6
        }, "Only use with aimbot on");
        v93.checkbox("Spin bot", "spinBot");
      });
      f5(5, () => {
        v93.checkbox("Show GUI button", "showGuiButton", "Disable if you don't want the dog under settings to be visible");
        v93.checkbox("GUI on middle mouse button", "guiOnMMB", "Makes it possible to open this menu by clicking the mouse wheel");
        v93.checkbox("Keybinds", "keybinds", "Turn keybinds on/off, Aimbot - Y, ESP - H");
        v93.checkbox("No inactivity kick", "antikick", "Disables the 'Kicked for inactivity' message (client side, but works)");
        v93.checkbox("Auto nuke", "autoNuke", "Automatically nukes when you are able to");
        v93.checkbox("Force nametags on", "fgno", "Use in custom games with disabled nametags");
        v93.input("Custom CSS", "customCSS", "url", "", "URL to CSS file");
      });
      if (v115.isClient) {
        f5(6, () => {
          v93.nobrlabel("Restart is required after changing any of these settings");
          v93.br();
          v93.client_setting("Uncap FPS", "uncap_fps", "Disables V-Sync");
          v93.client_setting("Adblock", "adblock", "Disables ads");
        });
      }
      v96 += "</div>";
      return v96;
    }
    getDistance(p139, p140, p141, p142) {
      return Math.sqrt((p141 -= p139) * p141 + (p142 -= p140) * p142);
    }
    getDistance3D(p143, p144, p145, p146, p147, p148) {
      let v102 = p143 - p146;
      let v103 = p144 - p147;
      let v104 = p145 - p148;
      return Math.sqrt(v102 * v102 + v103 * v103 + v104 * v104);
    }
    getXDir(p149, p150, p151, p152, p153, p154) {
      let v105 = Math.abs(p150 - p153);
      let v106 = this.getDistance3D(p149, p150, p151, p152, p153, p154);
      return Math.asin(v105 / v106) * (p150 > p153 ? -1 : 1);
    }
    getDir(p155, p156, p157, p158) {
      return Math.atan2(p156 - p158, p155 - p157);
    }
    getAngleDist(p159, p160) {
      return Math.atan2(Math.sin(p160 - p159), Math.cos(p159 - p160));
    }
    containsPoint(p161) {
      let v107 = this.renderer.frustum.planes;
      for (let v108 = 0; v108 < 6; v108++) {
        if (v107[v108].distanceToPoint(p161) < 0) {
          return false;
        }
      }
      return true;
    }
    world2Screen(p162, p163, p164, p165 = 0) {
      p162.y += p165;
      p162.project(this.renderer.camera);
      p162.x = (p162.x + 1) / 2;
      p162.y = (-p162.y + 1) / 2;
      p162.x *= p163;
      p162.y *= p164;
      return p162;
    }
    isType(p166, p167) {
      return typeof p166 === p167;
    }
    isDefined(p168) {
      return !this.isType(p168, "undefined") && p168 !== null;
    }
    arrayTest(p169, p170, p171) {
      return p170.some(p172 => p171(p172));
    }
    createElement(p173, p174, p175) {
      let v109 = document.createElement(p173);
      if (p175) {
        v109.id = p175;
      }
      v109.innerHTML = p174;
      return v109;
    }
    createObserver(p176, p177, p178, p179 = true) {
      return new MutationObserver((p180, p181) => {
        if (p177 == "src" || p179 && p180[0].target.style.display == "block" || !p179) {
          p178(p180[0].target);
        }
      }).observe(p176, p177 == "childList" ? {
        childList: true
      } : {
        attributes: true,
        attributeFilter: [p177]
      });
    }
    genHash(p182) {
      return [...Array(p182)].map(p183 => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[~~(Math.random() * 52)]).join("");
    }
    saveAs(p184, p185) {
      let v110 = new Blob([p185], {
        type: "text/plain"
      });
      let v111 = window.document.createElement("a");
      v111.href = window.URL.createObjectURL(v110);
      v111.download = p184;
      window.document.body.appendChild(v111);
      v111.click();
      window.document.body.removeChild(v111);
    }
    async store(p186) {
      const v112 = "dogeware";
      switch (p186) {
        case "get":
          return GM.getValue(v112).then(p187 => this.isDefined(p187) ? JSON.parse(p187) : this.settings);
        case "set":
          return GM.setValue(v112, JSON.stringify(this.settings));
        case "reset":
          return GM.deleteValue(v112);
      }
    }
    async waitFor(p188, p189 = Infinity, p190 = null) {
      let vF11 = p191 => new Promise(p192 => setTimeout(p192, p191));
      return new Promise(async (p193, p194) => {
        if (typeof p189 != "number") {
          p194("Timeout argument not a number in waitFor(selector, timeout_ms)");
        }
        let v113;
        let v114 = 100;
        while (v113 === undefined || v113 === false || v113 === null || v113.length === 0) {
          if (p190 && p190 instanceof Function) {
            p190();
          }
          ;
          if (p189 % 10000 < v114) {
            console.log("waiting for: ", p188);
          }
          if ((p189 -= v114) < 0) {
            console.log("Timeout : ", p188);
            p193(false);
            return;
          }
          await vF11(v114);
          v113 = typeof p188 === "string" ? Function(p188)() : p188();
        }
        console.log("Passed : ", p188);
        p193(v113);
      });
    }
  }
  ;
  const v115 = new C();
  for (let v116 = 0; v116 < 5; v116++) {
    console.log(v116 % 2 ? "" : " ");
  }
  console.log("DEBUG VERSION");
  for (let v117 = 0; v117 < 5; v117++) {
    console.log(v117 % 2 ? "" : " ");
  }
  window.doge = v115;
}
let v118;
const v119 = new Promise(p195 => v118 = p195);
const v120 = document.createElement("iframe");
v120.src = location.href;
v120.style.display = "none";
document.documentElement.append(v120);
const v121 = v120.contentWindow.fetch;
Object.defineProperty(v120.contentWindow, "fetch", {
  get() {
    if (v120.contentWindow?.windows?.length > 0) {
      return function (p196) {
        if (p196.includes("/seek-game")) {
          v120.remove();
          v118(p196);
          return;
        }
        return v121.apply(this, arguments);
      };
    }
    return v121;
  }
});
const v122 = window.fetch;
window.fetch = async function (p197, p198) {
  if (typeof p197 === "string" && p197.includes("/seek-game")) {
    p197 = await v119;
  }
  return v122.apply(this, arguments);
};
function f6(p199) {
  var v124 = new XMLHttpRequest();
  v124.open("GET", p199, false);
  v124.send();
  if (v124.status === 200) {
    return v124.response;
  }
}
const v125 = new MutationObserver(function (p200) {
  p200.forEach(function (p201) {
    if (p201.addedNodes) {
      for (var v126 = 0; v126 < p201.addedNodes.length; v126++) {
        const v127 = p201.addedNodes[v126];
        if (v127.tagName === "SCRIPT") {
          if (v127.innerHTML.includes("@license Krunker.io")) {
            v127.remove();
            const vF62 = f6(v20 + "/game_1_4.js");
            Function(v26 + "();\n\n" + vF62)();
          }
        }
      }
    }
  });
});
v125.observe(document, {
  childList: true,
  subtree: true
});
