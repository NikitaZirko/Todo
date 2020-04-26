<template>
  <div class="footer">
    <h1 class="footer__title">Тестовое задание Vue js</h1>
    <a class="footer__mail" href="mailto:nik.message@gmail.com">
      nik.message@gmail.com
    </a>
    <div class="social">
      <a class="social__item" href="#">
        GitHub <font-awesome-icon :icon="[ 'fab', 'github' ]" size="lg" />
      </a>
      <a class="social__item" href="#">
        Bitbucket <font-awesome-icon :icon="[ 'fab', 'bitbucket' ]" size="lg" />
      </a>
      <a class="social__item" href="#">
        GitLab <font-awesome-icon :icon="[ 'fab', 'gitlab' ]" size="lg" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 @import '../assets/styles/components/footer.scss';
</style>
