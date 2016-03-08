(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)
                    return a(o, !0);
                if (i)
                    return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
        s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        /**
         * @module     Application
         * @desc       The application module defines our application
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var _utilitiesBreakpointChange = require('utilities/breakpointChange');

        var _utilitiesBreakpointChange2 = _interopRequireDefault(_utilitiesBreakpointChange);

        var _utilitiesMobileDetection = require('utilities/mobileDetection');

        var _utilitiesMobileDetection2 = _interopRequireDefault(_utilitiesMobileDetection);

        var _widgetsMenuToggle = require('widgets/MenuToggle');

        var _widgetsMenuToggle2 = _interopRequireDefault(_widgetsMenuToggle);

        var _widgetsModalWindow = require('widgets/ModalWindow');

        var _widgetsModalWindow2 = _interopRequireDefault(_widgetsModalWindow);

        var _widgetsOoyalaVideo = require('widgets/OoyalaVideo');

        var _widgetsOoyalaVideo2 = _interopRequireDefault(_widgetsOoyalaVideo);

        var _viewsHomeView = require('views/HomeView');

        var _viewsHomeView2 = _interopRequireDefault(_viewsHomeView);

        var _viewsConquestView = require('views/ConquestView');

        var _viewsConquestView2 = _interopRequireDefault(_viewsConquestView);

        var _viewsBirthrightView = require('views/BirthrightView');

        var _viewsBirthrightView2 = _interopRequireDefault(_viewsBirthrightView);

        var _viewsCharactersView = require('views/CharactersView');

        var _viewsCharactersView2 = _interopRequireDefault(_viewsCharactersView);

        var _viewsGameplayView = require('views/GameplayView');

        var _viewsGameplayView2 = _interopRequireDefault(_viewsGameplayView);

        var _viewsDlcView = require('views/DlcView');

        var _viewsDlcView2 = _interopRequireDefault(_viewsDlcView);

        var _viewsBuyView = require('views/BuyView');

        var _viewsBuyView2 = _interopRequireDefault(_viewsBuyView);

        var _viewsQuizView = require('views/QuizView');

        var _viewsQuizView2 = _interopRequireDefault(_viewsQuizView);

        var Application = {

            /* PRIVATE PROPERTIES */

            $window: null,
            $document: null,
            $html: null,
            $body: null,

            /* PUBLIC METHODS */

            /**
              * Initializes the application
              */
            initialize: function initialize() {
                var self = this;

                this.$window = $(window);
                this.$document = $(document);
                this.$html = $('html');
                this.$body = $('body');

                this.pageId = this.$body.attr('id');

                if (_configConstants2['default'].isIE9) {
                    this.$html.addClass('ie9');
                }

                if (_configConstants2['default'].isIE10) {
                    this.$html.addClass('ie10');
                }

                if (_configConstants2['default'].isIE11) {
                    this.$html.addClass('ie11');
                }

                if (_configConstants2['default'].isWiiU) {
                    this.$html.addClass('wiiu');
                }

                if (_configConstants2['default'].isN3DS) {
                    this.$html.addClass('n3ds');
                }

                // Get/Set breakpoints and do some browser sniffing
                this._checkBrowser();
                (0, _utilitiesBreakpointChange2['default'])();

                this._addEventListeners();

                // Initialize widgets
                new _widgetsMenuToggle2['default']($('#menuToggle'), $('#navMenu'));
                this._initOoyalaVideoModals();
                this._initHtml5VideoModals();

                // Gameplay page will handle jump-scroll via the sidenav
                if (this.pageId !== 'page-gameplay') {
                    this._initPageJumpScroll();
                }

                // Initialize specific page views
                this._initViews();
            },

            /**
              * Initialize specific page view
              */
            _initViews: function _initViews() {
                switch (this.pageId) {
                case 'page-home':
                    _viewsHomeView2['default'].initialize();
                    break;
                case 'page-conquest':
                    _viewsConquestView2['default'].initialize();
                    break;
                case 'page-birthright':
                    _viewsBirthrightView2['default'].initialize();
                    break;
                case 'page-characters':
                    _viewsCharactersView2['default'].initialize();
                    break;
                case 'page-gameplay':
                    _viewsGameplayView2['default'].initialize();
                    break;
                case 'page-dlc':
                    _viewsDlcView2['default'].initialize();
                    break;
                case 'page-buy':
                    _viewsBuyView2['default'].initialize();
                    break;
                case 'page-quiz':
                    _viewsQuizView2['default'].initialize();
                    break;
                }
            },

            /**
              * Jump-Scroll page if hash ID
              */
            _initPageJumpScroll: function _initPageJumpScroll() {
                var self = this;
                var urlHash = window.location.hash.replace('#/', '').replace('#', '') || null;
                var $target = urlHash ? $('#' + urlHash) : null;
                if ($target && $target.length) {
                    this.jumpScrollPage($target);
                }

                $('.jump-scroll-link').on('click', function (event) {
                    event.preventDefault();
                    var $trigger = $(event.currentTarget);
                    var id = $trigger.attr('href').replace('#/', '').replace('#', '') || null;
                    var $el = id ? $('#' + id) : null;
                    if ($el && $el.length) {
                        self.jumpScrollPage($el);
                    }
                });
            },

            jumpScrollPage: function jumpScrollPage($target) {
                var topOffset = (_configConstants2['default'].isMobileView ? 50 : 36) + 68; //Nintendo header height + site header height
                TweenMax.to(window, 0.5, {
                    scrollTo: {
                        y: $target.offset().top - topOffset,
                        autoKill: false
                    },
                    ease: 'Strong.easeOut'
                });
            },

            /**
              * General init of Ooyala video modals
              */
            _initOoyalaVideoModals: function _initOoyalaVideoModals() {
                var self = this;
                var classStr = '.ooyala-modal-video';
                var $elVideoCollection = $(classStr);
                var videoModal;
                var curVideoID, curPosterImg, loopVideoBool, noAudioBool;

                if ($elVideoCollection.length) {
                    //initialize the buttons
                    $elVideoCollection.on('click', function (event) {
                        event.preventDefault();
                        var $trigger = $(event.currentTarget);
                        curVideoID = $trigger.data('ooyala-video-id');
                        curPosterImg = $trigger.data('posterimg');
                        loopVideoBool = $trigger.data('loop');
                        noAudioBool = $trigger.data('no-audio');
                        if (loopVideoBool !== true) {
                            loopVideoBool = false;
                        }
                        if (noAudioBool !== true) {
                            noAudioBool = false;
                        }
                    });

                    //set up the modal
                    videoModal = new _widgetsModalWindow2['default'](classStr, {
                        strClassName: 'modal-video',
                        strTargetSelector: '#media-modal',
                        onShow: function onShow($obj) {
                            var videoID = curVideoID;
                            var posterImg = curPosterImg;
                            //trigger event on body to turn off video
                            if (!noAudioBool) {
                                self.$document.trigger(_configEvents2['default'].videoEvent.PLAYING);
                            }
                            _widgetsOoyalaVideo2['default'].embedOoyalaVideo({
                                target: '#media-container',
                                embedCode: videoID,
                                autoplay: true,
                                loop: loopVideoBool
                            });
                        },
                        onHide: function onHide($obj) {
                            $obj.elModal.find('object').remove();
                            if (!noAudioBool) {
                                self.$document.trigger(_configEvents2['default'].videoEvent.PAUSED);
                            }
                        }
                    });
                }
            },

            /**
              * General init of HTML5 video modals
              */
            _initHtml5VideoModals: function _initHtml5VideoModals() {
                // Modal trigger's class
                var triggerClass = '.html5-modal-video';

                // The collection of triggers
                var $triggers = $(triggerClass);

                // Source path of the video
                var videoSource;

                // Properties of video element
                var autoplay, controls, muted, loop;

                if ($triggers.length) {
                    // On trigger's click
                    $triggers.on('click', function (event) {
                        event.preventDefault();
                        var $trigger = $(event.currentTarget);
                        // Get the video source from element's data-video-src parameter
                        videoSource = $trigger.data('video-src');
                        // Get the video properties
                        autoplay = $trigger.data('autoplay');
                        controls = $trigger.data('controls');
                        muted = $trigger.data('muted');
                        loop = $trigger.data('loop');
                    });

                    // Open the modal with HTML5 video player
                    new _widgetsModalWindow2['default'](triggerClass, {
                        strClassName: 'modal-video',
                        strTargetSelector: '#media-modal',
                        onShow: function onShow() {
                            var videoCode = '<video ';

                            // Should autoplay?
                            if (autoplay) {
                                videoCode += 'autoplay ';
                            }

                            // Should have controls?
                            if (controls) {
                                videoCode += 'controls ';
                            }

                            // Should be muted?
                            if (muted) {
                                videoCode += 'muted ';
                            }

                            // Should loop?
                            if (loop) {
                                videoCode += 'loop ';
                            }

                            videoCode += 'src="' + videoSource + '" type="video/mp4"></video>';
                            $('#media-container').html(videoCode);
                        },
                        onHide: function onHide() {
                            $('#media-container').html('');
                        }
                    });
                }
            },

            /**
              * Mobile device detection
              */
            _checkBrowser: function _checkBrowser() {
                _configConstants2['default'].isMobileDevice = (0, _utilitiesMobileDetection2['default'])();
            },

            /**
              * Animate the preload icon out of view
              */
            _transitionPreloadOut: function _transitionPreloadOut() {
                var self = this;

                TweenMax.to(this.$preloadIcon, 0.3, {
                    css: {
                        top: '40%',
                        rotation: 10
                    },
                    ease: Cubic.easeOut,
                    onComplete: function onComplete() {
                        TweenMax.to(self.$preloadIcon, 0.3, {
                            css: {
                                opacity: 0,
                                top: '70%',
                                rotation: 40
                            },
                            ease: Cubic.easeIn,
                            onComplete: function onComplete() {
                                self.$preloadIcon.css({
                                    display: 'none' 
                                });
                                self._startApp();
                            }
                        });
                    }
                });
            },

            /* EVENT HANDLERS */

            _addEventListeners: function _addEventListeners() {
                // this.$window.on(Events.BREAKPOINT_CHANGE, $.proxy(this._onBreakpointChange, this));
            },

            _onBreakpointChange: function _onBreakpointChange(params) {
                // console.log('onBreakpointChange', Constants.currentBreakpoint);
            }

        };

        window.Application = Application;

        exports['default'] = Application;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3,
        "utilities/breakpointChange": 7,
        "utilities/mobileDetection": 8,
        "views/BirthrightView": 9,
        "views/BuyView": 10,
        "views/CharactersView": 11,
        "views/ConquestView": 12,
        "views/DlcView": 13,
        "views/GameplayView": 14,
        "views/HomeView": 15,
        "views/QuizView": 16,
        "widgets/MenuToggle": 21,
        "widgets/ModalWindow": 22,
        "widgets/OoyalaVideo": 23
    }
    ],
    2: [function(require, module, exports) {
        /**
         * @module     Constants
         * @desc       Defines application constants
         * @copyright  Copyright (c) 2015 Nintendo
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var Constants = {

            /**
              * Check for IE9
              * @type {Boolean}
              */
            isIE9: navigator.userAgent.indexOf('MSIE 9') !== - 1,

            /**
              * Check for WiiU
              * @type {Boolean}
              */
            isWiiU: /WiiU/i.test(navigator.userAgent),

            /**
              * Check for 3DS
              * @type {Boolean}
              */
            isN3DS: navigator.platform.indexOf('Nintendo 3DS') !== - 1,

            /**
              * Current breakpoint name (mobile, tablet, desktop)
              * @type {String}
              */
            currentBreakpoint: null,

            /**
              * Current breakpoint as a boolean
              * @type {Boolean}
              */
            isMobileView: null,
            isTabletView: null,
            isDesktopView: null,

            /**
              * Breakpoint name based on z-index
              * @type {Object}
              */
            breakpoints: {
                1: 'mobile',
                2: 'tablet',
                3: 'desktop'
            },

            /**
              * Mobile device detection from mobileDetection
              * This gets set on Application init
              * @type {Boolean}
              */
            isMobileDevice: null
        };

        exports['default'] = Constants;
        module.exports = exports['default'];

    }, {}
    ],
    3: [function(require, module, exports) {
        /**
         * @module     Events
         * @desc       Defines global application events
         * @copyright  Copyright (c) 2015 Nintendo
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var Events = {

            // Global events
            BREAKPOINT_CHANGE: 'breakpointChange',

            // Video Events
            videoEvent: {
                PLAYING: 'playing',
                PAUSED: 'paused',
                BUFFERING: 'buffering'
            }

        };

        exports['default'] = Events;
        module.exports = exports['default'];

    }, {}
    ],
    4: [function(require, module, exports) {
        /**
         * @module     Analytics
         * @desc       Controller for tracking analytics for various analytics tools
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var Analytics = {

            // Pointroll SS IDs for each page
            pointrollIDs: {
                'home': '17A6C344-C222-4A2C-A6A8-86F41D0EB1FA',
                'conquest': '2E91695C-FC87-4DA5-B6DC-0542D405EF78',
                'birthright': '365C58B5-0846-4ED9-BC84-041EF6DA11B5',
                'characters': '0A0FA4A0-F417-4B92-923B-160BEB245448',
                'gameplay': '427159AF-259C-41F7-BB7A-499BBB57EB1E',
                'dlc': 'F408762A-1517-4781-AD0E-8B79F22FFEE6',
                'buy': 'B9F66268-A487-42D7-87E1-BA24E0DE313F'
            },

            initialize: function initialize() {
                this.$body = $('body');
                this._setGlobals();
                this._trackEntryPage();
                this._attachEvents();
            },

            _setGlobals: function _setGlobals() {
                this.currentPage = null;
                this.country = 'us';
                this.language = 'en';
                this.usAcct = 'ncomfireemblemfates';
                this.caAcct = 'ncomfireemblemfatesfr';
                this.mxAcct = 'ncomfireemblemfatessp';
                this.game = 'Fire Emblem Fates';
                this.pageStr = 'Fire Emblem Fates';
                this.siteType = 'microsite';
                this.gameCategory = 'Strategy, Role-Playing';
                this.publisher = 'nintendo';
                this.platform = '3ds';
                this.gameId = 'MAeWjCwPKZ7CbdVSb16-CWPSR5cThPbc';
                this.contentType = 'game';
                this.root = '/';
                this.URI = window.location.pathname.toString();
                this.path = this.URI.replace(/^\/((es|fr)\/)?/i, '/');
                Omniture.default_twitter_copy = '';
            },

            _trackEntryPage: function _trackEntryPage() {
                var page;

                if (this.path.match(/^\/$/) || this.path.match(/^\/(index|default)/i)) {
                    page = 'home';
                } else {
                    page = this.path.replace(/^\//, '').replace(/\/$/, '').replace(/\//i, ':').replace(/\-|_/, ' ');
                }

                page = page.replace("/index.html", "");

                this.omniturePageTracking(page);

                if (page in this.pointrollIDs) {
                    this.pointrollTracking(this.pointrollIDs[page]);
                }
            },

            _attachEvents: function _attachEvents() {

                // Link Tracking
                this.$body.on('click', 'a.tracking-link', $.proxy(this._onTrackingLinkClick, this));

                // Buy Link Tracking
                this.$body.on('click', 'a.tracking-buy-link', $.proxy(this._onTrackingBuyLinkClick, this));

                // Retailer Link Tracking
                this.$body.on('click', 'a.tracking-retailer-link', $.proxy(this._onTrackingRetailerLinkClick, this));

                // Character Link Tracking
                this.$body.on('click', 'a.tracking-character-link', $.proxy(this._onTrackingCharacterLinkClick, this));

                // Quiz Link Tracking
                this.$body.on('click', 'a.tracking-quiz-link', $.proxy(this._onTrackingQuizLinkClick, this));

                // Quiz Share Link Tracking
                this.$body.on('click', 'a.tracking-quiz-share-link', $.proxy(this._onTrackingQuizShareLinkClick, this));

                // Exit Links
                this.$body.on('click', 'a.tracking-exit-link', $.proxy(this._onTrackingExitLinkClick, this));

                // Custom Link Tracking
                $('a.map-location.tracking-link').on('mouseenter', $.proxy(this._onTrackingLinkClick, this));

                // Pointroll Action Tag Tracking
                this.$body.on('click', 'a.pointroll-actiontag', $.proxy(this._onPointrollActionTagClick, this));
                // Pointroll Action Tag Link Tracking
                this.$body.on('click', 'a.pointroll-actiontag-link', $.proxy(this._onPointrollActionTagLinkClick, this));
            },

            _onTrackingLinkClick: function _onTrackingLinkClick(event) {
                // event.preventDefault();
                var value = $(event.currentTarget).data('tracking-value');
                Omniture.trackLink(39, value, 53, this.game);
                Omniture.clear();
                // console.log('_onTrackingLinkClick', value);
            },

            _onTrackingBuyLinkClick: function _onTrackingBuyLinkClick(event) {
                // event.preventDefault();
                Omniture.trackLink(12, this.game, 14, this.game);
                Omniture.clear();
                // console.log('_onTrackingBuyLinkClick');
            },

            _onTrackingRetailerLinkClick: function _onTrackingRetailerLinkClick(event) {
                // event.preventDefault();
                var value = $(event.currentTarget).data('tracking-value');
                Omniture.trackLink(24, value, 35, this.game);
                Omniture.clear();
                // console.log('_onTrackingRetailerLinkClick', value);
            },

            _onTrackingCharacterLinkClick: function _onTrackingCharacterLinkClick(event) {
                // event.preventDefault();
                var value = $(event.currentTarget).data('tracking-value');
                Omniture.trackLink(8, value, 11, this.game);
                Omniture.clear();
                // console.log('_onTrackingCharacterLinkClick', value);
            },

            _onTrackingQuizLinkClick: function _onTrackingQuizLinkClick(event) {
                // event.preventDefault();
                var value = $(event.currentTarget).data('tracking-value');
                Omniture.trackLink(17, value, 84, this.game);
                Omniture.clear();
                // console.log('_onTrackingQuizLinkClick', value);
            },

            _onTrackingQuizShareLinkClick: function _onTrackingQuizShareLinkClick(event) {
                // event.preventDefault();
                var value = $(event.currentTarget).data('tracking-value');
                Omniture.trackLink(22, value, 24, this.game);
                Omniture.clear();
                // console.log('_onTrackingQuizLinkClick', value);
            },

            _onTrackingExitLinkClick: function _onTrackingExitLinkClick(event) {
                // event.preventDefault();
                var url = $(event.currentTarget).attr('href');
                Omniture.exitLink(url);
                // console.log('_onTrackingExitLinkClick', url);
            },

            _onPointrollActionTagClick: function _onPointrollActionTagClick(event) {
                // event.preventDefault();
                var ssID = $(event.currentTarget).data('pointroll-ssid');
                this.pointrollTracking(ssID);
                // console.log('_onPointrollActionTagClick', ssID);
            },

            _onPointrollActionTagLinkClick: function _onPointrollActionTagLinkClick(event) {
                event.preventDefault();
                var url = $(event.currentTarget).attr('href');
                var ssID = $(event.currentTarget).data('pointroll-ssid');
                this.pointrollTracking(ssID);
                setTimeout(function () {
                    window.location.href = url;
                }, 100);
            },

            omniturePageTracking: function omniturePageTracking(page) {
                // console.log(page);
                Omniture.prefix = 'us:microsite:3ds:Fire Emblem Fates:';
                Omniture.suite = 'ncomglobal,ncomfireemblemfates';
                Omniture.channel = 'us:microsite:3ds';
                Omniture.prop1 = 'us:Fire Emblem Fates';
                Omniture.prop2 = 'game';
                Omniture.prop6 = 'us:en';
                Omniture.prop7 = 'MAeWjCwPKZ7CbdVSb16-CWPSR5cThPbc';
                Omniture.prop10 = 'Fire Emblem Fates';
                Omniture.prop11 = 'Strategy, Role-Playing';
                Omniture.prop12 = 'nintendo';
                Omniture.prop14 = 'microsite';
                Omniture.prop16 = 'us:microsite:Fire Emblem Fates';

                if (this.currentPage !== page) {
                    if (page.match(/home$/)) {
                        this.currentPage = page;
                        Omniture.trackPage('home', true, true);
                    } else {
                        this.currentPage = page;
                        Omniture.trackPage(page);
                    }
                }
            },

            pointrollTracking: function pointrollTracking(ssID) {
                // console.log(ssID);
                var prd = new Date(),
                pru = Date.UTC(prd.getUTCFullYear(), prd.getUTCMonth(), prd.getUTCDay(), prd.getUTCHours(), prd.getUTCMinutes(), prd.getUTCSeconds(), prd.getUTCMilliseconds());
                var pr_eid = pru + Math.random();
                var pr_event = '';
                var pr_item = '';
                var pr_quantity = '';
                var pr_value = '';
                var px = new Image(1, 1);
                px.src = "http://ev.ads.pointroll.com/event/?ss=" + ssID + "&av=777&eid=" + pr_eid + "&ev=" + pr_event + "&item=" + pr_item + "&q=" + pr_quantity + "&val=" + pr_value + "&r=" + Math.random();
            }

        };

        exports['default'] = Analytics;
        module.exports = exports['default'];

    }, {}
    ],
    5: [function(require, module, exports) {
        /**
         * @module     Nintendo Pop
         * @desc       The Nintendo Pop module loads the global nintendo library  and passes some custom config to the the navigation footer etc ...
         */

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var NintendoPop = {

            /* NINTENDO Configuration objects */
            navigationConfig: {
                target: "#nintendo-global-nav",
                share: false,
                nav: true,
                pin: true,
                active: 'threeds'
            },

            footerConfig: {
                target: "#nintendo-global-footer",
                all: 'threeds',
                esrb: 't',
                esrb_descriptor: 'Animated Blood<br />Fantasy Violence<br />Suggestive Themes',
                clubn: true,
                newsletter: true,
                light: false,
                threeds: false,
                amiibo: true
            },

            socialConfig: {
                target: "#nintendo-global-social",
                url: window.location.protocol + "//" + window.location.host
            },

            /**
              * Initializes the application
              */
            initialize: function initialize() {
                this.lang = $('html').attr('lang');
                // Execute Nintendo's Code with our configs
                this._configureNavigation(this.navigationConfig);
                this._configureFooter(this.footerConfig);
                this._configureSocial(this.socialConfig);
            },

            /**
              * _configureNavigation
              * Configure Nintendo's Global Navigation
              */
            _configureNavigation: function _configureNavigation(config) {
                /* jshint ignore:start */
                if (GlobalNav) {
                    GlobalNav.insert(config);
                }
                /* jshint ignore:end */
            },

            /**
              * _configureFooter
              * Configure Nintendo's Global Footer
              */
            _configureFooter: function _configureFooter(config) {
                /* jshint ignore:start */
                if (Footer) {
                    Footer.insert(config);
                }
                /* jshint ignore:end */
            },

            /**
              * _configureSocial
              * Configure Nintendo's Global Social Widgets
              */
            _configureSocial: function _configureSocial(config) {
                /* jshint ignore:start */
                if (Social) {
                    Social.insert(config);
                }
                /* jshint ignore:end */
            }

        };

        exports["default"] = NintendoPop;
        module.exports = exports["default"];

    }, {}
    ],
    6: [function(require, module, exports) {
        /**
         * @module     initialize
         * @desc       Defines load sequence for main module
         */

        'use strict';

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _Application = require('./Application');

        var _Application2 = _interopRequireDefault(_Application);

        var _controlsNintendoPop = require('controls/NintendoPop');

        var _controlsNintendoPop2 = _interopRequireDefault(_controlsNintendoPop);

        var _controlsAnalytics = require('controls/Analytics');

        var _controlsAnalytics2 = _interopRequireDefault(_controlsAnalytics);

        $(function () {
            // Initialize Application
            _Application2['default'].initialize();
            // Initialize Nintendo Global Includes ( Nav, Footer, Social )
            _controlsNintendoPop2['default'].initialize();
            // Initialize Omniture and Pointroll tagging
            _controlsAnalytics2['default'].initialize();
        });

    }, {
        "./Application": 1,
        "controls/Analytics": 4,
        "controls/NintendoPop": 5
    }
    ],
    7: [function(require, module, exports) {
        /**
         * @module     breakpointChange
         * @desc       Create pseudo 'breakpointChange' event
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var breakpointChange = function breakpointChange() {
            var $elIndicator = $('<div></div>', {
                'id': 'breakpoint-indicator'
            }).appendTo($('body'));
            var zIndex = $elIndicator.css('z-index');

            var updateConstants = function updateConstants() {
                _configConstants2['default'].currentBreakpoint = _configConstants2['default'].breakpoints[zIndex];
                _configConstants2['default'].isMobileView = _configConstants2['default'].currentBreakpoint === 'mobile' ? true : false;
                _configConstants2['default'].isTabletView = _configConstants2['default'].currentBreakpoint === 'tablet' ? true : false;
                _configConstants2['default'].isDesktopView = _configConstants2['default'].currentBreakpoint === 'desktop' ? true : false;
            };
            updateConstants();

            $(window).on('resize', function (event) {
                var newZI = $elIndicator.css('z-index');
                if (newZI !== zIndex) {
                    zIndex = newZI;
                    updateConstants();
                    $.event.trigger(_configEvents2['default'].BREAKPOINT_CHANGE, {
                        breakpoint: _configConstants2['default'].currentBreakpoint 
                    });
                }
            });
        };

        exports['default'] = breakpointChange;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3
    }
    ],
    8: [function(require, module, exports) {
        /**
         * @module     mobileDetection
         * @desc       Mobile device detection (phones and some major tablets) script using regex from http://detectmobilebrowsers.com/
         */

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var mobileDetection = function mobileDetection() {

            var result;

            var userAgent = navigator.userAgent || navigator.vendor || window.opera,
            reg1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk|(?=.*Windows NT)(?=.*Touch)/i,
            reg2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

            if (reg1.test(userAgent) || reg2.test(userAgent.substr(0, 4))) {
                result = true;
            } else {
                result = false;
            }

            return result;
        };

        exports["default"] = mobileDetection;
        module.exports = exports["default"];

    }, {}
    ],
    9: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var _widgetsResponsiveCarousel = require('widgets/ResponsiveCarousel');

        var _widgetsResponsiveCarousel2 = _interopRequireDefault(_widgetsResponsiveCarousel);

        var _widgetsVideoBlade = require('widgets/VideoBlade');

        var _widgetsVideoBlade2 = _interopRequireDefault(_widgetsVideoBlade);

        var _widgetsKingdomFlowers = require('widgets/KingdomFlowers');

        var _widgetsKingdomFlowers2 = _interopRequireDefault(_widgetsKingdomFlowers);

        var BirthrightView = {

            initialize: function initialize() {
                this.initCarousels();
                this.initVideoBlades();
                this.initKingdomFlowers();
                this.initMapLocations();

                this._addEventListeners();
            },

            /* EVENT HANDLERS */
            _addEventListeners: function _addEventListeners() {
                var _this = this;

                $(window).on('resize', function () {
                    _this.initMapLocations();
                });

                // prevent link click on tooltip triggers
                $('#birthright-map').find('a.map-location').on('click', function (event) {
                    event.preventDefault();
                });
            },

            /**
              *  Initializes kingdom flowers
              */
            initKingdomFlowers: function initKingdomFlowers() {
                new _widgetsKingdomFlowers2['default']($('#Flowers-container'), 'birthright', this.initCharacterAnimation);
            },

            /**
              *  Initializes responsive carousels
              */
            initCarousels: function initCarousels() {
                new _widgetsResponsiveCarousel2['default']($('#hoshido-classes-listing'));
            },

            /**
              *  Initializes full-width video blades autoplay when in viewport
              */
            initVideoBlades: function initVideoBlades() {
                new _widgetsVideoBlade2['default']($('#hoshido-kingdom'));
            },

            /**
              *  Initializes character art animation in hero section
              */
            initCharacterAnimation: function initCharacterAnimation() {
                this.$glow = $('#character-art-glow');
                this.$art1 = $('#character-art1');
                this.$art2 = $('#character-art2');
                this.$art3 = $('#character-art3');
                this.$art4 = $('#character-art4');
                this.$art0 = $('#character-art-mobile');

                var self = this;

                TweenMax.to(this.$art0, 0.4, {
                    opacity: 1
                }).delay(0.2);

                TweenMax.to(this.$art1, 0.6, {
                    opacity: 1,
                    // x: -198,
                    x: '-20.6%',
                    ease: 'Strong.easeOut'
                }).delay(0.1);

                TweenMax.to(this.$art2, 0.6, {
                    opacity: 1,
                    // x: -112,
                    x: '-11.7%',
                    ease: 'Strong.easeOut'
                }).delay(0.3);

                TweenMax.to(this.$art3, 0.6, {
                    opacity: 1,
                    // x: 14,
                    x: '1.5%',
                    ease: 'Strong.easeOut'
                }).delay(0.4);

                TweenMax.to(this.$art4, 0.6, {
                    opacity: 1,
                    // x: 292,
                    x: '30.4%',
                    ease: 'Strong.easeOut'
                }).delay(0.2);

                TweenMax.to(this.$glow, 2.0, {
                    opacity: 1.0,
                    onComplete: function onComplete() {
                        self.$glow.addClass('pulse');
                    }
                }).delay(0.5);

                // this.initStaticFlowersFade();
            },

            // /**
            //  *  Initializes static flowers animation
            //  */
            // initStaticFlowersFade: function() {
            // 	var self = this;

            // 	var staticFlowers = [
            // 		self.$flowerLeftSmall2,
            // 		self.$flowerLeftSmall4,
            // 		self.$flowerLeftLeaf2,
            // 		self.$flowerLeftLeaf4,
            // 		self.$flowerRightSmall4,
            // 		self.$flowerRightSmall2,
            // 		self.$flowerRightSmall1,
            // 		self.$flowerRightLeaf4
            // 	];

            // 	_.each(staticFlowers, function(flower) {
            // 		flower.css('transform', 'none');
            // 		flower.css('z-index', '0');

            // 		setTimeout(function() {
            // 			flower.fadeIn();
            // 		}, 1000);
            // 	});
            // },

            /**
              * Initializes map locations
              */
            initMapLocations: function initMapLocations() {
                var mapEl = $('#birthright-map');

                var mapBase = {
                    width: 1300,
                    height: 740
                };

                var map = {
                    width: mapEl.width(),
                    height: mapEl.height()
                };

                var locations = [{
                    name: 'loc1',
                    width: 122,
                    height: 121,
                    right: 164,
                    top: 29
                }, {
                    name: 'loc2',
                    width: 113,
                    height: 82,
                    right: 290,
                    top: 169
                }, {
                    name: 'loc3',
                    width: 69,
                    height: 67,
                    right: 361,
                    top: 278
                }, {
                    name: 'loc4',
                    width: 60,
                    height: 89,
                    right: 304,
                    top: 341
                }, {
                    name: 'loc5',
                    width: 85,
                    height: 67,
                    right: 423,
                    top: 379
                }, {
                    name: 'loc6',
                    width: 125,
                    height: 116,
                    right: 309,
                    top: 436
                }
                ];

                _.each(locations, function (location) {
                    var properties = {
                        width: parseInt(location.width / mapBase.width * map.width),
                        height: parseInt(location.height / mapBase.height * map.height),
                        right: parseInt(location.right / mapBase.width * map.width),
                        top: parseInt(location.top / mapBase.height * map.height)
                    };
                    mapEl.find('.' + location.name).css({
                        width: properties.width + 'px',
                        height: properties.height + 'px',
                        right: properties.right + 'px',
                        top: properties.top + 'px'
                    });
                });
            }

        };

        exports['default'] = BirthrightView;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3,
        "widgets/KingdomFlowers": 20,
        "widgets/ResponsiveCarousel": 24,
        "widgets/VideoBlade": 26
    }
    ],
    10: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var _widgetsTabSwitcher = require('widgets/TabSwitcher');

        var _widgetsTabSwitcher2 = _interopRequireDefault(_widgetsTabSwitcher);

        var _widgetsModalWindow = require('widgets/ModalWindow');

        var _widgetsModalWindow2 = _interopRequireDefault(_widgetsModalWindow);

        var BuyView = {

            initialize: function initialize() {
                this.$window = $(window);
                this.tabswitcher = null;
                this.$yourchoice = $('#your-choice');
                this.isMobileView = _configConstants2['default'].isMobileView;
                if (this.isMobileView) {
                    this.initTabSwitcher();
                }
                this.initRetailerModals();
                this._addEventListeners();
            },

            /* EVENT HANDLERS */
            _addEventListeners: function _addEventListeners() {
                this.$window.on(_configEvents2['default'].BREAKPOINT_CHANGE, $.proxy(this._onBreakpointChange, this));
            },

            _onBreakpointChange: function _onBreakpointChange(params) {
                if (this.isMobileView !== _configConstants2['default'].isMobileView) {
                    this.isMobileView = _configConstants2['default'].isMobileView;
                    if (this.isMobileView) {
                        this.initTabSwitcher();
                    } else {
                        this.uninitTabSwitcher();
                    }
                }
            },

            /**
              * Init buy now modal(s)
              */
            initRetailerModals: function initRetailerModals() {
                var self = this;
                var usConquestRetailerFrame = Object.create(RetailerFrame);
                var caConquestRetailerFrame = Object.create(RetailerFrame);
                var usBirthrightRetailerFrame = Object.create(RetailerFrame);
                var caBirthrightRetailerFrame = Object.create(RetailerFrame);

                usConquestRetailerFrame.insert({
                    target: '#buy-modal-conquest-us',
                    gameID: 'e-Ykv0gDj-kt4F5Qi8J73snjRS3u_XIX',
                    locale: 'en_US',
                    platform: '3DS',
                    dark: false,
                    modal: false
                });

                caConquestRetailerFrame.insert({
                    target: '#buy-modal-conquest-ca',
                    gameID: 'e-Ykv0gDj-kt4F5Qi8J73snjRS3u_XIX',
                    locale: 'en_CA',
                    platform: '3DS',
                    dark: false,
                    modal: false
                });

                usBirthrightRetailerFrame.insert({
                    target: '#buy-modal-birthright-us',
                    gameID: 'MAeWjCwPKZ7CbdVSb16-CWPSR5cThPbc',
                    locale: 'en_US',
                    platform: '3DS',
                    dark: false,
                    modal: false
                });

                caBirthrightRetailerFrame.insert({
                    target: '#buy-modal-birthright-ca',
                    gameID: 'MAeWjCwPKZ7CbdVSb16-CWPSR5cThPbc',
                    locale: 'en_CA',
                    platform: '3DS',
                    dark: false,
                    modal: false
                });

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-conquest.locale-en-us', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-conquest-us',
                    deeplink: true
                });

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-conquest.locale-en-ca', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-conquest-ca',
                    deeplink: true
                });

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-birthright.locale-en-us', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-birthright-us',
                    deeplink: true
                });

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-birthright.locale-en-ca', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-birthright-ca',
                    deeplink: true
                });

                // new ModalWindow('.buy-now-modal-trigger.game-special-ed.locale-en-us', {
                // 	strClassName: 'retailer-modal',
                // 	strTargetSelector: '#buy-modal-special-ed-us',
                // 	deeplink: true
                // });

                // new ModalWindow('.buy-now-modal-trigger.game-special-ed.locale-en-ca', {
                // 	strClassName: 'retailer-modal',
                // 	strTargetSelector: '#buy-modal-special-ed-ca',
                // 	deeplink: true
                // });

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-limited-ed.locale-en-us', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-limited-ed-us',
                    deeplink: true
                });

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-limited-ed.locale-en-ca', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-limited-ed-ca',
                    deeplink: true
                });
            },

            /**
              *  Initializes tab-switcher
              */
            initTabSwitcher: function initTabSwitcher() {
                var initialIndex = window.location.hash === '#tab:birthright' ? 1 : 0;
                this.tabswitcher = new _widgetsTabSwitcher2['default'](this.$yourchoice, {
                    initialIndex: initialIndex,
                    selectorTabs: '.intro .boxart',
                    selectorPanels: '.mobile-versions .inner'
                });
            },

            /**
              *  Un-initializes tab-switcher
              */
            uninitTabSwitcher: function uninitTabSwitcher() {
                this.tabswitcher.unInitialize();
                this.tabswitcher = null;
            }

        };

        exports['default'] = BuyView;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3,
        "widgets/ModalWindow": 22,
        "widgets/TabSwitcher": 25
    }
    ],
    11: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var _widgetsModalWindow = require('widgets/ModalWindow');

        var _widgetsModalWindow2 = _interopRequireDefault(_widgetsModalWindow);

        var _widgetsVideoBlade = require('widgets/VideoBlade');

        var _widgetsVideoBlade2 = _interopRequireDefault(_widgetsVideoBlade);

        var _widgetsContentVideo = require('widgets/ContentVideo');

        var _widgetsContentVideo2 = _interopRequireDefault(_widgetsContentVideo);

        var CharactersView = {

            initialize: function initialize() {
                this.createModals();
                // this.prepareHeaderVideo();
                this.initVideoBlades();
                this.initContentVideos();
            },

            /**
              *  Creating modals for character's details.
              *  Important - It has to be implemented in loops, because of deeplinking case connected with triggering click for trigger element.
              */
            createModals: function createModals() {
                // Create modals for both kingdoms
                $('.Characters-kingdoms a').each(function () {
                    var modalWindow = new _widgetsModalWindow2['default']('.Characters-kingdoms a[href=' + $(this).attr('href') + ']', {
                        strClassName: 'character-modal',
                        deeplink: true
                    });
                });

                // Create modals for allies
                $('.Characters-allies-content-character').each(function () {
                    var modalWindow = new _widgetsModalWindow2['default']('.Characters-allies-content-character[href=' + $(this).attr('href') + ']', {
                        strClassName: 'character-modal',
                        deeplink: true
                    });
                });
            },

            /**
              *  Preparing video in the header - handle poster image click and play video
              */
            // prepareHeaderVideo: function() {
            // 	// Elements
            // 	var videoCover = $(".Characters-header-border-cover");
            // 	var video = $("#Header-video").get(0);

            // 	// On video cover click
            // 	videoCover.click(function() {
            // 		// Hide cover image
            // 		videoCover.animate({
            // 			opacity: 0
            // 		}, 200, function() {
            // 			videoCover.hide();

            // 			// Play video
            // 			video.play();
            // 		});

            // 		return false;
            // 	});
            // },

            /**
              *  Initializes full-width video blades autoplay when in viewport
              */
            initVideoBlades: function initVideoBlades() {
                new _widgetsVideoBlade2['default']($('#azura'));
            },

            /**
              * Initializes content videos
              */
            initContentVideos: function initContentVideos() {
                new _widgetsContentVideo2['default']($('#Characters-header-video'));
            }

        };

        exports['default'] = CharactersView;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3,
        "widgets/ContentVideo": 18,
        "widgets/ModalWindow": 22,
        "widgets/VideoBlade": 26
    }
    ],
    12: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var _widgetsResponsiveCarousel = require('widgets/ResponsiveCarousel');

        var _widgetsResponsiveCarousel2 = _interopRequireDefault(_widgetsResponsiveCarousel);

        var _widgetsVideoBlade = require('widgets/VideoBlade');

        var _widgetsVideoBlade2 = _interopRequireDefault(_widgetsVideoBlade);

        var _widgetsKingdomFlowers = require('widgets/KingdomFlowers');

        var _widgetsKingdomFlowers2 = _interopRequireDefault(_widgetsKingdomFlowers);

        var ConquestView = {

            initialize: function initialize() {
                this.initCarousels();
                this.initVideoBlades();
                this.initKingdomFlowers();
                this.initMapLocations();

                this._addEventListeners();
            },

            /* EVENT HANDLERS */
            _addEventListeners: function _addEventListeners() {
                var _this = this;

                $(window).on('resize', function () {
                    _this.initMapLocations();
                });

                // prevent link click on tooltip triggers
                $('#conquest-map').find('a.map-location').on('click', function (event) {
                    event.preventDefault();
                });
            },

            /**
              *  Initializes kingdom flowers
              */
            initKingdomFlowers: function initKingdomFlowers() {
                new _widgetsKingdomFlowers2['default']($('#Flowers-container'), 'conquest', this.initCharacterAnimation);
            },

            /**
              *  Initializes responsive carousels
              */
            initCarousels: function initCarousels() {
                new _widgetsResponsiveCarousel2['default']($('#nohr-classes-listing'));
            },

            /**
              *  Initializes full-width video blades autoplay when in viewport
              */
            initVideoBlades: function initVideoBlades() {
                new _widgetsVideoBlade2['default']($('#nohr-kingdom'));
            },

            /**
              *  Initializes character art animation in hero section
              */
            initCharacterAnimation: function initCharacterAnimation() {
                this.$glow = $('#character-art-glow');
                this.$art0 = $('#character-art-mobile');
                this.$art1 = $('#character-art1');
                this.$art2 = $('#character-art2');
                this.$art3 = $('#character-art3');
                this.$art4 = $('#character-art4');

                var self = this;

                TweenMax.to(this.$art0, 0.4, {
                    opacity: 1
                }).delay(0.2);

                TweenMax.to(this.$art1, 0.6, {
                    opacity: 1,
                    // x: -260,
                    x: '-27.1%',
                    ease: 'Strong.easeOut'
                }).delay(0.1);

                TweenMax.to(this.$art2, 0.6, {
                    opacity: 1,
                    // x: -88,
                    x: '-9.2%',
                    ease: 'Strong.easeOut'
                }).delay(0.3);

                TweenMax.to(this.$art3, 0.6, {
                    opacity: 1,
                    // x: 70,
                    x: '7.3%',
                    ease: 'Strong.easeOut'
                }).delay(0.4);

                TweenMax.to(this.$art4, 0.6, {
                    opacity: 1,
                    // x: 310,
                    x: '32.3%',
                    ease: 'Strong.easeOut'
                }).delay(0.2);

                TweenMax.to(this.$glow, 2.0, {
                    opacity: 1.0,
                    onComplete: function onComplete() {
                        self.$glow.addClass('pulse');
                    }
                }).delay(0.5);

                // this.initStaticFlowersFade();
            },

            // /**
            //  *  Initializes static flowers animation
            //  */
            // initStaticFlowersFade: function() {
            // 	var self = this;

            // 	var staticFlowers = [
            // 		self.$flowerLeftBig2,
            // 		self.$flowerLeftLeaf2,
            // 		self.$flowerLeftSmall4,
            // 		self.$flowerLeftLeaf1,
            // 		self.$flowerRightLeaf2,
            // 		self.$flowerRightBig2,
            // 		self.$flowerRightSmall2,
            // 		self.$flowerRightLeaf4
            // 	];

            // 	_.each(staticFlowers, function(flower) {
            // 		flower.css('transform', 'none');
            // 		flower.css('z-index', '0');

            // 		setTimeout(function() {
            // 			flower.fadeIn();
            // 		}, 1000);
            // 	});
            // },

            /**
              * Initializes map locations
              */
            initMapLocations: function initMapLocations() {
                var mapEl = $('#conquest-map');

                var mapBase = {
                    width: 1300,
                    height: 740
                };

                var map = {
                    width: mapEl.width(),
                    height: mapEl.height()
                };

                var locations = [{
                    name: 'loc1',
                    width: 87,
                    height: 76,
                    left: 177,
                    top: 30
                }, {
                    name: 'loc2',
                    width: 152,
                    height: 106,
                    left: 76,
                    top: 85
                }, {
                    name: 'loc3',
                    width: 113,
                    height: 87,
                    left: 154,
                    top: 236
                }, {
                    name: 'loc4',
                    width: 74,
                    height: 67,
                    left: 30,
                    top: 443
                }, {
                    name: 'loc5',
                    width: 106,
                    height: 68,
                    left: 178,
                    top: 417
                }, {
                    name: 'loc6',
                    width: 128,
                    height: 86,
                    left: 40,
                    top: 556
                }, {
                    name: 'loc7',
                    width: 65,
                    height: 60,
                    left: 367,
                    top: 547
                }, {
                    name: 'loc8',
                    width: 70,
                    height: 74,
                    left: 240,
                    top: 656
                }
                ];

                _.each(locations, function (location) {
                    var properties = {
                        width: parseInt(location.width / mapBase.width * map.width),
                        height: parseInt(location.height / mapBase.height * map.height),
                        left: parseInt(location.left / mapBase.width * map.width),
                        top: parseInt(location.top / mapBase.height * map.height)
                    };
                    mapEl.find('.' + location.name).css({
                        width: properties.width + 'px',
                        height: properties.height + 'px',
                        left: properties.left + 'px',
                        top: properties.top + 'px'
                    });
                });
            }

        };

        exports['default'] = ConquestView;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3,
        "widgets/KingdomFlowers": 20,
        "widgets/ResponsiveCarousel": 24,
        "widgets/VideoBlade": 26
    }
    ],
    13: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var _widgetsVideoBlade = require('widgets/VideoBlade');

        var _widgetsVideoBlade2 = _interopRequireDefault(_widgetsVideoBlade);

        var _widgetsModalWindow = require('widgets/ModalWindow');

        var _widgetsModalWindow2 = _interopRequireDefault(_widgetsModalWindow);

        var DlcView = {

            initialize: function initialize() {
                this.initVideoBlades();
                this.initRetailerModals();
            },

            /**
              * Init buy now modal(s)
              */
            initRetailerModals: function initRetailerModals() {

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-revelation.locale-en-us', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-revelation-us',
                    deeplink: true
                });

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-revelation.locale-en-ca', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-revelation-ca',
                    deeplink: true
                });

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-mappack1.locale-en-us', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-mappack1-us',
                    deeplink: true
                });

                new _widgetsModalWindow2['default']('.buy-now-modal-trigger.game-mappack1.locale-en-ca', {
                    strClassName: 'retailer-modal',
                    strTargetSelector: '#buy-modal-mappack1-ca',
                    deeplink: true
                });
            },

            /**
              *  Initializes full-width video blades autoplay when in viewport
              */
            initVideoBlades: function initVideoBlades() {
                new _widgetsVideoBlade2['default']($('#revelation'));
            }

        };

        exports['default'] = DlcView;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3,
        "widgets/ModalWindow": 22,
        "widgets/VideoBlade": 26
    }
    ],
    14: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var _widgetsResponsiveCarousel = require('widgets/ResponsiveCarousel');

        var _widgetsResponsiveCarousel2 = _interopRequireDefault(_widgetsResponsiveCarousel);

        var _widgetsVideoBlade = require('widgets/VideoBlade');

        var _widgetsVideoBlade2 = _interopRequireDefault(_widgetsVideoBlade);

        var _widgetsContentVideo = require('widgets/ContentVideo');

        var _widgetsContentVideo2 = _interopRequireDefault(_widgetsContentVideo);

        var GameplayView = {

            initialize: function initialize() {
                this.initCarousels();
                this.initVideoBlades();
                this.initContentVideos();
                this.initSidebarNav();
            },

            /**
              *  Initializes carousels
              */
            initCarousels: function initCarousels() {
                new _widgetsResponsiveCarousel2['default']($('#Gameplay-amiibo-screenshots'));
                new _widgetsResponsiveCarousel2['default']($('#Gameplay-battle-screenshots'));
            },

            /**
              *  Initializes full-width video blades autoplay when in viewport
              */
            initVideoBlades: function initVideoBlades() {
                var videos = ['battle', 'levelup', 'support'];

                _.each(videos, function (video) {
                    new _widgetsVideoBlade2['default']($('#video-' + video));
                });
            },

            /**
              * Initialize content video players
              */
            initContentVideos: function initContentVideos() {
                var videos = ['#Gameplay-battle-video', '#Gameplay-castle-video', '#Gameplay-streetpass-video'];

                _.each(videos, function (video) {
                    new _widgetsContentVideo2['default']($(video));
                });
            },

            /**
              * Initialize sidebar navigation show / hide effect
              */
            initSidebarNav: function initSidebarNav() {
                var self = this;
                var sideNavLinks = $('.Gameplay-sidenav a');
                var topOffset = (_configConstants2['default'].isMobileView ? 50 : 36) + 68;
                var urlHash = window.location.hash.replace('#/', '').replace('#', '') || null;
                var $initialEl = urlHash ? $('#' + urlHash) : null;

                var pageJumpScroll = function pageJumpScroll($target) {
                    TweenMax.to(window, 0.5, {
                        scrollTo: {
                            y: $target.offset().top - topOffset + 1,
                            autoKill: false
                        },
                        ease: 'Strong.easeOut'
                    });
                };

                sideNavLinks.click(function (event) {
                    event.preventDefault();
                    var target = $(this).attr('href');
                    pageJumpScroll($(target));
                });

                $(window).on('scroll', function () {
                    self.updateSidebarNav();
                });

                if ($initialEl && $initialEl.length) {
                    pageJumpScroll($initialEl);
                }
            },

            /**
              * Updates sidebar navigation on window scroll
              */
            updateSidebarNav: function updateSidebarNav() {
                var sections = $('.Gameplay-scroll-section');
                var sidebar = $('.Gameplay-sidenav');
                var topOffset = (_configConstants2['default'].isMobileView ? 50 : 36) + 68;
                var currentScrollTop = $(window).scrollTop();

                sections.each(function () {
                    var top = $(this).offset().top - topOffset;
                    var bottom = top + $(this).outerHeight();

                    if (currentScrollTop >= top && currentScrollTop <= bottom) {
                        sidebar.find('a').removeClass('active');
                        sidebar.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                    }
                });
            }

        };

        exports['default'] = GameplayView;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3,
        "widgets/ContentVideo": 18,
        "widgets/ResponsiveCarousel": 24,
        "widgets/VideoBlade": 26
    }
    ],
    15: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var _widgetsAutoRotator = require('widgets/AutoRotator');

        var _widgetsAutoRotator2 = _interopRequireDefault(_widgetsAutoRotator);

        var HomeView = {

            initialize: function initialize() {
                this.$window = $(window);
                this.$hero = $('#hero-intro');

                new _widgetsAutoRotator2['default']($('#accolade-rotator-mobile'), {
                    equalizeHeight: true
                });

                new _widgetsAutoRotator2['default']($('#accolade-rotator'), {
                    equalizeHeight: true
                });

                this.$window.load((function () {
                    this.$hero.addClass('loaded');
                }).bind(this));

                this.addTrailerListener();
            },

            addTrailerListener: function addTrailerListener() {
                var trailerDeepLink = '#trailer';
                var trailerTrigger = $('.trigger-watch-trailer');

                if (window.location.hash === trailerDeepLink) {
                    trailerTrigger.click();
                }
            }

        };

        exports['default'] = HomeView;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3,
        "widgets/AutoRotator": 17
    }
    ],
    16: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var _widgetsTabSwitcher = require('widgets/TabSwitcher');

        var _widgetsTabSwitcher2 = _interopRequireDefault(_widgetsTabSwitcher);

        var _widgetsKingdomFlowers = require('widgets/KingdomFlowers');

        var _widgetsKingdomFlowers2 = _interopRequireDefault(_widgetsKingdomFlowers);

        var QuizView = {
            initialize: function initialize() {
                this.pageUrl = 'http://fireemblemfates.nintendo.com/quiz';
                this.encodedPageUrl = encodeURIComponent(this.pageUrl);
                this.shortPageUrl = 'http://bit.ly/1RLqQrT';
                this.encodedShortPageUrl = encodeURIComponent(this.shortPageUrl);
                this.activeQuestionIndex = 0;
                this.hoshidoPoints = 0;
                this.nohrPoints = 0;
                this.nohrResultIndex = 10;
                this.hoshidoResultIndex = 11;
                this.answerLeftEl = '.Quiz-questions-answer-left';
                this.answerRightEl = '.Quiz-questions-answer-right';
                this.orEl = '.Quiz-questions-answer-or';
                this.shareButtons = '.Quiz-share-buttons';

                this.initTabSwitcher();
                this.initFacebook();
                this.initTwitter();

                this.addEventListeners();
            },

            initTabSwitcher: function initTabSwitcher() {
                var quizEl = $('.Quiz-container');
                this.quizSwitcher = new _widgetsTabSwitcher2['default'](quizEl);
            },

            addEventListeners: function addEventListeners() {
                var _this = this;

                // Next slide event listener
                var triggers = $('.Quiz-intro-button, .Quiz-questions-answer');

                triggers.click(function (event) {
                    event.preventDefault();

                    var kingdom = $(event.currentTarget).data('kingdom');
                    var last = $(event.currentTarget).data('last');

                    switch (kingdom) {
                    case 'nohr':
                        _this.nohrPoints++;
                        break;

                    case 'hoshido':
                        _this.hoshidoPoints++;
                        break;

                    default:
                        break;
                    }

                    if (!last) {
                        _this.activeQuestionIndex++;
                        _this.animateSlideTransition();
                    } else {
                        var facebookBtn, twitterBtn;

                        if (_this.hoshidoPoints > _this.nohrPoints) {
                            // Hoshido results
                            _this.results = {
                                trackingValueFacebook: 'quiz: end: Facebook - Hoshido',
                                trackingValueTwitter: 'quiz: end: Twitter - Hoshido',
                                social: {
                                    title: 'I fit right in with the heroes of Hoshido.',
                                    caption: '',
                                    desc: 'Should you side with Nohr or Hoshido in Fire Emblem™ Fates? Take the quiz to find out!'
                                },
                                pageUrl: 'http://fireemblemfates.nintendo.com/birtright',
                                img: 'http://fireemblemfates.nintendo.com/assets/images/chrome/share-quiz.jpg'
                            };

                            _this.animateSlideTransition(_this.hoshidoResultIndex);

                            new _widgetsKingdomFlowers2['default']($('#Hoshido-flowers-container'), 'birthright', _this.animateCharacters('hoshido'));
                        } else {
                            // Nohr results
                            _this.results = {
                                trackingValueFacebook: 'quiz: end: Facebook - Nohr',
                                trackingValueTwitter: 'quiz: end: Twitter - Nohr',
                                social: {
                                    title: 'I fit right in with the heroes of Nohr.',
                                    caption: '',
                                    desc: 'Should you side with Nohr or Hoshido in Fire Emblem™ Fates? Take the quiz to find out!'
                                },
                                pageUrl: 'http://fireemblemfates.nintendo.com/conquest',
                                img: 'http://fireemblemfates.nintendo.com/assets/images/chrome/share-quiz.jpg'
                            };

                            _this.animateSlideTransition(_this.nohrResultIndex);

                            new _widgetsKingdomFlowers2['default']($('#Nohr-flowers-container'), 'conquest', _this.animateCharacters('nohr'));
                        }

                        // Display share buttons
                        facebookBtn = '<a href="#" class="Quiz-share fb-share tracking-quiz-share-link" data-tracking-value="' + _this.results.trackingValueFacebook + '"><div class="flourish"></div>Post to Facebook</a>';
                        twitterBtn = '<a href="https://twitter.com/intent/tweet?original_referer=' + _this.encodedShortPageUrl + '&text=' + _this.results.social.desc + '&tw_p=tweetbutton&url=' + _this.encodedShortPageUrl + '" class="Quiz-share tracking-quiz-share-link" data-tracking-value="' + _this.results.trackingValueTwitter + '" target="_blank"><div class="flourish"></div>Share on Twitter</a>';

                        $(_this.shareButtons).prepend(twitterBtn);
                        $(_this.shareButtons).prepend(facebookBtn);

                        // Facebook share
                        $('.fb-share').click(function (event) {
                            event.preventDefault();
                            _this.postFB();
                        });
                    }
                });
            },

            animateSlideTransition: function animateSlideTransition(panelIndex) {
                var _this2 = this;

                var animationLength = 200;

                // Animate "or" element
                this.fadeOutOr(animationLength);

                // After that animate answers buttons
                setTimeout(function () {
                    _this2.fadeOutAnswers(animationLength);
                }, animationLength);

                // Switch panel
                setTimeout(function () {
                    var toPanel = panelIndex || _this2.activeQuestionIndex;
                    _this2.quizSwitcher.goToPanel(toPanel, true);
                }, animationLength * 2);

                // Animate answer buttons
                setTimeout(function () {
                    _this2.fadeInAnswers(animationLength);
                }, animationLength * 3);

                // Fade in "or" element
                setTimeout(function () {
                    _this2.fadeInOr(animationLength);
                }, animationLength * 4);
            },

            fadeInOr: function fadeInOr(animationLength) {
                $(this.orEl).animate({
                    opacity: 1
                }, animationLength);
            },

            fadeOutOr: function fadeOutOr(animationLength) {
                $(this.orEl).animate({
                    opacity: 0
                }, animationLength);
            },

            fadeInAnswers: function fadeInAnswers(animationLength) {
                if (_configConstants2['default'].isMobileView) {
                    $(this.answerLeftEl).animate({
                        opacity: 1
                    }, animationLength);

                    $(this.answerRightEl).animate({
                        opacity: 1
                    }, animationLength);
                } else {
                    $(this.answerLeftEl).animate({
                        opacity: 1,
                        marginLeft: 0
                    }, animationLength);

                    $(this.answerRightEl).animate({
                        opacity: 1,
                        marginLeft: 0
                    }, animationLength);
                }
            },

            fadeOutAnswers: function fadeOutAnswers(animationLength) {
                if (_configConstants2['default'].isMobileView) {
                    $(this.answerLeftEl).animate({
                        opacity: 0
                    }, animationLength);

                    $(this.answerRightEl).animate({
                        opacity: 0
                    }, animationLength);
                } else {
                    $(this.answerLeftEl).animate({
                        marginLeft: - 5,
                        opacity: 0
                    }, animationLength);

                    $(this.answerRightEl).animate({
                        marginLeft: 15,
                        opacity: 0
                    }, animationLength);
                }
            },

            animateCharacters: function animateCharacters(kingdom) {
                var $art1 = $('.Quiz-' + kingdom + '-frame-characters-character-1'),
                $art2 = $('.Quiz-' + kingdom + '-frame-characters-character-2'),
                $art3 = $('.Quiz-' + kingdom + '-frame-characters-character-3'),
                $art4 = $('.Quiz-' + kingdom + '-frame-characters-character-4'),
                $art5 = $('.Quiz-' + kingdom + '-frame-characters-character-5');

                TweenMax.to($art1, 0.6, {
                    x: '0%',
                    opacity: 1,
                    ease: 'Strong.easeOut'
                }).delay(3.5);

                TweenMax.to($art2, 0.6, {
                    x: '0%',
                    opacity: 1,
                    ease: 'Strong.easeOut'
                }).delay(3.6);

                if (kingdom === 'hoshido') {
                    TweenMax.to($art3, 0.6, {
                        x: '15%',
                        opacity: 1,
                        ease: 'Strong.easeOut'
                    }).delay(3.7);
                } else {
                    TweenMax.to($art3, 0.6, {
                        x: '0%',
                        opacity: 1,
                        ease: 'Strong.easeOut'
                    }).delay(3.7);
                }

                TweenMax.to($art4, 0.6, {
                    x: '0%',
                    opacity: 1,
                    ease: 'Strong.easeOut'
                }).delay(3.8);

                TweenMax.to($art5, 0.6, {
                    x: '0%',
                    opacity: 1,
                    ease: 'Strong.easeOut'
                }).delay(3.9);
            },

            /**
              * Setup Twitter widget
              */
            initTwitter: function initTwitter() {
                (function (d, s, id) {
                    var js,
                    fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                    if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = p + '://platform.twitter.com/widgets.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }
                })(document, 'script', 'twitter-wjs');
            },

            /**
              * Setup Facebook SDK and Share Dialog
              */
            initFacebook: function initFacebook() {
                window.fbAsyncInit = function () {
                    FB.init({
                        appId: '1563169727336889',
                        xfbml: true,
                        version: 'v2.0'
                    });
                };

                (function (d, s, id) {
                    var js,
                    fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/en_US/all.js";
                    fjs.parentNode.insertBefore(js, fjs);
                })(document, 'script', 'facebook-jssdk');
            },

            postFB: function postFB() {
                FB.ui({
                    method: 'feed',
                    name: this.results.social.title,
                    link: this.pageUrl,
                    caption: this.results.social.caption,
                    description: this.results.social.desc,
                    picture: this.results.img
                });
            }
        };

        exports['default'] = QuizView;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3,
        "widgets/KingdomFlowers": 20,
        "widgets/TabSwitcher": 25
    }
    ],
    17: [function(require, module, exports) {
        /*
        	MODULE: AutoRotator

        	DESCRIPTION: Auto show / hide a list of elements

        	USAGE: var myAutoRotator = new AutoRotator('Element', 'Options')
        		@param {jQuery Object}
        		@param {Object}

        	DEPENDENCIES:
        		- jquery 2.1x+

        */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) 
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) 
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps) 
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        })();

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var _widgetsHeightEqualizer = require('widgets/HeightEqualizer');

        var _widgetsHeightEqualizer2 = _interopRequireDefault(_widgetsHeightEqualizer);

        var AutoRotator = (function () {
            function AutoRotator($el, objOptions) {
                _classCallCheck(this, AutoRotator);

                this.$window = $(window);
                this.initialize($el, objOptions);
            }

            _createClass(AutoRotator, [{
                key: 'initialize',
                value: function initialize($el, objOptions) {

                    // defaults
                    this.$el = $el;
                    this.options = $.extend({
                        initialIndex: 0,
                        selectorPanels: 'article',
                        activeClass: 'active',
                        equalizeHeight: false,
                        autoRotateInterval: 6000,
                        maxAutoRotations: 10,
                        selectorFocusEls: 'a, button, input, select, textarea',
                        customEventName: 'AutoRotator'
                    }, objOptions || {});

                    // element references
                    this.$panels = this.$el.find(this.options.selectorPanels);

                    // setup & properties
                    this._length = this.$panels.length;
                    if (this.options.initialIndex >= this._length) {
                        this.options.initialIndex = 0;
                    }
                    this.currentIndex = this.options.initialIndex;
                    this.previousIndex = null;
                    this.rotationInterval = this.options.autoRotateInterval;
                    this.autoRotationCounter = this._length * this.options.maxAutoRotations;
                    this.heightEqualizer = null;

                    this.initDOM();

                    this.bindEvents();

                    $.event.trigger(this.options.customEventName + ':isInitialized', [this.$el]);
                }
            }, {
                key: 'initDOM',
                value: function initDOM() {
                    var $activePanel = $(this.$panels[this.currentIndex]);

                    this.$el.attr({
                        'role': 'tablist',
                        'aria-live': 'polite' 
                    });
                    this.$panels.attr({
                        'role': 'tabpanel',
                        'aria-hidden': 'true' 
                    });
                    this.$panels.find(this.options.selectorFocusEls).attr({
                        'tabindex': '-1' 
                    });

                    // equalize items height
                    if (this.options.equalizeHeight) {
                        this.heightEqualizer = new _widgetsHeightEqualizer2['default'](this.$el, {
                            selectorItems: this.options.selectorPanels,
                            setParentHeight: true
                        });
                    }

                    $activePanel.addClass(this.options.activeClass).attr({
                        'aria-hidden': 'false' 
                    });
                    $activePanel.find(this.options.selectorFocusEls).attr({
                        'tabindex': '0' 
                    });

                    this.setAutoRotation = setInterval((function () {
                        this.autoRotation();
                    }).bind(this), this.rotationInterval);
                }
            }, {
                key: 'uninitDOM',
                value: function uninitDOM() {
                    this.$el.removeAttr('role aria-live');
                    this.$panels.removeAttr('role aria-hidden').removeClass(this.options.activeClass);
                    this.$panels.find(this.options.selectorFocusEls).removeAttr('tabindex');
                    clearInterval(this.setAutoRotation);
                }
            }, {
                key: 'bindEvents',
                value: function bindEvents() {
                    this.$window.on('resize', this.__onWindowResize.bind(this));
                }
            }, {
                key: 'unbindEvents',
                value: function unbindEvents() {
                    this.$window.off('resize', this.__onWindowResize.bind(this));
                }
            }, {
                key: 'autoRotation',
                value: function autoRotation() {
                    this.previousIndex = this.currentIndex;
                    this.currentIndex++;
                    if (this.currentIndex === this._length) {
                        this.currentIndex = 0;
                    }

                    this.switchPanels();

                    this.autoRotationCounter--;
                    if (this.autoRotationCounter === 0) {
                        clearInterval(this.setAutoRotation);
                    }
                }

                /**
                  *	Event Handlers
                  **/

            }, {
                key: '__onWindowResize',
                value: function __onWindowResize(event) {
                    if (this.options.equalizeHeight) {
                        this.heightEqualizer.resetHeight();
                    }
                }

                /**
                  *	Public Methods
                  **/

            }, {
                key: 'switchPanels',
                value: function switchPanels() {
                    var $inactivePanel = $(this.$panels[this.previousIndex]);
                    var $activePanel = $(this.$panels[this.currentIndex]);

                    $inactivePanel.removeClass(this.options.activeClass).attr({
                        'aria-hidden': 'true' 
                    });
                    $inactivePanel.find(this.options.selectorFocusEls).attr({
                        'tabindex': '-1' 
                    });
                    $activePanel.addClass(this.options.activeClass).attr({
                        'aria-hidden': 'false' 
                    });
                    $activePanel.find(this.options.selectorFocusEls).attr({
                        'tabindex': '0' 
                    });
                }
            }, {
                key: 'unInitialize',
                value: function unInitialize() {
                    this.unbindEvents();
                    this.uninitDOM();
                    this.$el = null;
                    this.$panels = null;
                    $.event.trigger(this.options.customEventName + ':unInitialized');
                }
            }
            ]);

            return AutoRotator;
        })();

        exports['default'] = AutoRotator;
        module.exports = exports['default'];

    }, {
        "widgets/HeightEqualizer": 19
    }
    ],
    18: [function(require, module, exports) {
        /**
         * @module  ContentVideo
         * @desc    Creating content video player with poster image
         * @example new ContentVideo($('#video-section-id'));
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) 
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) 
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps) 
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        })();

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var ContentVideo = (function () {
            /**
              * Object contructor
              * @param $el
              */

            function ContentVideo($el) {
                _classCallCheck(this, ContentVideo);

                this.$window = $(window);
                this.initialize($el);
            }

            /**
              * Initialize function
              * @param $el
              */

            _createClass(ContentVideo, [{
                key: 'initialize',
                value: function initialize($el) {
                    this.$el = $el;

                    // Get video source and poster image
                    this.getVideoData();

                    // Create <video> element
                    this.createVideoElement();

                    // Handle video play on user's click
                    this.handleVideoPlay();
                }

                /**
                   * Getting video data like video source and poster image based on data-* attributes
                   */
            }, {
                key: 'getVideoData',
                value: function getVideoData() {
                    this.video = this.$el.data('video');
                    this.poster = this.$el.data('poster');
                }

                /**
                   * Creating <video> element based on video's data
                   */
            }, {
                key: 'createVideoElement',
                value: function createVideoElement() {
                    // Create video element
                    var videoCode = '<video ';

                    // Insert poster image (if present)
                    if (this.poster) {
                        videoCode += 'poster="' + this.poster + '" ';
                    }

                    // Insert video source
                    videoCode += 'src="';
                    videoCode += this.video;
                    videoCode += '" type="video/mp4"></video>';

                    // Inject video element into container
                    this.$el.html(videoCode);
                }

                /**
                   * Handling video playing on user's click
                   */
            }, {
                key: 'handleVideoPlay',
                value: function handleVideoPlay() {
                    // On video user's click event
                    this.$el.click((function () {

                        // Stop all other videos
                        this.pauseAllVideos();

                        // Play current video
                        var video = this.$el.find('video');
                        video.get(0).play();
                    }).bind(this));
                }

                /**
                   * Pausing all videos found in page
                   */
            }, {
                key: 'pauseAllVideos',
                value: function pauseAllVideos() {
                    // Get all video objects
                    var videos = $('.page-container').find('video');

                    _.each(videos, function (video) {
                        // Get video element
                        var videoElement = $(video).get(0);

                        // If video is currently playing
                        if (!videoElement.paused) {
                            // Pause it
                            videoElement.pause();
                        }
                    });
                }
            }
            ]);

            return ContentVideo;
        })();

        exports['default'] = ContentVideo;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3
    }
    ],
    19: [function(require, module, exports) {
        /*
        	TITLE: HeightEqualizer

        	DESCRIPTION: Sets equal height on a collection of DOM ELs

        	VERSION: 0.2.0

        	USAGE: var myHeightEqualizer = new HeightEqualizer('El', 'Options')
        		@param {jQuery Object}
        		@param {Object}

        	AUTHOR: chris.nelson <chris.nelson@popagency.com>

        	DEPENDENCIES:
        		- jquery 2.1x+

        */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) 
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) 
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps) 
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        })();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var HeightEqualizer = (function () {
            function HeightEqualizer($el, objOptions) {
                _classCallCheck(this, HeightEqualizer);

                this.initialize($el, objOptions);
            }

            _createClass(HeightEqualizer, [{
                key: 'initialize',
                value: function initialize($el, objOptions) {
                    this.$el = $el;
                    this.options = $.extend({
                        selectorItems: '> div',
                        setParentHeight: false
                    }, objOptions || {});

                    // element references
                    this.$items = this.$el.find(this.options.selectorItems);

                    this._len = this.$items.length;
                    if (this._len <= 1) {
                        return;
                    }

                    this.maxHeight = 0;

                    this.calcHeight();
                    this.setHeight();
                }
            }, {
                key: 'calcHeight',
                value: function calcHeight() {
                    var heightCheck = 0;
                    for (var i = 0; i < this._len; i++) {
                        //outerHeight includes height + padding + border
                        heightCheck = $(this.$items[i]).outerHeight();
                        if (heightCheck > this.maxHeight) {
                            this.maxHeight = heightCheck;
                        }
                    }
                }
            }, {
                key: 'setHeight',
                value: function setHeight() {
                    this.$items.css({
                        height: this.maxHeight 
                    });
                    if (this.options.setParentHeight) {
                        this.$el.css({
                            height: this.maxHeight 
                        });
                    }
                }
            }, {
                key: 'resetHeight',
                value: function resetHeight() {
                    this.maxHeight = 0;
                    this.$items.css({
                        height: '' 
                    });
                    if (this.options.setParentHeight) {
                        this.$el.css({
                            height: '' 
                        });
                    }
                    this.calcHeight();
                    this.setHeight();
                }
            }
            ]);

            return HeightEqualizer;
        })();

        exports['default'] = HeightEqualizer;
        module.exports = exports['default'];

    }, {}
    ],
    20: [function(require, module, exports) {
        /**
         * @module  KingdomFlowers
         * @desc    Animating kingdom flowers
         * @example new KingdomFlowers($('.Flowers-container'), 'conquest', callback);
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) 
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) 
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps) 
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        })();

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var KingdomFlowers = (function () {
            /**
              * Object contructor
              * @param $el
              * @param kingdom
              * @param callback
              */

            function KingdomFlowers($el, kingdom, callback) {
                _classCallCheck(this, KingdomFlowers);

                this.$window = $(window);
                this.initialize($el, kingdom, callback);
            }

            /**
              * Initialize function
              * @param $el
              * @param kingdom
              * @param callback
              */

            _createClass(KingdomFlowers, [{
                key: 'initialize',
                value: function initialize($el, kingdom, callback) {
                    this.$el = $el;
                    this.kingdom = kingdom;
                    this.callback = callback;

                    this.addFlowerElements();
                    this.initFlowerElements();
                    this.initFlowersTransition();
                }

                /**
                   * Add flower elements to the structure of HTML file
                   */
            }, {
                key: 'addFlowerElements',
                value: function addFlowerElements() {
                    this.$el.append('\n\t\t\t<div id="' + this.kingdom + '-transition-container"></div>\n\n\t\t\t<div id="' + this.kingdom + '-flower-left-big-1" class="' + this.kingdom + '-flower-big"></div>\n\t\t\t<div id="' + this.kingdom + '-flower-left-big-2" class="' + this.kingdom + '-flower-big"></div>\n\t\t\t<div id="' + this.kingdom + '-flower-left-big-3" class="' + this.kingdom + '-flower-big"></div>\n\t\t\t<div id="' + this.kingdom + '-flower-left-big-4" class="' + this.kingdom + '-flower-big"></div>\n\n\t\t\t<div id="' + this.kingdom + '-flower-left-small-1" class="' + this.kingdom + '-flower-small"></div>\n\t\t\t<div id="' + this.kingdom + '-flower-left-small-2" class="' + this.kingdom + '-flower-small"></div>\n\t\t\t<div id="' + this.kingdom + '-flower-left-small-3" class="' + this.kingdom + '-flower-small"></div>\n\t\t\t<div id="' + this.kingdom + '-flower-left-small-4" class="' + this.kingdom + '-flower-small"></div>\n\n\t\t\t<div id="' + this.kingdom + '-flower-left-leaf-1" class="' + this.kingdom + '-leaf-2"></div>\n\t\t\t<div id="' + this.kingdom + '-flower-left-leaf-2" class="' + this.kingdom + '-leaf-1"></div>\n\t\t\t<div id="' + this.kingdom + '-flower-left-leaf-3" class="' + this.kingdom + '-leaf-2"></div>\n\t\t\t<div id="' + this.kingdom + '-flower-left-leaf-4" class="' + this.kingdom + '-leaf-1"></div>\n\n\t\t\t<div id="' + this.kingdom + '-flower-right-big-1" class="' + this.kingdom + '-flower-big"></div>\n\t        <div id="' + this.kingdom + '-flower-right-big-2" class="' + this.kingdom + '-flower-big"></div>\n\t\t    <div id="' + this.kingdom + '-flower-right-big-3" class="' + this.kingdom + '-flower-big"></div>\n\t\t    <div id="' + this.kingdom + '-flower-right-big-4" class="' + this.kingdom + '-flower-big"></div>\n\n\t\t    <div id="' + this.kingdom + '-flower-right-small-1" class="' + this.kingdom + '-flower-small"></div>\n\t\t    <div id="' + this.kingdom + '-flower-right-small-2" class="' + this.kingdom + '-flower-small"></div>\n\t\t    <div id="' + this.kingdom + '-flower-right-small-3" class="' + this.kingdom + '-flower-small"></div>\n\t\t    <div id="' + this.kingdom + '-flower-right-small-4" class="' + this.kingdom + '-flower-small"></div>\n\n\t\t    <div id="' + this.kingdom + '-flower-right-leaf-1" class="' + this.kingdom + '-leaf-2"></div>\n\t\t    <div id="' + this.kingdom + '-flower-right-leaf-2" class="' + this.kingdom + '-leaf-1"></div>\n\t\t    <div id="' + this.kingdom + '-flower-right-leaf-3" class="' + this.kingdom + '-leaf-2"></div>\n\t\t    <div id="' + this.kingdom + '-flower-right-leaf-4" class="' + this.kingdom + '-leaf-1"></div>\n\t\t');
                }

                /**
                   * Initialize flower objects and sets of flowers
                   */
            }, {
                key: 'initFlowerElements',
                value: function initFlowerElements() {
                    this.$elTransition = $('#' + this.kingdom + '-transition-container');

                    // Flowers on the left side
                    this.$flowerLeftBig1 = $('#' + this.kingdom + '-flower-left-big-1');
                    this.$flowerLeftBig2 = $('#' + this.kingdom + '-flower-left-big-2');
                    this.$flowerLeftBig3 = $('#' + this.kingdom + '-flower-left-big-3');
                    this.$flowerLeftBig4 = $('#' + this.kingdom + '-flower-left-big-4');
                    this.$flowerLeftSmall1 = $('#' + this.kingdom + '-flower-left-small-1');
                    this.$flowerLeftSmall2 = $('#' + this.kingdom + '-flower-left-small-2');
                    this.$flowerLeftSmall3 = $('#' + this.kingdom + '-flower-left-small-3');
                    this.$flowerLeftSmall4 = $('#' + this.kingdom + '-flower-left-small-4');
                    this.$flowerLeftLeaf1 = $('#' + this.kingdom + '-flower-left-leaf-1');
                    this.$flowerLeftLeaf2 = $('#' + this.kingdom + '-flower-left-leaf-2');
                    this.$flowerLeftLeaf3 = $('#' + this.kingdom + '-flower-left-leaf-3');
                    this.$flowerLeftLeaf4 = $('#' + this.kingdom + '-flower-left-leaf-4');

                    // Flowers on the right side
                    this.$flowerRightBig1 = $('#' + this.kingdom + '-flower-right-big-1');
                    this.$flowerRightBig2 = $('#' + this.kingdom + '-flower-right-big-2');
                    this.$flowerRightBig3 = $('#' + this.kingdom + '-flower-right-big-3');
                    this.$flowerRightBig4 = $('#' + this.kingdom + '-flower-right-big-4');
                    this.$flowerRightSmall1 = $('#' + this.kingdom + '-flower-right-small-1');
                    this.$flowerRightSmall2 = $('#' + this.kingdom + '-flower-right-small-2');
                    this.$flowerRightSmall3 = $('#' + this.kingdom + '-flower-right-small-3');
                    this.$flowerRightSmall4 = $('#' + this.kingdom + '-flower-right-small-4');
                    this.$flowerRightLeaf1 = $('#' + this.kingdom + '-flower-right-leaf-1');
                    this.$flowerRightLeaf2 = $('#' + this.kingdom + '-flower-right-leaf-2');
                    this.$flowerRightLeaf3 = $('#' + this.kingdom + '-flower-right-leaf-3');
                    this.$flowerRightLeaf4 = $('#' + this.kingdom + '-flower-right-leaf-4');

                    // Flowers collections in right posisiton order (from border to center)
                    this.$flowersLeft = [this.$flowerLeftBig4, this.$flowerLeftLeaf3, this.$flowerLeftBig2, this.$flowerLeftLeaf4, this.$flowerLeftSmall2, this.$flowerLeftSmall4, this.$flowerLeftLeaf2, this.$flowerLeftSmall1, this.$flowerLeftSmall3, this.$flowerLeftLeaf1, this.$flowerLeftBig1, this.$flowerLeftBig3];

                    this.$flowersRight = [this.$flowerRightBig4, this.$flowerRightLeaf3, this.$flowerRightBig2, this.$flowerRightLeaf4, this.$flowerRightSmall2, this.$flowerRightSmall4, this.$flowerRightLeaf2, this.$flowerRightSmall1, this.$flowerRightSmall3, this.$flowerRightLeaf1, this.$flowerRightBig1, this.$flowerRightBig3];
                }

                /**
                   * Initialize flowers animation
                   */
            }, {
                key: 'initFlowersTransition',
                value: function initFlowersTransition() {
                    // Animate flowers on the left side
                    this.animateFlowerFall(this.$flowerLeftBig1, '-=100px', 50);
                    this.animateFlowerFall(this.$flowerLeftLeaf1, '-=150px', 40);
                    this.animateFlowerFall(this.$flowerLeftSmall1, '-=200px', - 30);
                    this.animateFlowerFall(this.$flowerLeftBig2, '-=250px', 90);
                    this.animateFlowerFall(this.$flowerLeftLeaf2, '-=300px', 70);
                    this.animateFlowerFall(this.$flowerLeftSmall2, '-=400px', - 50);
                    this.animateFlowerFall(this.$flowerLeftBig3, '-=450px', - 50);
                    this.animateFlowerFall(this.$flowerLeftLeaf3, '-=500px', 60);
                    this.animateFlowerFall(this.$flowerLeftSmall3, '-=550px', - 80);
                    this.animateFlowerFall(this.$flowerLeftBig4, '-=600px', 70);
                    this.animateFlowerFall(this.$flowerLeftLeaf4, '-=650px', 60);
                    this.animateFlowerFall(this.$flowerLeftSmall4, '-=700px', - 50);

                    // Animate flowers on the right
                    this.animateFlowerFall(this.$flowerRightBig1, '-=100px', - 50);
                    this.animateFlowerFall(this.$flowerRightLeaf1, '-=150px', - 40);
                    this.animateFlowerFall(this.$flowerRightSmall1, '-=200px', 30);
                    this.animateFlowerFall(this.$flowerRightBig2, '-=250px', - 90);
                    this.animateFlowerFall(this.$flowerRightLeaf2, '-=300px', - 70);
                    this.animateFlowerFall(this.$flowerRightSmall2, '-=400px', 50);
                    this.animateFlowerFall(this.$flowerRightBig3, '-=450px', 50);
                    this.animateFlowerFall(this.$flowerRightLeaf3, '-=500px', - 60);
                    this.animateFlowerFall(this.$flowerRightSmall3, '-=550px', 80);
                    this.animateFlowerFall(this.$flowerRightBig4, '-=600px', - 70);
                    this.animateFlowerFall(this.$flowerRightLeaf4, '-=650px', - 60);
                    this.animateFlowerFall(this.$flowerRightSmall4, '-=700px', 50);

                    // Slide out the flowers
                    this.slideOutFlowers();
                }

                /**
                   * Animates flowers falling
                   * @param flower
                   * @param yOffset
                   * @param rotateOffset
                   */
            }, {
                key: 'animateFlowerFall',
                value: function animateFlowerFall(flower, yOffset, rotateOffset) {
                    TweenMax.fromTo(flower, 2, {
                        y: yOffset,
                        opacity: 0
                    }, {
                        transform: 'rotate(' + rotateOffset + 'deg)',
                        y: 0,
                        opacity: 1,
                        ease: Cubic.easeOut
                    }).delay(0.4);
                }

                /**
                   * Slides out flowers from the screen
                   */
            }, {
                key: 'slideOutFlowers',
                value: function slideOutFlowers() {
                    var _this = this;

                    // Slide out flowers from the left side
                    var leftAnimationDuration = 0.3;
                    _.each(this.$flowersLeft, function (flower) {
                        TweenMax.to(flower, leftAnimationDuration, {
                            x: '-=1000px',
                            ease: Cubic.easeIn,
                            onComplete: function onComplete() {
                                flower.hide();
                            }
                        }).delay(2.0);
                        leftAnimationDuration += 0.02;
                    });

                    // Slide out flowers from the right side
                    var rightAnimationDuration = 0.3;
                    _.each(this.$flowersRight, function (flower) {
                        TweenMax.to(flower, rightAnimationDuration, {
                            x: '+=1000px',
                            ease: Cubic.easeIn,
                            onComplete: function onComplete() {
                                flower.hide();
                            }
                        }).delay(2.0);
                        rightAnimationDuration += 0.02;
                    });

                    setTimeout(function () {
                        _this.initTransition();
                    }, 2500);
                }

                /**
                   *  Initialize opening transition
                   */
            }, {
                key: 'initTransition',
                value: function initTransition() {
                    var _this2 = this;

                    TweenMax.to(this.$elTransition, 2.0, {
                        opacity: 0,
                        onComplete: function onComplete() {
                            _this2.$elTransition.remove();
                        }
                    });

                    setTimeout(function () {
                        if (!!_this2.callback) {
                            _this2.callback();
                        }
                    }, 500);
                }
            }
            ]);

            return KingdomFlowers;
        })();

        exports['default'] = KingdomFlowers;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3
    }
    ],
    21: [function(require, module, exports) {
        /**
         * @module     Menu Toggle
         * 
         * @example    var menuToggle = new MenuToggle( $('#toggle'), $('#target'), {options} );
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var MenuToggle = function MenuToggle($toggle, $target, $optionsObj) {

            this.$body = $('body');
            this.$toggle = $toggle;
            this.$target = $target;

            this.options = $.extend({
                speed: 400,
                activeClass: 'active',
                activeBodyClass: 'menu-active'
            }, $optionsObj || {});

            this.isOpen = false;

            this._bindEvents();
        };

        MenuToggle.prototype = {

            _bindEvents: function _bindEvents() {

                this.$toggle.on('click', (function (event) {
                    event.preventDefault();
                    if (this.isOpen) {
                        this.close();
                    } else {
                        this.open();
                    }
                }).bind(this));
            },

            open: function open() {
                this.isOpen = true;
                this.$toggle.addClass(this.options.activeClass);
                this.$target.addClass(this.options.activeClass);
                this.$body.addClass(this.options.activeBodyClass);
            },

            close: function close() {
                this.isOpen = false;
                this.$toggle.removeClass(this.options.activeClass);
                this.$target.removeClass(this.options.activeClass);
                this.$body.removeClass(this.options.activeBodyClass);
            }

        };

        exports['default'] = MenuToggle;
        module.exports = exports['default'];

    }, {}
    ],
    22: [function(require, module, exports) {
        /**
         * @module     widgets/ModalWindow
         * @desc       Takes a hidden element on the page and displays it in a modal window
         * @example    var modalWindow = new ModalWindow('.modal-trigger', {options});
         */

        /**
         * Set up a custom modal window by istantiating this object.
         * @alias module:widgets/ModalWindow
         * @param  {String | Array} $selector CSS selector for click listener '.my-class' or ['.my-class-1', '.my-class-2']
         * @param  {Object} $options Used to pass various options into the modal window. Set 'deeplink' to true to activate deeplinking.
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var ModalWindow = function ModalWindow($selector, $options) {
            var key;

            /**
              * Options array used to store various settings for this specific modal.
              * <ul><li>strTargetSelector - element to pull into modal window</li>
              * <li>strClassName - custom class for CSS overrides</li>
              * <li>strCloseText - close button text</li>
              * <li>boolControls - toggles modal controls</li>
              * <li>onInitialize - callback function happens after initialization</li>
              * <li>onShow - callback function when modal opens</li>
              * <li>onHide - callback function when modal closes</li>
              * <li>deeplink - deeplinking via # url</li></ul>
              * @type {Object}
              */
            this.options = {
                strTargetSelector: null,
                // element to pull into modal window
                strClassName: null,
                // custom class for CSS overrides
                strCloseText: 'Close',
                // close button text
                boolControls: true,
                // toggles modal controls
                onInitialize: null,
                // callback function happens after initialization
                onShow: null,
                // callback function when modal opens
                onHide: null,
                // callback function when modal closes
                deeplink: false // deeplinking via # url
            };

            /**
              * Array storing the various deeplink urls associated with this modal.
              * @type {Array}
              */
            this.deeplinks = [];

            // replace default options with instanciated values
            if ($options) {
                for (key in this.options) {
                    if (this.options.hasOwnProperty(key)) {
                        if ($options[key] || typeof $options[key] === 'boolean') {
                            this.options[key] = $options[key];
                        }
                    }
                }
            }

            this._initialize($selector);
        };

        ModalWindow.prototype = {
            options: null,
            elTrigger: null,
            elWindow: null,
            elDocument: null,
            elBody: null,
            elModal: null,
            elOverlay: null,
            elBtnClose: null,

            /**
              * Set up the base for a modal window.
              * @param  {String | Array} $selector CSS selector for click listener '.my-class' or ['.my-class-1', '.my-class-2']
              */
            _initialize: function _initialize($selector) {
                var i, ii;

                // process trigger selectors
                if ($selector instanceof Array) {
                    this.elTrigger = $($selector[0]);

                    for (i = 0, ii = $selector.length; i < ii; i += 1) {
                        this.elTrigger.add($selector[i]);
                    }
                } else if (typeof $selector === 'string') {
                    this.elTrigger = $($selector);
                } else {
                    this.elTrigger = null;
                }

                // bind index data to each trigger element
                for (i = 0, ii = this.elTrigger.length; i < ii; i += 1) {
                    $(this.elTrigger[i]).attr('data-index', i);
                    if (this.options.deeplink) {
                        // check for deeplinks
                        var linkURL = $(this.elTrigger[i]).attr('href');
                        linkURL = linkURL.substring(0, 1) === '#' ? linkURL.substring(1) : linkURL;
                        this.deeplinks.push(linkURL);
                    }
                }

                this.elWindow = $(window);
                this.elDocument = $(document);
                this.elBody = $('body');

                this._buildUI();

                if (this.options.boolControls) {
                    this._bindEvents();
                }

                // fire init callback
                if (typeof this.options.onInitialize === 'function') {
                    this.options.onInitialize(this);
                }

                // check routing
                if (this.options.deeplink) 
                    this._checkRoute();

                delete this._initialize;
            },

            /**
              * Setup user interface for modal window.
              */
            _buildUI: function _buildUI() {
                var windowHeight = window.outerHeight,
                bodyHeight = this.elBody.offsetHeight,
                overlayHeight = windowHeight > bodyHeight ? windowHeight : bodyHeight,
                strClassName = this.options.strClassName;

                // define elements for modal window
                this.elOverlay = $('<div id="overlay" />').hide();
                this.elModal = $('<div id="modal-window" />').hide();
                this.elBtnClose = $('<button id="btn-modal-close" />');

                if (strClassName) {
                    this.elOverlay.addClass(strClassName);
                    this.elModal.addClass(strClassName);
                    this.elBtnClose.addClass(strClassName);
                }

                this.elBtnClose.text(this.options.strCloseText);

                this.elOverlay.height(overlayHeight);

                delete this._buildUI;
            },

            /**
              * Bind events for modal window. Some event listeners are added after modal is opened.
              */
            _bindEvents: function _bindEvents() {
                if (this.elTrigger.length) {
                    this.elTrigger.on('click', this._onOpenHandler.bind(this));
                }

                // some listeners only get added once modal is show, check 'show' method

                if (this.options.deeplink) 
                    this.elWindow.on('hashchange', this._checkRoute.bind(this));

                delete this._bindEvents;
            },

            /**
              * Remove event listners for modal window.
              */
            _unBindEvents: function _unBindEvents() {
                if (this.elTrigger.length) {
                    this.elTrigger.off('click', this._onOpenHandler.bind(this));
                }

                // ensure active listeners are removed, added when 'show' is called
                this.elBtnClose.off('click', this._onCloseHandler.bind(this));
                this.elBody.off('click', '#overlay', this._onCloseHandler.bind(this));
                this.elDocument.off('keydown', this._onKeyDownHandler.bind(this));

                if (this.options.deeplink) 
                    this.elWindow.off('hashchange', this._checkRoute.bind(this));

                delete this._unBindEvents;
            },

            /**
              * Checks the window hash when deeplinking is enabled. Triggered when 'hashchange' event fires.
              */
            _checkRoute: function _checkRoute() {
                if (window.location.hash) {
                    var hash = window.location.hash.substring(1); // get route url without hash
                    // check if our hash location is equivalent to our modal link
                    if ($.inArray(hash, this.deeplinks) !== - 1) {
                        if (this.elTrigger.length) {
                            // trigger modal
                            this.elTrigger.trigger('click');
                        }
                    }
                }
            },

            /**
              * Removes hash when deeplinking is enabled and modal closes.
              */
            _removeHash: function _removeHash() {
                var scrollV,
                scrollH,
                loc = window.location;
                if ("pushState" in history) {
                    // remove hash including #, prefered method
                    history.pushState("", document.title, loc.pathname + loc.search);
                } else {
                    // triggered in older browsers
                    // Prevent scrolling by storing the page's current scroll offset
                    scrollV = document.body.scrollTop;
                    scrollH = document.body.scrollLeft;
                    // remove hash
                    loc.hash = "";
                    // Restore the scroll offset
                    document.body.scrollTop = scrollV;
                    document.body.scrollLeft = scrollH;
                }
            },

            /**
              * Checks for the 'esc' keypress when user presses a key while the modal is active.
              * @param  {Object} $event jQuery keypress event object
              */
            _onKeyDownHandler: function _onKeyDownHandler($event) {
                if ($event.keyCode === 27) {
                    $event.preventDefault();
                    this.hide();
                }
            },

            /**
              * Triggers the showing of the modal when a click is fired on the target element.
              * @param  {Object} $event jQuery click event object
              */
            _onOpenHandler: function _onOpenHandler($event) {
                $event.preventDefault();
                var elTarget = this.options.strTargetSelector ? $(this.options.strTargetSelector) : $($event.currentTarget.getAttribute('href'));

                this.elCurrentTrigger = $($event.target);

                if (!this.options.deeplink) 
                    $event.preventDefault(); // only prevent url update if deeplinking is not enabled

                this.show(elTarget);
            },

            /**
              * Triggers the hididng of the modal when a click is fired on the close element.
              * @param  {Object} $event jQuery click event object
              */
            _onCloseHandler: function _onCloseHandler($event) {
                $event.preventDefault();
                this.hide();
            },

            /**
              * Show the modal when called. Adds event listeners for active state of modal.
              * @param  {String} $elTarget CSS selector for target element to show.
              */
            show: function show($elTarget) {
                var elOldModal = $('#modal-window'),
                elOldOverlay = $('#overlay');

                // add active listeners
                // hide on close button click
                this.elBtnClose.on('click', this._onCloseHandler.bind(this));
                // hide on overlay click
                this.elBody.on('click', '#overlay', this._onCloseHandler.bind(this));
                // hide on escape
                this.elDocument.on('keydown', this._onKeyDownHandler.bind(this));

                this.elBody.addClass('modal-active');

                // remove old modal elements
                if (elOldModal.length) {
                    this.elBody.append(elOldModal.children().hide());

                    elOldModal.remove();
                    elOldOverlay.remove();
                }

                // add modal elements
                this.elBody.append(this.elOverlay);
                this.elBody.append(this.elModal);

                if ($elTarget) {

                    this.elModal.empty().append($elTarget).append(this.elBtnClose);

                    this.elBtnClose.show().css('opacity', 1);

                    $elTarget.show();
                }

                // fadein modal and overlay
                this.elOverlay.fadeIn(400);
                this.elModal.show().animate({
                    'opacity': 1
                }, 400, function () {
                    if ($elTarget) {
                        $elTarget.css('opacity', 1);
                    }
                });

                // fire show callback
                if (typeof this.options.onShow === 'function') {
                    this.options.onShow(this);
                }
            },

            /**
              * Hides the modal window and removes event listners specific to active state of modal.
              */
            hide: function hide() {
                var self = this;

                // remove active listeners
                this.elBtnClose.off('click', this._onCloseHandler.bind(this));
                this.elBody.off('click', '#overlay', this._onCloseHandler.bind(this));
                this.elDocument.off('keydown', this._onKeyDownHandler.bind(this));

                this.elBody.removeClass('modal-active');

                // fire hide callback
                if (this.options && typeof this.options.onHide === 'function') {
                    this.options.onHide(this);
                }

                // fadeout and remove elements
                this.elOverlay.fadeOut(200, function () {
                    self.elOverlay.remove();
                });

                this.elModal.fadeOut(400, function () {
                    var elChildren = self.elModal.children();

                    elChildren.hide().css('opacity', 0);

                    self.elBody.append(elChildren);

                    self.elBtnClose.remove();

                    self.elModal.remove();
                });

                if (this.options.deeplink) 
                    this._removeHash();
            },

            /**
              * Uninit modal window by removing all variables, listners and methods.
              */
            unInitialize: function unInitialize() {
                this.options = null;
                this.elTrigger = null;
                this.elWindow = null;
                this.elDocument = null;
                this.elBody = null;
                this.elModal = null;
                this.elOverlay = null;
                this.elBtnClose = null;

                this._unBindEvents();

                delete this.show;
                delete this.hide;
                delete this.unInitialize;
                delete this._checkRoute;
                delete this._removeHash;
                delete this._onKeyDownHandler;
                delete this._onOpenHandler;
                delete this._onCloseHandler;
            }
        };

        exports['default'] = ModalWindow;
        module.exports = exports['default'];

    }, {}
    ],
    23: [function(require, module, exports) {
        /**
         * @module     Ooyala Video Player
         * @desc       This code references NINTENDO's OVPlayer object in their required libs and includes. It is used to embed Ooyala video IDs.
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        var OoyalaVideo = {
            embedOoyalaVideo: function embedOoyalaVideo($objOptions) {
                var objPlayer = Object.create(OVPplayer);
                var callback = $objOptions.callback || this.onVideoUpdate;
                objPlayer.insert({
                    // forcehtml: true,
                    color: '2477a9',
                    //wiiu, wii, 3ds or hex color
                    target: $objOptions.target,
                    embedCode: $objOptions.embedCode,
                    autoplay: $objOptions.autoplay,
                    width: $objOptions.width,
                    height: $objOptions.height,
                    loop: $objOptions.loop,
                    dontreplace: true,
                    callback: callback
                });
            },
            onVideoUpdate: function onVideoUpdate($video) {
                //console.log("updating video: " + $video);
            }
        };

        exports['default'] = OoyalaVideo;
        module.exports = exports['default'];

    }, {}
    ],
    24: [function(require, module, exports) {
        /*
        	MODULE: ResponsiveCarousel

        	DESCRIPTION: A carousel widget that responds to mobile, tablet, and desaktop media queries

        	USAGE: var myCarousel = new ResponsiveCarousel('Element', 'Options')
        		@param {jQuery $Element}
        		@param {Object}

        	DEPENDENCIES:
        		- jquery 2.1x+
        		- greensock

        */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) 
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) 
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps) 
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        })();

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var ResponsiveCarousel = (function () {
            function ResponsiveCarousel($el, objOptions) {
                _classCallCheck(this, ResponsiveCarousel);

                this.$window = $(window);
                this.$htmlBody = $('html, body');
                this.initialize($el, objOptions);
            }

            _createClass(ResponsiveCarousel, [{
                key: 'initialize',
                value: function initialize($el, objOptions) {

                    // defaults
                    this.$el = $el;
                    this.options = $.extend({
                        initialIndex: 0,
                        numVisibleItemsMobile: 1,
                        numItemsToAnimateMobile: 1,
                        numVisibleItemsTablet: 2,
                        numItemsToAnimateTablet: 2,
                        numVisibleItemsDesktop: 4,
                        numItemsToAnimateDesktop: 4,
                        enableSwipe: true,
                        loopEndToEnd: false,
                        selectorNavPrev: '.nav-prev',
                        selectorNavNext: '.nav-next',
                        selectorInnerTrack: '.inner-track',
                        selectorPanels: 'article',
                        classActiveItem: 'active',
                        classNavDisabled: 'disabled',
                        autoRotate: false,
                        autoRotateInterval: 8000,
                        maxAutoRotations: 5,
                        animDuration: 0.4,
                        animEasing: 'Power4.easeInOut',
                        selectorFocusEls: 'a, button, input, select, textarea',
                        customEventName: 'ResponsiveCarousel'
                    }, objOptions || {});

                    // element references
                    this.$navPrev = this.$el.find(this.options.selectorNavPrev);
                    this.$navNext = this.$el.find(this.options.selectorNavNext);
                    this.$innerTrack = this.$el.find(this.options.selectorInnerTrack);
                    this.$panels = this.$innerTrack.children(this.options.selectorPanels);

                    // setup & properties
                    this._length = this.$panels.length;
                    if (this.options.initialIndex >= this._length) {
                        this.options.initialIndex = 0;
                    }
                    this.currentIndex = this.options.initialIndex;
                    this.lastIndex = null;
                    this.itemWidth = null;
                    this.scrollAmt = null;
                    this.trackWidth = null;
                    this.numVisibleItems = null;
                    this.numItemsToAnimate = null;
                    this.isAnimating = false;

                    this.initDOM();

                    this.setOptions();

                    this.setDOM();

                    this.bindEvents();

                    $.event.trigger(this.options.customEventName + ':isInitialized', [this.$el]);
                }

                /**
                  *	Private Methods
                  **/

            }, {
                key: 'initDOM',
                value: function initDOM() {

                    this.$el.attr({
                        'role': 'tablist',
                        'aria-live': 'polite' 
                    });
                    this.$navPrev.attr({
                        'role': 'button',
                        'tabindex': '0' 
                    });
                    this.$navNext.attr({
                        'role': 'button',
                        'tabindex': '0' 
                    });
                    this.$panels.attr({
                        'role': 'tabpanel',
                        'tabindex': '-1',
                        'aria-hidden': 'true' 
                    });

                    // auto-rotate items
                    if (this.options.autoRotate) {
                        this.rotationInterval = this.options.autoRotateInterval;
                        this.autoRotationCounter = this._length * this.options.maxAutoRotations;
                        this.setAutoRotation = setInterval((function () {
                            this.autoRotation();
                        }).bind(this), this.rotationInterval);
                    }
                }
            }, {
                key: 'setOptions',
                value: function setOptions() {
                    // console.log(Constants.currentBreakpoint);

                    switch (_configConstants2['default'].currentBreakpoint) {
                    case 'mobile':
                        this.numVisibleItems = this.options.numVisibleItemsMobile;
                        this.numItemsToAnimate = this.options.numItemsToAnimateMobile;
                        break;
                    case 'tablet':
                        this.numVisibleItems = this.options.numVisibleItemsTablet;
                        this.numItemsToAnimate = this.options.numItemsToAnimateTablet;
                        break;
                    case 'desktop':
                        this.numVisibleItems = this.options.numVisibleItemsDesktop;
                        this.numItemsToAnimate = this.options.numItemsToAnimateDesktop;
                        break;
                    default:
                        console.error('ERROR: Invalid Breakpoint');
                    }

                    this.lastIndex = this._length - this.numVisibleItems;
                    if (this.currentIndex > this.lastIndex) {
                        this.currentIndex = this.lastIndex;
                    }
                    this.itemWidth = 100 / this._length;
                    this.scrollAmt = 100 / this.numVisibleItems * - 1;
                    this.trackWidth = 1 / this.numVisibleItems * (this._length * 100);
                }
            }, {
                key: 'setDOM',
                value: function setDOM() {
                    var itemWidth = this.itemWidth + '%';
                    var trackWidth = this.trackWidth + '%';
                    var leftPos = this.scrollAmt * this.currentIndex + '%';

                    // disable nav links if not enough visible items
                    this.updateNav();
                    if (this._length <= this.numVisibleItems) {
                        this.$navPrev.addClass(this.options.classNavDisabled).attr({
                            'tabindex': '-1' 
                        });
                        this.$navNext.addClass(this.options.classNavDisabled).attr({
                            'tabindex': '-1' 
                        });
                    }

                    // adjust initial position
                    this.$panels.css({
                        width: itemWidth 
                    });
                    TweenMax.set(this.$innerTrack, {
                        width: trackWidth,
                        left: leftPos
                    });

                    this.deactivateItems();
                    this.activateItems();
                }
            }, {
                key: 'bindEvents',
                value: function bindEvents() {
                    var self = this;

                    this.$window.on(_configEvents2['default'].BREAKPOINT_CHANGE, (function (event, params) {
                        self.__onBreakpointChange(event, params);
                    }).bind(this));

                    this.$navPrev.on('click', (function (event) {
                        event.preventDefault();
                        if (!this.$navPrev.hasClass(this.options.classNavDisabled) && !this.isAnimating) {
                            this.__clickNavPrev(event);
                        }
                    }).bind(this));

                    this.$navNext.on('click', (function (event) {
                        event.preventDefault();
                        if (!this.$navNext.hasClass(this.options.classNavDisabled) && !this.isAnimating) {
                            this.__clickNavNext(event);
                        }
                    }).bind(this));

                    if (this.options.enableSwipe) {
                        this.$el.swipe({
                            fingers: 'all',
                            excludedElements: '.noSwipe',
                            threshold: 50,
                            triggerOnTouchEnd: false,
                            // triggers on threshold
                            swipeLeft: function swipeLeft(event) {
                                if (!self.$navNext.hasClass(self.options.classNavDisabled) && !self.isAnimating) {
                                    self.__clickNavNext(event);
                                }
                            },
                            swipeRight: function swipeRight(event) {
                                if (!self.$navPrev.hasClass(self.options.classNavDisabled) && !self.isAnimating) {
                                    self.__clickNavPrev(event);
                                }
                            },
                            allowPageScroll: 'vertical'
                        });
                    }
                }
            }, {
                key: 'unbindEvents',
                value: function unbindEvents() {
                    this.$window.off(_configEvents2['default'].BREAKPOINT_CHANGE, function () {});
                    this.$navPrev.off('click', function () {});
                    this.$navNext.off('click', function () {});
                    if (this.options.enableSwipe) {
                        this.$el.swipe('destroy');
                    }
                }
            }, {
                key: 'autoRotation',
                value: function autoRotation() {

                    if (this.currentIndex === this.lastIndex) {
                        this.currentIndex = 0;
                    } else {
                        this.currentIndex += this.numItemsToAnimate;
                        if (this.currentIndex > this.lastIndex) {
                            this.currentIndex = this.lastIndex;
                        }
                    }

                    this.updateCarousel();
                    this.autoRotationCounter--;

                    if (this.autoRotationCounter === 0) {
                        clearInterval(this.setAutoRotation);
                        this.options.autoRotate = false;
                    }
                }

                /**
                  *	Event Handlers
                  **/

            }, {
                key: '__onBreakpointChange',
                value: function __onBreakpointChange(event, params) {
                    // console.log(params);
                    this.setOptions();
                    this.setDOM();
                }
            }, {
                key: '__clickNavPrev',
                value: function __clickNavPrev(event) {

                    if (this.options.autoRotate) {
                        clearInterval(this.setAutoRotation);
                        this.options.autoRotate = false;
                    }

                    if (this.options.loopEndToEnd && this.currentIndex === 0) {
                        this.currentIndex = this.lastIndex;
                    } else {
                        this.currentIndex -= this.numItemsToAnimate;
                        if (this.currentIndex < 0) {
                            this.currentIndex = 0;
                        }
                    }

                    this.updateCarousel(event);
                }
            }, {
                key: '__clickNavNext',
                value: function __clickNavNext(event) {

                    if (this.options.autoRotate) {
                        clearInterval(this.setAutoRotation);
                        this.options.autoRotate = false;
                    }

                    if (this.options.loopEndToEnd && this.currentIndex === this.lastIndex) {
                        this.currentIndex = 0;
                    } else {
                        this.currentIndex += this.numItemsToAnimate;
                        if (this.currentIndex > this.lastIndex) {
                            this.currentIndex = this.lastIndex;
                        }
                    }

                    this.updateCarousel(event);
                }

                /**
                  *	Public Methods
                  **/

            }, {
                key: 'updateCarousel',
                value: function updateCarousel(event) {
                    var self = this;
                    var leftPos = this.scrollAmt * this.currentIndex + '%';
                    var $activePanel = this.$panels.eq(this.currentIndex);

                    this.isAnimating = true;

                    this.deactivateItems();
                    this.activateItems();
                    this.updateNav();

                    TweenMax.to(this.$innerTrack, this.options.animDuration, {
                        left: leftPos,
                        ease: this.options.animEasing,
                        onComplete: function onComplete() {
                            self.isAnimating = false;
                            if (!!event) {
                                self.focusOnPanel($activePanel);
                            }
                        }
                    });

                    $.event.trigger(this.options.customEventName + ':carouselUpdated', [this.currentIndex]);
                }
            }, {
                key: 'updateNav',
                value: function updateNav() {

                    this.$navPrev.removeClass(this.options.classNavDisabled).attr({
                        'tabindex': '0' 
                    });
                    this.$navNext.removeClass(this.options.classNavDisabled).attr({
                        'tabindex': '0' 
                    });

                    if (!this.options.loopEndToEnd) {
                        if (this.currentIndex <= 0) {
                            this.$navPrev.addClass(this.options.classNavDisabled).attr({
                                'tabindex': '-1' 
                            });
                        }
                        if (this.currentIndex >= this.lastIndex) {
                            this.$navNext.addClass(this.options.classNavDisabled).attr({
                                'tabindex': '-1' 
                            });
                        }
                    }
                }
            }, {
                key: 'deactivateItems',
                value: function deactivateItems() {
                    this.$panels.removeClass(this.options.classActiveItem).attr({
                        'tabindex': '-1',
                        'aria-hidden': 'true' 
                    });
                    this.$panels.find(this.options.selectorFocusEls).attr({
                        'tabindex': '-1' 
                    });
                }
            }, {
                key: 'activateItems',
                value: function activateItems() {
                    var first = this.currentIndex;
                    var last = this.currentIndex + this.numVisibleItems;
                    var $activeItems = this.$panels.slice(first, last);

                    $activeItems.addClass(this.options.classActiveItem).attr({
                        'tabindex': '0',
                        'aria-hidden': 'false' 
                    });
                    $activeItems.find(this.options.selectorFocusEls).attr({
                        'tabindex': '0' 
                    });
                }
            }, {
                key: 'focusOnPanel',
                value: function focusOnPanel($panel) {
                    var pnlTop = $panel.offset().top;
                    var pnlHeight = $panel.outerHeight();
                    var winTop = this.$window.scrollTop();
                    var winHeight = this.$window.height();
                    if (pnlHeight > winHeight || pnlTop < winTop) {
                        this.$htmlBody.animate({
                            scrollTop: pnlTop 
                        }, 200, function () {
                            $panel.focus();
                        });
                    } else {
                        $panel.focus();
                    }
                }
            }
            ]);

            return ResponsiveCarousel;
        })();

        exports['default'] = ResponsiveCarousel;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3
    }
    ],
    25: [function(require, module, exports) {
        /*
        	MODULE: TabSwitcher

        	DESCRIPTION: Basic TabSwitcher widget

        	USAGE: var myTabSwitcher = new TabSwitcher('Element', 'Options')
        		@param {jQuery Object}
        		@param {Object}

        	DEPENDENCIES:
        		- jquery 2.1x+

         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) 
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) 
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps) 
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        })();

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var _widgetsHeightEqualizer = require('widgets/HeightEqualizer');

        var _widgetsHeightEqualizer2 = _interopRequireDefault(_widgetsHeightEqualizer);

        var TabSwitcher = (function () {
            function TabSwitcher($el, objOptions) {
                _classCallCheck(this, TabSwitcher);

                this.$window = $(window);
                this.$htmlBody = $('html, body');
                this.initialize($el, objOptions);
            }

            _createClass(TabSwitcher, [{
                key: 'initialize',
                value: function initialize($el, objOptions) {

                    // defaults
                    this.$el = $el;
                    this.options = $.extend({
                        initialIndex: 0,
                        selectorTabs: '.tabnav a',
                        selectorPanels: '.tab-panel',
                        activeClass: 'active',
                        equalizeHeight: false,
                        autoRotate: false,
                        autoRotateInterval: 6000,
                        maxAutoRotations: 5,
                        animDuration: 400,
                        selectorFocusEls: 'a, button, input, select, textarea',
                        customEventName: 'TabSwitcher'
                    }, objOptions || {});

                    // element references
                    this.$tabs = this.$el.find(this.options.selectorTabs);
                    this.$panels = this.$el.find(this.options.selectorPanels);

                    // setup & properties
                    this._length = this.$panels.length;
                    if (this.options.initialIndex >= this._length) {
                        this.options.initialIndex = 0;
                    }
                    this.currentIndex = this.options.initialIndex;
                    this.previousIndex = null;
                    this.heightEqualizer = null;
                    this.isAnimating = false;

                    this.initDOM();

                    this.bindEvents();

                    $.event.trigger(this.options.customEventName + ':isInitialized', [this.$el]);
                }

                /**
                  *	Private Methods
                  **/

            }, {
                key: 'initDOM',
                value: function initDOM() {
                    var $activeTab = this.$tabs.eq(this.currentIndex);
                    var $activePanel = this.$panels.eq(this.currentIndex);

                    this.$el.attr({
                        'role': 'tablist',
                        'aria-live': 'polite' 
                    });
                    this.$tabs.attr({
                        'role': 'tab',
                        'tabindex': '0',
                        'aria-selected': 'false' 
                    });
                    this.$panels.attr({
                        'role': 'tabpanel',
                        'tabindex': '-1',
                        'aria-hidden': 'true' 
                    });
                    this.$panels.find(this.options.selectorFocusEls).attr({
                        'tabindex': '-1' 
                    });

                    // equalize items height
                    if (this.options.equalizeHeight) {
                        this.heightEqualizer = new _widgetsHeightEqualizer2['default'](this.$el, {
                            selectorItems: this.options.selectorPanels,
                            setParentHeight: false
                        });
                    }

                    $activeTab.addClass(this.options.activeClass).attr({
                        'aria-selected': 'true' 
                    });
                    $activePanel.addClass(this.options.activeClass).attr({
                        'tabindex': '0',
                        'aria-hidden': 'false' 
                    });
                    $activePanel.find(this.options.selectorFocusEls).attr({
                        'tabindex': '0' 
                    });

                    // auto-rotate items
                    if (this.options.autoRotate) {
                        this.rotationInterval = this.options.autoRotateInterval;
                        this.autoRotationCounter = this._length * this.options.maxAutoRotations;
                        this.setAutoRotation = setInterval((function () {
                            this.autoRotation();
                        }).bind(this), this.rotationInterval);
                    }
                }
            }, {
                key: 'uninitDOM',
                value: function uninitDOM() {

                    this.$el.removeAttr('role aria-live');
                    this.$tabs.removeAttr('role tabindex aria-selected').removeClass(this.options.activeClass);
                    this.$panels.removeAttr('role tabindex aria-hidden').removeClass(this.options.activeClass);
                    this.$panels.find(this.options.selectorFocusEls).removeAttr('tabindex');

                    if (this.options.autoRotate) {
                        clearInterval(this.setAutoRotation);
                    }
                }
            }, {
                key: 'bindEvents',
                value: function bindEvents() {
                    this.$window.on('resize', this.__onWindowResize.bind(this));
                    this.$tabs.on('click', this.__clickTab.bind(this));
                }
            }, {
                key: 'unbindEvents',
                value: function unbindEvents() {
                    this.$window.off('resize', this.__onWindowResize.bind(this));
                    this.$tabs.off('click', this.__clickTab.bind(this));
                }
            }, {
                key: 'autoRotation',
                value: function autoRotation() {
                    this.previousIndex = this.currentIndex;
                    this.currentIndex++;
                    if (this.currentIndex === this._length) {
                        this.currentIndex = 0;
                    }

                    this.switchPanels();

                    this.autoRotationCounter--;
                    if (this.autoRotationCounter === 0) {
                        clearInterval(this.setAutoRotation);
                        this.options.autoRotate = false;
                    }
                }

                /**
                  *	Event Handlers
                  **/

            }, {
                key: '__onWindowResize',
                value: function __onWindowResize(event) {
                    if (this.options.equalizeHeight) {
                        this.heightEqualizer.resetHeight();
                    }
                }
            }, {
                key: '__clickTab',
                value: function __clickTab(event) {
                    event.preventDefault();
                    var index = this.$tabs.index(event.currentTarget);

                    if (this.isAnimating) {
                        return;
                    }

                    if (this.options.autoRotate) {
                        clearInterval(this.setAutoRotation);
                        this.options.autoRotate = false;
                    }

                    if (this.currentIndex === index) {
                        this.$panels[index].focus();
                    } else {
                        this.previousIndex = this.currentIndex;
                        this.currentIndex = index;
                        this.switchPanels(event);
                    }
                }

                /**
                  *	Public Methods
                  **/

            }, {
                key: 'goToPanel',
                value: function goToPanel(index, fade) {
                    var self = this;

                    var fadeAnimation = fade || false;
                    var $inactiveTab = this.$tabs.eq(this.currentIndex);
                    var $inactivePanel = this.$panels.eq(this.currentIndex);
                    var $activeTab = this.$tabs.eq(index);
                    var $activePanel = this.$panels.eq(index);

                    this.isAnimating = true;

                    //update tabs
                    $inactiveTab.removeClass(this.options.activeClass).attr({
                        'aria-selected': 'false' 
                    });
                    $activeTab.addClass(this.options.activeClass).attr({
                        'aria-selected': 'true' 
                    });

                    //update panels
                    if (fadeAnimation) {
                        $activePanel.fadeIn(400).addClass(this.options.activeClass).attr({
                            'tabindex': '0',
                            'aria-hidden': 'false' 
                        });
                        $activePanel.find(this.options.selectorFocusEls).attr({
                            'tabindex': '0' 
                        });
                        setTimeout(function () {
                            $inactivePanel.removeClass(self.options.activeClass).hide().attr({
                                'tabindex': '-1',
                                'aria-hidden': 'true' 
                            });
                            $inactivePanel.find(self.options.selectorFocusEls).attr({
                                'tabindex': '-1' 
                            });
                        }, 400);
                    } else {
                        $inactivePanel.removeClass(this.options.activeClass).attr({
                            'tabindex': '-1',
                            'aria-hidden': 'true' 
                        });
                        $inactivePanel.find(this.options.selectorFocusEls).attr({
                            'tabindex': '-1' 
                        });
                        $activePanel.addClass(this.options.activeClass).attr({
                            'tabindex': '0',
                            'aria-hidden': 'false' 
                        });
                        $activePanel.find(this.options.selectorFocusEls).attr({
                            'tabindex': '0' 
                        });
                    }

                    this.previousIndex = this.currentIndex;
                    this.currentIndex = index;

                    this.isAnimating = false;
                }
            }, {
                key: 'switchPanels',
                value: function switchPanels(event) {
                    var self = this;
                    var $inactiveTab = this.$tabs.eq(this.previousIndex);
                    var $inactivePanel = this.$panels.eq(this.previousIndex);
                    var $activeTab = this.$tabs.eq(this.currentIndex);
                    var $activePanel = this.$panels.eq(this.currentIndex);

                    this.isAnimating = true;

                    //update tabs
                    $inactiveTab.removeClass(this.options.activeClass).attr({
                        'aria-selected': 'false' 
                    });
                    $activeTab.addClass(this.options.activeClass).attr({
                        'aria-selected': 'true' 
                    });

                    //update panels
                    $inactivePanel.removeClass(this.options.activeClass).attr({
                        'tabindex': '-1',
                        'aria-hidden': 'true' 
                    });
                    $inactivePanel.find(this.options.selectorFocusEls).attr({
                        'tabindex': '-1' 
                    });
                    $activePanel.addClass(this.options.activeClass).attr({
                        'tabindex': '0',
                        'aria-hidden': 'false' 
                    });
                    $activePanel.find(this.options.selectorFocusEls).attr({
                        'tabindex': '0' 
                    });

                    setTimeout((function () {
                        this.isAnimating = false;
                        if (!!event) {
                            this.focusOnPanel($activePanel);
                        }
                    }).bind(this), this.options.animDuration);

                    $.event.trigger(this.options.customEventName + ':panelOpened', [this.currentIndex]);
                }
            }, {
                key: 'focusOnPanel',
                value: function focusOnPanel($panel) {
                    var pnlTop = $panel.offset().top - 120;
                    var pnlHeight = $panel.outerHeight();
                    var winTop = this.$window.scrollTop();
                    var winHeight = this.$window.height();
                    if (pnlHeight > winHeight || pnlTop < winTop) {
                        this.$htmlBody.animate({
                            scrollTop: pnlTop 
                        }, 200, function () {
                            $panel.focus();
                        });
                    } else {
                        $panel.focus();
                    }
                }
            }, {
                key: 'unInitialize',
                value: function unInitialize() {
                    this.unbindEvents();
                    this.uninitDOM();
                    this.$el = null;
                    this.$tabs = null;
                    this.$panels = null;
                    $.event.trigger(this.options.customEventName + ':unInitialized');
                }
            }
            ]);

            return TabSwitcher;
        })();

        exports['default'] = TabSwitcher;
        module.exports = exports['default'];

    }, {
        "widgets/HeightEqualizer": 19
    }
    ],
    26: [function(require, module, exports) {
        /**
         * @module  VideoBlade
         * @desc    Handling video blades sections auto play when visible in user's viewport.
         * @example new VideoBlade($('#video-section-id));
         */

        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor) 
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) 
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps) 
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        })();

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                'default': obj 
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var _configConstants = require('config/Constants');

        var _configConstants2 = _interopRequireDefault(_configConstants);

        var _configEvents = require('config/Events');

        var _configEvents2 = _interopRequireDefault(_configEvents);

        var VideoBlade = (function () {
            /**
              * Object contructor
              * @param $el
              */

            function VideoBlade($el) {
                _classCallCheck(this, VideoBlade);

                this.$window = $(window);
                this.initialize($el);
            }

            /**
              * Initialize function
              * @param $el
              */

            _createClass(VideoBlade, [{
                key: 'initialize',
                value: function initialize($el) {
                    this.$el = $el;

                    // Calculate animation duration
                    this.calculateDuration();

                    // Create controller
                    this.createController();

                    // Create scene
                    this.createScene();
                }

                /**
                   * Calculating duration of the animation
                   */
            }, {
                key: 'calculateDuration',
                value: function calculateDuration() {
                    // Calculate window height
                    var windowHeight = this.$window.height();

                    // Calculate video height
                    var videoHeight = this.$el.height();

                    // Calculate for how long video is visible in viewport
                    this.animationDuration = windowHeight + videoHeight;
                }

                /**
                   * Creating a ScrollMagic controller
                   */
            }, {
                key: 'createController',
                value: function createController() {
                    // Initialize ScrollMagic controller
                    this.controller = new ScrollMagic.Controller({
                        globalSceneOptions: {
                            triggerHook: 'onCenter'
                        }
                    });
                }

                /**
                   * Creating a ScrollMagic scene
                   */
            }, {
                key: 'createScene',
                value: function createScene() {
                    // Create a scene
                    this.scene = new ScrollMagic.Scene({
                        triggerElement: '#' + this.$el.attr('id'),
                        duration: this.animationDuration
                    })
                    // Call 'play' function when element enter viewport
                    .on('enter', (function () {
                        this.play();
                    }).bind(this))
                    // Call 'stop' function when element enter viewport
                    .on('leave', (function () {
                        this.stop();
                    }).bind(this))
                    // For debbuging only
                    //.addIndicators()
                    // Add scene to controller
                    .addTo(this.controller);
                }

                /**
                   * Playing video
                   */
            }, {
                key: 'play',
                value: function play() {
                    // Get video element and play it
                    var video = this.$el.find('video');
                    video.get(0).play();
                }

                /**
                   * Stopping video
                   */
            }, {
                key: 'stop',
                value: function stop() {
                    // Get video element and stop it
                    var video = this.$el.find('video');
                    video.get(0).pause();
                }
            }
            ]);

            return VideoBlade;
        })();

        exports['default'] = VideoBlade;
        module.exports = exports['default'];

    }, {
        "config/Constants": 2,
        "config/Events": 3
    }
    ]
}, {}, [6]);


