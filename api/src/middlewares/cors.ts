import cors from 'cors'

/**
 * CORS configuration.
 *
 * @type {cors.CorsOptions}
 */
const CORS_CONFIG: cors.CorsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://thriving-liger-687a9b.netlify.app', 'https://keen-dodol-5b70da.netlify.app'],
    credentials: true,
}

/**
 * CORS middleware.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {*}
 */
export default () => cors(CORS_CONFIG)
