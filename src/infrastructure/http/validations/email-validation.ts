import { body } from "express-validator";

export const sendEmailValidation = [
  body("to")
    .isEmail()
    .withMessage("El correo de destino debe ser un email válido")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("El campo 'to' es requerido"),
  body("subject")
    .isString()
    .withMessage("El campo 'subject' debe ser un texto")
    .isLength({ max: 255 })
    .withMessage("El campo 'subject' debe tener un máximo de 255 caracteres")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("El campo 'subject' es requerido"),
  body("templateName")
    .isString()
    .withMessage("El campo 'templateName' debe ser un texto")
    .isLength({ max: 255 })
    .withMessage(
      "El campo 'templateName' debe tener un máximo de 255 caracteres"
    )
    .notEmpty({ ignore_whitespace: true })
    .withMessage("El campo 'templateName' es requerido"),
  body("context")
    .isObject()
    .withMessage("El campo 'context' debe ser un objeto")
    .optional(),
  body("mailerHost")
    .isString()
    .withMessage("El campo 'mailerHost' debe ser un texto")
    .isLength({ max: 255 })
    .withMessage("El campo 'mailerHost' debe tener un máximo de 255 caracteres")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("El campo 'mailerHost' es requerido"),
  body("mailerPort")
    .isNumeric()
    .withMessage("El campo 'mailerPort' debe ser un número")
    .notEmpty()
    .withMessage("El campo 'mailerPort' es requerido"),
  body("mailerUser")
    .isString()
    .withMessage("El campo 'mailerUser' debe ser un texto")
    .isLength({ max: 255 })
    .withMessage("El campo 'mailerUser' debe tener un máximo de 255 caracteres")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("El campo 'mailerUser' es requerido"),
  body("mailerPassword")
    .isString()
    .withMessage("El campo 'mailerPassword' debe ser un texto")
    .isLength({ max: 255 })
    .withMessage(
      "El campo 'mailerPassword' debe tener un máximo de 255 caracteres"
    )
    .notEmpty({ ignore_whitespace: true })
    .withMessage("El campo 'mailerPassword' es requerido"),
  body("mailerSecure")
    .isBoolean()
    .withMessage("El campo 'mailerSecure' debe ser un booleano")
    .notEmpty()
    .withMessage("El campo 'mailerSecure' es requerido"),
  body("mailerFrom")
    .isEmail()
    .withMessage("El correo de origen debe ser un email válido")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("El campo 'mailerFrom' es requerido"),
];
