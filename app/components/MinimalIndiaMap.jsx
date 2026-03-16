'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const GEO_URL = '/india-states.json';

export default function MinimalIndiaMap() {
  const [tooltip, setTooltip] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Offset the tooltip slightly from the cursor
    setPosition({ x: e.clientX + 15, y: e.clientY - 40 });
  };

  return (
    <div className="flex flex-col items-center w-full select-none" onMouseMove={handleMouseMove}>
      {/* Floating Tooltip */}
      {tooltip && (
        <div
          className="fixed z-[100] pointer-events-none px-3 py-1.5 bg-[#1e293b] text-white text-xs font-bold rounded-lg shadow-xl border border-white/10 flex items-center gap-2 whitespace-nowrap transition-opacity duration-200"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {tooltip}
        </div>
      )}

      {/* Map Header (Visual status) */}
      <div className="h-7 mb-2 flex items-center justify-center">
        {!tooltip && (
          <span className="text-[10px] font-sans text-slate-400 uppercase tracking-widest font-bold">
            Interactive Ecosystem Map
          </span>
        )}
      </div>

      {/* Map Container */}
      <div className="w-full h-[500px] bg-white/40 backdrop-blur-sm rounded-[2rem] border border-slate-200/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 850,
            center: [78.96, 23.59],
          }}
          width={400}
          height={400}
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stName = geo.properties.ST_NM || geo.properties.name || '';

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setTooltip(stName)}
                    onMouseLeave={() => setTooltip('')}
                    style={{
                      default: {
                        fill: '#f8fafc',
                        stroke: '#1e293b',
                        strokeWidth: 0.5,
                        outline: 'none',
                        transition: 'all 250ms ease',
                      },
                      hover: {
                        fill: '#3b82f6',
                        stroke: '#1e293b',
                        strokeWidth: 0.8,
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        fill: '#2563eb',
                        stroke: '#1e293b',
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
