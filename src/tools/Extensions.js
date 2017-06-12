export class Extensions {
    static init() {
        //
        console.log('..extensions initialized')

        //String null or empty
        this.initEmptyStringCheck();
    }

    //String null or empty
    static initEmptyStringCheck() {
        String.prototype.isEmpty = function () {
            return (this.length === 0 || !this.trim());
        };
    }
}