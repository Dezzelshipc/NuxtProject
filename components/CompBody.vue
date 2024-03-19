<template>
  <div class="main_body">
    <div class="flex down">
      <div class="banner">Banner</div>
      <div class="hw">Hello, world!</div>
      <div>Some description</div>

      <div class="flex right">
        <div class="button">I am button</div>
        <div class="button">And i am button too</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main_body {
  margin: var(--padding-normal);
}

.main_body * {
  margin: 1rem 0px;
  font-size: 1.5rem;
}

.flex {
  display: flex;
  align-items: center;
}

.flex.down {
  flex-direction: column;
}

.flex.right {
  flex-direction: row;
}

@mixin filled_back($color: black, $width: 100%) {
  background: $color;
  width: $width;
}

@mixin border($radius: 0px, $color: 0, $width: 0px) {
  border-radius: $radius;
  border-color: $color;
  border-width: $width;
}

.banner {
  @include filled_back(green, fit-content);
  @include border(10px);
  color: white;
  padding: 1rem 2rem;

  font-weight: 100;
  font-size: 1.5rem;
  font-family: var(--font-title);
  text-align: center;
}

.hw {
  font-weight: 800;
  font-size: 3rem;
}

.button {
  @include filled_back(palegreen, fit-content);
  @include border(10px);
  padding: 0.5rem 1rem;
  margin: 0px 1rem;

  transition: scale 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
.button:hover {
  scale: 1.2;
}
</style>
