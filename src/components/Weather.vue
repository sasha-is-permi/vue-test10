<!--     var dt = new Date(unix_tm*1000);  -->

<template>

     <section class="section section-weather">
        <div class="container container-weather mt-5">

              <h2> Погода в Москве </h2>
         
              <div class="row">
                <div class="col-2 img-weather">
                    <img :src="weatherToday.img"  class="img-fluid d-none d-sm-block" alt=""/>
                </div>
                <div class="col-2">
                     <p class="text-real-weather"></p>
                </div>
                <div class="col text-data">
                    <p>Сегодня</p>
                    <p >&nbsp;&nbsp;{{weather[0].day}}&nbsp;{{weather[0].month}}</p>
                    <img  class="img1" :src="weather[0].img" alt=""/>

                </div>
                <div class="col text-data">
                    <p> &nbsp;&nbsp;&nbsp; {{weather[1].dayOfWeak}}</p>
                    <p>{{weather[1].day}}&nbsp;{{weather[1].month}}</p>
                    <img :src="weather[1].img" alt=""/>

                </div>


                <div class="col text-data">
                    <p>&nbsp;&nbsp;&nbsp;{{weather[2].dayOfWeak}}</p>
                    <p>{{weather[2].day}}&nbsp;{{weather[2].month}}</p>
                    <img :src="weather[2].img" alt=""/>

                </div>
                <div class="col text-data">
                    <p>&nbsp;&nbsp;&nbsp;{{weather[3].dayOfWeak}}</p>
                    <p>{{weather[3].day}}&nbsp;{{weather[3].month}}</p>
                    <img :src="weather[3].img" alt=""/>

                </div>
                <div class="col text-data">
                    <p>&nbsp;&nbsp;&nbsp;{{weather[4].dayOfWeak}}</p>
                    <p>{{weather[4].day}}&nbsp;{{weather[4].month}}</p>
                    <img :src="weather[4].img" alt=""/>

                </div>
                <div class="col d-none d-sm-block text-data">
                    <p>&nbsp;&nbsp;&nbsp;{{weather[5].dayOfWeak}}</p>
                    <p>{{weather[5].day}}&nbsp;{{weather[5].month}}</p>
                    <img :src="weather[5].img" alt=""/>

                </div>
                <div class="col d-none d-sm-block text-data">
                    <p>&nbsp;&nbsp;&nbsp;{{weather[6].dayOfWeak}}</p>
                    <p>{{weather[6].day}}&nbsp;{{weather[6].month}}</p>
                    <img :src="weather[6].img" alt=""/>

                </div>
                <div class="col d-none d-sm-block text-data">
                    <p>&nbsp;&nbsp;&nbsp;{{weather[7].dayOfWeak}}</p>
                    <p>{{weather[7].day}}&nbsp;{{weather[7].month}}</p>
                    <img :src="weather[7].img" alt=""/>

                </div>
            </div>
            <div class="row">
                <div class="col-4 info-weather">
                    <p class="text-degree">&nbsp;&nbsp;{{weatherToday.currentTemp}}&deg;C</p>
                    <p class="info-cloud">{{weatherToday.description}}</p>
                    <p class="info-wind">Ветер: {{weatherToday.wind_speed}} м/с  {{weatherToday.wind_deg}} Влажность: {{weatherToday.humidity}}% 
                     Облачность: {{weatherToday.clouds}}% Ощущается на: {{weatherToday.feels_like}} &deg;C   
                    </p>
                    
                </div>
                <div class="col-8">
                        <div class="row"  >
                            <div class="col text-temperature">
                                <p>{{weather[0].maxT}}&deg;</p>
                            </div>
                            <div class="col text-temperature">
                                <p>{{weather[1].maxT}}&deg;</p>
                            </div>
                            <div class="col text-temperature">
                                <p>{{weather[2].maxT}}&deg;</p>
                            </div>
                            <div class="col text-temperature">
                                <p>{{weather[3].maxT}}&deg;</p>
                            </div>
                            <div class="col text-temperature">
                                <p>{{weather[4].maxT}}&deg;</p>
                            </div>
                            <div class="col d-none d-sm-block text-temperature">
                                <p>{{weather[5].maxT}}&deg;</p>
                            </div>
                            <div class="col d-none d-sm-block text-temperature">
                                <p>{{weather[6].maxT}}&deg;</p>
                            </div>
                            <div class="col d-none d-sm-block text-temperature">
                                <p>{{weather[7].maxT}}&deg;</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 col-sm-5 line-temperature">
                                <hr  size="5"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-temperature">
                                <p>{{weather[0].minT}}&deg;</p>
                            </div>
                            <div class="col text-temperature">
                                <p>{{weather[1].minT}}&deg;</p>
                            </div>
                            <div class="col text-temperature">
                                <p>{{weather[2].minT}}&deg;</p>
                            </div>
                            <div class="col text-temperature">
                                <p>{{weather[3].minT}}&deg;</p>
                            </div>
                            <div class="col text-temperature">
                                <p>{{weather[4].minT}}&deg;</p>
                            </div>
                            <div class="col d-none d-sm-block text-temperature">
                                <p>{{weather[5].minT}}&deg;</p>
                            </div>
                            <div class="col d-none d-sm-block text-temperature">
                                <p>{{weather[6].minT}}&deg;</p>
                            </div>
                            <div class="col d-none d-sm-block text-temperature">
                                <p>{{weather[7].minT}}&deg;</p>
                            </div>
                        </div>
                </div>        
              </div>  
            </div>               
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Weather',
   data(){
      return{

      }
  },
    methods:{
      setData() {
                        
                this.$store.dispatch('getWeather')              
            
        },
            },
             computed: {           
        
            weather() {
                    return this.$store.getters.weather
            },
             weatherToday() {
                    return this.$store.getters.weatherToday
            }
    
                  },       


        created() {
             this.setData();
        },
  
});
</script>


