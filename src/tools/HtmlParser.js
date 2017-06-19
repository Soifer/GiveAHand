export let HtmlContentParser = (function () {

    // options: an object containing configuration options for the singleton
    // e.g var options = { name: "test", pointX: 5};
    function Singleton(options) {

        // set options to the options supplied
        // or an empty object if none are provided
        options = options || {};

        // set some properties for our singleton
        this.scriptList = [];
        this.count = 0;
        this.length = 0;

        this.reset = function () {
            this.count = 0;
            this.scriptList = [];
        };

        this.setLength = function(len) {
            this.length = len;
        };

        this.contentHref = function(content) {
            let paragraphContent = document.createElement('div');
            try {
                paragraphContent.innerHTML = '<div>' + content + '</div>';
                let aTag = paragraphContent.querySelectorAll('a[href*="nana.co.il"],a[href*="nana10.co.il"]');
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < aTag.length; i++) {
                    let href = aTag[i].getAttribute('href');
                    let result = '';
                    let func1 = ['ArticleID', 'SectionID', 'CategoryID'];
                    func1.forEach((element) => {
                        let id = this.getParameterByName(element, href);

                        if (id !== null) {
                            aTag[i].setAttribute('target', '_self');

                            switch (element) {
                                case 'ArticleID':
                                    aTag[i].setAttribute('href', '/article/' + id);
                                    break;

                                case 'SectionID':
                                    aTag[i].setAttribute('href', '/section/' + id);
                                    break;

                                // case 'CategoryID':
                                //     let secId = Constants.CATEGORYTOSECTION[id];
                                //     !isNullOrUndefined(secId) ? aTag[i].setAttribute('href', '/section/' + secId) : aTag[i].setAttribute('href', '/main');
                                //     break;

                                default:
                                    break;
                            }
                        }
                    });
                }
                return paragraphContent.innerHTML;
            } catch (error) {
                return paragraphContent.innerHTML;
            }
        };

        this.getParameterByName = function(name, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, '\\$&');
            let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
            let results = regex.exec(url);
            if (!results)
                return null;
            if (!results[2])
                return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        };

        this.contentScript = function (content) {
            try {
                let script = document.createElement('div');
                script.innerHTML = content;
                let elem = script.getElementsByTagName('script')[0];
                let elem1 = document.createElement('script');
                this.count++;
                if (typeof elem === 'undefined' || typeof elem.src === 'undefined') {
                    if (this.count === this.length) {
                        this.appendToDom();
                    }
                    return false;
                }
                elem1.src = elem.src;

                if (elem1 !== undefined) {
                    if (this.indexOf(elem1) === -1) {
                        elem1.setAttribute('class', 'third-party');
                        this.scriptList.push(elem1);
                    }
                }
                if (this.count === this.length) {
                    this.appendToDom();
                }

            } catch (error) {
                console.log('contentParser.contentHref failed to parse');
                return content;
            }
        };

        this.indexOf = function (elem) {
            for (let i = 0; i < this.scriptList.length; i++) {
                if (this.scriptList[i].src === elem.src) {
                    return i;
                }
            }
            return -1;
        };

        this.appendToDom =function () {
            this.scriptList.forEach((item) => {
                let rr = document.querySelectorAll('script[class="third-party"]');
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < rr.length; i++) {
                    rr[i].parentNode.removeChild(rr[i]);
                }
                let obj = this.ThirdPartyScripts(item.src);
                if (obj !== false) {
                    this.deleteWindowProperty(obj);
                }
                document.getElementsByTagName('head')[0].appendChild(item);
            });
        };

        this.ThirdPartyScripts = function (script) {
            switch (script) {
                case 'http://platform.instagram.com/en_US/embeds.js':
                    return 'instgrm';
                case 'http://cdn.playbuzz.com/widget/feed.js':
                    return 'PlayBuzz';
                case 'http://platform.twitter.com/widgets.js':
                    return 'twttr';
                case 'http://static.apester.com/js/sdk/v2.0/apester-javascript-sdk.min.js':
                    return 'APESTER';
                default:
                    return false;
            }
        };

        this.deleteWindowProperty = function (obj) {
            window[obj] = null;
        };

    }

    // our instance holder
    let instance;

    // an emulation of static variables and methods
    let _static = {

        name: "HtmlContentParser",

        // Method for getting an instance. It returns
        // a singleton instance of a singleton object
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }

            return instance;

        }
    };

    return _static;

})();