import {ExcelComponent} from "core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {ResizeHandler} from "@/components/table/tabel.resize";
import {shouldResize} from "@/components/table/table.functions";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    toHTML() {
        return createTable(101)
    }

    onMousedown(event){
        if (shouldResize(event)) {
            ResizeHandler(this.$root, event)
        }
    }



}