<template>
  <div class="main">
    <div class="container">
      <div class="search">
        <div class="search__filter">
          <div class="search__tariff">
            <div class="search__tariff-header">
              <h1 class="search__title">Опции тарифа</h1>
              <SvgIcon nameId="filter" />
            </div>
            <ul class="search__tariff-list">
              <li class="searh__tariff-item">Только прямые</li>
              <li class="searh__tariff-item">Только с багажом</li>
              <li class="searh__tariff-item">Только возвратные</li>
            </ul>
          </div>
          <div class="search__tariff">
            <div class="search__tariff-header">
              <h1 class="search__title">Авиакомпании</h1>
              <SvgIcon nameId="filter" />
            </div>
            <ul class="search__tariff-list">
              <li class="searh__tariff-item">Все</li>
              <li class="searh__tariff-item">Air Astana</li>
              <li class="searh__tariff-item">Bek Air</li>
              <li class="searh__tariff-item">Bek Air</li>
              <li class="searh__tariff-item">Fly Arystan</li>
              <li class="searh__tariff-item">SCAT Airlines</li>
              <li class="searh__tariff-item">Lufthansa</li>
              <li class="searh__tariff-item">Turkish Airlines</li>
              <li class="searh__tariff-item">China Southern Air</li>
            </ul>
          </div>
          <button class="search__filter-reset">Сбросить все фильтры</button>
        </div>
        <div class="search__table">
          <ul class="search__table-list">
            <li class="search__table-item">
              <div class="search__table-info">
                <div class="search__table-species">
                  <div style='display: flex'>
                  <SvgIcon nameId="logo_airastana" />
                  <h1 class="search__airastana">Air Astana</h1>
                  </div>
                  <div class="search__data">
                    <h1 class="search__data-day">25 ноя, вс</h1>
                    <h1 class="search__data-time">23:25</h1>
                  </div>
                  <div class="search__common">
                    <div class="search__direction">
                      <h1 class="search__from-to">ALA</h1>
                      <h1 class="search__time">4 ч 20 м</h1>
                      <h1 class="search__from-to">ALA</h1>
                    </div>
                    <SvgIcon nameId="0--0--0" />
                    <h1 class="search__direction-through">
                      через Шымкент, 1 ч 50 м
                    </h1>
                  </div>
                  <div class="search__data">
                    <h1 class="search__data-day">25 ноя, вс</h1>
                    <h1 class="search__data-time">23:25</h1>
                  </div>
                </div>
                <div class="search__table-additional-info">
                  <div class="search__table-link">
                    <a class="search__table-links">Детали перелета</a>
                    <a class="search__table-links">Условия тарифа</a>
                  </div>
                  <h1 class="search__table-returnable">
                    <SvgIcon nameId="returnable" />
                    невозвратный
                  </h1>
                </div>
              </div>
              <div class="search__table-action">
                <h1 class="search__action-title">590 240 ₸</h1>
                <button class="search__action-purchase">Выбрать</button>
                <h1 class="search__action-price">Цена за всех пассажиров</h1>
                <div class="search__action-baggage">
                  <h1 class="search__action-baggage-no">Нет багажа</h1>
                  <button class="search__action-baggage-add">+ Добавить багаж</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  components: {
    SvgIcon,
  },
  setup() {
    const store = useStore();
    const data = store.getters.getAllDataFlights;
    console.log(data);
    return {
      data,
    };
  },
};
</script>

<style lang='scss'>
@include b(search) {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 32px;
  svg {
    width: 20px;
    height: 20px;
  }
  @include e(filter) {
    display: flex;
    flex-direction: column;
  }
  @include e(table-item) {
    display: grid;
    grid-template-columns: 1fr 200px;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
border-radius: 4px;
  }
  @include e(table-info){
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 168px;
  }
  @include e(table-species){
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @include e(data){
    display: flex;
    flex-direction: column;
    &-day{
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      line-height: 16px;
    }
    &-time{
       font-family: 'Open Sans', sans-serif;
      font-weight: 600;
    font-size: 24px;
      line-height: 33px;
    }
  }
  @include e(airastana){
     font-family: 'Open Sans', sans-serif;
      font-weight: 600;
font-size: 14px;
line-height: 19px;
  }
  @include e(from-to){
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
line-height: 12px;
    color: #B9B9B9;
  }
  @include e(time){
    font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      line-height: 16px;
  }
  @include e(direction){
    display: flex;
    justify-content: space-between;
  }
  @include e(common){
    & svg{
      width: 168px;
      height: 10px;
    }
  }
  @include e(table-additional-info){
    display: flex;
  }
  @include e(table-link){
    display: flex;
    justify-content: space-around;
  }
  @include e(direction-through){
    font-family: 'Open Sans', sans-serif;
    color: $golden-color;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
