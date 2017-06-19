export class Extensions {
    static init() {
        //
        console.log('..extensions initialized')

        //String null or empty
        this.initEmptyStringCheck();

        //decodeHtml
        this.initDecodeHTML();
    }

    //String null or empty
    static initEmptyStringCheck() {
        String.prototype.isEmpty = function () {
            return (this.length === 0 || !this.trim());
        };
    }

    static initDecodeHTML() {
        String.prototype.decodeHtmlCustom = function () {
            return this
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&');
        };
    }

    static isAdmin() {
        return Admin.isAdmin;
    }
}

let Admin  = {
    isAdmin: true
};

