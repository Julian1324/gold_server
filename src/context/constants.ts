const SECRET_KEY = 'miClaveSuperSecreta123456'; // Esta clave irá en el environment
const USER_ALREADY_EXISTS = 'El usuario ya existe, intenta con otro correo.';
const USER_DOESNT_EXIST = 'El usuario no existe.';
const USER_INACTIVE = 'Usuario inactivo.';
const USER_MODIFIED = 'Usuario actualizado con éxito.';
const USER_SIGNED_UP = 'Se ha creado el usuario: ';
const USER_WRONGPASS = 'La contraseña actual es incorrecta.';
const USER_PASSCHANGED = 'La contraseña se ha actualizado exitosamente';
const CLIENT_USER_ROLE = 'client';
// const ADMIN_USER_ROLE = 'admin'; Todavía no se ha definido el rol de administrador
const SU_ADMIN_USER_ROLE = 'superadmin';
const USER_DEFAULT_ROLE = CLIENT_USER_ROLE;
const USER_ACTIVE_STATUS = 'active';
const USER_INACTIVE_STATUS = 'inactive';
const USER_DEFAULT_STATUS = USER_ACTIVE_STATUS;
const USER_SIGNED_IN = 'Ingreso de: ';
const USER_WITHOUT_PERMISSION = 'No tienes permisos para realizar esta acción.';
const CATEGORY_CREATED = 'Se ha creado la categoría: ';
const CATEGORY_EXISTS = 'La categoría ya existe, intenta con otra.';
const INCORRECT_CREDENTIALS = 'Los datos de ingreso no son correctos.';
const TOKEN_ERROR = 'Error creando token: ';
const TOKEN_EXPIRATION_TIME = '4h';
const INTERNAL_SERVER_ERROR = 'Error interno del servidor.';
const UNKNOWN_ERROR = 'Error desconocido, comuníquese con el administrador.';
const PROCESS_ERROR = 'Error al procesar la solicitud: ';
const PRODUCT_CREATED = 'Se ha creado el producto: ';
const TIME_ZONE = 'America/Bogota';
const MILLISECONDS_OFFSET = 60000;

export const constants = {
    SECRET_KEY,
    USER_ALREADY_EXISTS,
    USER_DOESNT_EXIST,
    USER_INACTIVE,
    USER_MODIFIED,
    USER_SIGNED_UP,
    USER_WRONGPASS,
    USER_PASSCHANGED,
    CLIENT_USER_ROLE,
    // ADMIN_USER_ROLE,
    SU_ADMIN_USER_ROLE,
    USER_DEFAULT_ROLE,
    USER_ACTIVE_STATUS,
    USER_INACTIVE_STATUS,
    USER_DEFAULT_STATUS,
    USER_SIGNED_IN,
    USER_WITHOUT_PERMISSION,
    CATEGORY_CREATED,
    CATEGORY_EXISTS,
    INCORRECT_CREDENTIALS,
    TOKEN_ERROR,
    TOKEN_EXPIRATION_TIME,
    INTERNAL_SERVER_ERROR,
    UNKNOWN_ERROR,
    PROCESS_ERROR,
    PRODUCT_CREATED,
    TIME_ZONE,
    MILLISECONDS_OFFSET
}