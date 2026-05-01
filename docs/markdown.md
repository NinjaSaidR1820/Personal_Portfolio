# Guía de Estilo y Componentes (Markdown)

## Colores (Matte Palette)
- **Fondo**: `hsl(240 10% 4%)` - Carbón Mate
- **Tarjetas**: `bg-white/[0.02]` con bordes `border-white/5`
- **Primario**: `hsl(8 85% 55%)` - Rojo Mate (Acción)
- **Acento**: `hsl(210 85% 60%)` - Azul Mate (Datos/Links)
- **Secundario**: `hsl(33 85% 50%)` - Naranja Mate (Educación)

## Componentes Clave
### 1. Hero Section
Animación de entrada con `animate-in fade-in slide-in`. Incluye foto de perfil y CTAs principales.

### 2. Tarjetero de Experiencia
Diseño de tarjetas independientes que mantienen la estructura de un CV profesional, utilizando iconos de `Building2` y `Briefcase`.

### 3. Galería de Hobbies
Grid visual con `aspect-[3/4]` y efectos de hover para mostrar descripciones.

### 4. Navbar Inteligente
Componente con protección de hidratación (`useEffect` mount) para evitar errores de SSR. Cambia de posición según el dispositivo.

## Animaciones
Se utilizan clases de `tailwindcss-animate` para mantener la ligereza del sitio:
- `fade-in`: Opacidad gradual.
- `slide-in-from-bottom`: Desplazamiento sutil hacia arriba.
- `zoom-in`: Efecto de escala suave para imágenes.