import { AfterViewInit, Component, Inject, NgZone, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { BREAKDOWN, Breakdown } from '../model/breakdown.model';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit, AfterViewInit,OnDestroy {
  chart: am4charts.XYChart;
  breakdown : Array<Breakdown>;
  constructor(@Inject(PLATFORM_ID) private platformId : any, private zone: NgZone) {
    this.chart = new am4charts.XYChart();
    this.breakdown = new Array<Breakdown>();
  }

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngOnInit(): void {
    this.breakdown = BREAKDOWN;
  }

  ngAfterViewInit() {
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4charts.PieChart);

      chart.data = [ 
        {
          "type": "Expenses",
          "amount": 200,
          "color": am4core.color("#a192f3")
        },
        {
          "type": "Income",
          "amount": 800,
          "color": am4core.color("#6a9af7")
        } 
        
      ];

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amount";
      pieSeries.dataFields.category = "type";
      pieSeries.ticks.template.disabled = true;
      pieSeries.alignLabels = false;
      pieSeries.slices.template.propertyFields.isActive = "pulled";
      pieSeries.labels.template.text = "{category} \n {value.percent.formatNumber('#.0')}%";
      pieSeries.labels.template.radius = am4core.percent(-40);

      pieSeries.labels.template.fill = am4core.color("white");
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.slices.template.propertyFields.fill = "color";

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -20;
      pieSeries.hiddenState.properties.startAngle = -90;

      chart.hiddenState.properties.radius = am4core.percent(0);
    });
  }

  ngOnDestroy() {
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
