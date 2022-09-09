import { useEffect } from "react";
import * as Highcharts from 'highcharts/highmaps';


/*=== Import _MapChart_Comp SCSS ===*/
import "./_MapChart_Comp.scss";
import { right } from "@popperjs/core";


const MapChartComp = (props) => {
    const { chartTitle } = props;

    const loadMap = async () => {
      const { mapData } = props;

      const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/ng/ng-all.topo.json'
      ).then(response => response.json());

      const data = mapData;

      // Create the chart
      Highcharts.mapChart('container', {
        chart: {
            map: topology,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 25,
            marginLeft: 0,
        },

        title: {
          text: null,
        },

        subtitle: {
          text: null
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
        },

        colorAxis: {
            min: 0,
        },

        series: [{
          data: data,
          states: {
              hover: {
                  color: 'yellow'
              },
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
        }],

        legend: {
          align: right,
          padding:0
        },

        credits: {
          enabled: false
        },
      });
    }

    useEffect(() => {
      loadMap();
    });

  return (
    <section className="MapChartComp mCard">
        <h1 className="chart__title">{ chartTitle }</h1>

        <div id="container" style={{
          height: "350px",
          width: "90%",
        }} />
    </section>
  )
}

export default MapChartComp;