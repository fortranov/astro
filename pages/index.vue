<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="text-center py-5">
          <h1>Астронеология</h1>
          <div>Ваш проводник в мир предсказаний</div>
        </b-col>
      </b-row>

      <b-row align-h="center" class="white">
        <b-col cols="4" align-v="center" class="my-3">
          <b-img
            fluid
            alt="Натальная карта"
            src="~/assets/35540281_1b422bbfa750a2bfbf686fe306a75fa2_800.png"
          />
        </b-col>
        <b-col cols="4" align-v="center" class="m-3">
          <h3>Натальная карта</h3>
          <div class="my-3">
            Мы составим для Вас натальную карту с абсолютной точностью.
            Учтем мельчайшие детали для более качественного прогноза.
          </div>
          <button class="btn btn-primary">Подробнее</button>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="4" align-v="center" class="m-3">
          <h3>Гороскоп</h3>
          <div class="my-3">
            Мы составим для Вас натальную карту с абсолютной точностью.
            Учтем мельчайшие детали для более качественного прогноза.
          </div>
          <button class="btn btn-primary">Подробнее</button>
        </b-col>
        <b-col cols="4" align-v="center" class="m-3">
          <b-img fluid alt="Натальная карта" src="~/assets/i88NQ1M1N.jpg"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.white {
  color: #222;
  background-color: white;
}
</style>
