import express from "express";
import { sendEmailValidation } from "../validations/email-validation";
import { EmailController } from "../controllers/email-controller";
import { ValidationMiddleware } from "../middlewares/express-validator.middleware";
import { authMiddleware } from "../middlewares/auth.middlewares";

//DEPENDENCIES
const emailController = new EmailController();

//ROUTES
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Emails
 *     description: Operaciones relacionadas con envio de correos
 * /ms-email/send:
 *   post:
 *     summary: Enviar email
 *     tags:
 *       - Emails
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               to:
 *                 type: string
 *                 description: Dirección de correo destino
 *               subject:
 *                 type: string
 *                 description: Asunto del correo
 *               templateName:
 *                 type: string
 *                 description: Nombre de la plantilla
 *               context:
 *                 type: object
 *                 description: Variables de la plantilla
 *               mailerHost:
 *                 type: string
 *                 description: Host del servidor de correo
 *               mailerPort:
 *                 type: number
 *                 description: Puerto del servidor de correo
 *               mailerUser:
 *                 type: string
 *                 description: Usuario del servidor de correo
 *               mailerPassword:
 *                 type: string
 *                 description: Contraseña del servidor de correo (encryptado)
 *               mailerSecure:
 *                 type: boolean
 *                 description: Habilitar protocolo seguro
 *               mailerFrom:
 *                 type: string
 *                 format: email
 *                 description: Email origen que envia los correos
 *     responses:
 *       200:
 *         description: Mensaje correo enviado
 *       400:
 *         description: Mensaje de error
 *       401:
 *         description: Mensaje de error acceso no autorizado
 *     securitySchemes:
 *       BasicAuth:
 *         type: http
 *         scheme: basic
 */
router.post(
  "/",
  [ValidationMiddleware(sendEmailValidation), authMiddleware],
  emailController.sendEmail
);

export default router;
