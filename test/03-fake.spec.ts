import { EmailService, ForgotPasswordService } from "../src/03-fake";
import { assert } from "chai";

describe("fake", () => {

    class FakeEmailService implements EmailService {

        public expectSendResult: boolean = true;

        async send(to: string, subject: string, content: string): Promise<boolean> {
            return this.expectSendResult;
        }

    }

    it(`email send success`, async () => {
        // arrange
        const emailService = new FakeEmailService();
        emailService.expectSendResult = true;
        const forgotPasswordService = new ForgotPasswordService(emailService);

        // action
        const result = await forgotPasswordService.sendForgotPasswordEmail("shaun@worktile.com");

        // assert
        assert.isTrue(result);
    });

    it(`email send failed`, async () => {
        // arrange
        const emailService = new FakeEmailService();
        emailService.expectSendResult = false;
        const forgotPasswordService = new ForgotPasswordService(emailService);

        // action
        const result = await forgotPasswordService.sendForgotPasswordEmail("shaun@worktile.com");

        // assert
        assert.isFalse(result);
    });

});