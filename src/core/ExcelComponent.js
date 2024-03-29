import {DomListener} from "core/DomListener";

export class ExcelComponent extends DomListener{
    //return template components

    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || ''
    }

    toHTML() {
        return ''
    }

    init() {
        this.initDOMListener()
    }

    destroy () {
        this.removeDOMListener()
    }
}