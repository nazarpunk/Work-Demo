import keys from './keys.mjs'

/** @type {WhatsAppKeys} */
const k = keys

/** @typedef {Object} WhatsAppKeys
 * @property {string} token
 * @property {string} appId
 * @property {string} phoneId
 * @property {string} accountId
 */

/**
 * @param {string} phone
 * @param {WhatsAppKeys} keys
 * @see https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages/
 */
export const Send = async (phone, keys) => {


    const response = await fetch(`https://graph.facebook.com/v17.0/${keys.phoneId}/messages`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${keys.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: phone,
            type: 'template',
            template: {
                name: 'hello_world',
                language: {
                    code: 'en_US'
                }
            }
        })
    })

    const data = await response.json().catch(e => console.warn(e))
    console.log('Data:', data)
}


Send('380958828132', k)
