# Amarillo · app del estudio creativo

Web app instalable (PWA) para el estudio **Amarillo**:

- **Clientes:** ven los servicios, piden uno, aprenden con las guías del estudio y siguen sus pedidos con un código.
- **Panel del estudio** (`/#/panel`): pedidos, contenido, servicios, equipo por ramas y marca.
- **Roles:**
  - La **dueña** ve y edita todo.
  - La **community manager** ve solo los pedidos y el contenido de sus ramas (por ejemplo, Redes sociales).
- **Marca editable desde el panel:** fuente del logo (12 opciones), colores, textos del inicio, WhatsApp e Instagram.

Hecha con React + Vite. Los datos van en Supabase (proyecto `amarillo-app`, ya creado y cargado) y se publica en Vercel.

---

## Publicar en Vercel

1. En [vercel.com](https://vercel.com): **Add New › Project** y elegí el repo `amarillo-app`.
2. Vercel detecta Vite solo. Tocá **Deploy**. No hace falta cargar variables: la conexión con Supabase ya viene en `src/config.js`.
3. Cuando termine, copiá la dirección que te da Vercel (por ejemplo `amarillo-app.vercel.app`).
4. En Supabase › **Authentication › URL Configuration**:
   - Pegá esa dirección en **Site URL**.
   - Agregala también en **Redirect URLs**.

   Así el link del mail de confirmación abre la app.

Cada cambio que se suba al repo se publica solo.

## Primer ingreso de Milu

1. Entrar a `tu-direccion/#/panel` y tocar **Es mi primera vez: crear cuenta** con `estudioamarillo7@gmail.com`.
2. Confirmar el mail que le llega.
3. Entrar con su contraseña.
4. Ir a **Marca** y elegir la fuente del logo, los colores y el WhatsApp del estudio.

**Sumar a la community manager:**

1. Desde **Panel › Equipo**, agregá su email y marcá las ramas que puede ver.
2. Ella entra a `/#/panel` y crea su cuenta con ese mismo email.

## Instalarla en el celular

Abrí el link en el celular:

- **Android (Chrome):** menú ⋮ › **Instalar app**.
- **iPhone (Safari):** Compartir › **Agregar a inicio**.

Para pasarla a Play Store más adelante se puede empaquetar esta misma PWA, por ejemplo con Bubblewrap o PWABuilder.

## Trabajar en la compu

```bash
npm install
VITE_DEMO=1 npm run dev   # con datos de ejemplo, sin tocar la base real
npm run dev               # conectada a la base real
```

---

## Cómo está organizada

```
src/
  config.js            conexión con Supabase (valores públicos)
  lib/api.js           todas las lecturas y escrituras (Supabase o demo)
  lib/demo.js          datos de ejemplo del modo demo
  lib/fuentes.js       las 12 fuentes del logo
  lib/marca.jsx        aplica colores y fuente del logo en toda la app
  pages/cliente/       inicio, servicios, solicitar, aprendé, pedidos
  pages/panel/         pedidos, contenido, servicios, equipo, marca
supabase/schema.sql    tablas, permisos (RLS) y datos iniciales
public/                ícono, manifest y service worker
vercel.json            caché para que las actualizaciones lleguen bien a los celulares
```

**Seguridad:**

- Los clientes no tienen cuenta: piden con nombre y WhatsApp a través de la función `crear_solicitud`, y siguen sus pedidos con `seguir_pedidos`, solo con su código.
- Nadie de afuera puede leer la lista de pedidos ni el equipo.
- En los contenidos pagos, la app pública nunca recibe el texto completo ni el link al material.
- La clave de `src/config.js` es la pública de Supabase; lo que protege los datos son las reglas de `supabase/schema.sql`.

**A tener en cuenta:**

- En el plan gratis de Supabase, un proyecto que pasa una semana sin visitas se pausa. Se reactiva desde el panel de Supabase con un clic.
- Para cambiar las reglas de la base: editar `supabase/schema.sql` y correrlo completo en Supabase › SQL Editor. Se puede correr varias veces sin romper nada.

## Próximos pasos posibles

- Cobro online con Mercado Pago (link de pago por servicio o por contenido).
- Aviso al WhatsApp o al mail de Milu cuando entra un pedido nuevo.
- Subir archivos (PDF, videos) directo desde el panel con Supabase Storage.
- Dominio propio (por ejemplo, amarilloestudio.com.ar) apuntado a Vercel.
