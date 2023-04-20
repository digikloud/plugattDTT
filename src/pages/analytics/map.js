import { world_map } from './world_map.js';
import * as React from 'react';
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  MapsTooltip,
  Inject,
  MarkersDirective,
  MarkerDirective,
  Marker,
  Zoom
} from '@syncfusion/ej2-react-maps';

export function Map() {
  return (
    <div><MapsComponent background="#191c24" mapsArea={{
      background: '#191c24',
      borderRadius : '50px',
      border: {
          width: 2,
          // color: 'green'
      } }} zoomSettings={{
      enable: true,
      toolbars: [ 'ZoomIn', 'ZoomOut'],
    }}> 
        <Inject services={[MapsTooltip, Marker, Zoom]} />
        <LayersDirective>
          <LayerDirective
            shapeData={world_map}
            shapeSettings={{
              fill: '#C3E6ED',
            }}
          >
            <MarkersDirective>
              <MarkerDirective
                enableDrag={true}
                visible={true}
                animationDuration={0}
                dataSource={[
                  {
                    latitude: 4.668340,
                    longitude: -74.054220,
                    name: 'Node 1',
                  },
                  {
                    latitude: 4.616560,
                    longitude: -74.104050,
                    name: 'Node 2',
                  },
                  {
                    latitude: 4.670530,
                    longitude: -74.159940,
                    name: 'Node 3',
                  },
                  {
                    latitude: 4.693510,
                    longitude: -74.033020,
                    name: 'Node 20',
                  },
                  {
                    latitude: 4.703690,
                    longitude: -74.032980,
                    name: 'Node 21',
                  },
                  {
                    latitude: 4.729000,
                    longitude: -74.040740,
                    name: 'Node 22',
                  },
                  {
                    latitude: 3.464630,
                    longitude: -76.516040,
                    name: 'Node 120',
                  },
                  {
                    latitude: 3.487700,
                    longitude: -76.529860,
                    name: 'Node 110',
                  },
                  {
                    latitude: 3.453830,
                    longitude: -76.554240,
                    name: 'Node 150',
                  },
                  {
                    latitude: 3.464610,
                    longitude: -76.515890,
                    name: 'Node 40',
                  },
                  {
                    latitude: 3.484430,
                    longitude: -76.525800,
                    name: 'Node 45',
                  },
                  {
                    latitude: 4.726750,
                    longitude: -74.088990,
                    name: 'Node 55',
                  },
                ]}
                shape="Balloon"
                width={20}
                height={20}
                border={{ width: 2, color: '#285255' }}
                tooltipSettings={{
                  visible: true,
                  valuePath: 'name',
                }}
              ></MarkerDirective>
            </MarkersDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent></div>
  );
}
