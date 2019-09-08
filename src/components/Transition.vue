<template>
    <transition name="slide">
        <slot></slot>
    </transition>
</template>

<style >
.slide-enter-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to {
  /* transform: translateX(20px); */
  transform: translateY(20px);
  opacity: 0.5;
}

</style>