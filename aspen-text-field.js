import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/font-roboto/roboto.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import {AspenFieldMixin} from  './aspen-field-mixin'
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * `asp-text-fld` This component is a simple text field with an optional associated icon.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspenTextField extends AspenFieldMixin(PolymerElement) {

    static get template() {
        return html` 
		<style>
			:host {
				display: block;
				padding-left: 10px;
			}
			.fld{
				font-family: 'Roboto';
				width: 100%;
				@apply --layout-horizontal;
			}

			.fld > label{
				font-size: 12px;
				float: left;
				padding-left: 5px;
				padding-right: 5px;
				color: #848181;
				vertical-align: bottom;
				@apply --layout-flex;
				
			}

			.fld > div{
				font-size: 9pt;
				color: black;
				padding-right: 5px;
			}

			iron-icon{
				--iron-icon-height: 15px;
				--iron-icon-width: 15px;
				color: #909090;
			}

		</style>
		<div class="fld">
			<template is="dom-if" if="[[hasIcon]]">
				<iron-icon icon="[[icon]]"></iron-icon>
			</template>
			<label>[[label]]</label>
			<div>[[value]]</div>
		</div>
        
        `;

    }


    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
        return 'aspen-text-field';
    }


    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local DOM is initialized. 
     */
    ready() {
        super.ready();

        afterNextRender(this, function () {

        });
    }

}

window.customElements.define(AspenTextField.is, AspenTextField);
