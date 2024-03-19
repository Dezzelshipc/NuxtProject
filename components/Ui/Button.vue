<template>
  <button><slot /></button>
</template>

<script>

</script>

<style lang="scss" scoped>
@mixin outline($color, $width) {
  outline-color: $color;
  outline-width: $width;
  outline-offset: -$width;
}

button {
  border-radius: 10px;
  border: none;
  outline: 0 solid;

  padding: 16px 40px;

  font-family: var(--font-title);
  font-size: 14px;
  font-weight: 400;

  color: white;
  background: var(--color-primary);

  &:focus {
    background: var(--color-primary);

    @include outline(var(--color-secondary), 4px);
  }

  &:hover {
    background: var(--color-secondary);
  }

  &:active {
    background: var(--color-secondary);

    @include outline(var(--color-primary), 4px);
  }

  &:disabled {
    background: white;

    color: var(--color-disabled-dark);

    @include outline(var(--color-disabled-dark), 2px);
  }
}
</style>
