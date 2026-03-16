'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const GEO_URL = '/india-states.json';

export default function MinimalIndiaMap() {
  const [tooltip, setTooltip] = useState('');

  return (
    <div className="flex flex-col items-center w-full select-none">
      {/* Tooltip */}
      <div className="h-7 mb-1 flex items-center justify-center">
        {tooltip ? (
          <span className="text-xs font-sans font-semibold text-slate-700 tracking-wide bg-white/90 px-3 py-1 rounded-full shadow-sm border border-slate-200/60 transition-all duration-200">
            {tooltip}
          </span>
        ) : (
          <span className="text-[10px] font-sans text-slate-400 uppercase tracking-widest">
            Explore Indian States
          </span>
        )}
      </div>

      {/* Map Container */}
      <div className="w-full h-[500px] bg-white/50 rounded-3xl border border-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 800,
            center: [78.96, 23.59],
          }}
          width={400}
          height={400}
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stName = geo.properties.ST_NM || '';

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setTooltip(stName)}
                    onMouseLeave={() => setTooltip('')}
                    style={{
                      default: {
                        fill: '#f9fafb',
                        stroke: '#e5e7eb',
                        strokeWidth: 0.5,
                        outline: 'none',
                        transition: 'fill 0.25s ease',
                      },
                      hover: {
                        fill: '#f3f4f6',
                        stroke: '#d1d5db',
                        strokeWidth: 0.8,
                        outline: 'none',
                        cursor: 'default',
                      },
                      pressed: {
                        fill: '#e5e7eb',
                        stroke: '#d1d5db',
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
}