<style scoped>


section {
    min-width:340px;
}


.img-weather{
    margin-top: -25px;
}
@media (min-width: 991.98px)  {
.info-weather{
    margin-top: -55px;
}
}


body {
    font-family: Roboto;
}
.img-weather img {
    width: 150px;
    height: auto;
}
.text-degree {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 0;
}
.text-real-weather {
    font-size: 18px;
    font-weight: 500;
}
.text-data p {
    font-size: 16px;
    margin-bottom: 0;
}



.text-data img {
    width: 50px;
    height: 50px;
}

.info-cloud {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0;
}
.text-temperature p {
    margin-bottom: 0;
    margin-left: 15px;
    font-weight: bold;
}
.line-temperature{
    width: 100%;
    color: #ff9900;
}

@media (max-width: 991.98px)  {

     .img1{
       margin-left:8px;
     }

    .info-weather{
    margin-top: -25px;
      }

    .img-weather img {
        width: 100px;
        height: auto;
    }
    .text-degree {
        font-size: 30px;
        
        
    }
    .text-real-weather {
        font-size: 14px;
        font-weight: 500;
    }
    .text-data {
        padding-left: 0;
    }
    .text-data p {
        font-size: 14px;
        
    }
    .text-data img {
        width: 30px;
        height: auto;
    }
    .info-cloud {
        font-size: 14px;
       
    }
    .info-wind {
        font-size: 12px;
    }
    .text-temperature p {
    margin-bottom: 0;
    margin-left: 0px;
    font-weight: bold;
}
    
}
@media (max-width: 767px){

    
     .img1{
       margin-left:8px;
     }


   .info-weather{
    margin-top: -45px;
      }
    
    .text-data p {
        font-size: 12px;
        
    }
    .text-data {
        padding-right: 3px;
    }
}
@media (max-width: 576px){
    
     .img1{
       margin-left:8px;
     }



    .img-weather img {
        width: 150px;
        height: auto;
    }
.text-degree {
    font-size: 20px;
    
    }
    .text-real-weather {
        margin-left: -50px;
        margin-top: 10px;
    }
}





</style>
