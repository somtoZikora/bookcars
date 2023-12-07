import cors from 'cors'

/**
 * CORS configuration.
 *
 * @type {cors.CorsOptions}
 */
const CORS_CONFIG: cors.CorsOptions = {
    origin: false,
    credentials: false,
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
