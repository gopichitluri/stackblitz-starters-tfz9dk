
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  createChart(){
    //Chart.register(ChartDataLabels); 
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['gopi', 'pravalika', 'siddhu','vikram',], 
	       datasets: [
          {
            label: "No Of Leads",
            data: ['467','576', '572', '79'],
            backgroundColor: 'blue'
          },
          {
            label: "Contacted",
            data: ['200', '300', '400', '500'],
            backgroundColor: 'limegreen'
          } ,
          {
            label: "Assigned",
            data: ['20', '30', '40', '50'],
            backgroundColor: 'grey'
          }   
        ]
      },
      options: {
        scales:
        {
          x:{ stacked:true, },
          y:{stacked:true, 
       }
        },
        aspectRatio:2.5,
        
      },
      plugins:[ChartDataLabels]
    
      
    });
  }


  // createChart(){
  
  //   this.chart = new Chart("MyChart", {
  //     type: 'bar', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
	// 							 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	//        datasets: [
  //         {
  //           label: "Sales",
  //           data: ['467','576', '572', '79', '92',
	// 							 '574', '573', '576'],
  //           backgroundColor: 'blue'
  //         },
  //         {
  //           label: "Profit",
  //           data: ['542', '542', '536', '327', '17',
	// 								 '0.00', '538', '541'],
  //           backgroundColor: 'limegreen'
  //         }  
  //       ]
  //     },
  //     options: {
  //       aspectRatio:2.5
  //     }
      
  //   });
  // }
  

}
