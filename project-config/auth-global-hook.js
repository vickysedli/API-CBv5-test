import 'dotenv/config'
import * as authHelper from '../helpers/auth-helper.js'

before(async () => {
    const response = await authHelper.login(process.env.EMAIL, process.env.PASS)

    process.env['TOKEN'] = response.body.payload.token
})