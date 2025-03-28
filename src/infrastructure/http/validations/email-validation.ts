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
];
