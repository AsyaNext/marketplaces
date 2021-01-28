<template>
  <q-page class="q-mt-lg payment-return">
    <div class="payment-return-headline font-montserrat__semi-bold text-purple-10">
      Политика оплаты и возврата
    </div>
    <div class="payment-return-content column bg-white">
      <div class="payment-return-content__section">
        <div class="q-mb-md payment-return-content__section-title font-montserrat__semi-bold text-h5 text-purple-12">
          Оплата
        </div>
        <div class="q-mt-xs payment-return-content__section-text font-avenir__regular text-body1 text-grey-10">
          Оплата производится онлайн
        </div>
        <div class="payment-return-content__section-list row">
          <q-img class="payment-return-content__section-list-visa" src="../../assets/visa.svg" />
          <q-img class="payment-return-content__section-list-mastercard" src="../../assets/mastercard.svg" />
          <q-img class="payment-return-content__section-list-mir" src="../../assets/mir.svg" />
        </div>
      </div>
      <div class="payment-return-content__section">
        <div class="q-mb-md payment-return-content__section-title font-montserrat__semi-bold text-h5 text-purple-12">
          Безналичный расчёт
        </div>
        <div class="payment-return-content__section-text font-avenir__regular text-body1 text-grey-10">
          Для безналичного расчёта нужно связываться по электронной почте
        </div>
      </div>
      <div class="payment-return-content__section">
        <div class="q-mb-md payment-return-content__section-title font-montserrat__semi-bold text-h5 text-purple-12">
          Банковские карты
        </div>
        <div class="payment-return-content__section-text font-avenir__regular text-body1 text-grey-10">
          Текст, в котором указана информация об электронных деньгах и банковских сервисах
        </div>
      </div>
      <div class="payment-return-content__section">
        <div class="q-mb-md payment-return-content__section-title font-montserrat__semi-bold text-h5 text-purple-12">
          Вопросы по оплате
        </div>
        <div class="payment-return-content__section-text font-avenir__regular text-body1 text-grey-10">
          Текст, в котором указана информация о том, что делать, если возникли вопросы по оплате
        </div>
      </div>
      <div class="payment-return-content__section">
        <div class="q-mb-md payment-return-content__section-title font-montserrat__semi-bold text-h5 text-purple-12">
          Возврат
        </div>
        <div class="payment-return-content__section-text font-avenir__regular text-body1 text-grey-10">
          В случае, если пользователь считает качество работы Сервиса неудовлетворительным,
          он может аннулировать свой аккаунт. Если аннулирование произошло в течение 3-х с момента
          оплаты подписки и при условии получения не более чем 50 отчетов в системе - мы гарантируем
          полный возврат денежных средств. Для аннулирования аккаунта необходимо отправить письмо на адрес
          example@gmail.com с указанием своего логина и описанием ситуации. Возврат средств возможен
          только на те же реквизиты, с которых средства были перечислены в качестве оплаты.
          Удостоверьтесь, что вы ознакомились с Пользовательским соглашением.
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PaymentAndReturn'
}
</script>

<style lang="scss">
  @import "../../css/styles/site/payment-return";
</style>
