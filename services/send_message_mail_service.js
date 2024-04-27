const nodemailer = require('nodemailer')

class SendMessageMailService {
    constructor() {
        this.trasporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            post: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }
    async sendActivationMail(to, message_data) {
        await this.trasporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Зворотній зв'язок",
            text: "",
            html: `
               <div>
                        <h1>${message_data.name}</h1>
                        <h2>${message_data.number}</h2>
                        <h3>${message_data.email}</h3>
                        <p>${message_data.message}</p>
               </div>
            `
        })
    }
}

module.exports = new SendMessageMailService()