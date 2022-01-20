<template>
    <div class="form-group">
        <input name="" :type="type" :placeholder="placeholder" class="form-control">
    </div>
</template>

<script>
export default {
    name: "Input",
    data() {
        return {
        }
    },
    props: ['type', 'placeholder'],
}
</script>