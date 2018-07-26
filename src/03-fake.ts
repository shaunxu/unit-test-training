interface EmailService {

    send(to: string, subject: string, content: string): Promise<boolean>;

}

class ForgotPasswordService {

    private _emailService: EmailService;

    constructor(emailService: EmailService) {
        this._emailService = emailService;
    }

    async sendForgotPasswordEmail(emailAddress: string): Promise<boolean> {
        const subject = "Forgot Password";
        const content = "Please click link below to find your password.";

        return await this._emailService.send(emailAddress, subject, content);
    }

}

export { EmailService, ForgotPasswordService };