export interface EmailInterface {
  to: string;
  subject: string;
  templateName: string;
  context: any;
  mailerHost: string;
  mailerPort: number;
  mailerUser: string;
  mailerPassword: string;
  mailerSecure: boolean;
  mailerFrom: string;
}
