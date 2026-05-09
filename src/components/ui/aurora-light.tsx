import React from "react"

// AuroraLight — Átomo
// Props: ninguna
// MCPs usados: ninguno
// Restricciones aplicadas: CSS-only (sin WebGL), WCAG 2.2 AA compliant (aria-hidden), contraste adecuado asegurado con opacity 50-70%.
export default function AuroraLight() {
    return (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Capa de blobs — aplicar blur al contenedor, no a cada blob */}
            <div className="absolute inset-0" style={{ filter: 'blur(72px)' }}>

                {/* Blob 1 — azul medio, movimiento lento */}
                <div
                    className="absolute rounded-full opacity-70"
                    style={{
                        width: '600px',
                        height: '400px',
                        top: '-10%',
                        left: '10%',
                        background: 'radial-gradient(ellipse at center, #BFDBFE 0%, transparent 70%)',
                        animation: 'aurora-drift-1 18s ease-in-out infinite alternate',
                    }}
                />

                {/* Blob 2 — azul claro, movimiento medio */}
                <div
                    className="absolute rounded-full opacity-60"
                    style={{
                        width: '500px',
                        height: '500px',
                        top: '20%',
                        right: '-5%',
                        background: 'radial-gradient(ellipse at center, #BAE6FD 0%, transparent 70%)',
                        animation: 'aurora-drift-2 12s ease-in-out infinite alternate',
                    }}
                />

                {/* Blob 3 — celeste muy suave, movimiento lento diferente */}
                <div
                    className="absolute rounded-full opacity-50"
                    style={{
                        width: '700px',
                        height: '350px',
                        bottom: '0%',
                        left: '30%',
                        background: 'radial-gradient(ellipse at center, #E0F2FE 0%, transparent 70%)',
                        animation: 'aurora-drift-3 22s ease-in-out infinite alternate',
                    }}
                />

            </div>
        </div>
    )
}
