export const manualUsuario = {
  es: [
    {
      id: 'introduccion',
      titulo: '1. Introducción',
      contenido: `
PMA Frequency es un sistema accesible diseñado para gestionar la comunidad de personas con discapacidad visual interesadas en la producción musical. A través de este software, se pueden registrar nuevos miembros, administrar sanciones y enviar solicitudes de corrección de datos. El sistema está dividido en dos perfiles: administrador y miembro.

Este manual guía paso a paso a cada tipo de usuario para comprender y utilizar todas las funciones disponibles.
`
    },
    {
      id: 'acceso',
      titulo: '2. Acceso al sistema',
      contenido: `
Para ingresar al sistema:

1. Abre el navegador y ve a la URL proporcionada por el administrador.
2. Si ya tienes una cuenta, ingresa con tu correo y contraseña.
3. Si eres un nuevo miembro, el administrador te enviará por correo tu usuario y contraseña temporal.
4. Después de ingresar, puedes cambiar tu contraseña desde la opción correspondiente.

**Importante:** Si olvidas tu contraseña, puedes usar el enlace "¿Olvidaste tu contraseña?" en la página de inicio de sesión para recibir un enlace de recuperación en tu correo.
`
    },
    {
      id: 'perfil-miembro',
      titulo: '3. Panel del Miembro',
      contenido: `
Después de iniciar sesión, el miembro verá su perfil con la siguiente información:

- Nombre completo
- Correo electrónico
- Teléfono
- Estado de la cuenta (Activo, Inactivo, Bloqueado)

Desde este panel, el miembro puede realizar las siguientes acciones:

- **Cambiar contraseña:** Sección accesible desde el menú principal.
- **Enviar solicitud de corrección:** Formulario para reportar errores en sus datos personales.
- **Consultar estado de solicitudes:** Ver el historial de solicitudes y respuestas del administrador.

Si el miembro está bloqueado, no podrá ingresar al sistema hasta que un administrador lo reactive (si tiene permiso de volver).
`
    },
    {
      id: 'panel-admin',
      titulo: '4. Panel del Administrador',
      contenido: `
El administrador tiene acceso completo al sistema. Desde el panel principal puede:

- Ver estadísticas del sistema (miembros activos, inactivos y bloqueados).
- Listar, filtrar y buscar miembros.
- Ver el detalle de cada miembro, incluyendo sanciones asociadas.
- Editar la información de un miembro.
- Desactivar temporalmente a un miembro o bloquearlo permanentemente.
- Aplicar sanciones a los miembros.
- Gestionar las solicitudes de corrección enviadas por los usuarios.

**Importante:** Solo los administradores pueden sancionar, bloquear o reactivar a los miembros. Los bloqueados permanentemente no pueden ser reactivados desde el frontend, solo por el superusuario desde el backend.
`
    },
    {
      id: 'sanciones',
      titulo: '5. Gestión de Sanciones',
      contenido: `
Desde el detalle de cada miembro, el administrador puede:

- Ver un historial de sanciones aplicadas.
- Registrar una nueva sanción indicando el motivo y la duración.
- Las sanciones son informativas y no impiden el acceso, pero sirven como referencia para acciones futuras (como bloqueos).

Este módulo permite llevar un control disciplinario claro dentro de la comunidad.
`
    },
    {
      id: 'solicitudes',
      titulo: '6. Solicitudes de Corrección',
      contenido: `
Los miembros pueden enviar solicitudes para corregir su información personal si detectan errores.

- Cada solicitud incluye una descripción escrita por el usuario.
- El administrador puede revisar todas las solicitudes desde el "Panel de Solicitudes".
- Una vez revisada, el administrador puede aprobar o rechazar la solicitud y agregar una respuesta que será visible para el miembro.

Este módulo fortalece la transparencia y el respeto a los datos personales de cada usuario.
`
    },
    {
      id: 'accesibilidad',
      titulo: '7. Accesibilidad',
      contenido: `
PMA Frequency ha sido desarrollado teniendo en cuenta las necesidades de las personas ciegas o con baja visión. Entre las características de accesibilidad se incluyen:

- Interfaz compatible con lectores de pantalla como NVDA.
- Navegación mediante teclado.
- Contrastes claros y botones etiquetados.
- Formularios simples y sin elementos visuales innecesarios.

Esto permite que los miembros de la comunidad accedan y usen el sistema de forma autónoma y sin barreras.
`
    },
    {
      id: 'recomendaciones',
      titulo: '8. Recomendaciones de uso',
      contenido: `
- Mantén actualizada tu contraseña.
- Evita compartir tus credenciales con terceros.
- Si notas errores en tus datos, usa la función de "Solicitud de Corrección".
- Si eres administrador, responde las solicitudes a tiempo y registra las sanciones de forma clara.

El uso correcto del sistema garantiza una mejor organización y convivencia dentro de la comunidad.
`
    }
  ],

  en: [
    {
      id: 'introduccion',
      titulo: '1. Introduction',
      contenido: `
PMA Frequency is an accessible system designed to manage a community of visually impaired people interested in music production. Through this software, new members can be registered, sanctions can be managed, and correction requests can be submitted. The system is divided into two roles: administrator and member.

This manual guides each type of user step by step to understand and use all the available features.
`
    },
    {
      id: 'acceso',
      titulo: '2. Access to the System',
      contenido: `
To access the system:

1. Open your browser and go to the URL provided by the administrator.
2. If you already have an account, log in with your email and password.
3. If you're a new member, the admin will send you your username and temporary password by email.
4. After logging in, you can change your password from the corresponding option.

**Important:** If you forget your password, use the "Forgot your password?" link to receive a recovery email.
`
    },
    {
      id: 'perfil-miembro',
      titulo: '3. Member Panel',
      contenido: `
After logging in, the member will see their profile with the following information:

- Full name
- Email address
- Phone number
- Account status (Active, Inactive, Blocked)

From this panel, members can:

- **Change password:** Accessible from the main menu.
- **Submit correction request:** To report issues with their personal data.
- **View request status:** To see admin responses and request history.

Blocked users cannot access the system unless reactivated by an admin (if allowed to return).
`
    },
    {
      id: 'panel-admin',
      titulo: '4. Administrator Panel',
      contenido: `
Admins have full access to the system. From the main panel, they can:

- View system stats (active, inactive, blocked members).
- List, filter and search members.
- View detailed member profiles including sanctions.
- Edit member information.
- Temporarily deactivate or permanently block members.
- Apply sanctions.
- Manage correction requests sent by users.

**Note:** Only admins can apply sanctions or reactivations. Permanently blocked members can only be reactivated by the superuser from the backend.
`
    },
    {
      id: 'sanciones',
      titulo: '5. Sanction Management',
      contenido: `
From a member's detail view, the admin can:

- View the sanction history.
- Add a new sanction with reason and duration.
- Sanctions are informational and don’t block access, but help in future decisions.

This module helps maintain order and discipline within the community.
`
    },
    {
      id: 'solicitudes',
      titulo: '6. Correction Requests',
      contenido: `
Members can request corrections to their personal data if they find mistakes.

- Each request includes a description written by the user.
- Admins can review all requests from the "Requests Panel".
- After reviewing, the admin can approve or reject the request and leave a response.

This ensures transparency and respect for personal data.
`
    },
    {
      id: 'accesibilidad',
      titulo: '7. Accessibility',
      contenido: `
PMA Frequency has been designed with the needs of blind or low-vision users in mind. Accessibility features include:

- Compatible interface with screen readers like NVDA.
- Full keyboard navigation.
- Clear contrasts and labeled buttons.
- Simple forms with no visual clutter.

This ensures users can access the platform independently and comfortably.
`
    },
    {
      id: 'recomendaciones',
      titulo: '8. Usage Recommendations',
      contenido: `
- Keep your password updated.
- Don't share your credentials with others.
- If you find errors in your data, use the "Correction Request" feature.
- If you're an admin, respond to requests promptly and register sanctions clearly.

Proper use of the system helps ensure a healthy and organized community.
`
    }
  ]
}
