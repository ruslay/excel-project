import {capitalize} from "core/utils";

export class DomListener {
    constructor($root, listeners = []) {
        if(!$root) {
            throw new Error(`No $root provided for DomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListener () {
        //console.log(this.listeners, this.$root)
        this.listeners.forEach( listener => {
            const method = addOn(listener)
            if (!this[method]) {
                throw new Error(`Method ${method} no find`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListener () {
        this.listeners.forEach( listener => {
            const method = addOn(listener)
            this.$root.off(listener, this[method])
        })

    }
}

function addOn (name) {
    return 'on' + capitalize(name);
}