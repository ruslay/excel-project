import {$} from "core/dom";

export function ResizeHandler($root, event)
{
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const $type = $parent.$el.getAttribute('data-shape')
    const coords = $parent.getCoords()

    document.onmousemove = e => {
        const cells = $root.findAll(`[data-col="${$parent.data.col}"]`)

        if ($type === 'col'){
            const delta = e.pageX - coords.right
            let value = (coords.width + delta) + 'px'
            $parent.$el.style.width = value
            cells.forEach(el => el.style.width = value)
        } else {
            const delta = e.pageY - coords.top
            let value = (coords.height + delta) + 'px'
            $parent.css({height : value})
        }

    }

    document.onmouseup = () => {
        document.onmousemove = null
    }
}