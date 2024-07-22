<!-- Slot is a HTML element which we can put in our component -->

<!-- The slot element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together. -->

<div>
    <slot name="top" />
</div>

<div>
    <slot name="bottom" />
</div>

<style>
    div {
        width: 500px;
        min-height: 300px;
        border: 1px solid red;
    }
</style>