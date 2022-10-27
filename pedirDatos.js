export async function pedirDatos() {
    let ciudad = document.getElementById('inputCiudad').value
    let respuesta1 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=0650f52a21ac91a06639d8c2e44e657f`
    );
    console.log(respuesta1.data.coord)
    let lon = respuesta1.data.coord.lon
    let lat = respuesta1.data.coord.lat

    let respuesta2 = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=0650f52a21ac91a06639d8c2e44e657f`
    );
    console.log(respuesta2.data.list[0].components)
    let aqi = respuesta2.data.list[0].main.aqi
    let co = respuesta2.data.list[0].components.co
    let nh3 = respuesta2.data.list[0].components.nh3
    let no = respuesta2.data.list[0].components.no
    let no2 = respuesta2.data.list[0].components.no2
    let o3 = respuesta2.data.list[0].components.o3
    let pm2_5 = respuesta2.data.list[0].components.pm2_5
    let pm10 = respuesta2.data.list[0].components.pm10
    let so2 = respuesta2.data.list[0].components.so2

    
    let contenedor = document.getElementById('respuestas');
    contenedor.innerHTML = `<table class="tabliya" id="tabla1">
    <thead>
      <tr>
        <th scope="col">Parámetro</th>
        <th scope="col">Valores</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Calidad del Aire</td>
        <td>${aqi}</td>
        <td>1</td>  
        <td>2</td> 
        <td>3</td> 
        <td>4</td> 
        <td>5</td> 
         
      </tr>
      <tr>
        <td>Nivel de CO   </td>
        <td>${co}</td>
        <td></td>  
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
      </tr>
      
      <tr>
        <td>Nivel de NO2</td>
        <td>${no2}</td>
        <td>0-50</td>  
        <td>50-100</td> 
        <td>100-200</td> 
        <td>200-400</td> 
        <td>>400</td> 
         
      </tr>
      <tr>
        <td>Nivel de O3</td>
        <td>${o3}</td>
        <td>0-25</td>  
        <td>25-50</td> 
        <td>50-90</td> 
        <td>90-180</td> 
        <td>>180</td> 
         
      </tr>
      <tr>
        <td>Nivel de pm 2,5 (fino)</td>
        <td>${pm2_5}</td>
        <td>0-15</td>  
        <td>15-30</td> 
        <td>30-55</td> 
        <td>55-110</td> 
        <td>>110</td> 
        
      </tr>
      <tr>
        <td>Nivel de pm 10 (grueso)</td>
        <td>${pm10}</td>
        <td>0-25</td>  
        <td>25-50</td> 
        <td>50-90</td> 
        <td>90-180</td> 
        <td>>180</td> 
        
      </tr>
      
    </tbody>
  </table>`
    
  var ctx2 = document.getElementById('variables').getContext('2d');
  if (window.grafica) {
    window.grafica.clear();
    window.grafica.destroy();
  }
  window.grafica = new Chart(ctx2, {
      type: 'bar',
      data: {
          labels: ['calidad del aire','nh3','no','no2','o3','pm2_5','pm10','so2'],
          datasets: [{
              label: 'contaminantes en µg/m3',
              data: [`${aqi}`,`${nh3}`,`${no}`,`${no2}`,`${o3}`,`${pm2_5}`,`${pm10}`,`${so2}`],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)',
                  
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
 
 
}


