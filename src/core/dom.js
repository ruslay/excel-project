class Dom {
    constructor(selector) {
        this.$el = typeof  selector === 'string'
        ? document.querySelector(selector) : selector
    }

    html(html) {
        if (typeof  html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on (eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }

    off (eventType, callback) {
        this.$el.removeEventListener(eventType, callback);
    }

    append(node){
        if (node instanceof Dom) {
            node = node.$el
        }
        if ( Element.prototype.append ) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    get data() {
        return this.$el.dataset
    }

    getCoords(){
        return this.$el.getBoundingClientRect()
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }
    css(styles = {}) {
        Object.keys(styles).forEach(key => {
            return this.$el.style[key] = styles[key]
        })
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const tag = document.createElement(tagName)
    if(classes){
        tag.classList.add(classes)
    }
    return $(tag)
}