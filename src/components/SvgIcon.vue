<template>
    <svg :class="`icon__${nameId}`">
        <use :xlink:href="`icons.svg#${nameId}`"></use>
    </svg>
</template>
<script>
function ra(r) {
    r.keys().forEach(r)
}
ra(require.context('@/assets/icons', true, /\.svg$/))

export default {
    props: {
        nameId: {
            type: String,
            required: true
        }
    }
}
</script>
