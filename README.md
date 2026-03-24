# ARQ Invest | Plataforma de Inversiones Inmobiliarias Premium

Web App profesional para atraer inversores en proyectos de arquitectura. Construida con React 19, TailwindCSS y GSAP para animaciones de alta calidad.

## 🏗️ Características Principales

### Secciones Implementadas

1. **Hero Section** - Impacto visual con animaciones y estadísticas clave
2. **Features** - 6 características que buscan los inversores (ubicación, rentabilidad, seguridad jurídica, etc.)
3. **Propiedades** - Galería de proyectos con renders, progreso de obra y especificaciones
4. **Simulador de Inversión** - Herramienta interactiva para proyectar retornos según:
   - Monto de inversión
   - Momento de pago (pozo, obra, entrega)
   - Tipo de propiedad
5. **Perfil del Desarrollador** - Trayectoria, certificaciones y estadísticas
6. **Planos Interactivos** - Explorador de unidades con distribución de espacios
7. **Análisis de Mercado** - Datos reales de revalorización por barrio
8. **Opciones de Pago** - Métodos (incluyendo cripto), cronograma y documentación legal
9. **Contacto** - Formulario, WhatsApp, calendario de reuniones

## 🎨 Diseño Visual

- **Paleta de colores**: Navy profundo, gold premium, stone neutro, sage sustentable
- **Tipografía**: Playfair Display (títulos) + Inter (cuerpo)
- **Animaciones**: GSAP ScrollTrigger para efectos de aparición y parallax
- **Estilo**: Minimalista, profesional, enfocado en confianza y exclusividad

## 🚀 Instalación y Desarrollo

```bash
cd "f:\2026\Web animadas\Arq 2.0"

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📦 Deploy a GitHub Pages

### 1. Crear repositorio en GitHub
Crear un nuevo repositorio llamado `arq-invest`.

### 2. Inicializar Git y hacer push

```bash
cd "f:\2026\Web animadas\Arq 2.0"

# Inicializar repositorio
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "Initial commit - ARQ Invest platform"

# Agregar remote
git remote add origin https://github.com/lautxon/arq-invest.git

# Cambiar rama a main
git branch -M main

# Hacer push
git push -u origin main
```

### 3. Configurar GitHub Pages

El workflow de GitHub Actions (`deploy.yml`) se ejecutará automáticamente al hacer push.

1. Ir a **Settings** del repositorio
2. En **Pages** → **Build and deployment**:
   - Source: **GitHub Actions**
3. Esperar a que el workflow complete (Actions tab)

### 4. Acceder a la web publicada

Tu aplicación estará disponible en:
```
https://lautxon.github.io/arq-invest/
```

> **Nota:** El archivo `deploy.yml` ya está configurado para build y deploy automático en cada push a `main`.

## 📁 Estructura del Proyecto

```
Arq 2.0/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Properties.jsx
│   │   ├── InvestmentSimulator.jsx
│   │   ├── DeveloperProfile.jsx
│   │   ├── FloorPlans.jsx
│   │   ├── MarketAnalysis.jsx
│   │   ├── PaymentOptions.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🛠️ Stack Tecnológico

- **React 19** - Framework UI
- **Vite 6** - Build tool y dev server
- **TailwindCSS 3.4.17** - Estilos utilitarios
- **GSAP 3.12** - Animaciones profesionales
- **Lucide React** - Iconos modernos
- **Google Fonts** - Playfair Display + Inter

## 📊 Funcionalidades Clave para Inversores

- ✅ Simulador de ROI con proyección a 5 años
- ✅ Planos interactivos por tipo de unidad
- ✅ Cronograma de pagos escalonados
- ✅ Documentación legal disponible
- ✅ Múltiples medios de pago (incluyendo cripto)
- ✅ Análisis de mercado por barrio
- ✅ Contacto directo y WhatsApp
- ✅ Calendario de reservas

## 🎯 Objetivos Cumplidos

La web transmite:
- **Confianza** - Trayectoria visible, certificaciones, transparencia
- **Profesionalismo** - Diseño limpio, navegación intuitiva
- **Visión Estratégica** - Datos de mercado, proyecciones claras

## 📱 Responsive

Totalmente responsive. Optimizado para desktop, tablet y mobile.

## 🔐 Consideraciones de Producción

Para deployment real, integrar:
- Backend para formulario de contacto
- API de WhatsApp Business
- Sistema de reservas (Calendly o similar)
- Pasarela de pagos (MercadoPago, Stripe, o cripto)
- Analytics y tracking

---

**Desarrollado con estándares de ingeniería de clase mundial.**
