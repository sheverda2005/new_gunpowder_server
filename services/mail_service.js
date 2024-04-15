const nodemailer = require('nodemailer')
class MailService {
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
    async sendActivationMail(to, user, products) {
        await this.trasporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Замовлення продуктів",
            text: "",
            html: `
               <div>
                 <h1>${user.name}</h1>
                 <h2>${user.surName}</h2>
                 <h3>${user.tel}</h3>
                 <h3>${user.city}</h3>
                 <h3>${user.address}</h3>
                 <h3>${user.email}</h3>
               </div>
               <ul>
               ${
                products.map(item => {
                    return  `<li>
                        <h3>
                           Продукт: ${item.key}
                          <h4>
                            Кількість: ${item.value.count}
                          </h4>
                        </h3>
                    </li>`
                })
               }
             </ul>
            
            `
        })
    }
}

module.exports = new MailService()